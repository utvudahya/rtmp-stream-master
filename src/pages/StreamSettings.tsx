
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";

const StreamSettings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [streamSettings, setStreamSettings] = useState<any>(null);
  
  const form = useForm({
    defaultValues: {
      customUrl: "",
    },
  });

  // Fetch stream settings if they exist
  useEffect(() => {
    const fetchStreamSettings = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          toast.error("Please log in to access stream settings");
          navigate("/auth");
          return;
        }
        
        const { data, error } = await supabase
          .from("stream_settings")
          .select("*")
          .single();
          
        if (error) {
          if (error.code !== "PGRST116") { // PGRST116 = No rows returned, which is fine if user hasn't set up yet
            console.error("Error fetching stream settings:", error);
            toast.error("Failed to load stream settings");
          }
          return;
        }
        
        if (data) {
          setStreamSettings(data);
          form.setValue("customUrl", data.custom_url || "");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong");
      }
    };
    
    fetchStreamSettings();
  }, [navigate, form]);

  const onSubmit = async (values: { customUrl: string }) => {
    try {
      setLoading(true);
      
      const { data: session } = await supabase.auth.getSession();
      if (!session.session) {
        toast.error("Please log in to update stream settings");
        navigate("/auth");
        return;
      }
      
      const customUrl = values.customUrl.trim();
      
      // Validate custom URL (alphanumeric, hyphens, no spaces)
      if (customUrl && !/^[a-zA-Z0-9-]+$/.test(customUrl)) {
        toast.error("Custom URL can only contain letters, numbers, and hyphens");
        return;
      }
      
      if (streamSettings) {
        // Update existing settings
        const { error } = await supabase
          .from("stream_settings")
          .update({
            custom_url: customUrl || null,
            updated_at: new Date().toISOString()
          })
          .eq("id", streamSettings.id);
          
        if (error) {
          console.error("Error updating stream settings:", error);
          toast.error("Failed to update custom URL");
          return;
        }
      } else {
        // Create new settings with a generated stream key
        const streamKey = Math.random().toString(36).substring(2, 15) + 
                          Math.random().toString(36).substring(2, 15);
        
        const { error } = await supabase
          .from("stream_settings")
          .insert({
            user_id: session.session.user.id,
            stream_key: streamKey,
            custom_url: customUrl || null
          });
          
        if (error) {
          console.error("Error creating stream settings:", error);
          toast.error("Failed to create stream settings");
          return;
        }
      }
      
      toast.success("Stream settings updated successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-4xl mx-auto pt-24 px-4 pb-16">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Stream Settings</h1>
          <p className="text-muted-foreground">
            Customize your stream URL and manage your streaming preferences
          </p>
        </div>
        
        <Card className="w-full overflow-hidden glass-card animate-fade-in">
          <CardHeader>
            <CardTitle>Custom Stream URL</CardTitle>
            <CardDescription>
              Set a custom URL for your stream that's easier to remember and share
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="customUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custom URL Path</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <span className="text-muted-foreground mr-2">view.example.com/stream/</span>
                          <Input {...field} placeholder="your-stream-name" />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Use only letters, numbers, and hyphens. No spaces or special characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex gap-4">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Settings"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StreamSettings;
