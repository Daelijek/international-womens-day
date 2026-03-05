import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./globals.css";

const playfairDisplay = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair",
    display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata: Metadata = {
    title: "С 8 марта!",
    description: "Поздравление с Международным женским днём",
    icons: {
        icon: '/flower.png',
        shortcut: '/flower.png',
        apple: '/flower.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${playfairDisplay.variable} ${cormorantGaramond.variable}`}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
