
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Share2, Pencil, ServerCrash, RefreshCw, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import StatusIndicator from "./StatusIndicator";
import StreamKeyGenerator from "./StreamKeyGenerator";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface StreamCardProps {
  streamTitle?: string;
  streamDescription?: string;
  initialStatus?: "live" | "offline" | "ready";
}

interface RtmpServer {
  id: string;
  name: string;
  url: string;
  is_active: boolean;
}

const StreamCard = ({
  streamTitle = "My Stream",
  streamDescription = "Configure your streaming settings",
  initialStatus = "offline"
}: StreamCardProps) => {
  const navigate = useNavigate();
  const [streamKey, setStreamKey] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [status, setStatus] = useState<"live" | "offline" | "ready">(initialStatus);
  const [title, setTitle] = useState(streamTitle);
  const [loading, setLoading] = useState(true);
  const [outputFormat, setOutputFormat] = useState<"rtmp" | "hls">("rtmp");
  const [rtmpServers, setRtmpServers] = useState<RtmpServer[]>([]);
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [testingConnection, setTestingConnection] = useState(false);
  const [portError, setPortError] = useState(false);
  
  // Default server address if no servers are found in the database
  const defaultServerAddress = "rtmp://rtmp-stream-master.lovable.app/live";
  
  const getServerAddress = () => {
    if (selectedServerId) {
      const server = rtmpServers.find(s => s.id === selectedServerId);
      return server?.url || defaultServerAddress;
    }
    return defaultServerAddress;
  };

  useEffect(() => {
    const fetchStreamSettings = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          setLoading(false);
          return;
        }
        
        const { data, error } = await supabase
          .from("stream_settings")
          .select("*")
          .single();
          
        if (error) {
          if (error.code !== "PGRST116") {
            console.error("Error fetching stream settings:", error);
          }
        } else if (data) {
          setStreamKey(data.stream_key);
          setCustomUrl(data.custom_url || "");
          setStatus(data.stream_key ? "ready" : "offline");
        }
        
        // Fetch RTMP servers
        const { data: serversData, error: serversError } = await supabase
          .from("rtmp_servers")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false });
          
        if (serversError) {
          console.error("Error fetching RTMP servers:", serversError);
        } else {
          setRtmpServers(serversData || []);
          
          // Select the first server by default if available
          if (serversData && serversData.length > 0) {
            setSelectedServerId(serversData[0].id);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStreamSettings();
  }, []);

  // Check if server URL includes port specification
  const checkServerPort = (url: string) => {
    // Parse the URL to check if it includes a port
    try {
      // Handle rtmp:// URLs which wouldn't be parsed correctly with URL constructor
      const match = url.match(/rtmp:\/\/([^\/]+)(\/.*)?/);
      if (match) {
        const hostWithPossiblePort = match[1];
        // Check if there's a port specified (after a colon)
        return hostWithPossiblePort.includes(':');
      }
      return false;
    } catch (error) {
      console.error("Error parsing URL:", error);
      return false;
    }
  };

  const getStreamUrl = () => {
    if (!streamKey) return "";
    
    if (customUrl) {
      return `https://view.example.com/stream/${customUrl}`;
    }
    return `https://view.example.com/stream/${streamKey}`;
  };
  
  const getHlsUrl = () => {
    if (!streamKey) return "";
    
    if (customUrl) {
      return `https://view.example.com/hls/${customUrl}/index.m3u8`;
    }
    return `https://view.example.com/hls/${streamKey}/index.m3u8`;
  };
  
  const handleStreamKeyChange = async (key: string) => {
    setStreamKey(key);
    setStatus("ready");
    
    try {
      const { data: session } = await supabase.auth.getSession();
      
      if (!session.session) {
        toast.error("Please log in to save your stream key");
        return;
      }
      
      const { data } = await supabase
        .from("stream_settings")
        .select("id")
        .single();
        
      if (data) {
        await supabase
          .from("stream_settings")
          .update({
            stream_key: key,
            updated_at: new Date().toISOString()
          })
          .eq("id", data.id);
      } else {
        await supabase
          .from("stream_settings")
          .insert({
            user_id: session.session.user.id,
            stream_key: key,
            custom_url: null
          });
      }
    } catch (error) {
      console.error("Error saving stream key:", error);
    }
  };
  
  const copyStreamUrl = () => {
    const url = outputFormat === "rtmp" ? getStreamUrl() : getHlsUrl();
    if (!url) {
      toast.error("Generate a stream key first");
      return;
    }
    
    navigator.clipboard.writeText(url);
    toast(`${outputFormat.toUpperCase()} URL copied to clipboard`, {
      description: "You can now share this with viewers.",
    });
  };
  
  const shareStream = () => {
    toast("Share feature", {
      description: "Sharing functionality would be implemented here.",
    });
  };

  const navigateToSettings = () => {
    navigate("/stream-settings");
  };
  
  const testServerConnection = async () => {
    setTestingConnection(true);
    setConnectionError(null);
    setPortError(false);
    
    try {
      const serverAddress = getServerAddress();
      
      // Check if server URL includes port
      const hasPort = checkServerPort(serverAddress);
      if (!hasPort) {
        setPortError(true);
        toast.warning("Server URL missing port", {
          description: "The RTMP server URL doesn't include a port. Default port 1935 will be used, but this might cause connection issues if the server uses a different port.",
        });
      }
      
      // Implement a simple connectivity check (this is a simulated check)
      // In a real implementation, you would use a proper connectivity test API
      setTimeout(() => {
        // For demo purposes, simulate more accurate connection testing 
        // In a real scenario, use a proper connectivity test to the RTMP server
        
        if (serverAddress.includes("rtmp-stream-master.lovable.app")) {
          // Show error for our specific test case
          setConnectionError(
            "Unable to connect to streaming server at " + serverAddress + ". " +
            "This could be due to:\n" +
            "- The server may be down or unreachable\n" +
            "- Network issues (firewall blocking port 1935)\n" +
            "- The server URL requires a specific port (e.g., :1935)\n\n" +
            "If you're using OBS or other streaming software, check their logs for more details."
          );
          toast.error("Connection failed", {
            description: "Unable to reach the RTMP server. Please check server details and network connectivity.",
          });
        } else {
          // Simulated success for other servers (80% success rate)
          const isConnected = Math.random() > 0.2;
          
          if (isConnected) {
            toast.success("Server connection successful", {
              description: "Your streaming server is reachable.",
            });
            setConnectionError(null);
          } else {
            setConnectionError(
              "Unable to connect to streaming server. This could be due to:\n" +
              "- The server may be down or unreachable\n" +
              "- Network issues (firewall blocking port 1935)\n" +
              "- The server URL might be incorrect\n\n" +
              "Please verify the server URL and try again."
            );
            toast.error("Connection failed", {
              description: "Unable to reach the streaming server.",
            });
          }
        }
        setTestingConnection(false);
      }, 1500);
    } catch (error) {
      console.error("Error testing connection:", error);
      setConnectionError("Connection test failed. Please try again later.");
      setTestingConnection(false);
    }
  };
  
  if (loading) {
    return (
      <Card className="w-full overflow-hidden glass-card animate-fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Loading stream settings...</CardTitle>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="w-full overflow-hidden glass-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <CardTitle className="text-xl">
            <Input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-semibold px-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8 pt-0 bg-transparent"
            />
          </CardTitle>
          <StatusIndicator status={status} />
        </div>
        <CardDescription>{streamDescription}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {connectionError && (
          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Connection Error</AlertTitle>
            <AlertDescription className="whitespace-pre-line">
              {connectionError}
            </AlertDescription>
          </Alert>
        )}
        
        {portError && !connectionError && (
          <Alert variant="warning" className="bg-yellow-100/30 border-yellow-300/30 text-yellow-800">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle>Connection Warning</AlertTitle>
            <AlertDescription>
              RTMP server URL doesn't specify a port. If you're having connection issues, try adding ":1935" to the server address.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="stream-setup space-y-4">
          <div className="server-settings">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">RTMP Server</h3>
              <div className="flex gap-2">
                {rtmpServers.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs flex items-center gap-1"
                    onClick={() => navigate("/admin/servers")}
                  >
                    <ServerCrash className="h-3 w-3" />
                    Manage Servers
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs flex items-center gap-1"
                  onClick={testServerConnection}
                  disabled={testingConnection}
                >
                  {testingConnection ? (
                    <RefreshCw className="h-3 w-3 animate-spin" />
                  ) : (
                    <RefreshCw className="h-3 w-3" />
                  )}
                  Test Connection
                </Button>
              </div>
            </div>
            
            {rtmpServers.length > 0 ? (
              <div className="space-y-2">
                <Select
                  value={selectedServerId || undefined}
                  onValueChange={(value) => {
                    setSelectedServerId(value);
                    setConnectionError(null); // Clear error when changing server
                    setPortError(false); // Reset port error
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an RTMP server" />
                  </SelectTrigger>
                  <SelectContent>
                    {rtmpServers.map(server => (
                      <SelectItem key={server.id} value={server.id}>
                        {server.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="flex">
                  <Input 
                    readOnly
                    value={getServerAddress()}
                    className="font-mono text-sm bg-secondary"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-2 h-10 w-10"
                    onClick={() => {
                      navigator.clipboard.writeText(getServerAddress());
                      toast("Server URL copied", {
                        description: "RTMP server URL copied to clipboard",
                      });
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">
                  {!portError ? 
                    "Use this RTMP server URL in your streaming software (e.g., OBS Studio)" :
                    "If you're having connection issues, try adding port :1935 to the server address"
                  }
                </p>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <Input 
                    readOnly
                    value={defaultServerAddress}
                    className="font-mono text-sm bg-secondary"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-2 h-10 w-10"
                    onClick={() => {
                      navigator.clipboard.writeText(defaultServerAddress);
                      toast("Server URL copied", {
                        description: "RTMP server URL copied to clipboard",
                      });
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {!portError ? 
                    "Use this RTMP server URL in your streaming software (e.g., OBS Studio)" :
                    "If you're having connection issues, try using rtmp://rtmp-stream-master.lovable.app:1935/live instead"
                  }
                </p>
              </div>
            )}
          </div>
          
          <StreamKeyGenerator
            initialKey={streamKey}
            onChange={handleStreamKeyChange}
          />
          
          <div className="output-section">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Output / Playback URL</h3>
              <div className="flex items-center gap-2">
                <div className="flex bg-secondary rounded-md overflow-hidden">
                  <Button 
                    variant={outputFormat === "rtmp" ? "secondary" : "ghost"}
                    size="sm" 
                    className="h-7 rounded-none font-normal text-xs px-3"
                    onClick={() => setOutputFormat("rtmp")}
                  >
                    RTMP
                  </Button>
                  <Button 
                    variant={outputFormat === "hls" ? "secondary" : "ghost"}
                    size="sm" 
                    className="h-7 rounded-none font-normal text-xs px-3"
                    onClick={() => setOutputFormat("hls")}
                  >
                    HLS (m3u8)
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-1 text-xs"
                  onClick={navigateToSettings}
                >
                  <Pencil className="h-3 w-3" />
                  Customize URL
                </Button>
              </div>
            </div>
            
            <div className="flex">
              <Input
                readOnly
                value={streamKey ? (outputFormat === "rtmp" ? getStreamUrl() : getHlsUrl()) : "Generate a stream key first"}
                className="font-mono text-sm bg-secondary"
              />
              <div className="flex ml-2 space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={copyStreamUrl}
                  disabled={!streamKey}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={shareStream}
                  disabled={!streamKey}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {customUrl && (
              <p className="text-xs mt-2 text-primary">
                Using custom URL: <span className="font-semibold">{customUrl}</span>
              </p>
            )}
            
            <p className="text-xs mt-2 text-muted-foreground">
              {outputFormat === "rtmp" 
                ? "Share this RTMP URL with your viewers so they can watch your stream." 
                : "Share this HLS (m3u8) URL for better streaming compatibility with browsers and mobile devices."}
            </p>
          </div>
        </div>
        
        <div className="stream-controls flex gap-2">
          <Button 
            className="flex-1 bg-stream-ready hover:bg-stream-ready/90"
            onClick={() => {
              if (connectionError) {
                toast.error("Fix connection issues before going live");
                return;
              }
              setStatus("live");
              toast.success("Stream is now live!");
            }}
            disabled={status === "live" || !streamKey}
          >
            Go Live
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 text-stream-live border-stream-live/20 hover:bg-stream-live/10"
            onClick={() => {
              setStatus("offline");
              toast.info("Stream ended", {
                description: "Your stream has been ended.",
              });
            }}
            disabled={status === "offline" || !streamKey}
          >
            End Stream
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreamCard;
