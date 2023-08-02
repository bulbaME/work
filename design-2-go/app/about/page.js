import { Button, ButtonDark } from "../_modules/buttons";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { Paragraph, ParagraphL, ParagraphLight, ParagraphLightL } from "../_modules/paragraph";
import Statistics from "../_modules/statistics";

export default function Main() {
    return <>
        <Header page={4} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-4xl sm:text-6xl font-semibold'>About Our Design Company</div>
        
        <Paragraph img='/img/7.jpg' title='Our Passion for Design' text="At Design2Go, we are driven by our passion for design. We believe in the power of visual communication to create meaningful connections and make a lasting impact. With our team of talented designers and creative thinkers, we are dedicated to delivering exceptional design solutions that exceed our clients' expectations." />
        <ParagraphLightL img='/img/8.jpg' title='Our Creative Approach' text="Creativity is at the core of everything we do. We embrace innovation and strive to push the boundaries of design to deliver unique and captivating visuals. Our team takes a collaborative approach, working closely with clients to understand their goals, values, and target audience. By combining our expertise with your vision, we create designs that truly reflect your brand identity and captivate your audience." />
        <div className='w-full bg-gray-900 p-10 mb-16'>
            <div className='max-w-3xl m-auto mb-10 text-white text-xl text-center'>{"Unlock the potential of your brand with our comprehensive range of design services. From captivating website designs to mesmerizing visual identities and engaging user interfaces, we offer tailored solutions that will elevate your digital presence. Explore our services and discover how our expertise can bring your vision to life, leaving a lasting impression on your audience. Take the first step towards design excellence and unleash the true power of your brand."}</div>
            <div className='w-fit m-auto'>
                <Button text='See our services' route='/services' />
            </div>
        </div>
        <Statistics />
        <Footer />
    </>;
}