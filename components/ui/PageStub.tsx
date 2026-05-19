interface PageStubProps {
  title: string;
  description?: string;
  icon?: string; // SVG path data
  badge?: string;
}

export default function PageStub({
  title,
  description,
  icon,
  badge,
}: PageStubProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center px-4">
      {/* Icon */}
      {icon && (
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1E3A5F] shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10"
            aria-hidden="true"
          >
            <path d={icon} />
          </svg>
        </div>
      )}

      {/* Badge */}
      {badge && (
        <span className="inline-flex items-center rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
          {badge}
        </span>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#1E3A5F] md:text-4xl">{title}</h1>

      {/* Description */}
      <p className="max-w-md text-slate-500 leading-relaxed">
        {description ??
          "This page is under construction. Full content will be available soon."}
      </p>

      {/* Decorative divider */}
      <div className="flex items-center gap-3">
        <div className="h-px w-12 bg-[#2563EB]/30" />
        <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
        <div className="h-px w-12 bg-[#2563EB]/30" />
      </div>

      {/* Status pill */}
      <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm text-amber-700">
        <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
        Coming Soon
      </span>
    </div>
  );
}
