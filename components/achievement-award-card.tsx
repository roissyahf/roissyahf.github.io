import { Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AchievementAwardCardProps {
  title: string
  organization: string
  date: string
  description: string
}

export function AchievementAwardCard({ title, organization, date, description }: AchievementAwardCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <Award className="h-6 w-6 flex-shrink-0 text-primary" />
          <div className="space-y-1">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-primary">{organization}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <p className="pt-2 text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
