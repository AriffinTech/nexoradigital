import { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Free EECA Readiness Assessment — Nexora Digital",
  description: "Find out your factory's energy management readiness in just 3 minutes.",
}

export default function AssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-12 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center rounded-sm border border-border bg-accent/30 px-3 py-1 text-sm font-medium text-accent-foreground mb-6">
            Free Assessment
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Are You Ready for EECA?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Malaysia's Energy Efficiency and Conservation Act is coming into full effect. Discover your compliance gaps and energy-saving opportunities today.
          </p>
        </div>
      </section>

      <section className="py-16 flex-1 bg-muted">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">What to expect</h2>
              <ul className="space-y-4">
                {[
                  "Current energy monitoring status evaluation",
                  "Identification of EECA compliance gaps",
                  "Personalised digitalisation roadmap",
                  "Estimated ROI and energy savings potential",
                  "100% free with no obligation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-3" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card border border-border shadow-sm p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Why act now?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Early compliance not only avoids penalties but allows you to capitalise on operational efficiencies faster.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 relative">
            <div className="bg-card border border-border shadow-sm p-8 md:p-10 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Request Your Assessment</h2>
              <p className="text-muted-foreground mb-8">Tell us a bit about your operations, and our specialists will prepare your tailored assessment.</p>
              
              {/* Using the standard ContactForm for the lead capture */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
