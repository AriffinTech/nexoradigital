import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full pt-32 pb-16 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="font-mono uppercase tracking-widest text-xs py-1.5 border-foreground/10 bg-muted/50">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                Industrial Intelligence · Malaysia
              </Badge>
            </div>
            <div className="flex gap-4 flex-col mt-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-xl lg:max-w-2xl tracking-tight text-left font-extrabold leading-[1.05]">
                Smarter Manufacturing <br className="hidden sm:block" />
                <span className="text-muted-foreground">Brighter Tomorrow</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md lg:max-w-xl text-left mt-4">
                Empowering Malaysian manufacturers through energy efficiency, operational visibility, and end-to-end digitalisation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8">
                <Link href="/assessment">
                  Free EECA Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8">
                <Link href="/services">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-2xl aspect-square lg:aspect-[4/3] xl:aspect-video lg:max-h-[550px] relative overflow-hidden border border-foreground/10 shadow-sm">
             <Image 
                src="/images/smart-factory-hero.jpg"
                alt="Automated Smart Factory Robotics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
