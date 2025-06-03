import { Search } from "lucide-react"
import { useState } from "react"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"
import { ArticleCard } from "./../components/article-card"

export default function ArticlesPage() {
  // 記事データのモック
  const articles = [
    {
      id: 9,
      title: "2025年1月から5月までの進捗",
      excerpt: "3月末まで 種子島ロケットコンテスト CanSat部門 おそらく、現役最後の CanSat の大会で良い結果を残せるように Ca...",
      category: "日記",
      date: "2025年5月25日",
      readTime: "10分",
      image: "./images/hatena-blog.png",
      link: "https://roki-ars.hatenablog.com/entry/2025/05/25/130322?_gl=1*1szusg*_gcl_au*MzYwOTU3MjEuMTc0Mjg4NTE3Ng.."
    },
    {
      id: 8,
      title: "【色変記事】AtCoderで入緑しました！",
      excerpt: "ABC391で入緑したのでどれくらい精進したかや何を考えていたかを記事にしてみようと思います。レート推移レート推移はこんな感じでした。茶色の瓦が4枚になったのが2024/6/8で入緑したのが20…",
      category: "競プロ",
      date: "2025年5月19日",
      readTime: "3分",
      image: "https://iframely.net/hUf93cb2/thumbnail?maxwidth=960",
      link: "https://qiita.com/pond-e/items/863e8f49447f1d10bda0"
    },
    {
      id: 1,
      title: "ラズパイで3軸加速度センサー (AE-ADXL367) を使う方法",
      excerpt: "ラズパイで3軸加速度センサー (AE-ADXL367) を使う方法 · 目次 · 販売リンク、データシート · 開発環境 · ラズパイへの接続方法 · I2Cの有効化 · コードを ...",
      category: "組み込み",
      date: "2025年3月15日",
      readTime: "5分",
      image: "https://iframely.net/PQWAell/thumbnail?maxwidth=960",
      link: "https://qiita.com/pond-e/items/35c39e1aa0f3440b0b20",
    },
    {
      id: 2,
      title: "2024年8月から12月までの進捗",
      excerpt:
        "8月 CanSat NSEとARLISSに向けてCanSatの開発をバリバリしてた。前もどこかの記事で書いたけど、つくばでCanSatの開発をすると思ってなかったからまた出来て楽しかっ…",
      category: "日記",
      date: "2024年12月31日",
      readTime: "5分",
      image: "./images/hatena-blog.png",
      link: "https://roki-ars.hatenablog.com/entry/2024/12/31/160051?_gl=1*3n43iq*_gcl_au*MzYwOTU3MjEuMTc0Mjg4NTE3Ng"
    },
    {
      id: 3,
      title: "加速度センサー ADXL345を3200 Hzで動かしてみた",
      excerpt:
        "私はCanSatという一種の自律制御ロボットの開発を行っているのですが、ロケットからの分離衝撃、地面への着地衝撃を測定する必要がありました。一般に着地した際には非常に短い時間の間に速度、加速度が変化…",
      category: "組み込み",
      date: "2024年12月25日",
      readTime: "4分",
      image: "https://iframely.net/boMGA4G/thumbnail?maxwidth=640",
      link: "https://qiita.com/pond-e/items/8b3fcdd93377b375f768"
    },
    {
      id: 4,
      title: "古いエアコンをスマートに、ペットに最適な環境を提供するリモートリモコン型デバイス「Temペット」",
      excerpt:
        "はじめに 昨今、自動温度調節機能やインターネット越しに操作できる機能を持ったエアコンが販売されていますが、それを導入するためにはエアコンごと買い替える必要があり...",
      category: "組み込み",
      date: "2024年10月25日",
      readTime: "10分",
      image: "./images/tempet_1.png",
      link: "https://elchika.com/article/f071bcac-4171-43c5-ac84-83035b03fcfb/"
    },
    {
      id: 5,
      title: "明石高専から筑波大学 情報科学類に編入して春学期を終えた感想",
      excerpt:
        "先人に倣って、自分も書いてみようと思います。 題名にわざわざ明石高専からと書いたのは、高専によって課題の量や成績の厳しさに差があるらしく、一口に編入と言っても...",
      category: "学校",
      date: "2024年8月10日",
      readTime: "10分",
      image: "https://assets.st-note.com/production/uploads/images/150255661/rectangle_large_type_2_ef466ff8f1f6d4904f92deedbc5c9a16.png?width=1200",
      link: "https://note.com/pond6814/n/n43d4c02fe50f"
    },
    {
      id: 6,
      title: "2024年1月から7月までの進捗",
      excerpt:
        "筑波大学に編入して忙しかったから更新が遅れちゃった 1月 ロジックIC 電子工作っぽい電子工作をやってみた 配線が多くて、大変。回路のテストにはLチカが一番楽だ...",
      category: "日記",
      date: "2024年7月19日",
      readTime: "9分",
      image: "./images/hatena-blog.png",
      link: "https://roki-ars.hatenablog.com/entry/2024/07/19/113147?_gl=1*hz3df9*_gcl_au*MzYwOTU3MjEuMTc0Mjg4NTE3Ng"
    },
    {
      id: 7,
      title: "部費を活用して技術力をアップしよう！",
      excerpt:
        "2024年3月に某進学高専を卒業予定のPondです。僕は高専生活で部費を色々使わせてもらって楽しい技術活動をしていたので、その記録と部費をうまく使用した質のいい技術、ものづ...",
      category: "学校",
      date: "2024年2月28日",
      readTime: "5分",
      image: "./images/note_logo.webp",
      link: "https://note.com/pond6814/n/n3f08bed1ea48"
    },
  ]

  // カテゴリー一覧
  const categories = ["すべて", "組み込み", "Web", "日記", "学校"]

  // 検索とフィルタリングの状態管理
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

  // 記事のフィルタリング
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "すべて" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // ページネーションの計算
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  // ページ変更時の処理
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 検索やカテゴリー変更時にページをリセット
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="記事を検索..." 
              className="pl-10" 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === selectedCategory ? "default" : "outline"} 
              size="sm"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentArticles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            date={article.date}
            readTime={article.readTime}
            image={article.image}
            link={article.link}
          />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">検索条件に一致する記事が見つかりませんでした。</p>
        </div>
      )}

      {filteredArticles.length > 0 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) handlePageChange(currentPage - 1)
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(page)
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) handlePageChange(currentPage + 1)
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
