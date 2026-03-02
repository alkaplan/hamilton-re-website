import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  subtitle,
  className,
  center = true,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <div className={cn(center && "text-center", "mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
