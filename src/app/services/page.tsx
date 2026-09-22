import Link from "next/link"
import { Metadata } from "next"
import { CheckCircle2, LayoutDashboard, Zap, Database, Grid3X3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Manufacturing Solutions — Nexora Digital",
  description: "Explore our industrial digitalisation solutions including EMS, MES, WMS, and ERP.",
}

const solutions = [
  {
    title: "Energy Management System (EMS)",
    slug: "ems",
    desc: "Monitor, analyse and optimise energy usage across your factory.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    features: ["Real-time consumption tracking", "Peak demand alerts", "Carbon footprint reporting", "EECA compliance mapping"],
  },
  {
    title: "Manufacturing Execution System (MES)",
    slug: "mes",
    desc: "Real-time production visibility and control for smarter operations.",
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    features: ["OEE monitoring", "Digital work instructions", "Quality management", "Machine downtime tracking"],
  },
  {
    title: "Warehouse Management System (WMS)",
    slug: "wms",
    desc: "Smarter inventory and warehouse operations.",
    icon: <Grid3X3 className="h-8 w-8 text-primary" />,
    features: ["Barcode & RFID scanning", "Real-time inventory levels", "Automated reorder points", "Dispatch optimisation"],
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    slug: "erp",
    desc: "Unify your business processes for greater efficiency.",
    icon: <Database className="h-8 w-8 text-primary" />,
    features: ["Financial management", "Supply chain integration", "HR & payroll", "Demand forecasting"],
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-16 sm:pt-24 pb-14 sm:pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            <FadeIn direction="up" className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 text-foreground leading-[1.1]">
                From shop floor to boardroom
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Integrated systems for a smarter, more competitive, and sustainable manufacturing future. We connect your machines, systems, and people to drive real operational impact.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.15} className="hidden lg:flex flex-col items-start lg:items-end justify-end">
              <div className="inline-flex flex-col space-y-2 border-l-2 border-primary pl-6">
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Scope of Delivery</span>
                <span className="text-foreground font-medium">Software Implementation</span>
                <span className="text-foreground font-medium">Hardware Integration</span>
                <span className="text-foreground font-medium">Compliance Auditing</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOLUTIONS LIST */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {solutions.map((sol, i) => (
              <FadeIn key={sol.slug} direction="up">
                <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-20 items-center`}>
                  <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md flex items-center justify-center bg-card border border-foreground/10 shadow-none shrink-0">
                        {sol.icon}
                      </div>
                      <span className="text-4xl sm:text-5xl font-extrabold text-border">0{i + 1}</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">{sol.title}</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{sol.desc}</p>
                    
                    <div className="pt-4 sm:pt-6 border-t border-border mt-4 sm:mt-6">
                      <h4 className="text-xs sm:text-sm font-bold tracking-widest text-muted-foreground uppercase mb-3 sm:mb-4">Core Capabilities</h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {sol.features.map((feature, j) => (
                          <li key={j} className="flex items-start text-sm sm:text-base">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-6 sm:pt-8">
                      <Button asChild size="lg" className="group/btn h-12 sm:h-14 px-6 sm:px-8">
                        <Link href={`/services/${sol.slug}`}>
                          View {sol.slug.toUpperCase()} Features
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full mt-4 lg:mt-0">
                    <div className="aspect-[4/3] bg-card border border-foreground/10 rounded-2xl shadow-none flex items-center justify-center p-6 sm:p-8 relative overflow-hidden group">
                      <div className="w-full h-full border border-dashed border-foreground/20 rounded-md flex flex-col items-center justify-center text-muted-foreground bg-muted transition-colors group-hover:border-foreground/30">
                        {sol.icon}
                        <span className="mt-4 font-bold uppercase tracking-wider text-xs sm:text-sm">[{sol.slug.toUpperCase()} Dashboard Preview]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 bg-emerald-900 border-y border-emerald-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center flex flex-col items-center">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
              Not sure where to start?
            </h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mb-8 sm:mb-10">
              Our engineering experts can audit your current factory operations and recommend the most impactful digitalisation roadmap for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-emerald-900 hover:bg-emerald-50">
                <Link href="/assessment">Request a Free Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
