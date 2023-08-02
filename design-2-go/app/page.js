import { Button, ButtonDark } from "./_modules/buttons";
import FeatureCard from "./_modules/feature_card";
import FeedbackCard from "./_modules/feedback_card";
import Footer from "./_modules/footer";
import Header from "./_modules/header";
import { Paragraph, ParagraphLight } from "./_modules/paragraph";
import Statistics from "./_modules/statistics";

export default function Main() {
    return <>
        <Header page={1} />
        <div>
            <div className='absolute overflow-y-clip h-fit w-fit sm:max-h-screen justify-end overflow-clip'>
                <div className='bg-black opacity-50 absolute w-full h-full z-10' />
                <div className='absolute w-full z-20 h-full'>
                    <div className='text-3xl text-center mt-12 sm:mt-24 md:mt-32 2xl:mt-52 sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold w-fit m-auto text-white'>Unleash Your Vision <br /> Captivate the World</div>
                    <div className='m-auto w-fit mt-10 sm:mt-20 sm:mb-10'>
                        <Button text='Reach us today' route='/contact' />
                    </div>
                    <div className='flex max-w-7xl m-auto p-10'>
                        <div className='m-auto text-md sm:text-lg lg:text-xl 2xl:text-2xl text-white'>
                            {"We are a passionate team of designers, developers, and creatives dedicated to crafting visually stunning and user-centric solutions. With a keen eye for aesthetics and a deep understanding of the latest trends, we bring your brand to life through captivating designs that leave a lasting impression. From intuitive user interfaces to seamless user experiences, we go above and beyond to exceed your expectations."}
                        </div>
                    </div>
                </div>
                <img src='/img/1.jpg' className='w-full' />
            </div>
            <img src='/img/1.jpg' className='w-full sm:max-h-screen' />
        </div>
        <div className='text-3xl font-bold m-auto w-fit mt-16 text-white bg-gray-900 p-2 px-3'>Why you should choose us?</div>
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <FeatureCard title='Innovative Design Solutions' text="Our design company is driven by innovation, constantly pushing the boundaries of creativity to deliver unique and captivating designs. We stay ahead of the curve, embracing the latest design trends and technologies to ensure your brand stands out in the digital landscape." />
            <FeatureCard title='User-Centric Approach' text="We prioritize the user experience in every aspect of our design process. By understanding your target audience and their needs, we create intuitive and engaging interfaces that make a lasting impact. Our user-centric approach ensures seamless navigation, clear communication, and optimal usability for your audience." />
            <FeatureCard title='Customized Design Strategy' text="We believe that every brand has its own story to tell. That's why we develop customized design strategies tailored to your specific goals and values. We collaborate closely with you to understand your vision and translate it into visually compelling designs that authentically represent your brand." />
            <FeatureCard title='Responsive and Mobile-First Designs' text="With the increasing dominance of mobile devices, we prioritize responsive and mobile-first design approaches. Our designs adapt seamlessly to different screen sizes and resolutions, ensuring a consistent and engaging experience across all devices. This approach maximizes your reach and ensures your brand is accessible to users on the go." />
            <FeatureCard title='Brand Identity Development' text="We go beyond just creating visually appealing designs; we help you build a strong brand identity. Our design company specializes in creating cohesive brand experiences, from logo design to color palettes, typography, and visual elements. We ensure that every design element aligns with your brand's personality and resonates with your target audience." />
            <FeatureCard title='Collaboration and Communication' text="We believe in the power of collaboration and maintain open lines of communication throughout the design process. We value your input and feedback, working together to refine and perfect the designs until they exceed your expectations. Our transparent and collaborative approach ensures that you are actively involved in every step of the design journey." />
        </div>
        <div className='max-w-3xl text-center font-bold m-auto p-10 text-xl'>{"At our design company, we combine passion, creativity, and technical expertise to deliver design solutions that make an impact. We are committed to helping your brand shine through stunning visuals and unforgettable user experiences. Let us bring your vision to life and elevate your brand to new heights."}</div>
        <div className='w-fit m-auto mb-16'>
            <ButtonDark text='Check out our services' route='/services' />
        </div>
        <Paragraph img='/img/2.jpg' title='Redefining Digital Presence: Crafted with Design Excellence' text="At our design-focused hub, we believe that every pixel matters. We obsess over the details, meticulously crafting visually stunning landing pages that seamlessly blend aesthetics with functionality. Our team of talented designers and developers are passionate about creating digital experiences that not only look beautiful but also deliver exceptional user experiences. We understand the importance of a strong first impression, and our mission is to help you make a statement in the crowded digital world. Step into our world and let us redefine what's possible for your online presence."  />
        <div className='w-fit m-auto mt-16 mb-10'>
            <Statistics />
        </div>
        <div className='w-full bg-gray-900 p-10 mb-16'>
            <div className='max-w-3xl m-auto mb-10 text-white text-xl text-center'>{"Unlock the potential of your brand with our comprehensive range of design services. From captivating website designs to mesmerizing visual identities and engaging user interfaces, we offer tailored solutions that will elevate your digital presence. Explore our services and discover how our expertise can bring your vision to life, leaving a lasting impression on your audience. Take the first step towards design excellence and unleash the true power of your brand."}</div>
            <div className='w-fit m-auto'>
                <Button text='See our services' route='/services' />
            </div>
        </div>
        <ParagraphLight img='/img/3.jpg' title='Design Excellence Unleashed: Elevate Your Digital Presence' text="Welcome to our design company, where creativity flourishes, and design excellence is our guiding principle. We specialize in crafting visually stunning and immersive digital experiences that captivate and inspire. With a keen eye for aesthetics, a passion for innovation, and a dedication to user-centric design, we empower businesses and individuals to elevate their digital presence to new heights. Our team of talented designers, developers, and strategists collaborates closely with you to understand your unique vision and goals. From intuitive user interfaces to seamless user experiences, we combine cutting-edge technology with artistic expertise to deliver bespoke solutions that drive growth and leave a lasting impact. Discover the power of design as we unleash its potential to transform your brand and connect with your audience in meaningful ways. Welcome to a world where design excellence knows no limits." />
        <div className='text-3xl font-bold m-auto w-fit mt-16 text-white bg-gray-900 p-2 px-3'>Our feedback</div>
        <div className='mt-10 w-fit m-auto'>
            <FeedbackCard img='/img/4.jpg' author='Sarah Thompson, CEO' text="I cannot recommend Design2Go highly enough! Their team of talented designers and exceptional customer service made our experience truly remarkable. They listened attentively to our needs, brought our vision to life, and delivered designs that surpassed our expectations. The attention to detail and creativity in their work is unmatched. We are thrilled with the final results and look forward to working with Design2Go on future projects." />
        </div>
        <div className='w-fit m-auto'>
            <FeedbackCard img='/img/5.jpg' author='John Anderson, Marketing Director' text="Working with Design2Go was a game-changer for our brand. Their team has an incredible ability to understand the essence of a brand and translate it into visually stunning designs. The level of professionalism, timely communication, and commitment to delivering high-quality work were truly impressive. We received numerous compliments on our new branding, all thanks to the exceptional work of Design2Go. We wholeheartedly recommend their services to anyone in need of top-notch design solutions." />
        </div>
        <div className='w-fit m-auto'>
            <FeedbackCard img='/img/6.jpg' author='Emily Roberts, Founder' text="Choosing Design2Go for our design needs was the best decision we made. From the initial consultation to the final product, their team demonstrated an unwavering dedication to excellence. Their creativity and innovative approach brought a fresh perspective to our designs, making them stand out in a competitive market. The level of professionalism, attention to detail, and seamless project management left us thoroughly impressed. We are grateful for their outstanding work and would not hesitate to work with Design2Go again in the future." />
        </div>
        <Footer />
    </>;
}