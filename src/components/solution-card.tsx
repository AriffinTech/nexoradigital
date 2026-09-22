import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SolutionCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  accentColorClass: string
  className?: string
}

export function SolutionCard({
  title,
  description,
  href,
  icon,
  accentColorClass,
  className
}: SolutionCardProps) {
  return (
    <div className={cn(
      "group flex flex-col bg-card border border-foreground/10 rounded-2xl shadow-none overflow-hidden transition-all duration-300 hover:border-foreground/20", 
      className
    )}>
      <div className={cn("h-1 w-full", accentColorClass)} />
      <div className="p-6 flex flex-col flex-1">
        <div className={cn("w-12 h-12 rounded-[var(--radius-comfortable,6px)] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105", accentColorClass, "bg-opacity-10")}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">{description}</p>
        <Link 
          href={href} 
          className="inline-flex items-center text-sm font-[510] tracking-tight text-foreground group-hover:text-primary transition-colors py-2"
        >
          Learn More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
