import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WProcess } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={1} />
        <WProcess />
        <Footer />
    </>;
}