import { Metadata } from "next"
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us — Nexora Digital",
  description: "Learn about Nexora Digital's mission to empower Malaysian manufacturers with smart digitalisation solutions.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Pioneering Malaysia's <br />
            Industry 4.0 Future
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are technologists, engineers, and manufacturing experts dedicated to bridging the gap between the shop floor and the boardroom.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl relative z-10">
          <div className="bg-card border border-foreground/10 shadow-none p-10 rounded-2xl flex flex-col items-start">
            <div className="w-14 h-14 bg-muted border border-border text-primary rounded-md flex items-center justify-center mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower manufacturers through energy efficiency, operational visibility, and end-to-end digitalisation. We don't just sell software; we deliver measurable improvements to your bottom line while supporting sustainability goals.
            </p>
          </div>
          
          <div className="bg-card border border-foreground/10 shadow-none p-10 rounded-2xl flex flex-col items-start">
            <div className="w-14 h-14 bg-muted border border-border text-primary rounded-md flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading catalyst for sustainable, smart manufacturing in Southeast Asia. We envision a future where every factory operates with zero waste, perfect visibility, and maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What Drives Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Partnership First</h3>
              <p className="text-muted-foreground">We succeed when you succeed. We work alongside your team on the factory floor to ensure our solutions deliver real impact, not just theoretical value.</p>
            </div>
            
            <div className="space-y-4">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Data Integrity</h3>
              <p className="text-muted-foreground">In manufacturing, bad data leads to bad decisions. We build robust architectures that guarantee the accuracy and security of your operational data.</p>
            </div>
            
            <div className="space-y-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Practical Innovation</h3>
              <p className="text-muted-foreground">We focus on technologies that solve actual problems. No buzzwords, no hype—just practical digitalisation that improves OEE and reduces costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Meet the Leadership</h2>
              <p className="text-muted-foreground mt-4 text-lg">Decades of combined experience in industrial engineering and software architecture.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-card rounded-2xl mb-4 overflow-hidden border border-foreground/10 relative flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <h3 className="font-bold text-lg">Executive Name</h3>
                <p className="text-sm text-muted-foreground font-medium">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-emerald-900 border-y border-emerald-950">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Join us in shaping the future of manufacturing</h2>
          <Button asChild size="lg" className="h-12 sm:h-14 px-8 mt-8 bg-white text-emerald-900 hover:bg-emerald-50">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
