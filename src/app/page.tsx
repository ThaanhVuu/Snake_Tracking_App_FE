import {Header} from "@/components/Header";
import {HomePage} from "@/section/HomePage";
import {Tracking} from "@/section/Tracking";
import {Library} from "@/section/Library";
import {AboutUs} from "@/section/Footer";

export default function Home() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <HomePage/>
                <Tracking/>
                <Library/>
            </main>
            <footer>
                <AboutUs/>
            </footer>
        </div>
    );
}
