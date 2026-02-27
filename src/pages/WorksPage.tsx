import { FC } from 'react'

// 型定義
interface WorkData {
    readonly id: number
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    link: string
}

// 定数
const MAX_DESCRIPTION_LENGTH = 50

// ユーティリティ関数
const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text
    }
    return text.substring(0, maxLength) + '...'
}

// データ
const worksData: WorkData[] = [
    {
        id: 13,
        title: "CanSat",
        description: "NSE, ARLISS, 種子島ロケットコンテスト フルサクセス 敢闘賞",
        imageSrc: "./images/cansat2024_2.jpg",
        imageAlt: "cansat2024_2.jpg",
        link: "http://www.jaxa-rocket-contest.jp/past/2025/",
    },
    {
        id: 19,
        title: "モチベタイマー",
        description: "「名言と共に学習を可視化・習慣化」 モチベタイマーは、勉強や作業の時間を記録し、名言があなたのモチベーションを支えるタイマーアプリです。日々の学習を可視化して、自己効力感を高めるサポートをします。",
        imageSrc: "./images/motivation_timer_overview.png",
        imageAlt: "motivation_timer_overview.png",
        link: "https://motibe-devops-geek202507.github.io/MotivationTimer/",
    },
    {
        id: 20,
        title: "人工衛星「TSUKUTO」",
        description: "筑波大学 「結」プロジェクトにて1U立方体サイズの超小型人工衛星を開発しています。",
        imageSrc: "https://yui.kz.tsukuba.ac.jp/thumbnail2_hu_c51266384357b94e.png",
        imageAlt: "tsukuto_overview",
        link: "https://yui.kz.tsukuba.ac.jp/",
    },
    {
        id: 1,
        title: "BgGapFiller",
        description: "背景画像生成 Web アプリ",
        imageSrc: "./images/BgGapFiller_4.png",
        imageAlt: "BgGapFiller_4.png",
        link: "https://bggapfiller.onrender.com/",
    },
    {
        id: 2,
        title: "R☆AI☆NNER",
        description: "足圧センサーを用いたスマートインソール",
        imageSrc: "./images/RAINNER_1.png",
        imageAlt: "RAINNER_1.png",
        link: "https://youtu.be/qkNFEmacde0?si=0OV_ul2WX5n7RflY&t=23",
    },
    {
        id: 3,
        title: "Temペット",
        description: "古いエアコンをスマートに、ペットに最適な環境を提供するリモートリモコン型デバイス「Temペット」",
        imageSrc: "./images/tempet_1.png",
        imageAlt: "tempet_1.png",
        link: "https://elchika.com/article/f071bcac-4171-43c5-ac84-83035b03fcfb/",
    },
    {
        id: 4,
        title: "食堂売り切れ管理 Webアプリ",
        description: "PHP と Postgresql を使ったフルスタック Web アプリ",
        imageSrc: "./images/akashi_shokudou_1.png",
        imageAlt: "akashi_shokudou_1.png",
        link: "https://github.com/pond-e/akashi_shokudou",
    },
    {
        id: 5,
        title: "Clustream を使ったストリーミング処理のデモアプリ",
        description: "ストリーミング用クラスタリングアルゴリズムに Clustream、データストリーム処理に Apache Flink を使った tweet リアルタイムレコメンデーションシステム",
        imageSrc: "./images/clustream_app.jpg",
        imageAlt: "clustream_app.jpg",
        link: "#",
    },
    {
        id: 6,
        title: "転移学習を用いた橋梁認識システム デモアプリ",
        description: "画像に橋梁が映っているかどうか2値判定を行います。Microsoft Lobe を用いてニューラルネットワークのモデルの学習、デプロイを行いました。",
        imageSrc: "./images/bridge_website2.png",
        imageAlt: "bridge_website2.png",
        link: "https://pond-e.github.io/bridge_detection_demo/",
    },
    {
        id: 7,
        title: "MyDisassembler",
        description: "IA-32e向けのELF64, PE32+対応逆アセンブラの部分実装です",
        imageSrc: "./images/mydisassembler_1.png",
        imageAlt: "mydisassembler_1.png",
        link: "https://github.com/pond-e/MyDisassembler",
    },
    {
        id: 10,
        title: "Useless Box",
        description: "",
        imageSrc: "https://iframely.net/bmCfs1L/thumbnail?maxwidth=640",
        imageAlt: "",
        link: "https://qiita.com/pond-e/items/a5caab5f3042e1755b19",
    },
    {
        id: 11,
        title: "RAG Chat Bot (ExSeed)",
        description: "Azure AI Search と OpenAI Embedding, Gradio を使って RAG Chat Bot を作りました",
        imageSrc: "./images/RAG_chat_bot_1.png",
        imageAlt: "RAG_chat_bot_1.png",
        link: "#",
    },
    {
        id: 12,
        title: "CanSat 2020",
        description: "缶サット甲子園 和歌山大会",
        imageSrc: "./images/cansat2020_1.JPG",
        imageAlt: "cansat2020_1.JPG",
        link: "#",
    },
    {
        id: 14,
        title: "IMU 姿勢推定システム in Unity",
        description: "ジャイロセンサーを用いて姿勢推定を行い、Unity 上で表示してみました。",
        imageSrc: "./images/Unity_IMU_1.png",
        imageAlt: "Unity_IMU_1.png",
        link: "#",
    },
    {
        id: 15,
        title: "アルコールセンサー",
        description: "ほぼ初めて 3D printer を使ってモノづくりをしてみました。",
        imageSrc: "./images/MQ_1.jfif",
        imageAlt: "MQ_1.jfif",
        link: "#",
    },
    {
        id: 16,
        title: "Discord clone",
        description: "",
        imageSrc: "",
        imageAlt: "",
        link: "#",
    },
    {
        id: 17,
        title: "Read ELF",
        description: "ELF ファイルの情報を取得するツール",
        imageSrc: "./images/ReadELF_1.png",
        imageAlt: "ReadELF_1.png",
        link: "https://github.com/pond-e/color-readelf",
    },    
    {
        id: 18,
        title: "JS 簡易難読化器",
        description: "JavaScript を難読化するツール",
        imageSrc: "./images/JS_Obfuscator_1.png",
        imageAlt: "JS_Obfuscator_1.png",
        link: "https://github.com/pond-e/ObfuLiteralJS",
    },
    {
        id: 8,
        title: "2Dアクションゲーム Gem",
        description: "",
        imageSrc: "./images/game_gem.png",
        imageAlt: "game_gem.png",
        link: "https://unityroom.com/games/kusoge-d",
    },
    {
        id: 9,
        title: "mod計算体験ゲーム Siv3D",
        description: "",
        imageSrc: "./images/web_ceasar_cipher_game_1.png",
        imageAlt: "web_ceasar_cipher_game_1.png",
        link: "https://pond-e.github.io/web_ceasar_cipher_game/cipher_ceasar_game.html",
    },
]

// ワークカードコンポーネント
const WorkCard: FC<{ workData: WorkData }> = ({ workData }) => {
    const cardContent = (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden">
                <img 
                    className="works-img object-cover w-full h-full" 
                    src={workData.imageSrc} 
                    alt={workData.imageAlt} 
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{workData.title}</h2>
                <p className="text-gray-600 truncate">
                    {truncateText(workData.description, MAX_DESCRIPTION_LENGTH)}
                </p>
            </div>
        </div>
    )

    return workData.link !== "#" ? (
        <a target="_blank" href={workData.link} className="block hover:opacity-90 transition-opacity">
            {cardContent}
        </a>
    ) : cardContent
}

// メインコンポーネント
const WorksPage: FC = () => {
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">作成物一覧</h1>
            <div className="space-y-4">
                {worksData.map((work) => (
                    <WorkCard
                        key={work.id}
                        workData={work}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorksPage
