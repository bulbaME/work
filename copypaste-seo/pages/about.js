import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P1L, WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className=''>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-center'>
                    {"About Us."}
                </div>
                <div className='sm:text-3xl text-xl font-bold text-g-m text-center mt-4'>
                    {"Crafting Success Stories"}
                </div>
            </WAppear></div>
        </div>
        <P1L
            title="Our Story"
            slogan="Crafting Digital Excellence, One Click at a Time"
            img='/img/4.jpg'
            text="At Copypaste SEO, we're not just a digital marketing agency – we're a team of enthusiasts, strategists, and creators who believe in the power of digital transformation. Our journey began with a shared passion for helping businesses flourish in the online realm. From humble beginnings, we've evolved into a powerhouse of expertise, crafting success stories and igniting brands' digital potential."
        />
        <P1L 
            title="Our Approach"
            slogan="Where Creativity Meets Analytics"
            img='/img/8.jpg'
            text="Our approach is anchored in innovation, collaboration, and measurable results. We thrive on data-driven strategies that propel brands forward. With each project, we blend creativity and analytical prowess, tailoring solutions that resonate with your unique goals."
        />
        <P1L 
            title="Our Team"
            slogan="Teamwork, Expertise, Excellence"
            img='/img/6.jpg'
            text="Meet the minds behind Copypaste SEO. Our team comprises passionate individuals from diverse backgrounds, all united by a common goal – to see your brand thrive in the digital landscape. With a finger on the pulse of the ever-evolving digital world, we're committed to staying ahead of trends, algorithms, and technologies."
        />
        <P1L 
            title="Our Vision"
            slogan="Empowering Brands, Elevating Digital Visions"
            img='/img/7.jpg'
            text="Our vision extends beyond just increasing website traffic or search rankings. We envision a future where your brand's digital presence is a true reflection of its essence – engaging, impactful, and influential. Our mission is to guide you through this transformative journey, turning clicks into conversions and ideas into reality."
        />
        <P1L 
            title="Join the Journey"
            slogan="Let's Paint the Digital Future Together"
            img='/img/5.jpg'
            text="As we continue to grow, we invite you to be a part of our story. Let's embark on a digital voyage together, where your aspirations become our goals, and your success is our triumph. Join us in shaping a digital landscape that goes beyond boundaries, resonates with your audience, and paints a vivid picture of your brand's potential."
        />
        <Cta
            title='Collaborate for Excellence'
            text="Your journey towards digital excellence begins with a single step – reaching out. Our team is eager to understand your unique goals and design tailored strategies that align with your aspirations. Let's collaborate to craft your digital success story."
            cta="Collaborate with Us for Digital Excellence"
            link='/contact'
        />
        <Footer />
    </>;
}