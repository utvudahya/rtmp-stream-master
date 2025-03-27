
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Shield } from "lucide-react";

const AdminAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      adminCode: ""
    },
  });

  const onSubmit = async (values: { email: string; password: string; adminCode: string }) => {
    try {
      setLoading(true);
      
      // Admin registration requires a special code
      if (!isLogin && values.adminCode !== "rtmp-admin-2024") {
        toast.error("Invalid admin registration code");
        return;
      }
      
      if (isLogin) {
        // Handle login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        
        if (error) {
          toast.error(error.message);
          return;
        }
        
        // Check if user has admin role
        const { data: adminData, error: adminError } = await supabase
          .from("admin_users")
          .select("*")
          .eq("user_id", data.user.id)
          .single();
          
        if (adminError || !adminData) {
          toast.error("You don't have admin privileges");
          await supabase.auth.signOut();
          return;
        }
        
        toast.success("Admin login successful");
        navigate("/admin/servers");
      } else {
        // Handle registration
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              is_admin: true
            }
          }
        });
        
        if (error) {
          toast.error(error.message);
          return;
        }
        
        // Create admin user entry
        if (data.user) {
          const { error: adminError } = await supabase
            .from("admin_users")
            .insert({
              user_id: data.user.id,
              role: "admin"
            });
            
          if (adminError) {
            console.error("Error creating admin record:", adminError);
            toast.error("Error creating admin record");
            return;
          }
        }
        
        toast.success("Admin registration successful");
        navigate("/admin/servers");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md animate-fade-in glass-card">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">
            {isLogin ? "Admin Login" : "Admin Registration"}
          </CardTitle>
          <CardDescription>
            Access RTMP server management features
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email" 
                        placeholder="admin@example.com" 
                        autoComplete="email"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="password" 
                        placeholder="••••••••" 
                        autoComplete={isLogin ? "current-password" : "new-password"}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {!isLogin && (
                <FormField
                  control={form.control}
                  name="adminCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Admin Registration Code</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="text" 
                          placeholder="Enter admin code" 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading}
              >
                {loading 
                  ? "Processing..." 
                  : isLogin ? "Login" : "Register as Admin"
                }
              </Button>
              
              <div className="text-center mt-4">
                <Button
                  variant="link"
                  type="button"
                  className="text-sm"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin 
                    ? "Don't have an admin account? Register" 
                    : "Already have an admin account? Login"
                  }
                </Button>
              </div>
              
              <div className="text-center">
                <Button
                  variant="link"
                  type="button"
                  className="text-sm"
                  onClick={() => navigate("/")}
                >
                  Return to Home
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;
