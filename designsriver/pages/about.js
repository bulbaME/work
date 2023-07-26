import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P3L, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='w-full bg-1 py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {"Our Story - Where Passion Fuels Creativity"}
            </div>
            <div className='sm:text-2xl text-lg text-center text-c font-bold mt-4'>
                {"DesignsRiver: Inspired by Passion, Driven by Creativity."}
            </div>
        </div>
        <div className='max-w-7xl m-auto p-4 h-fit w-fit'>
            <P3L img='/img/10.jpg' title='About Us' slogan="Fueling Creativity, Powering Brands" text="Welcome to DesignsRiver, a design agency driven by passion and fueled by creativity. We are on a mission to shape extraordinary brands through innovative design solutions that leave a lasting impact. Our journey began with a shared vision to revolutionize the design industry and provide businesses with a platform to stand out in a crowded market." />
            <P3L img='/img/12.jpg' title='Our Story' slogan="A Journey of Design Innovation, Guided by Purpose." text={`DesignsRiver was founded by a team of talented designers and creatives who believed that design had the power to transform brands. Drawing inspiration from the fluidity of rivers that shape landscapes, we embraced the name "DesignsRiver" to signify the transformative nature of our work. With a shared commitment to excellence, we embarked on a path to redefine design standards and empower brands across industries.`} />
            <P3L img='/img/13.jpg' title='Our Approach' slogan="Collaborative Design for Unforgettable Brand Experiences." text="At DesignsRiver, we believe that great design starts with understanding our clients' goals, values, and aspirations. Our approach is rooted in collaboration and tailored to each client's unique needs. We immerse ourselves in your brand's essence, conducting in-depth research to develop designs that resonate with your target audience. Our team of design experts combines creative thinking with strategic insights, ensuring that every design we create drives real results and elevates your brand to new heights." />
            <P3L img='/img/14.jpg' title='Our Promise' slogan="Excellence in Every Pixel, Your Success Our Priority." text="At DesignsRiver, our commitment goes beyond delivering exceptional designs. We promise transparent communication, timely project delivery, and an unparalleled dedication to your success. We are not satisfied until you are thrilled with the final result." />
        </div>
        <WServicesSmall />
        <Cta route='/contact' cta='Contact us today' title='Unleash the Power of Design' text="Transform Your Brand Experience - Start Your Design Journey Now!" />
        <Footer />
    </>;
}