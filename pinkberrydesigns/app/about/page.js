import { Banner } from "../_modules/banner";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { ServicesMini } from "../_modules/widgets";
import { Paragraph, ParagraphL } from "../_modules/widgets";

export default function Main() {
    return <>
        <Header page={4} />
        <Banner title='About us' text="Empowering Creativity, Shaping Design Futures!" />
        <div className='max-w-7xl m-auto p-4'>
            <Paragraph img='/img/6.jpg' route='/contact' route_text="Let's Create Something Extraordinary Together!" title='Our Vision: Transforming Ideas into Artistic Realities' text="At our design agency, our vision is clear - to transform ideas into artistic realities. We believe in the power of design to make a lasting impact and shape the world around us. With our team of skilled designers and creatives, we strive to push the boundaries of creativity and deliver exceptional design solutions that resonate with our clients and their target audience. Join us on this journey of artistic transformation and let's bring your ideas to life in ways you've never imagined." />
            <ParagraphL img='/img/7.jpg' route='/contact' route_text="Ignite Your Design Journey with Us Today!" title='Our Mission: Inspiring and Empowering through Design' text="Our mission is to inspire and empower individuals and businesses through the transformative power of design. We aim to create visually captivating and impactful designs that not only elevate brand identities but also foster connections and spark emotions. By combining artistic innovation with strategic thinking, we enable our clients to stand out in competitive markets and leave a lasting impression. Experience the transformative effects of our design solutions and let us be the catalyst for your success." />
        </div>
        <div className='max-w-4xl m-auto my-36 mt-12'>
            <ServicesMini />
            <Paragraph route='/contact' img='/img/5.jpg' route_text='Unlock Your Design Potential. Contact Us Today!' title='Discover Our Exceptional Design Services' text="Welcome to our design agency, where creativity knows no bounds. We offer a comprehensive range of exceptional design services that cater to all your creative needs. Whether you're looking for captivating branding solutions, engaging website development, or compelling graphic design, our talented team is here to bring your vision to life. With a deep passion for design and a commitment to delivering top-notch results, we take pride in our ability to create designs that leave a lasting impact. Explore our diverse range of services and unlock the full potential of your brand. Contact us today to discuss your design requirements and let us elevate your visual presence to new heights." />
        </div>
        <div className='max-w-7xl m-auto p-4'>
            <Paragraph img='/img/8.jpg' route='/contact' route_text="Let's Begin Your Design Journey Today!" title='Our Approach: Collaborative, Personalized, and Results-Driven' text="Our approach to design is collaborative, personalized, and results-driven. We believe that the best designs are born out of a deep understanding of our clients' goals and aspirations. Through close collaboration, we listen attentively to your vision, preferences, and objectives. We then infuse our expertise and creativity to craft tailor-made designs that align with your unique identity. Our focus is not just on aesthetics but also on delivering tangible results that help you achieve your business objectives." />
            <ParagraphL img='/img/9.jpg' route='/contact' route_text="Experience Design Excellence with Our Team!" title='Our Team: Passionate Designers Committed to Excellence' text="Our team comprises a passionate group of designers who are truly dedicated to their craft. With a blend of experience, talent, and a keen eye for detail, they consistently deliver designs of exceptional quality. Our designers stay at the forefront of design trends and technologies, continuously expanding their skills and knowledge. We take pride in our team's commitment to excellence and their ability to bring ideas to life through thoughtful and impactful designs." />
        </div>
        <Footer />
    </>;
}