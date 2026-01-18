import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Placeholder projects - to be replaced
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store built with Next.js 14, Stripe, and Supabase.",
        tags: ["Next.js", "TypeScript", "Stripe"],
        slug: "e-commerce-platform"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates using Socket.io.",
        tags: ["React", "Node.js", "Socket.io"],
        slug: "task-management"
    },
    {
        title: "Portfolio Website",
        description: "Modern personal portfolio with dark mode and MDX blog support.",
        tags: ["Next.js", "Tailwind", "MDX"],
        slug: "personal-portfolio"
    }
]

export function FeaturedProjects() {
    return (
        <section className="container px-4 md:px-6 py-12 md:py-24">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Featured Projects
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    A selection of projects that showcase my passion for building web applications.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/projects/${project.slug}`}>
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                    <Link href="/projects">
                        View All Projects
                    </Link>
                </Button>
            </div>
        </section>
    )
}
