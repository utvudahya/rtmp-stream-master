import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowRight, Maximize2, Globe, Shield, Zap, Code, Server, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Stream Anywhere
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Personal RTMP Streaming Server
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Simple, secure, and powerful. Stream your content to the world with custom RTMP streaming powered by NGINX.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Link to="/dashboard">
                    Start Streaming
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <a href="#features">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center overflow-hidden">
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center rounded-full w-20 h-20 bg-primary/10 mb-6 animate-float">
                    <Maximize2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Ready to Stream</h3>
                  <p className="text-muted-foreground">Configure once, stream anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stream Like a Professional
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RTMP Stream Master gives you all the tools you need to create a professional streaming experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-primary" />,
                title: "High Performance",
                description: "Powered by NGINX for reliable, high-performance streaming that can handle multiple concurrent viewers."
              },
              {
                icon: <Shield className="w-10 h-10 text-primary" />,
                title: "Secure Streaming",
                description: "Custom stream keys ensure only authorized users can broadcast to your server."
              },
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: "Stream Anywhere",
                description: "Compatible with all major streaming software including OBS, Streamlabs, and XSplit."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center rounded-full w-16 h-16 bg-primary/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to start streaming?</h2>
                  <p className="text-xl text-muted-foreground">
                    Set up your own RTMP server in minutes and start broadcasting your content today.
                  </p>
                  <Button asChild size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group">
                    <Link to="/dashboard">
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 aspect-video flex items-center justify-center">
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground italic">
                      "RTMP Stream Master made setting up my streaming server incredibly easy."
                    </p>
                    <p className="mt-4 font-medium">– Streaming Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Bottom Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer-Friendly Streaming Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers, powered by open-source technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10 text-primary" />,
                title: "Easy Integration",
                description: "Simple API and SDK support for quick implementation in your projects."
              },
              {
                icon: <Server className="w-10 h-10 text-primary" />,
                title: "Scalable Infrastructure",
                description: "Designed to handle high-traffic streaming with minimal configuration."
              },
              {
                icon: <Database className="w-10 h-10 text-primary" />,
                title: "Robust Logging",
                description: "Comprehensive stream analytics and performance monitoring."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center rounded-full w-16 h-16 bg-primary/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild 
              size="lg" 
              className="rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Link to="/dashboard">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} RTMP Stream Master. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
