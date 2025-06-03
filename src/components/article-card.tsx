import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card"
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  link: string
}

export function ArticleCard({ id, title, excerpt, category, date, readTime, image, link }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full pt-0">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img src={image || "/placeholder.svg"} alt={title} className="object-cover object-center h-full w-full rounded-t-lg" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge className="mb-2">{category}</Badge>
        <h2 className="text-xl font-bold mb-2">
          <Link to={link} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground pt-0">
        <span>{date}</span>
        <span>読了時間: {readTime}</span>
      </CardFooter>
    </Card>
  )
}
