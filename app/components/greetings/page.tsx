'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Greetings() {
    const { t, language } = useLanguage();
    const greetings = useMemo(() => t.greetings.cards, [language]);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Используем setTimeout для того, чтобы DOM успел обновиться после смены языка
        const timeoutId = setTimeout(() => {
            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                                setActiveIndex(index);
                            }
                        });
                    },
                    {
                        threshold: [0, 0.5, 1],
                        rootMargin: '-20% 0px -20% 0px',
                    }
                );

                observer.observe(card);
                observers.push(observer);
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observers.forEach((observer) => observer.disconnect());
        };
    }, [language]);

    return (
        <section className="relative">
            {greetings.map((greeting, index) => (
                <div
                    key={`${greeting.emoji}-${index}`}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className="min-h-screen snap-start snap-always flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 relative bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200"
                >
                    <div
                        className={`greeting-card-fullscreen ${
                            activeIndex === index ? 'greeting-card-active' : ''
                        }`}
                    >
                        <div className="bg-gradient-to-br from-pink-100/95 via-purple-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-4xl w-full flex flex-col items-center text-center border border-pink-200/50">
                            <div className="text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8 animate-bounce-slow">
                                {greeting.emoji}
                            </div>
                            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#f4437f] mb-6 md:mb-8">
                                {greeting.title}
                            </h3>
                            <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-[#555] leading-relaxed">
                                {greeting.message}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
