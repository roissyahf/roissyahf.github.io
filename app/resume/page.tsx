import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveSkills } from "@/components/interactive-skills"
import { AchievementAwardCard } from "@/components/achievement-award-card"
import { CertificationCard } from "@/components/certification-card"
import { Code, Database, FileCode, FileSpreadsheet, Layers } from "lucide-react"

// Define the skills data
const skills = [
  // Techniques
  { name: "Machine Learning", category: "techniques" },
  { name: "Deep Learning", category: "techniques" },
  { name: "NLP", category: "techniques" },
  //{ name: "Feature Selection", category: "techniques" },
  { name: "Statistical Modeling", category: "techniques" },
  { name: "Data Processing", category: "techniques" },
  { name: "ETL", category: "techniques" },
  //{ name: "Data Transformation", category: "techniques" },
  { name: "Data Analysis", category: "techniques" },

  // Programming Languages/Library
  { name: "Python", category: "programming" },
  { name: "Scikit-learn", category: "programming" },
  { name: "TensorFlow", category: "programming" },
  { name: "PyTorch", category: "programming" },
  { name: "Flask", category: "programming" },
  { name: "Streamlit", category: "programming" },
  { name: "SQL", category: "programming" },

  // Tools
  { name: "Tableau", category: "tools" },
  { name: "Power BI", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Microsoft Excel", category: "tools" }
] as const

// Define the achievements data
const achievements = [
  {
    title: "Inspiring Alumni",
    organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "Feb & June 2024",
    description:
      "Recognized as an Inspiring Alumni. Collaborated with Google Indonesia on the International Women's Day 2024 initiative and delivered a speech at the Google AI for the Golden Generation of Indonesia event.",
  },
  {
    title: "Third Runner-up",
    organization: "Intelligo Data Competition 2023",
    date: "Oct 2023",
    description: "Awarded third runner-up in the Intelligo Data Competition 2023.",
  },
  {
    title: "Top 10 Finalist",
    organization: "RISTEK Datathon 2023",
    date: "Aug 2023",
    description: "Selected as one of the top 10 finalists in the RISTEK Datathon 2023.",
  },
  {
    title: "Distinction Graduate",
    organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "Jun 2023",
    description: "Graduated with distinction from the Bangkit Academy 2023 H1 cohort.",
  },
  {
    title: "Top 3 Best Projects",
    organization: "Data Science Academy Information Systems Expo 2022",
    date: "Nov 2022",
    description:
      "Project recognized as one of the top 3 best projects in the Data Science Academy Information Systems Expo 2022.",
  },
]

// Define the certifications data
const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "June 2024 - present",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RoissyahFernanda-1870/1F00FCD0E4125409?sharingId=6E78F0C8F14683A1",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Google Certified TensorFlow Developer",
    issuer: "Google",
    date: "Oct 2023 - present",
    url: "https://www.credential.net/18ca281c-e4f3-488a-876b-fa279fa7319b?record_view=true",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RoissyahFernanda-1870/6F4F548BC703426D?sharingId=6E78F0C8F14683A1",
    icon: <FileSpreadsheet className="h-6 w-6" />,
  },
  {
    title: "DeepLearning.AI Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://coursera.org/share/81a4d80a4cbe2acbd8716306df99c717",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    title: "DeepLearning.AI Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/4LV3TZZVR4ZT",
    icon: <Layers className="h-6 w-6" />,
  },
]

export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <p className="text-xl text-muted-foreground">My professional experience and qualifications</p>
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <SectionHeading title="Education" />
        <Card>
          <CardHeader>
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <CardTitle>Bachelor of Statistics</CardTitle>
              <div className="text-sm text-muted-foreground">Feb 2020 - Apr 2024</div>
            </div>
            <p className="text-muted-foreground">Universitas Terbuka Jember, East Java</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">Cumulative GPA: 3.89 out of 4.0</p>
            </div>
            <div>
              <p className="font-medium">Undergraduate research project:</p>
              <p className="text-muted-foreground">
                Titled "Evaluating the Efficacy of ARIMA and Double Exponential Smoothing for Forecasting Fishermen's
                Exchange Rate in East Java"
              </p>
            </div>
            <div>
              <p className="font-medium">Activity:</p>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>Speaker at the 36th Knowledge Sharing Forum Universitas Terbuka</li>
                <li>Speaker at Bincang Mahasiswa Statistika Series One</li>
                <li>Speaker at Radio UT</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Relevant Coursework:</p>
              <p className="text-muted-foreground">
                Statistical Inference; R; SPSS; Linear Algebra; Multivariate Calculus; Operational Research
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-12">
        <SectionHeading title="Professional Experience" />
        <div className="space-y-6">
          {/* Accenture */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Data Scientist</CardTitle>
                <div className="text-sm text-muted-foreground">Dec 2024 – Feb 2025</div>
              </div>
              <p className="text-muted-foreground">Accenture, Remote</p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Optimized bunkering operations through data analysis, modeling, and visualization, identifying key
                  inefficiencies.
                </li>
                <li>Extracted actionable insights from complex datasets, driving informed decision-making.</li>
                <li>
                  Delivered data-driven recommendations in a collaborative consulting environment, gaining experience in
                  the oil and gas sector.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Bangkit Academy */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Part-time Machine Learning Mentor</CardTitle>
                <div className="text-sm text-muted-foreground">Feb – Dec 2024</div>
              </div>
              <p className="text-muted-foreground">
                Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka, Remote
              </p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Empowered 24 students through a structured mentorship program and a strategic learning approach;
                  fostering collaboration that boosted participation by 70%.
                </li>
                <li>
                  Drove clarity and progress for a machine learning cohort by facilitating daily stand-up meetings;
                  ensuring successful coursework completion.
                </li>
                <li>
                  Achieved a 92% graduation rate across two mentored batches, with average student ratings of 4.9/5.0
                  and instructor ratings of 4.8/5.0, reflecting impactful and highly satisfying mentoring.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Braincore.id */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Part-time Research and Development Assistant</CardTitle>
                <div className="text-sm text-muted-foreground">Jan – Dec 2024</div>
              </div>
              <p className="text-muted-foreground">Braincore.id, Remote</p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Identified relevant prior work for a groundbreaking implementation of AI/ML paper (expected in top
                  journals) through a comprehensive narrative review with a team.
                </li>
                <li>
                  Reinforced a thesis student in the field of tourism, computer vision, and business intelligence by
                  providing guidance and resources; resulting in a 25% increase in productivity and timely completion of
                  the thesis.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Livingston Research */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Freelance Statistics Tutor</CardTitle>
                <div className="text-sm text-muted-foreground">Apr 2022 – Dec 2023</div>
              </div>
              <p className="text-muted-foreground">Livingston Research, Remote</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Guided students in mastering the intricacies of Mathematics, Statistics, and Data Analytics; garnered
                reviews with an average rating of 4 out of 5 stars based on student feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section - Now Interactive */}
      <section className="mb-12">
        <SectionHeading title="Skills" />
        <InteractiveSkills skills={skills} />
      </section>

      {/* Awards & Achievements Section - Now with Cards */}
      <section className="mb-12">
        <SectionHeading title="Awards & Achievements" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementAwardCard
              key={index}
              title={achievement.title}
              organization={achievement.organization}
              date={achievement.date}
              description={achievement.description}
            />
          ))}
        </div>
      </section>

      {/* Certifications & Trainings Section - Now with Cards */}
      <section>
        <SectionHeading title="Certifications & Trainings" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              url={certification.url}
              icon={certification.icon}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
