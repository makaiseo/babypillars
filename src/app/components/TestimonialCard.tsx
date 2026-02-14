export default function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex text-yellow-400 mb-4" role="img" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined" aria-hidden="true">
            star
          </span>
        ))}
      </div>
      <p className="text-slate-600 italic mb-6">&ldquo;{quote}&rdquo;</p>
      <p className="font-bold text-slate-900">{author}</p>
    </div>
  );
}
