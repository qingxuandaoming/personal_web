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
                        I am a dedicated AI student and researcher, blending logical analysis with creative problem-solving.
                        My journey is defined by "passion" (热爱) — striving to become an expert in Artificial Intelligence
                        to drive technical innovation.
                    </p>
                    <p>
                        With a strong foundation in Python, Computer Vision, and Mathematical Modeling, I have led
                        multiple research projects and won provincial awards in programming and modeling competitions.
                        I am committed to using technology to improve quality of life.
                    </p>
                </div>
                <div className="pt-4">
                    <Button size="lg" className="gap-2" asChild>
                        <Link href="/resource/陈冠衡.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" /> Download Resume
                        </Link>
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
