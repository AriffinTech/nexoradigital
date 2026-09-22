import { Metadata } from "next"
import { CheckCircle2, X } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing & Packages — Nexora Digital",
  description: "Transparent pricing packages for your manufacturing digitalisation journey.",
}

const tiers = [
  {
    name: "Essential",
    desc: "For small manufacturers starting their digitalisation journey.",
    price: "Custom",
    features: [
      "Energy Monitoring (up to 5 meters)",
      "Basic OEE Dashboard",
      "Cloud Data Storage (1 year)",
      "Standard Email Support",
      "Monthly Reports"
    ],
    missing: [
      "ERP Integration",
      "Real-time Alerts",
      "Dedicated Success Manager",
      "Custom API Access"
    ],
    cta: "Contact Sales",
    popular: false
  },
  {
    name: "Professional",
    desc: "Comprehensive solution for mid-sized factories seeking full visibility.",
    price: "Custom",
    features: [
      "Energy Monitoring (up to 50 meters)",
      "Advanced MES Features",
      "Basic ERP Integration",
      "Real-time SMS/Email Alerts",
      "Cloud Data Storage (5 years)",
      "EECA Compliance Module"
    ],
    missing: [
      "Custom API Access",
      "On-premise Deployment Option"
    ],
    cta: "Request Proposal",
    popular: true
  },
  {
    name: "Enterprise",
    desc: "Advanced platform for large-scale and multi-site operations.",
    price: "Custom",
    features: [
      "Unlimited Meter Connections",
      "Full Suite (EMS, MES, WMS, ERP)",
      "Custom API & Deep Integrations",
      "On-premise or Private Cloud",
      "Dedicated Success Manager",
      "24/7 SLA Support",
      "Predictive Maintenance AI"
    ],
    missing: [],
    cta: "Contact Sales",
    popular: false
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Scalable Solutions for Every Stage
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't believe in one-size-fits-all. Our pricing is tailored to your factory's size, operational complexity, and specific digitalisation goals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col p-8 rounded-lg border bg-card shadow-sm ${tier.popular ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                  <p className="text-muted-foreground text-sm min-h-[40px]">{tier.desc}</p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Pricing based on factory requirements</p>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Included Features</h3>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                    {tier.missing.map((feature, j) => (
                      <li key={`m-${j}`} className="flex items-start text-sm opacity-50">
                        <X className="h-5 w-5 text-muted-foreground shrink-0 mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact"
                  className={`inline-flex items-center justify-center shrink-0 font-medium transition-all outline-none select-none w-full h-12 rounded-md ${tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-emerald-900 border-b border-emerald-950 text-center">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Need a custom hardware setup?</h2>
          <p className="text-gray-300 text-lg mb-8">
            In addition to our software platform, we provide and install the necessary IoT sensors, edge gateways, and smart meters required to digitise your legacy equipment.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center shrink-0 font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base rounded-md">
            Request a Hardware Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
