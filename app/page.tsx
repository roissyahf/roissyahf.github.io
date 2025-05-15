import Image from "next/image"
import Link from "next/link"
import { Award, GraduationCap, Mail, Linkedin, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { AchievementCard } from "@/components/achievement-card"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col items-center gap-8 md:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Roissyah Fernanda Khoiroh</h1>
          <TypingAnimation
            phrases={["Data Scientist", "Uncovering Insights, Elevating Impact", "Solving Problems with Algorithms"]}
            className="text-lg text-muted-foreground"
            typingSpeed={80}
          />
          <p className="max-w-[600px] text-muted-foreground">
            Recent Statistics graduate with hands-on experience in building predictive models, developing interactive
            dashboards, and automating data-driven processes.
          </p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
          <Image
            src="/myself-opt1.jpg?height=320&width=320"
            alt="Roissyah Fernanda Khoiroh"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <SectionHeading title="Key Achievements" description="Highlights of my academic and professional journey" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AchievementCard title="GPA" value="3.89/4.0" icon={<GraduationCap />} />
          <AchievementCard title="Awards" value="4+" icon={<Award />} />
          <AchievementCard title="Projects" value="8+" icon={<BarChart />} />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <SectionHeading title="About Me" />
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              I am a recent Statistics graduate with a passion for data science and machine learning. My expertise
              includes building predictive models, developing interactive dashboards, and automating data-driven
              processes.
            </p>
            <p className="mb-4">
              I am proficient in machine learning techniques such as NLP, clustering, and classification, as well as
              feature selection, statistical modeling, and data processing. I leverage Python, Tableau, and Streamlit to
              extract actionable insights from data.
            </p>
            <p>
              I have successfully executed data science projects from data collection via APIs to model deployment. I am
              a strong communicator with a talent for presenting complex findings clearly to stakeholders.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <SectionHeading title="Contact" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:roissyahfk@gmail.com" className="hover:text-primary">
                    roissyahfk@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://linkedin.com/in/roissyahfernanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/roissyahfernanda
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
