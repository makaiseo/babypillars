export default function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
      {text}
    </span>
  );
}
