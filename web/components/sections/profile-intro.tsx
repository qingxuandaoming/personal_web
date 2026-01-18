import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function ProfileIntro() {
    return (
        <section className="container px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    About Me
                </h1>
                <div className="space-y-4 text-muted-foreground md:text-lg leading-relaxed">
                    <p>
                        I am a passionate developer with a strong focus on creating intuitive, dynamic, and performant user experiences.
                        With a background in [Your Background], I bring a unique perspective to problem-solving and software architecture.
                    </p>
                    <p>
                        My journey began when I [Your Story Start]. Since then, I&apos;ve worked on various projects ranging from
                        small business websites to complex enterprise applications. I believe in clean code, continuous learning,
                        and the power of open source.
                    </p>
                </div>
                <div className="pt-4">
                    <Button size="lg" className="gap-2">
                        <Download className="h-4 w-4" /> Download Resume
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                {/* Placeholder for Profile Image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center text-muted-foreground border-4 border-background shadow-xl">
                    <span>Profile Photo</span>
                </div>
            </div>
        </section>
    )
}
