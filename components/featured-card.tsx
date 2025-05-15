import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, ExternalLink, FileText, Link2, Video } from "lucide-react"

interface FeaturedCardProps {
  title: string
  description: string
  image: string
  url: string
  type: "Article" | "Event"
  date: string
  source: string
}

export function FeaturedCard({ title, description, image, url, type, date, source }: FeaturedCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute right-2 top-2">
          <Badge
            variant="secondary"
            className={`${
              type === "Article" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
            } dark:bg-opacity-20`}
          >
            {type === "Article" ? (
              <>
                <FileText className="mr-1 h-3 w-3" /> Article
              </>
            ) : (
              <>
                <Video className="mr-1 h-3 w-3" /> Event
              </>
            )}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Link2 className="mr-1 h-3 w-3" />
              <span>{source}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Visit <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
