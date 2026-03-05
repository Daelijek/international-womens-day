'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Intro() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        // Показываем контент через небольшую задержку
        setTimeout(() => {
            setShowContent(true);
        }, 300);

        // Начинаем плавное исчезновение через 4 секунды
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 4000);

        // Полностью скрываем intro через 5 секунд (после начала fade out)
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200 flex items-center justify-center transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Падающие цветочки на фоне */}
            {Array.from({ length: 20 }, (_, i) => (
                <div
                    key={i}
                    className="absolute text-3xl md:text-4xl opacity-30"
                    style={{
                        left: `${(i * 5) % 100}%`,
                        top: `${-10 + (i * 3) % 20}%`,
                        animation: `fall-intro ${3 + (i % 3)}s linear infinite`,
                        animationDelay: `${i * 0.2}s`,
                    }}
                >
                    {['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💐'][i % 7]}
                </div>
            ))}

            {/* Основной контент */}
            <div className={`relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ${showContent && !isFadingOut ? 'opacity-100 scale-100' : isFadingOut ? 'opacity-0 scale-95' : 'opacity-0 scale-90'}`}>
                {/* Логотип компании */}
                <div className="mb-6 md:mb-8 animate-fade-in-up">
                    <img
                        src="/logo_bg.png"
                        alt="beyimTech"
                        className="h-16 md:h-20 lg:h-24 max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain drop-shadow-lg"
                    />
                </div>

                {/* Информация о разработчиках */}
                <div className="mb-6 md:mb-8 animate-fade-in-up-delayed">
                    <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-center font-bold text-[#555]">
                        {t.intro.from === 'BeyimTech' ? (
                            <>
                                <span style={{ color: '#55bbeb' }} className="font-playfair font-bold">BeyimTech</span> {t.intro.developers}
                            </>
                        ) : (
                            <>
                                {t.intro.from} <span style={{ color: '#55bbeb' }} className="font-playfair font-bold">{t.intro.developers}</span>
                            </>
                        )}
                    </p>
                </div>

                {/* Большой заголовок */}
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-center text-[#f4437f] mb-8 md:mb-10 animate-fade-in-up-delayed-2 drop-shadow-2xl">
                    {t.hero.title}
                </h1>
                
                {/* Декоративные элементы */}
                <div className="flex items-center gap-4 md:gap-6 animate-fade-in-up-delayed-3">
                    <div className="text-4xl md:text-5xl lg:text-6xl animate-bounce-slow" style={{ animationDelay: '0s' }}>💐</div>
                    <div className="text-5xl md:text-6xl lg:text-7xl animate-bounce-slow" style={{ animationDelay: '0.2s' }}>🌹</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🌸</div>
                </div>
            </div>
        </div>
    );
}
