import { ProfileIntro } from "@/components/sections/profile-intro"
import { Timeline } from "@/components/sections/timeline"
import { SkillsMatrix } from "@/components/sections/skills-matrix"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfileIntro />
      <Timeline />
      <SkillsMatrix />
    </div>
  )
}