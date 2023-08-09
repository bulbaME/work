import { MainBanner } from "./_modules/banner";
import { ButtonL } from "./_modules/buttons";
import Footer from "./_modules/footer";
import Header from "./_modules/header";
import { FeaturesWidget, Paragraph, ParagraphL, ServicesMini, Testimonials } from "./_modules/widgets";

export default function Main() {
    return <>
        <Header page={1} />
        <MainBanner />
        <div className='max-w-7xl m-auto'>
            <Paragraph img='/img/1.jpg' route_text='Start Your Creative Journey Now!' route='/services' title='Unlock Your Creative Potential' text="Welcome to our design landing page, where creativity knows no bounds. Discover a world of endless possibilities as you unlock your creative potential with our innovative design solutions. Whether you're a budding artist, an established business, or simply someone with a passion for aesthetics, our services cater to all your design needs. From captivating branding solutions to engaging website development and compelling graphic design, we're here to transform your vision into reality. Are you ready to embark on a design journey like no other? Join us today and unleash your creative spirit!" />
            <ParagraphL img='/img/2.jpg' route_text='Transform Your Brand Identity!' route='/services' title='Elegant Branding Solutions: Make Your Mark' text="Craft a unique brand identity that leaves a lasting impression with our elegant branding solutions. Our team of expert designers will meticulously design a captivating logo that encapsulates the essence of your brand. With our comprehensive brand guidelines, you'll establish a consistent visual language across all your marketing materials. Elevate your professionalism with our meticulously designed stationary items that reflect your brand's personality. Leave a mark on the world with a brand that speaks volumes. Explore our branding solutions today!" />
            <Paragraph img='/img/3.jpg' route_text='Ignite Your Online Presence!' route='/contact' title='Engaging Website Development: Captivate Your Audience' text="In a digital world where first impressions matter, captivate your audience with our engaging website development services. Our team of skilled designers and developers will create a visually stunning website that seamlessly blends aesthetics with functionality. Whether you're starting from scratch or looking to revamp your existing website, we'll bring your online presence to life. Optimize your website for search engines with our search engine optimization services and watch your visibility soar. Join us on the digital stage and make your mark with a website that leaves an indelible impression." />
        </div>
        <div className='max-w-7xl m-auto my-36 mb-12'>
            <FeaturesWidget />
        </div>
        <div className='background-2 py-32 pb-28'>
            <div className='text-center m-auto w-fit text-white font-bold text-4xl'>
                Let&apos;s Bring Your Vision to Life
                <div className='my-4' /> 
                <ButtonL route='/contact' text="Contact us today" />
            </div>
        </div>
        <div className='max-w-4xl m-auto my-36 mt-12'>
            <ServicesMini />
            <Paragraph route='/contact' img='/img/5.jpg' route_text='Unlock Your Design Potential. Contact Us Today!' title='Discover Our Exceptional Design Services' text="Welcome to our design agency, where creativity knows no bounds. We offer a comprehensive range of exceptional design services that cater to all your creative needs. Whether you're looking for captivating branding solutions, engaging website development, or compelling graphic design, our talented team is here to bring your vision to life. With a deep passion for design and a commitment to delivering top-notch results, we take pride in our ability to create designs that leave a lasting impact. Explore our diverse range of services and unlock the full potential of your brand. Contact us today to discuss your design requirements and let us elevate your visual presence to new heights." />
        </div>
        <Testimonials />
        <Footer />
    </>;
}