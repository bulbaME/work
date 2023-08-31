import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WServices, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-2 w-full'>
            <div className='max-w-7xl m-auto p-14 py-8'>
                <div className='text-center text-grad sm:text-4xl text-2xl font-light'>
                    <span className='font-bold'>A</span>bout <span className='font-bold'>U</span>s
                </div>
                <div className='text-center sm:text-2xl text-xl mt-4 font-bold text-p'>
                    {"Journeying Through Design Excellence"}
                </div>
            </div>
        </div>
        <P1L
            title="Our Journey of Creativity"
            text="At Seven Studio Design, we embark on a journey of creativity and innovation. Founded with a passion for design and a commitment to excellence, our story is one of continuous exploration and evolution. We believe that design is not just about aesthetics, but about crafting experiences that leave a lasting impact. From our humble beginnings to our present-day endeavors, our journey is marked by our dedication to pushing boundaries, fostering collaboration, and reimagining the possibilities of design."
            img='/img/4.jpg'
            kt={[]}
        />
        <P1R
            title="Our Approach: Where Vision Meets Design"
            text="Our approach to design is rooted in a deep understanding of our clients' visions. We believe that each brand has a unique story to tell, and it's our mission to bring that story to life through captivating design. By merging creativity with strategy, we bridge the gap between imagination and execution. Through every pixel, brushstroke, and line of code, we infuse our projects with passion and purpose. Our collaborative process ensures that every design solution we create is a reflection of your brand's identity and aspirations."
            img='/img/5.jpg'
            kt={[]}
        />
        <P1L
            title="Meet the Creative Minds"
            text="Behind Seven Studio Design's success lies a team of dedicated and diverse creative minds. We are artists, strategists, and problem solvers who thrive on turning challenges into opportunities. Our team is a dynamic blend of talents, each contributing a unique perspective to the creative process. Together, we celebrate diversity, embrace innovation, and constantly push ourselves to deliver designs that resonate on a profound level. With years of experience and a shared commitment to excellence, we take pride in crafting visuals that make a difference."
            img='/img/6.jpg'
            kt={[]}
        />
        <P1R
            title="Our Commitment to You"
            text="When you choose Seven Studio Design, you're not just selecting a design agency; you're entering a partnership built on trust, collaboration, and shared goals. Our commitment to you goes beyond delivering designs – it's about creating a transformative experience. We promise to listen, understand, and bring your vision to life with dedication and creativity. Whether you're an ambitious startup or an established brand seeking reinvention, we're here to elevate your brand's presence and impact through exceptional design solutions."
            img='/img/7.jpg'
            kt={[]}
        />
        <div className='max-w-7xl m-auto -mt-16 mb-12'>
            <WAppear className='flex flex-wrap'>
                <div className='w-fit m-auto px-4 p-2 sm:text-2xl text-xl font-light border-[1px] bg-white rounded-full duration-300 hover:drop-shadow-lg hover:border-p'>
                    <Link href='/#quote'>{"Get Your Instant Quote"}</Link>
                </div>
                <div className='w-fit m-auto px-4 p-2 sm:text-2xl text-xl font-light border-[1px] bg-white rounded-full duration-300 hover:drop-shadow-lg hover:border-p'>
                    <Link href='/services'>{"Explore Our Services"}</Link>
                </div>
                <div className='w-fit m-auto px-4 p-2 sm:text-2xl text-xl font-light border-[1px] bg-white rounded-full duration-300 hover:drop-shadow-lg hover:border-p'>
                    <Link href='/contact'>{"Connect with Us Today"}</Link>
                </div>
            </WAppear>
        </div>
        <Footer />
    </>;
}