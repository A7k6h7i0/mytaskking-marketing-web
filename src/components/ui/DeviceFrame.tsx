type DeviceFrameProps = {
  variant?: "phone" | "desktop";
  label?: string;
  children: React.ReactNode;
  className?: string;
};

export function DeviceFrame({
  variant = "phone",
  label = "App preview",
  children,
  className = "",
}: DeviceFrameProps) {
  if (variant === "desktop") {
    return (
      <div className={`relative ${className}`}>
        <div className="overflow-hidden rounded-2xl border border-line bg-[#121826] shadow-[0_35px_80px_-30px_rgba(10,15,28,0.55)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] font-medium tracking-wide text-white/45">{label}</span>
          </div>
          <div className="aspect-[16/10] bg-[#1a2236]">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#121826] bg-[#121826] shadow-[0_35px_80px_-28px_rgba(10,15,28,0.55)]">
        <div className="relative aspect-[9/19] overflow-hidden bg-white">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#121826]" />
          {children}
        </div>
      </div>
      <p className="mt-3 text-center text-xs font-medium tracking-wide text-muted">{label}</p>
    </div>
  );
}
