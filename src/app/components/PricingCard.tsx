import Link from "next/link";

export default function PricingCard({
  featured = false,
  name,
  price,
  period,
  description,
  buttonText,
  badge,
}: {
  featured?: boolean;
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  badge?: string;
}) {
  if (featured) {
    return (
      <div className="bg-primary p-10 rounded-3xl flex flex-col items-center text-center text-white relative">
        {badge && (
          <div className="absolute -top-4 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full uppercase">
            {badge}
          </div>
        )}
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-display font-bold">{price}</span>
          <span className="text-white/80">{period}</span>
        </div>
        <p className="text-white/90 mb-8">{description}</p>
        <Link
          href="/pricing"
          className="w-full py-3 px-6 rounded-full bg-white text-primary font-bold hover:bg-slate-100 transition-all text-center"
        >
          {buttonText}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-display font-bold">{price}</span>
        <span className="text-slate-500">{period}</span>
      </div>
      <p className="text-slate-600 mb-8">{description}</p>
      <Link
        href="/pricing"
        className="w-full py-3 px-6 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-center"
      >
        {buttonText}
      </Link>
    </div>
  );
}
