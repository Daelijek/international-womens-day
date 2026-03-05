'use client';

import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    const flowers = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${(i * 7) % 100}%`,
        delay: `${i * 0.5}s`,
        duration: `${8 + (i % 5)}s`,
        size: `${20 + (i % 3) * 10}px`,
        emoji: ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '💐'][i % 7],
    }));

    return (
        <div className="relative px-4 sm:px-6 md:px-10 py-5 flex flex-col items-center justify-center gap-4 min-h-screen snap-start snap-always overflow-hidden bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200">
            {flowers.map((flower) => (
                <div
                    key={flower.id}
                    className="flower-fall"
                    style={{
                        left: flower.left,
                        animationDelay: flower.delay,
                        animationDuration: flower.duration,
                        fontSize: flower.size,
                    }}
                >
                    {flower.emoji}
                </div>
            ))}

            {Array.from({ length: 8 }, (_, i) => ({
                id: `slow-${i}`,
                left: `${(i * 12 + 5) % 100}%`,
                delay: `${i * 0.8}s`,
                duration: `${12 + (i % 4)}s`,
                size: `${15 + (i % 2) * 8}px`,
                emoji: ['🌺', '🌷', '🌹', '🌻'][i % 4],
            })).map((flower) => (
                <div
                    key={flower.id}
                    className="flower-fall-slow"
                    style={{
                        left: flower.left,
                        animationDelay: flower.delay,
                        animationDuration: flower.duration,
                        fontSize: flower.size,
                    }}
                >
                    {flower.emoji}
                </div>
            ))}

            <div className="relative z-10 px-4 flex flex-col items-center justify-center gap-4">
                <h1 className="font-playfair text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#f4437f] drop-shadow-lg tracking-wide">
                    {t.hero.title}
                </h1>
                <p className="font-cormorant text-xl md:text-lg lg:text-xl xl:text-2xl text-center text-[#444444] max-w-3xl leading-relaxed drop-shadow-sm font-light">
                    {t.hero.description}
                </p>
            </div>
        </div>
    )
}