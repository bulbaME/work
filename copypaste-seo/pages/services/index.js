import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P1L, WAppear, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className=''>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-center'>
                    {"Services."}
                </div>
                <div className='sm:text-3xl text-xl font-bold text-g-m text-center mt-4'>
                    {"Services that Speak Success"}
                </div>
            </WAppear></div>
        </div>
        <P1L
            title="Igniting Your Digital Potential"
            slogan="Comprehensive Solutions for Your Digital Journey"
            text="Welcome to our services page, where we unveil a diverse array of solutions designed to empower your brand in the digital landscape. At Copypaste SEO, we understand that a holistic approach to digital marketing is essential for success. From enhancing your online visibility to crafting captivating content, our services are tailored to meet your specific goals."
            img='/img/9.jpg'
        />
        <WServices />
        <P1L
            title="Tailored Brilliance"
            slogan="Customized Approaches"
            text="Your brand is unique, and so should be your digital strategy. Our services are tailor-made to align with your goals and vision. We take pride in offering personalized solutions that empower your brand's narrative in the digital realm."
            img='/img/10.jpg'
        />
        <P1L
            title="Together Towards Triumph"
            slogan="Collaborate for Success"
            text="Whether you're a startup with big dreams or an established entity seeking a fresh perspective, our services are designed to cater to your aspirations. Reach out to us today and let's explore how our expertise can align with your digital vision."
            img='/img/11.jpg'
        />
        <Cta
            title="Get in Touch"
            text="We're here to turn conversations into opportunities and questions into solutions. Whether you have a query, a project idea, or simply want to explore how we can help you thrive in the digital realm, don't hesitate to reach out."
            cta="Let's Ignite Your Digital Success"
            link="/contact"
        />
        <Footer />
    </>;
}