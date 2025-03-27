
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PlusCircle, Trash2, Server, Edit, X, Check } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RtmpServer {
  id: string;
  name: string;
  url: string;
  is_active: boolean;
  created_at: string;
}

const AdminRtmpServers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [servers, setServers] = useState<RtmpServer[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      name: "",
      url: "",
      is_active: true
    },
  });

  // Check admin status and fetch servers
  useEffect(() => {
    const checkAdminAndLoadServers = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          toast.error("Please log in as admin");
          navigate("/admin/auth");
          return;
        }
        
        // Check admin status
        const { data: adminData, error: adminError } = await supabase
          .from("admin_users")
          .select("*")
          .eq("user_id", session.session.user.id)
          .single();
          
        if (adminError || !adminData) {
          toast.error("You don't have admin privileges");
          navigate("/admin/auth");
          return;
        }
        
        setIsAdmin(true);
        
        // Fetch RTMP servers
        const { data, error } = await supabase
          .from("rtmp_servers")
          .select("*")
          .order("created_at", { ascending: false });
          
        if (error) {
          console.error("Error fetching RTMP servers:", error);
          toast.error("Failed to load RTMP servers");
          return;
        }
        
        setServers(data || []);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    
    checkAdminAndLoadServers();
  }, [navigate]);

  const onSubmit = async (values: { name: string; url: string; is_active: boolean }) => {
    try {
      setLoading(true);
      
      // Clean the URL and ensure it has the proper format
      let cleanUrl = values.url.trim();
      if (!cleanUrl.startsWith("rtmp://")) {
        cleanUrl = `rtmp://${cleanUrl}`;
      }
      if (!cleanUrl.endsWith("/live")) {
        cleanUrl = cleanUrl.endsWith("/") ? `${cleanUrl}live` : `${cleanUrl}/live`;
      }
      
      const { error } = await supabase
        .from("rtmp_servers")
        .insert({
          name: values.name.trim(),
          url: cleanUrl,
          is_active: values.is_active
        });
        
      if (error) {
        console.error("Error creating RTMP server:", error);
        toast.error("Failed to create RTMP server");
        return;
      }
      
      // Refresh the list
      const { data: newData } = await supabase
        .from("rtmp_servers")
        .select("*")
        .order("created_at", { ascending: false });
        
      setServers(newData || []);
      
      // Reset form
      form.reset({
        name: "",
        url: "",
        is_active: true
      });
      
      toast.success("RTMP server created successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this RTMP server?")) {
      return;
    }
    
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from("rtmp_servers")
        .delete()
        .eq("id", id);
        
      if (error) {
        console.error("Error deleting RTMP server:", error);
        toast.error("Failed to delete RTMP server");
        return;
      }
      
      setServers(servers.filter(server => server.id !== id));
      toast.success("RTMP server deleted successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  const handleEdit = (server: RtmpServer) => {
    setEditingId(server.id);
  };
  
  const handleSaveEdit = async (id: string, name: string, url: string, is_active: boolean) => {
    try {
      setLoading(true);
      
      // Clean URL format
      let cleanUrl = url.trim();
      if (!cleanUrl.startsWith("rtmp://")) {
        cleanUrl = `rtmp://${cleanUrl}`;
      }
      if (!cleanUrl.endsWith("/live")) {
        cleanUrl = cleanUrl.endsWith("/") ? `${cleanUrl}live` : `${cleanUrl}/live`;
      }
      
      const { error } = await supabase
        .from("rtmp_servers")
        .update({
          name: name.trim(),
          url: cleanUrl,
          is_active: is_active
        })
        .eq("id", id);
        
      if (error) {
        console.error("Error updating RTMP server:", error);
        toast.error("Failed to update RTMP server");
        return;
      }
      
      // Refresh the list
      const { data: newData } = await supabase
        .from("rtmp_servers")
        .select("*")
        .order("created_at", { ascending: false });
        
      setServers(newData || []);
      setEditingId(null);
      
      toast.success("RTMP server updated successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("rtmp_servers")
        .update({ is_active: !currentStatus })
        .eq("id", id);
        
      if (error) {
        console.error("Error updating RTMP server status:", error);
        toast.error("Failed to update server status");
        return;
      }
      
      setServers(
        servers.map(server => 
          server.id === id ? { ...server, is_active: !currentStatus } : server
        )
      );
      
      toast.success(`Server ${!currentStatus ? "activated" : "deactivated"} successfully`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };
  
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  if (!isAdmin && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Access Required</CardTitle>
            <CardDescription>
              You need admin privileges to access this page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/admin/auth")}>
              Go to Admin Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-6xl mx-auto pt-24 px-4 pb-16">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">RTMP Server Management</h1>
          <p className="text-muted-foreground">
            Add, edit, and manage RTMP servers for streaming
          </p>
        </div>
        
        <Tabs defaultValue="servers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="servers">RTMP Servers</TabsTrigger>
            <TabsTrigger value="add">Add New Server</TabsTrigger>
          </TabsList>
          
          <TabsContent value="servers">
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>RTMP Servers</CardTitle>
                <CardDescription>
                  Manage all available RTMP streaming servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Loading servers...</p>
                  </div>
                ) : servers.length === 0 ? (
                  <Alert className="bg-secondary/30">
                    <AlertDescription>
                      No RTMP servers found. Add your first server using the "Add New Server" tab.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>RTMP URL</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {servers.map(server => (
                          <TableRow key={server.id}>
                            <TableCell>
                              {editingId === server.id ? (
                                <Input 
                                  defaultValue={server.name}
                                  id={`edit-name-${server.id}`}
                                  className="w-full max-w-[200px]"
                                />
                              ) : (
                                <span className="font-medium">{server.name}</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {editingId === server.id ? (
                                <Input 
                                  defaultValue={server.url}
                                  id={`edit-url-${server.id}`}
                                  className="w-full font-mono text-xs"
                                />
                              ) : (
                                <code className="text-xs bg-secondary/40 px-2 py-1 rounded">{server.url}</code>
                              )}
                            </TableCell>
                            <TableCell>
                              {editingId === server.id ? (
                                <div className="flex items-center space-x-2">
                                  <input 
                                    type="checkbox" 
                                    id={`edit-active-${server.id}`}
                                    defaultChecked={server.is_active}
                                    className="rounded"
                                  />
                                  <label htmlFor={`edit-active-${server.id}`} className="text-sm">
                                    Active
                                  </label>
                                </div>
                              ) : (
                                <Badge 
                                  variant={server.is_active ? "default" : "outline"}
                                  className="cursor-pointer"
                                  onClick={() => handleToggleActive(server.id, server.is_active)}
                                >
                                  {server.is_active ? "Active" : "Inactive"}
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              {editingId === server.id ? (
                                <div className="flex justify-end space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleCancelEdit}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                      const nameInput = document.getElementById(`edit-name-${server.id}`) as HTMLInputElement;
                                      const urlInput = document.getElementById(`edit-url-${server.id}`) as HTMLInputElement;
                                      const activeInput = document.getElementById(`edit-active-${server.id}`) as HTMLInputElement;
                                      
                                      handleSaveEdit(
                                        server.id, 
                                        nameInput.value, 
                                        urlInput.value,
                                        activeInput.checked
                                      );
                                    }}
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex justify-end space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(server)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(server.id)}
                                  >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="add">
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Add New RTMP Server</CardTitle>
                <CardDescription>
                  Configure a new RTMP server for streaming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Server Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Primary RTMP Server" 
                              required
                            />
                          </FormControl>
                          <FormDescription>
                            A descriptive name for this RTMP server
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>RTMP URL</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="rtmp://rtmp-server.example.com/live" 
                              required
                            />
                          </FormControl>
                          <FormDescription>
                            The RTMP server URL. Will be formatted automatically.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="is_active"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4 rounded"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Active</FormLabel>
                            <FormDescription>
                              If checked, this server will be available for streaming
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex items-center gap-2"
                        disabled={loading}
                      >
                        <PlusCircle className="h-4 w-4" />
                        {loading ? "Adding..." : "Add RTMP Server"}
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                      >
                        Reset
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminRtmpServers;
