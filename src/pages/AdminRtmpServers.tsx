
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2, Server } from "lucide-react";

interface RtmpServer {
  id: string;
  name: string;
  url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const AdminRtmpServers = () => {
  const [rtmpServers, setRtmpServers] = useState<RtmpServer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingServer, setEditingServer] = useState<RtmpServer | null>(null);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      url: "",
      is_active: true
    }
  });

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session) {
        navigate("/admin/auth");
        return;
      }

      const { data: adminData } = await supabase
        .from("admin_users")
        .select("*")
        .eq("user_id", session.session.user.id)
        .single();

      if (!adminData) {
        navigate("/admin/auth");
      }
    };

    const fetchRtmpServers = async () => {
      try {
        const { data, error } = await supabase
          .from("rtmp_servers")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          toast.error("Failed to fetch RTMP servers");
          return;
        }

        setRtmpServers(data || []);
      } catch (error) {
        console.error("Error fetching RTMP servers:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
    fetchRtmpServers();
  }, [navigate]);

  const onSubmit = async (values: { name: string; url: string; is_active: boolean }) => {
    try {
      if (editingServer) {
        const { error } = await supabase
          .from("rtmp_servers")
          .update({
            name: values.name,
            url: values.url,
            is_active: values.is_active,
            updated_at: new Date().toISOString()
          })
          .eq("id", editingServer.id);

        if (error) {
          toast.error("Failed to update RTMP server");
          return;
        }

        toast.success("RTMP server updated successfully");
        setEditingServer(null);
      } else {
        const { error } = await supabase
          .from("rtmp_servers")
          .insert({
            name: values.name,
            url: values.url,
            is_active: values.is_active
          });

        if (error) {
          toast.error("Failed to create RTMP server");
          return;
        }

        toast.success("RTMP server created successfully");
      }

      form.reset();
      fetchRtmpServers();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  const deleteServer = async (serverId: string) => {
    try {
      const { error } = await supabase
        .from("rtmp_servers")
        .delete()
        .eq("id", serverId);

      if (error) {
        toast.error("Failed to delete RTMP server");
        return;
      }

      toast.success("RTMP server deleted successfully");
      fetchRtmpServers();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  const fetchRtmpServers = async () => {
    try {
      const { data, error } = await supabase
        .from("rtmp_servers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to fetch RTMP servers");
        return;
      }

      setRtmpServers(data || []);
    } catch (error) {
      console.error("Error fetching RTMP servers:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Server className="h-6 w-6" /> RTMP Server Management
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={() => {
              form.reset();
              setEditingServer(null);
            }}>
              <Plus className="h-4 w-4 mr-2" /> Add New Server
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingServer ? "Edit RTMP Server" : "Add New RTMP Server"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter server name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter server URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {editingServer ? "Update Server" : "Create Server"}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Configured RTMP Servers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rtmpServers.map((server) => (
                  <TableRow key={server.id}>
                    <TableCell>{server.name}</TableCell>
                    <TableCell>{server.url}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs ${server.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {server.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            setEditingServer(server);
                            form.setValue('name', server.name);
                            form.setValue('url', server.url);
                            form.setValue('is_active', server.is_active);
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => deleteServer(server.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminRtmpServers;
