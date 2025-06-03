function AffiliationsPage() {
    return (
        <div className="flex  justify-center"> 
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">課外活動</h1>
                <div className="border-t border-gray-300 mt-4 pt-4">
                    <h2 className="text-lg font-semibold mb-2">受賞歴</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>種子島ロケットコンテスト CanSat部門 敢闘賞</li>
                        <li>全国高専 ディープラーニング コンテスト 2022 本戦 5位</li>
                    </ul>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-4">
                    <h2 className="text-lg font-semibold mb-2">所属歴</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>筑波大学 宇宙技術プロジェクト(STEP) (2024.04 ~ 2025.03)</li>
                        <li>筑波大学 TPC (2024.04 ~ 現在)</li>
                        <li>明石高専 BizTechプロジェクト (2022.10 ~ 2026.03)</li>
                        <li>明石高専 情報工学研究部 (2019.04 ~ 2022.03)</li>
                        <li>明石高専 宇宙工学研究部 (2019.04 ~ 2022.03)</li>
                        <li>明石高専 GCC (2019.04 ~ 2021.03)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AffiliationsPage;