import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={2} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='sm:text-5xl text-3xl font-extrabold'>
                        {"About Us"}
                    </div>
                    <div className='sm:text-3xl text-xl'>
                        {"Exploring the Heartbeat of Innovation that Drives Us Forward"}
                    </div>
                </WAppear>
            </div>
        </div>
        <P1L img='/img/7.jpg' title='Our Story' text="At 2 Days Design, creativity isn't just a concept – it's our driving force. Our journey began with a vision to redefine the design landscape, infusing each pixel and brushstroke with boundless imagination. Established by a team of passionate designers, our company is built on the belief that great design has the power to transform ideas into visual masterpieces that resonate with hearts and minds. From the outset, we've strived to bring innovation and swiftness to the forefront, crafting designs that not only capture attention but also tell compelling stories." />
        <P1R img='/img/6.jpg' title='Meet the Team' text="Behind every design, there's a team that lives and breathes creativity. We're not just designers; we're artists, storytellers, and dreamers who come together to turn your ideas into stunning realities. With diverse backgrounds and a shared passion for aesthetics, our team thrives on collaboration and the excitement of bringing fresh perspectives to every project. We believe in the power of open communication and a personal touch, ensuring that your voice is heard in every design decision we make." />
        <P1L img='/img/5.jpg' title='Our Philosophy' text="At the heart of our philosophy lies a commitment to excellence and innovation. We're not content with creating designs that are merely visually pleasing; we aim to create designs that make an impact, designs that stir emotions and initiate conversations. Our approach is rooted in understanding your brand, your audience, and your aspirations. From brand identity overhauls to web presence amplification, every design we craft is a testament to our dedication to turning your vision into a compelling reality." />
        <P1R img='/img/8.jpg' title='Design Beyond Boundaries' text="Our journey is one of pushing boundaries, embracing challenges, and continuously evolving. We don't just follow trends; we anticipate them and infuse our designs with forward-thinking creativity. The result? Designs that stand out, designs that are timeless yet reflective of the latest industry shifts. With every project, we embark on a mission to elevate your brand, to make it resonate in a crowded marketplace, and to create experiences that linger in the minds of your audience." />
        <P1L img='/img/9.jpg' title='Welcome to 2 Days Design' text="We're more than just a design company – we're your partners in turning ideas into artistry. Our story is one of passion, dedication, and an unwavering commitment to creating designs that capture the essence of your brand. As you explore our portfolio and experience our services, you'll discover that with 2 Days Design, your creative journey knows no bounds. Welcome to a world where imagination knows no limits, and every design is a testament to the power of swift creativity." />
        <Footer />
    </>;
}