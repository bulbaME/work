import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, Paragraph, WidgetFeaturesSmall, WidgetServices, WidgetServicesSmall, WidgetWhyUs } from "@/modules/widgets";

export default function page() {
    return <>
        <Header page={1} />
        <div className='max-w-7xl m-auto background-1 p-4 sm:p-[4.5rem] text-white'>
            <div className='text-lg sm:text-3xl font-bold'>{"Transforming Ideas into Captivating Designs"}</div>
            <div className='text-3xl sm:text-6xl font-bold mt-4 mb-12'>{"Crafting Visual Experiences:"}<br />{"DiscountDesigner"}</div>
            <div className='text-xl sm:text-4xl font-medium'>{"Welcome to DiscountDesigner, where creativity meets innovation. We are a leading design company dedicated to bringing your vision to life through stunning and immersive designs. From captivating logos to engaging websites, our team of talented designers combines artistic flair with technical expertise to deliver exceptional results that make your brand stand out."}</div>
        </div>
        <WidgetFeaturesSmall />
        <WidgetWhyUs />
        <Cta route='/contact' text="Get a Free Design Consultation Today!" />
        <Paragraph route='/services' img='/img/3.jpg' title='Elevate Your Brand with Our Creative Solutions' route_text='Services Offered by DiscountDesigner' text="At DiscountDesigner, we offer a comprehensive range of design services designed to take your brand to new heights. Our expertise spans across various disciplines, including web design, graphic design, branding, and more. Whether you need a visually stunning website that engages users, eye-catching print materials that grab attention, or a cohesive brand identity that leaves a lasting impression, our team has the skills and creativity to bring your vision to life. With a customized approach and unwavering commitment to quality, we ensure that our designs not only meet but exceed your expectations. Discover the full range of services we offer and let us help you make a bold statement in the market." />
        <Paragraph route='/contact' img='/img/4.jpg' title='Partner with DiscountDesigner for Exceptional Design and Unmatched Support' route_text='Get Started on Your Design Journey' text="Choosing the right design company is crucial for the success of your brand, and at DiscountDesigner, we go above and beyond to ensure your satisfaction. We pride ourselves not only on our creative expertise but also on our exceptional client support. From the initial consultation to project completion and beyond, we maintain open lines of communication, keeping you informed and involved throughout the entire design process. We value your input, understand your goals, and strive to deliver designs that surpass your expectations. Experience the difference of working with a design company that is dedicated to your success and ready to go the extra mile for you." />
        <WidgetServicesSmall />
        <div className='text-white font-medium max-w-5xl my-36 m-auto text-2xl sm:text-4xl p-4'>
            {"By choosing our design company, you can leverage our creative expertise, personalized approach, commitment to quality, and client-centric focus to elevate your brand and achieve your business objectives."}
        </div>
        <Cta text="Contact Us to Discuss Your Design Needs" route='/contact' />
        <Footer />
    </>;
}