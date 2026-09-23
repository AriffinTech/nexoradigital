"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, ArrowRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl rounded-full border border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center">
          <Link href="/" className="mr-4 sm:mr-8 flex flex-col justify-center space-y-0.5 sm:space-y-1">
            <span className="font-heading font-extrabold tracking-tight text-xl sm:text-2xl flex items-center">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm bg-primary mr-1.5 sm:mr-2" />
              NEXORA
              <span className="text-primary ml-1 sm:ml-1.5">DIGITAL</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-muted-foreground font-medium pl-[1.125rem]">
              Smarter Factories, Sustainable Tomorrow
            </span>
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((solution) => (
                        <li key={solution.title}>
                          <NavigationMenuLink asChild>
                            <Link href={solution.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/industries">
                      Industries
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="h-11 w-11 p-0 hover:bg-accent" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 w-[85vw] max-w-sm flex flex-col justify-between overflow-y-auto">
              <div>
                <SheetClose asChild>
                  <Link href="/" className="flex flex-col justify-center space-y-1 mb-8 pt-2 pr-6">
                    <span className="font-heading font-extrabold tracking-tight text-xl flex items-center">
                      <div className="w-2 h-2 rounded-sm bg-primary mr-2" />
                      NEXORA <span className="text-primary ml-1">DIGITAL</span>
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium pl-4 leading-relaxed">
                      Smarter Factories, Sustainable Tomorrow
                    </span>
                  </Link>
                </SheetClose>
                
                <div className="flex flex-col space-y-1">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center min-h-[44px] px-3 py-2 rounded-md font-semibold text-base hover:bg-accent text-foreground">
                      Home
                    </Link>
                  </SheetClose>

                  <div className="py-1">
                    <SheetClose asChild>
                      <Link href="/services" className="flex items-center justify-between min-h-[44px] px-3 py-2 rounded-md font-semibold text-base hover:bg-accent text-foreground">
                        <span>Solutions</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </SheetClose>
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-border ml-3">
                      {solutions.map((item) => (
                        <SheetClose key={item.href} asChild>
                          <Link href={item.href} className="flex items-center min-h-[44px] px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent">
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <SheetClose asChild>
                    <Link href="/industries" className="flex items-center min-h-[44px] px-3 py-2 rounded-md font-semibold text-base hover:bg-accent text-foreground">
                      Industries
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/about" className="flex items-center min-h-[44px] px-3 py-2 rounded-md font-semibold text-base hover:bg-accent text-foreground">
                      About
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/contact" className="flex items-center min-h-[44px] px-3 py-2 rounded-md font-semibold text-base hover:bg-accent text-foreground">
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </div>

              <div className="pt-6 pb-4 border-t border-border mt-6">
                <SheetClose asChild>
                  <Button asChild className="w-full h-12 justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    <Link href="/assessment">Free EECA Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="group/nav-cta bg-primary text-primary-foreground hover:bg-primary/90 rounded-[var(--radius-comfortable,6px)] px-6 font-[510] tracking-tight shadow-xs">
            <Link href="/assessment">
              Free Assessment 
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover/nav-cta:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const solutions = [
  {
    title: "Energy Management (EMS)",
    href: "/services/ems",
    description: "Monitor, analyse and optimise energy usage across your factory.",
  },
  {
    title: "Manufacturing Execution (MES)",
    href: "/services/mes",
    description: "Real-time production visibility and control for smarter operations.",
  },
  {
    title: "Warehouse Management (WMS)",
    href: "/services/wms",
    description: "Smarter inventory and warehouse operations.",
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    href: "/services/erp",
    description: "Unify your business processes for greater efficiency.",
  },
]
