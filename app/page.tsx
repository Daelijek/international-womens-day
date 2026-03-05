import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Greetings from "./components/greetings/page";
import Generator from "./components/generator/page";
import LanguageSwitcher from "./components/language-switcher/page";
import Intro from "./components/intro/page";

export default function Home() {
    return (
        <>
            <Intro />
            <main className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Header />
                <Hero />
                <Greetings />
                <Generator />
                <LanguageSwitcher />
            </main>
        </>
    );
}
