import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const skillCategories = [
    {
        title: "Frontend Development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3", "Framer Motion"]
    },
    {
        title: "Backend Development",
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "REST APIs", "GraphQL"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD", "Figma"]
    }
]

export function SkillsMatrix() {
    return (
        <section className="container px-4 md:px-6 py-12 md:py-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
                Skills Matrix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <Card key={category.title} className="h-full">
                        <CardHeader>
                            <CardTitle>{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
