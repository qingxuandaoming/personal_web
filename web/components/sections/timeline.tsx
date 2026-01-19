import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const history = [
    {
        role: "Intern",
        company: "Shijiazhuang Yiling Pharmaceutical Co., Ltd.",
        period: "Jan 2025 - Apr 2025",
        description: "Participated in national projects (confidentiality maintained). Gained industry exposure.",
        type: "work"
    },
    {
        role: "Equipment Operations Intern",
        company: "Huandun Central Health Center (Info Dept.)",
        period: "Jun 2024 - Jul 2024",
        description: "handled equipment operations and IT support tasks.",
        type: "work"
    },
    {
        role: "Artificial Intelligence Major",
        company: "Hebei University of Economics and Business",
        period: "2023 - 2027 (Expected)",
        description: "Ranked 1st in sophomore comprehensive measurement. Multiple First-Class Scholarships. Leader of Lab 313.",
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
