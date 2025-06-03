import React from 'react';
import { Link } from 'react-router-dom'; // Link コンポーネントをインポート
import HeroView from './HeroView';

function MainPage() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <HeroView />
            <main className="container mx-auto px-4 py-8 flex justify-center">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex items-center space-x-4 py-20">
                        <div className="w-48 h-48"><img className="smc" src="./images/computer_single_board.png" alt="computer_single_board.png" /></div>
                        <div>
                            <h2 className="ml-4 text-3xl text-red-500 font-bold">作成物</h2>
                            <p className="mt-6 ml-4 text-gray-600 text-base">組み込みからWebまで幅広く開発をしています</p>
                            <Link to="/works" onClick={scrollToTop}>
                                <button className="mt-4 ml-4 bg-gray-200 text-gray-700 text-base px-4 py-3 rounded transition duration-300 hover:bg-blue-500 hover:text-white">作成物一覧を見る</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 py-20">
                        <div>
                            <h2 className="text-3xl text-red-500 font-bold">記事</h2>
                            <p className="mt-6 text-gray-600 text-base">QiitaやZennに技術記事の投稿をしています</p>
                            <Link to="/articles" onClick={scrollToTop}>
                                <button className="mt-4 bg-gray-200 text-gray-700 text-base px-4 py-3 rounded transition duration-300 hover:bg-blue-500 hover:text-white">記事一覧を見る</button>
                            </Link>
                        </div>
                        <div className="w-48 h-48"><img className="blog-icon" src="./images/website_blog.png" alt="blog icon" /></div>
                    </div>
                    <div className="flex items-center space-x-4 py-20">
                        <div className="w-48 h-48"><img className="icon" src="./images/icon-ink.svg" alt="icon" /></div>
                        <div>
                            <h2 className="text-3xl text-red-500 font-bold">課外活動</h2>
                            <p className="mt-6 text-gray-600 text-base">高専や大学では積極的に課外活動をしていました</p>
                            <p className="text-gray-600 text-base">その内容や受賞歴についてリンク先で紹介しています</p>
                            <Link to="/affiliations" onClick={scrollToTop}>
                                <button className="mt-4 bg-gray-200 text-gray-700 text-base px-4 py-3 rounded transition duration-300 hover:bg-blue-500 hover:text-white">課外活動歴一覧を見る</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage
