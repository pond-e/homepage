import { useState } from "react"
import { Link } from 'react-router-dom';

function Header() {
    const [mobileMenuFlag, setMobilemenuFlag] = useState(false);
    
    const handleMobileMenu = () => {
        setMobilemenuFlag(!mobileMenuFlag);
    }

    return (
        <>
            <header className="bg-white shadow-md relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-4 flex justify-between items-center">
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <Link to="/" className="text-2xl sm:text-3xl font-bold text-blue-500">Pond</Link>
                        <div className="md:hidden">
                            <button id="mobile-menu-button" className="text-gray-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleMobileMenu}>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/works" className="text-xl text-gray-600 hover:text-red-500">作成物</Link>
                        <Link to="/articles" className="text-xl text-gray-600 hover:text-red-500">記事</Link>
                    </nav>
                    <div id="mobile-menu" style={{ display: mobileMenuFlag ? "" : "none"}} className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-10">
                        <div className="px-4 py-4 flex flex-col space-y-4">
                            <Link to="/works" className="block text-xl text-gray-600 hover:text-red-500">作成物</Link>
                            <Link to="/articles" className="block text-xl text-gray-600 hover:text-red-500">記事</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header