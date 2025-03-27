
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Pencil } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import StatusIndicator from "./StatusIndicator";
import StreamKeyGenerator from "./StreamKeyGenerator";
import { supabase } from "@/integrations/supabase/client";

interface StreamCardProps {
  streamTitle?: string;
  streamDescription?: string;
  initialStatus?: "live" | "offline" | "ready";
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
  
  // Simulate server address
  const serverAddress = "rtmp://stream.example.com/live";

  useEffect(() => {
    const fetchStreamSettings = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          // If not logged in, just use the generated key from the component
          setLoading(false);
          return;
        }
        
        const { data, error } = await supabase
          .from("stream_settings")
          .select("*")
          .single();
          
        if (error) {
          if (error.code !== "PGRST116") { // PGRST116 = No rows returned
            console.error("Error fetching stream settings:", error);
          }
          setLoading(false);
          return;
        }
        
        if (data) {
          setStreamKey(data.stream_key);
          setCustomUrl(data.custom_url || "");
          setStatus(data.stream_key ? "ready" : "offline");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStreamSettings();
  }, []);

  // Generate the streamUrl based on whether customUrl exists
  const getStreamUrl = () => {
    if (!streamKey) return "";
    
    if (customUrl) {
      return `https://view.example.com/stream/${customUrl}`;
    }
    return `https://view.example.com/stream/${streamKey}`;
  };
  
  // For demonstration, update status when stream key changes
  const handleStreamKeyChange = async (key: string) => {
    setStreamKey(key);
    setStatus("ready");
    
    try {
      const { data: session } = await supabase.auth.getSession();
      
      if (!session.session) {
        toast.error("Please log in to save your stream key");
        return;
      }
      
      // Check if settings exist
      const { data } = await supabase
        .from("stream_settings")
        .select("id")
        .single();
        
      if (data) {
        // Update existing settings
        await supabase
          .from("stream_settings")
          .update({
            stream_key: key,
            updated_at: new Date().toISOString()
          })
          .eq("id", data.id);
      } else {
        // Create new settings
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
    const url = getStreamUrl();
    if (!url) {
      toast.error("Generate a stream key first");
      return;
    }
    
    navigator.clipboard.writeText(url);
    toast("Stream URL copied to clipboard", {
      description: "You can now share this with viewers.",
    });
  };
  
  const shareStream = () => {
    // In a real app, this would open a share dialog or generate shareable links
    toast("Share feature", {
      description: "Sharing functionality would be implemented here.",
    });
  };

  const navigateToSettings = () => {
    navigate("/stream-settings");
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
        <div className="stream-setup space-y-4">
          <div className="server-settings">
            <h3 className="text-sm font-medium mb-2">RTMP Server URL</h3>
            <div className="flex">
              <Input 
                readOnly
                value={serverAddress}
                className="font-mono text-sm bg-secondary"
              />
              <Button
                variant="outline"
                size="icon"
                className="ml-2 h-10 w-10"
                onClick={() => {
                  navigator.clipboard.writeText(serverAddress);
                  toast("Server URL copied", {
                    description: "RTMP server URL copied to clipboard",
                  });
                }}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <StreamKeyGenerator
            initialKey={streamKey}
            onChange={handleStreamKeyChange}
          />
          
          <div className="output-section">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Output / Playback URL</h3>
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
            
            <div className="flex">
              <Input
                readOnly
                value={streamKey ? getStreamUrl() : "Generate a stream key first"}
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
              Share this URL with your viewers so they can watch your stream.
            </p>
          </div>
        </div>
        
        {/* Stream Controls - In a real app, these would connect to the RTMP server */}
        <div className="stream-controls flex gap-2">
          <Button 
            className="flex-1 bg-stream-ready hover:bg-stream-ready/90"
            onClick={() => setStatus("live")}
            disabled={status === "live" || !streamKey}
          >
            Go Live
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 text-stream-live border-stream-live/20 hover:bg-stream-live/10"
            onClick={() => setStatus("offline")}
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
