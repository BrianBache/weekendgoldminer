interface PlaceholderCardProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PlaceholderCard({ title, description, className = "" }: PlaceholderCardProps) {
  return (
    <div className={`bg-white border border-earth-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="w-full h-40 bg-earth-100 rounded mb-4 flex items-center justify-center text-earth-400 text-sm">
        Image placeholder
      </div>
      <h3 className="text-lg font-bold text-earth-800 mb-2">{title}</h3>
      {description && <p className="text-earth-600 text-sm">{description}</p>}
    </div>
  );
}
