import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us — Nexora Digital",
  description: "Get in touch with Nexora Digital for your smart manufacturing and digitalisation needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-16 sm:pt-24 pb-12 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let's Build a Smarter Factory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to digitalise your manufacturing operations? Our team of experts is here to help you navigate your industry 4.0 journey.
          </p>
        </div>
      </section>

      <section className="py-16 flex-1 bg-muted">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-card border border-foreground/10 rounded-xl flex items-center justify-center mr-4 shrink-0 shadow-none">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">+60 16-938 9123</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm (MYT)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-card border border-foreground/10 rounded-xl flex items-center justify-center mr-4 shrink-0 shadow-none">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">sitinuratikahsalleh@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-card border border-foreground/10 rounded-xl flex items-center justify-center mr-4 shrink-0 shadow-none">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="w-full h-64 bg-card rounded-2xl overflow-hidden border border-foreground/10 shadow-none">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254932.19655787723!2d101.53097368498877!3d3.138503554160492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362bfc082729%3A0xc316104e1bc14502!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nexora Digital Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-card border border-foreground/10 shadow-low p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
