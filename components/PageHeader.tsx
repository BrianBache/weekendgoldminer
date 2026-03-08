interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-earth-800 dark:bg-dark-bg text-gold-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-earth-200 text-lg max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}
