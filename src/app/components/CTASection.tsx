export default function CTASection({
  variant = "green",
  children,
}: {
  variant?: "green" | "dark";
  children: React.ReactNode;
}) {
  const bgClass = variant === "green" ? "bg-primary" : "bg-slate-900";

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`${bgClass} rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden`}
        >
          {variant === "green" && (
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <circle cx="0" cy="0" r="40" fill="white" />
                <circle cx="100" cy="100" r="30" fill="white" />
              </svg>
            </div>
          )}
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
