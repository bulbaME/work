import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, WCta, WServices, WTimeline } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='max-w-5xl m-auto text-center sm:p-14 p-6'>
            <div className='sm:text-4xl text-2xl font-bold'>
                {"Our Design Solutions"}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-4'>
                {"Elevate Your Brand's Presence."}
            </div>
        </div>
        <P1L img='6' title="Elevate Your Brand's Presence" text="Welcome to our Services page, where creativity and innovation converge to elevate your brand's presence to new heights. Our design solutions go beyond aesthetics; they tell your brand's unique story and inspire meaningful connections with your audience. Whether it's captivating web design, striking brand identity, or immersive user experiences, our passion for crafting designs that inspire and engage shines through every project. Discover how our expertise can ignite your brand's potential and make a lasting impact in the competitive landscape. Let's create something remarkable together." slogan="Crafting Designs that Inspire and Engag" />
        <WServices />
        <WTimeline />
        <WCta title='Drive Your Brand Forward' cta='Contact us' route='/contact' text="Designs with a purpose – that's our commitment to your success. Let's create experiences that drive results and propel your brand forward. Our team of visionaries, strategists, and designers will collaborate to craft designs that inspire action, turning your audience into loyal advocates. Whether it's captivating packaging that leaps off the shelves or intuitive user interfaces that drive engagement, our designs will fuel your brand's growth and create a meaningful impact." />
        <Footer />
    </>;
}