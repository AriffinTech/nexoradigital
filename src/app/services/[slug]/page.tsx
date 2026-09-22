import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"

// In a real app, this would come from a database or CMS
const solutionDetails = {
  ems: {
    title: "Energy Management System (EMS)",
    subtitle: "Monitor, analyse and optimise energy usage across your factory.",
    benefits: [
      "Cut energy costs by up to 20% in year one",
      "Ensure compliance with Malaysia's EECA",
      "Identify energy-wasting machines in real-time",
      "Automate ESG reporting for stakeholders"
    ],
    description: "Our EMS provides granular visibility into your factory's energy consumption. By connecting to your existing meters and machines via IoT, we deliver real-time dashboards that highlight anomalies, peak demand periods, and specific areas of waste."
  },
  mes: {
    title: "Manufacturing Execution System (MES)",
    subtitle: "Real-time production visibility and control for smarter operations.",
    benefits: [
      "Improve Overall Equipment Effectiveness (OEE)",
      "Eliminate paper-based work orders",
      "Reduce unplanned machine downtime",
      "Ensure consistent product quality"
    ],
    description: "Transform your shop floor with digital workflows. Our MES tracks production from raw materials to finished goods, giving operators clear digital instructions while providing management with real-time visibility into production bottlenecks."
  },
  wms: {
    title: "Warehouse Management System (WMS)",
    subtitle: "Smarter inventory and warehouse operations.",
    benefits: [
      "Achieve 99.9% inventory accuracy",
      "Optimise picking and put-away routes",
      "Reduce stockouts and overstocking",
      "Seamless integration with barcode scanners"
    ],
    description: "Take control of your warehouse space and inventory. Our WMS automates complex logistics, ensuring the right materials are delivered to the production line exactly when needed, and finished goods are dispatched efficiently."
  },
  erp: {
    title: "Enterprise Resource Planning (ERP)",
    subtitle: "Unify your business processes for greater efficiency.",
    benefits: [
      "Single source of truth for all departments",
      "Streamlined financial reconciliation",
      "Data-driven demand forecasting",
      "Automated procurement workflows"
    ],
    description: "Break down data silos across your organisation. Our manufacturing-focused ERP connects finance, sales, HR, and supply chain into one unified platform, giving leadership the insights needed to make agile, profitable decisions."
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const solution = solutionDetails[resolvedParams.slug as keyof typeof solutionDetails]
  if (!solution) return { title: "Solution Not Found" }
  return {
    title: `${solution.title} — Nexora Digital`,
    description: solution.subtitle,
  }
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const solution = solutionDetails[resolvedParams.slug as keyof typeof solutionDetails]
  
  if (!solution) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumbs & Hero */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="flex flex-wrap items-center text-xs sm:text-sm text-stone-400 mb-6 sm:mb-8 gap-y-1">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 mx-2 text-stone-600 shrink-0" />
              <Link href="/services" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight className="h-3.5 w-3.5 mx-2 text-stone-600 shrink-0" />
              <span className="text-primary font-medium">{solution.title}</span>
            </div>
            
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 text-white leading-[1.15]">
                {solution.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed">
                {solution.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            <FadeIn direction="up">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-foreground">Overview</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </FadeIn>
            
            <FadeIn direction="up">
              <div className="aspect-video bg-muted border border-border rounded-xl flex items-center justify-center p-6 text-center">
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs sm:text-sm">
                  [{solution.title} System Interface Preview]
                </span>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="up">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-foreground">Key Capabilities</h2>
              </FadeIn>
              <FadeInStagger faster className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Real-time Telemetry & Ingestion", desc: "Connect seamlessly to smart meters, PLCs, and factory sensors with zero data loss." },
                  { title: "Automated Anomaly Detection", desc: "Instant threshold alerts and diagnostic insights prevent costly downtime and waste." },
                  { title: "Compliance & ESG Reporting", desc: "Generate audit-ready reports mapped directly to national standards and energy regulations." },
                  { title: "Unified Operator Dashboard", desc: "Role-tailored interfaces providing operators, engineers, and plant managers clear actionable metrics." },
                ].map((cap, i) => (
                  <FadeIn key={i} className="p-5 sm:p-6 bg-card border border-border rounded-[var(--radius-card,8px)] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 tracking-tight">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="p-6 sm:p-8 bg-card border border-border rounded-[var(--radius-panel,12px)] shadow-xs">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">Business Benefits</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm sm:text-base">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2}>
                <div className="p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-[var(--radius-panel,12px)]">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight">Ready to implement?</h3>
                  <p className="text-muted-foreground mb-6 text-xs sm:text-sm leading-relaxed">
                    Speak with our engineering specialists to explore how {solution.title} integrates with your facility.
                  </p>
                  <Button asChild className="group/btn w-full h-12 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 font-[510] tracking-tight shadow-md">
                    <Link href="/contact" className="w-full flex items-center justify-center">
                      Schedule a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
