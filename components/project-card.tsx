import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  date: string
  isTeamProject?: boolean
}

export function ProjectCard({ id, title, description, image, tags, date, isTeamProject = false }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {isTeamProject && (
          <div className="absolute left-2 top-2">
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              <Users className="mr-1 h-3 w-3" /> Team Project
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/projects/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
