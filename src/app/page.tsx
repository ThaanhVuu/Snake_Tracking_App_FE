import {Header} from "@/components/Header";
import {HomePage} from "@/section/HomePage";
import {Tracking} from "@/section/Tracking";

export default function Home() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <HomePage/>
                <Tracking/>
            </main>
        </div>
    );
}
