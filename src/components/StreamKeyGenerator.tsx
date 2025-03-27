
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Check, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface StreamKeyGeneratorProps {
  initialKey?: string;
  onChange?: (key: string) => void;
}

const StreamKeyGenerator = ({ initialKey, onChange }: StreamKeyGeneratorProps) => {
  const [streamKey, setStreamKey] = useState(initialKey || "");
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    if (!initialKey) {
      generateStreamKey();
    }
  }, [initialKey]);

  const generateStreamKey = () => {
    // Create a random string for the stream key
    const randomKey = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    setStreamKey(randomKey);
    
    if (onChange) {
      onChange(randomKey);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(streamKey);
    setCopied(true);
    toast("Stream key copied to clipboard", {
      description: "You can now paste it into your streaming software.",
      duration: 3000,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const toggleShowKey = () => {
    setShowKey(!showKey);
  };

  const formatStreamKey = () => {
    if (showKey) return streamKey;
    return "•".repeat(Math.min(streamKey.length, 24));
  };

  return (
    <div className="stream-key-container w-full">
      <div className="flex items-center mb-2">
        <h3 className="text-sm font-medium">Your Stream Key</h3>
        <div className="flex-grow"></div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleShowKey}
        >
          {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex w-full">
        <div className="stream-key flex-grow overflow-x-auto whitespace-nowrap">
          {formatStreamKey()}
        </div>
        
        <div className="flex ml-2">
          <Button
            variant="outline" 
            size="icon"
            className="h-10 w-10 rounded-md"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-md ml-2"
            onClick={generateStreamKey}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <p className="text-xs mt-2 text-muted-foreground">
        Keep this key private. Use it in your streaming software to authenticate.
      </p>
    </div>
  );
};

export default StreamKeyGenerator;
