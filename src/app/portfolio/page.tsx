import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Case Studies & Portfolio — Nexora Digital",
  description: "See how we've helped manufacturers digitalise their operations.",
}

const cases = [
  {
    client: "Global Automotive Parts Manufacturer",
    title: "Reducing energy costs across 3 facilities",
    category: "Energy Management",
    stats: [
      { label: "Energy Savings", value: "[Data]" },
      { label: "Payback Period", value: "[Data]" }
    ]
  },
  {
    client: "Regional Food Packaging Co.",
    title: "Achieving inventory accuracy with smart WMS",
    category: "Warehouse Management",
    stats: [
      { label: "Inventory Accuracy", value: "[Data]" },
      { label: "Picking Speed", value: "[Data]" }
    ]
  },
  {
    client: "Electronics Assembly Plant",
    title: "Increasing OEE systematically",
    category: "Manufacturing Execution",
    stats: [
      { label: "OEE Improvement", value: "[Data]" },
      { label: "Scrap Reduction", value: "[Data]" }
    ]
  },
  {
    client: "Precision Engineering SME",
    title: "Digitalising quality control and eliminating paper",
    category: "Digital Transformation",
    stats: [
      { label: "Paper Saved", value: "[Data]" },
      { label: "Defect Rate", value: "[Data]" }
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Real Impact For Real Manufacturers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We measure our success by the tangible improvements in your operations. Read how our clients transformed their factories.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted flex-1 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {cases.map((item, i) => (
              <div key={i} className="flex flex-col bg-card rounded-lg border border-border overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-muted flex items-center justify-center relative border-b border-border">
                  <span className="text-muted-foreground font-bold tracking-wider text-sm">Case Study Image</span>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">
                    <Link href="/contact" className="hover:underline">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-8 flex-1">{item.client}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    {item.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-emerald-950 border border-emerald-900 p-12 rounded-lg">
            <h3 className="text-3xl font-extrabold mb-6 text-white">Ready to write your success story?</h3>
            <Link href="/contact" className="inline-flex items-center justify-center h-14 px-10 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
