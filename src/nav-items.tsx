
import { HomeIcon, Settings, Shield, Server, BarChart3 } from "lucide-react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import StreamSettings from "./pages/StreamSettings";
import AdminAuth from "./pages/AdminAuth";
import AdminRtmpServers from "./pages/AdminRtmpServers";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard", 
    to: "/dashboard",
    icon: <BarChart3 className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Stream Settings",
    to: "/stream-settings", 
    icon: <Settings className="h-4 w-4" />,
    page: <StreamSettings />,
  },
  {
    title: "Admin Login",
    to: "/admin/auth",
    icon: <Shield className="h-4 w-4" />,
    page: <AdminAuth />,
  },
  {
    title: "Admin Servers",
    to: "/admin/servers",
    icon: <Server className="h-4 w-4" />,
    page: <AdminRtmpServers />,
  },
];
