import Link from "next/link"
import { Metadata } from "next"
import { Car, Coffee, Pill, Cpu, Factory, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve — Nexora Digital",
  description: "Digital manufacturing solutions tailored for Automotive, Food & Beverage, Pharmaceutical, Electronics, and more.",
}

const industries = [
  { 
    icon: <Car className="h-10 w-10 text-foreground" />, 
    label: "Automotive",
    desc: "Traceability, precision quality control, and JIT inventory management for Tier 1 suppliers and OEMs."
  },
  { 
    icon: <Coffee className="h-10 w-10 text-foreground" />, 
    label: "Food & Beverage",
    desc: "Recipe management, strict batch tracking, and energy optimisation for high-volume production lines."
  },
  { 
    icon: <Pill className="h-10 w-10 text-foreground" />, 
    label: "Pharmaceutical",
    desc: "FDA compliance, clean-room environmental monitoring, and secure electronic batch records."
  },
  { 
    icon: <Cpu className="h-10 w-10 text-foreground" />, 
    label: "Electronics",
    desc: "High-speed defect detection, component-level traceability, and micro-environment control."
  },
  { 
    icon: <Factory className="h-10 w-10 text-foreground" />, 
    label: "General Manufacturing",
    desc: "OEE improvement, predictive maintenance, and shop-floor digitisation for discrete manufacturing."
  },
  { 
    icon: <Building2 className="h-10 w-10 text-foreground" />, 
    label: "Plastics & Packaging",
    desc: "Energy-intensive process optimisation and scrap reduction through real-time monitoring."
  },
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-16 sm:pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Expertise Across Every Vertical
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            While the principles of Industry 4.0 are universal, the application is unique. We tailor our digital solutions to the specific regulatory and operational demands of your industry.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="bg-card flex flex-col p-8 rounded-2xl border border-foreground/10 shadow-none">
                <div className="w-16 h-16 rounded-md bg-muted border border-foreground/10 flex items-center justify-center mb-6">
                  {ind.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{ind.label}</h2>
                <p className="text-muted-foreground leading-relaxed flex-1">{ind.desc}</p>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Discuss your use case
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-900 border-b border-emerald-950 relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Don't see your industry?</h2>
            <p className="text-lg text-muted-foreground">
              Our core platforms (EMS, MES, ERP) are highly configurable. We have successfully deployed solutions in textiles, metal fabrication, and advanced materials. 
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center shrink-0 font-[510] tracking-tight bg-white text-emerald-900 hover:bg-emerald-50 h-14 px-8 rounded-md">
                Talk to an Industry Expert
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-card rounded-2xl border border-foreground/10 flex items-center justify-center relative overflow-hidden">
              <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm relative z-10">Cross-industry Architecture Diagram</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
