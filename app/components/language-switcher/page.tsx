'use client';

import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'kk' as const, name: 'Қаз' },
        { code: 'ru' as const, name: 'Рус' },
        { code: 'en' as const, name: 'Eng' },
    ];

    const currentLang = languages.find(lang => lang.code === language) || languages[0];

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Кнопка-капелька */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`language-droplet group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-rose-400 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 ${
                    isOpen ? 'scale-110' : ''
                }`}
            >
                <span className="font-playfair font-bold text-white text-lg md:text-xl relative z-10">{currentLang.name}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl language-droplet"></div>
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute bottom-20 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-pink-200/50 p-2 z-50 min-w-[140px] animate-fade-in">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm md:text-base font-playfair font-semibold transition-all duration-300 mb-1 last:mb-0 ${
                                    language === lang.code
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                                        : 'text-[#555] hover:bg-pink-50 hover:text-[#f4437f]'
                                }`}
                            >
                                <span>{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
