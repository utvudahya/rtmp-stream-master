
import { useState } from "react";
import Header from "@/components/Header";
import StreamCard from "@/components/StreamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Info, Laptop, Settings } from "lucide-react";

const Dashboard = () => {
  const [showSetupGuide, setShowSetupGuide] = useState(true);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-6xl mx-auto pt-24 px-4 pb-16">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Stream Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your RTMP streams and monitor your broadcasting status
          </p>
        </div>
        
        {showSetupGuide && (
          <Alert className="mb-8 bg-primary/5 animate-fade-in">
            <Info className="h-5 w-5" />
            <AlertTitle>Getting Started</AlertTitle>
            <AlertDescription className="mt-1">
              To use your RTMP server, set up your streaming software with the server URL and stream key from your stream card below.
              <Button 
                variant="link" 
                className="p-0 h-auto text-primary ml-2"
                onClick={() => setShowSetupGuide(false)}
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StreamCard 
              streamTitle="My Primary Stream" 
              streamDescription="Main broadcasting channel"
            />
            
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Stream Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-secondary/50 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground italic">Analytics will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Tabs defaultValue="setup" className="w-full animate-fade-in" style={{ animationDelay: "150ms" }}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="setup" className="flex items-center gap-2">
                  <Laptop className="h-4 w-4" />
                  Setup
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="setup" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">OBS Studio Setup</h3>
                  <div className="rounded-md bg-secondary/50 p-4 text-sm">
                    <p className="mb-2">1. Open OBS Studio and go to Settings &gt; Stream</p>
                    <p className="mb-2">2. Select "Custom..." as the service</p>
                    <p className="mb-2">3. Set "rtmp://stream.example.com/live" as the server</p>
                    <p className="mb-2">4. Copy your stream key from the stream card and paste it as the Stream Key</p>
                    <p>5. Click "Apply" and "OK"</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Recommended Stream Settings</h3>
                  <div className="rounded-md bg-secondary/50 p-4 text-sm">
                    <p className="mb-2"><strong>Video:</strong> 1920x1080 (or 1280x720), 30 or 60 fps</p>
                    <p className="mb-2"><strong>Encoder:</strong> x264 or NVENC/AMD if available</p>
                    <p className="mb-2"><strong>Rate Control:</strong> CBR</p>
                    <p className="mb-2"><strong>Bitrate:</strong> 3000-6000 Kbps (depending on your upload speed)</p>
                    <p><strong>Keyframe Interval:</strong> 2 seconds</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Stream Configuration</h3>
                  <Alert variant="destructive" className="bg-destructive/10 border-destructive/20">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="text-sm font-medium">Server Configuration</AlertTitle>
                    <AlertDescription className="text-xs mt-1">
                      This is a demonstration. In a real application, you would be able to configure NGINX settings here.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="rounded-md bg-secondary/50 p-4 text-sm mt-4">
                    <p className="text-muted-foreground">
                      In a production application, this area would contain server configuration options for:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>RTMP Module Settings</li>
                      <li>Stream Quality Presets</li>
                      <li>Access Control Rules</li>
                      <li>Recording Configuration</li>
                      <li>Adaptive Streaming Setup</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle>Stream Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CPU Usage</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Memory Usage</span>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Network Usage</span>
                    <span className="text-sm font-medium">0 Mbps</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      Status metrics will update when streaming is active
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
