'use client';

import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
    const { t } = useLanguage();

    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-pink-50 via-purple-50/80 to-rose-50 backdrop-blur-sm px-4 sm:px-4 md:px-8 lg:px-10 py-4 sm:py-3 md:py-4 fixed top-0 left-0 right-0 z-50 shadow-md border-b border-pink-100/50">
            <img
                className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flower-float object-contain transition-transform hover:scale-110 flex-shrink-0"
                src="/flower.png"
                alt={t.header.flower}
            />
            <div className="flex items-center justify-center flex-1 px-2">
                <img
                    className="h-8 sm:h-7 md:h-8 lg:h-9 xl:h-10 max-w-[140px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] object-contain transition-transform hover:scale-105"
                    src="/logo_bg.png"
                    alt={t.header.logo}
                />
            </div>
            <img
                className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flower-float-delayed object-contain transition-transform hover:scale-110 flex-shrink-0"
                src="/flower.png"
                alt={t.header.flower}
            />
        </header>
    )
}