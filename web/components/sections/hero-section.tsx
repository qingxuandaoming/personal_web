"use client"

import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

export function HeroSection() {
    const t = useTranslations("Hero")

    return (
        <section className="container px-4 md:px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {t("greeting")} <span className="text-primary">{t("name")}</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    {t("description")}
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-12 px-8">
                    <Link href="/projects">
                        {t("viewWork")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8">
                    <Link href="/contact">
                        {t("contactMe")} <Mail className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
