import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function HeroSection() {
    return (
        <section className="container px-4 md:px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Hi, I&apos;m <span className="text-primary">Your Name</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    A Full Stack Developer crafting beautiful, intuitive, and performant web experiences.
                    Specializing in React, Next.js, and modern web technologies.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-12 px-8">
                    <Link href="/projects">
                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8">
                    <Link href="/contact">
                        Contact Me <Mail className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
