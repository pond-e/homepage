import "./cocoon.css";
export default function h2(message: string) {
    return (
        <h2 className="border-y-4 border-sky-700 text-2xl text-gray-600 font-bold mb-4 py-3">
            {message}
        </h2>
    )
}

export function h3(message: string) {
    return (
        <h3 className="border-b-2 border-sky-700 text-lg text-gray-600 mb-4 pt-4">
            {message}
        </h3>
    )
}

export function greenBox(message: string) {
    return (
        <div className="bg-green-100 p-1.5 rounded-lg flex items-center border-2 border-lime-500">
            <div class="check-container">
                <div class="check-icon"></div>
            </div>
            <div className="ml-2">
                <p className="text-green-700">{message}</p>
            </div>
        </div>
    )
}

export function quote(message: string, cite: string) {
    return (
        <div>
            <blockquote class="custom-quote">
                <p>
                    {message}
                </p>
                <cite>{cite}</cite>
            </blockquote>
        </div>
    )
}

export function DotList({ items, dotColor = "bg-sky-700" }: { items: string[], dotColor?: string }) {
    return (
        <div className="p-8">
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <span className={`mr-3 h-3 w-3 rounded-full ${dotColor}`}></span>
                        <span className="text-gray-800">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function redBox(message: string) {
    return (
        <div className="flex items-start rounded-lg border border-red-300 bg-red-100 p-4">
            <div className="warning-icon-container">
                <svg className="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="currentColor">
                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.198 0l8.584 14.856A3.001 3.001 0 0121 21H3a3.001 3.001 0 01-2.582-4.14L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 6a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-red-800 ml-3">
                {message}
            </p>
        </div>
    )
}

export function TableOfContents({ sections }: { 
    sections: Array<{
        number: string;
        title: string;
        subsections?: Array<{
            number: string;
            title: string;
        }>;
    }>;
}) {
    return (
        <div className="max-w-2xl mx-auto my-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center text-xl font-semibold text-gray-700 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>目次</span>
                </div>

                <ol className="space-y-4">
                    {sections.map((section, index) => (
                        <li key={index} className="space-y-3">
                            <div className="flex items-center">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-sky-700 text-white text-sm font-bold mr-3">
                                    {section.number}
                                </span>
                                <span className="text-gray-800">{section.title}</span>
                            </div>
                            {section.subsections && (
                                <ul className="ml-9 space-y-3">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <li key={subIndex} className="flex items-center">
                                            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-sky-700 text-white text-xs font-semibold mr-3">
                                                {subsection.number}
                                            </span>
                                            <span className="text-gray-700">{subsection.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
