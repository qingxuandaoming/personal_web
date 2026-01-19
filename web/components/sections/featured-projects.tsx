"use client"

import { Link } from "@/i18n/routing"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const projectKeys = [
    { key: "pfc-moe-research", tags: ["AI Research", "Deep Learning", "Python"] },
    { key: "smart-agriculture", tags: ["IoT", "Blockchain", "Cloud Computing"] },
    { key: "teaching-website", tags: ["Web Dev", "Leadership", "Full Stack"] }
]

export function FeaturedProjects() {
    const t = useTranslations("FeaturedProjects")
    const tProjects = useTranslations("FeaturedProjects.items")

    return (
        <section className="container px-4 md:px-6 py-12 md:py-24">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {t("title")}
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    {t("description")}
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectKeys.map((project) => (
                    <Card key={project.key} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{tProjects(`${project.key}.title`)}</CardTitle>
                            <CardDescription>{tProjects(`${project.key}.description`)}</CardDescription>
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
                                <Link href={`/projects/${project.key}`}>
                                    {t("viewProject")} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Button asChild variant="outline" size="lg">
                    <Link href="/projects">
                        {t("viewAll")}
                    </Link>
                </Button>
            </div>
        </section>
    )
}
