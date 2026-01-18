import { Badge } from "@/components/ui/badge"

// Placeholder skills data - to be replaced with real data
const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Git", "Docker",
    "Figma", "UI/UX Design"
]

export function SkillsSection() {
    return (
        <section className="container px-4 md:px-6 py-12 md:py-24 bg-muted/50 rounded-3xl my-12">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Technical Skills
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    The technologies and tools I use to bring ideas to life.
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mt-8">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-4 py-2 text-base">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    )
}
