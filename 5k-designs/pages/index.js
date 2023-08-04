import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CAchievments, FeatureSmall, P1L, WCta, WServicesSmall, WTimeline } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto p-6 sm:p-14 pt-14 flex flex-wrap'>
                <div className='lg:w-2/3 lg:pr-8'>
                    <div className='sm:text-5xl text-3xl font-bold'>
                        Welcome to 5K Designs <br/>
                        Redefining Creativity in the Digital Realm
                    </div>
                    <div className='sm:text-lg font-medium my-8'>
                        {"At 5K Designs, we are passionate about crafting exceptional designs that breathe life into your vision. Our team of creative enthusiasts is dedicated to delivering aesthetic solutions that resonate with your audience and elevate your brand to new heights. From web design to branding and everything in between, we're committed to making your digital dreams a reality."}
                    </div>
                    <div className='flex md:flex-nowrap flex-wrap lg:mb-0 mb-8 mt-16'>
                        <div className='font-bold sm:text-4xl text-2xl my-auto md:mr-8 md:pr-0 sm:pr-4 w-fit mx-auto md:mx-0'>
                            {"Craft Your Vision"}
                        </div>
                        <div className='my-auto md:mr-0 mx-auto font-bold sm:text-2xl text-lg p-2 px-3 w-fit duration-300 underline decoration-g-m decoration-8 hover:pl-6 hover:pr-0'>
                            <Link className='' href='/contact'>{"Schedule a Free Consultation"}</Link>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3 lg:pl-8 w-full lg:h-auto'>
                    <div className='min-w-full min-h-full img-1 text-white sm:text-5xl text-3xl font-bold p-6'>
                        {"Where Design Meets Perfection"}
                    </div>
                </div>
                <div className='flex flex-wrap mt-16'>
                    <FeatureSmall title='Creative Brilliance' text="Beyond the ordinary. Unique, innovative, and functional designs to set your brand apart." />
                    <FeatureSmall title='Personalized Approach' text="Tailored to your brand. We listen, align, and deliver design solutions that fit your identity and objectives." />
                    <FeatureSmall title='Transparent Collaboration' text="Open communication. Your feedback matters. We keep you informed and satisfied throughout the process." />
                    <FeatureSmall title='Results-Oriented Designs' text="Engaging experiences. Stunning designs that drive real results for your business." />
                </div>
            </div>
        </div>
        <div className='py-6' />
        <CAchievments title={<>Over <a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>500</a> Successful Projects Completed</>} text="With a track record of over 500 successful projects completed, we have honed our design expertise across various industries. From startups to established enterprises, our solutions have consistently delivered positive outcomes, earning us the trust and loyalty of our clients." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>10+</a> Years of Design Excellence</>} text="For more than a decade, our team has been at the forefront of design excellence, pushing boundaries, and crafting innovative solutions. Our extensive experience has given us a deep understanding of market trends and design strategies that truly resonate with audiences." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>98%</a> Client Satisfaction Rate</>} text="Client satisfaction is at the core of everything we do. Our unwavering commitment to providing exceptional designs and unmatched customer service has resulted in a remarkable 98% client satisfaction rate. We pride ourselves on building long-lasting relationships with our clients based on trust and collaboration." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>30+</a> Industry Awards</>} text="Our passion for creativity and dedication to excellence have not gone unnoticed. We are proud recipients of over 30 prestigious industry awards, recognizing our commitment to pushing the boundaries of design and delivering outstanding solutions." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>Global</a> Clientele</>} text="Our design prowess has garnered international acclaim, attracting clients from over 20 countries worldwide. From North America to Asia, our design solutions transcend borders, leaving a lasting impact on diverse audiences." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>2000+</a> Cups of Coffee</>} text="Behind every creative masterpiece, there's a cup of coffee that fuels our design team's inspiration. Over the years, we've brewed more than 2000 cups of coffee, igniting our creative spirits and driving us to craft designs that leave a lasting impression." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>50+</a> Design Workshops Conducted</>} text="We believe in sharing our passion for design and empowering the design community. Through more than 50 design workshops conducted, we've inspired aspiring designers and enthusiasts, fostering a culture of creativity and innovation." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>100% </a> On-Time Project Delivery</>} text="Our commitment to professionalism and punctuality ensures that every project is delivered on time, without compromising on quality. We understand the value of your time and strive to exceed your expectations in every way." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>5-Star</a> Rated Customer Reviews</>} text="Client satisfaction is the cornerstone of our success. With numerous 5-star rated customer reviews, we take pride in knowing that our clients have had exceptional experiences working with us." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>100+</a> Brand Identities Crafted</>} text="We take brand identity seriously, crafting more than 100 unique and impactful brand identities that have helped businesses stand out and make a lasting mark in their respective markets." />
        <CAchievments title={<><a className='drop-shadow-[4px_4px_0px_#6CE6A5] hover:animate-pulse'>30+</a> Design Conferences Attended</>} text="We stay ahead of the design curve by attending over 30 design conferences worldwide, absorbing the latest trends and best practices in the ever-evolving world of design." />
        <div className='py-6' />
        <WTimeline />
        <WServicesSmall />
        <P1L img='2' title='Design Solutions for Extraordinary Experiences' slogan="Crafting Captivating Experiences" text="Welcome to a world where designs transcend imagination and create extraordinary experiences. Our team of creative visionaries takes pride in crafting solutions that evoke emotions and leave a lasting impression. From stunning web design and development to captivating branding and identity, and engaging graphic design, our focus is on delivering experiences that engage your audience and elevate your business. Our designs have been recognized with prestigious industry awards, reflecting our passion for pushing the boundaries of creativity. Join us on a design journey that celebrates brilliance and unlocks the true potential of your brand." />
        <P1L img='3' title="Discover Your Brand's Creative Potential" slogan="Where Art Meets Strategy" text="Unleash the true essence of your brand with 5K Designs. Our process is not just about crafting visually appealing designs; it's about understanding your brand story and communicating it in the most captivating way. Our team of designers, developers, and strategists collaborate seamlessly to create a harmonious blend of art and functionality. We thrive on challenges and relish the opportunity to breathe life into your creative vision. With personalized designs, transparent communication, and a relentless pursuit of excellence, we invite you to discover your brand's creative potential with 5K Designs." />
        <P1L img='4' title="Let's Create Something Extraordinary Together" slogan="Your Vision, Our Expertise" text="Your brand deserves a design partner that shares your passion for greatness. At 5K Designs, we are committed to delivering exceptional design solutions that empower your brand to thrive. Whether it's a responsive website that captivates audiences, a timeless brand identity that resonates, or compelling graphic designs that tell your story, we're here to make it happen. Join us on a journey of creative brilliance, where together, we'll create something extraordinary that leaves a lasting mark on the world. Let's take your brand to new heights with 5K Designs!" />
        <WCta title='Unlock the Power of Creativity' cta='Get Started Today' route='/contact' text="Ready to elevate your brand's presence and create extraordinary design experiences? Let's embark on a design journey together. Reach out to us today to discuss your project, and our team of creative visionaries will be thrilled to bring your ideas to life. Whether you need a stunning website, a captivating brand identity, or engaging graphic designs, we're here to make it happen. Experience the power of creativity and innovation with 5K Designs. Get started now, and let's create something remarkable for your brand!" />
        <Footer />
    </>;
}