
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

type StatusType = "live" | "offline" | "ready";

interface StatusIndicatorProps {
  status: StatusType;
  pulsingEffect?: boolean;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const StatusIndicator = ({
  status,
  pulsingEffect = true,
  size = "md",
  showLabel = true,
  className,
}: StatusIndicatorProps) => {
  const statusConfig = {
    live: {
      color: "bg-stream-live",
      label: "Live",
    },
    offline: {
      color: "bg-stream-offline",
      label: "Offline",
    },
    ready: {
      color: "bg-stream-ready",
      label: "Ready",
    },
  };

  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  const { color, label } = statusConfig[status];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div
          className={cn(
            "rounded-full",
            color,
            sizeClasses[size],
            pulsingEffect && status === "live" && "animate-pulse-slow"
          )}
        />
        {pulsingEffect && status === "live" && (
          <div
            className={cn(
              "absolute inset-0 rounded-full",
              color,
              "animate-ping-slow opacity-75"
            )}
            style={
              {
                "--tw-ring-offset-shadow":
                  "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow":
                  "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
              } as CSSProperties
            }
          />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
