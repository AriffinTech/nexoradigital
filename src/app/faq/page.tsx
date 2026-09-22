import { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ & Testimonials — Nexora Digital",
  description: "Common questions about our smart manufacturing solutions.",
}

const faqs = [
  {
    question: "What is the typical implementation time for your EMS?",
    answer: "For a standard factory setup (up to 20 meters), our Energy Management System can be fully deployed and operational within 2-4 weeks. Larger, multi-site deployments typically take 6-12 weeks."
  },
  {
    question: "Do I need to replace my existing machines to use your software?",
    answer: "No. Our solutions are designed to be hardware-agnostic. We use industrial IoT gateways and edge devices to extract data from your legacy PLCs, sensors, and meters without needing to replace the core machinery."
  },
  {
    question: "How does Nexora help with EECA compliance?",
    answer: "Our platform automatically tracks all energy consumption data required under the Energy Efficiency and Conservation Act. We generate compliant reports, identify energy-saving opportunities to meet mandated targets, and provide the audit trails required by regulators."
  },
  {
    question: "Is my manufacturing data secure in the cloud?",
    answer: "Yes. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We also offer on-premise deployment options for highly sensitive or defense-related manufacturing operations."
  },
  {
    question: "Can your MES integrate with our existing ERP?",
    answer: "Yes, our MES features standard APIs and connectors for all major ERP systems including SAP, Oracle, Microsoft Dynamics, and Epicor, ensuring seamless data flow between the shop floor and finance."
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our implementation process, hardware compatibility, and data security.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted flex-1">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card px-6 rounded-lg border border-border shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-primary py-6 data-[state=open]:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
