import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const history = [
    {
        role: "Senior Frontend Engineer",
        company: "Tech Company Inc.",
        period: "2023 - Present",
        description: "Leading the frontend team in migrating legacy systems to Next.js. Improved performance by 40%.",
        type: "work"
    },
    {
        role: "Full Stack Developer",
        company: "StartUp Solutions",
        period: "2021 - 2023",
        description: "Built and maintained multiple client projects using React and Node.js. Implemented CI/CD pipelines.",
        type: "work"
    },
    {
        role: "Computer Science Degree",
        company: "University of Technology",
        period: "2017 - 2021",
        description: "Specialized in Software Engineering. Graduated with honors.",
        type: "education"
    }
]

export function Timeline() {
    return (
        <section className="container px-4 md:px-6 py-12 bg-muted/30 rounded-3xl my-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
                Experience & Education
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {history.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-primary rounded-full mt-2" />
                            {index !== history.length - 1 && (
                                <div className="flex-1 w-[2px] bg-border my-2" />
                            )}
                        </div>
                        <Card className="flex-1 mb-4">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <CardTitle className="text-lg md:text-xl">{item.role}</CardTitle>
                                    <Badge variant={item.type === 'work' ? 'default' : 'secondary'}>
                                        {item.period}
                                    </Badge>
                                </div>
                                <CardDescription className="text-base font-medium">
                                    {item.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
