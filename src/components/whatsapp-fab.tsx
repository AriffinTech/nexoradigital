"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  const whatsappNumber = "+60169389123"
  const message = encodeURIComponent("Hi Nexora Digital, I'd like to learn more about your smart manufacturing solutions.")
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-low hover:opacity-90 transition-opacity"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
