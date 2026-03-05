'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { emojis } from '../../lib/translations';

export default function Generator() {
    const { t } = useLanguage();

    const congratulations = useMemo(() => {
        return t.generator.congratulations.map((text, index) => ({
            emoji: emojis[index % emojis.length],
            text,
        }));
    }, [t]);

    const [currentCongratulation, setCurrentCongratulation] = useState<typeof congratulations[0] | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setCurrentCongratulation(null);
    }, [t]);

    const generateCongratulation = () => {
        setIsAnimating(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * congratulations.length);
            setCurrentCongratulation(congratulations[randomIndex]);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="min-h-screen snap-start snap-always flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 relative bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200">
            <div className="max-w-4xl w-full flex flex-col items-center gap-8 md:gap-12">
                <div className="text-center mb-4">
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#f4437f] mb-4">
                        {t.generator.title}
                    </h2>
                    <p className="font-cormorant text-xl md:text-2xl text-[#555]">
                        {t.generator.description}
                    </p>
                </div>

                <button
                    onClick={generateCongratulation}
                    className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white font-playfair text-xl md:text-2xl lg:text-3xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 transform active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <span>{t.generator.button}</span>
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </button>

                {currentCongratulation && (
                    <div
                        className={`congratulation-card ${isAnimating ? 'congratulation-card-hiding' : 'congratulation-card-showing'
                            }`}
                    >
                        <div className="bg-gradient-to-br from-pink-100/95 via-purple-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 w-full flex flex-col items-center text-center border border-pink-200/50">
                            <div className="text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8 animate-bounce-slow">
                                {currentCongratulation.emoji}
                            </div>
                            <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-[#555] leading-relaxed">
                                {currentCongratulation.text}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
