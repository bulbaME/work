import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, P1S, WAppear } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl text-center font-bold text-white'>
                {"About Diorama Designs"}
                <span className='text-g-m'>.</span>
            </div>
            <div className='sm:text-2xl text-xl text-center text-g-l font-light mt-8'>
                {"Our Journey, Passion, and Commitment to Creativity"}
            </div>
        </WAppear></div>
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <P1 
                title="About Diorama Designs"
                text="Welcome to Diorama Designs – a hub of boundless creativity and design excellence. Our story began with a simple passion for shaping ideas into stunning visual narratives. With every stroke of creativity and line of code, we've been crafting experiences that bridge imagination and innovation."
            />
            <P1S 
                title="Our Creative Philosophy"
                text="At Diorama Designs, creativity is not just a concept; it's a way of life. We view each project as a canvas where innovation meets purpose. Our designs go beyond aesthetics, infusing functionality and storytelling to create designs that resonate with your audience."
            />
            <P1S 
                title="Driven by Purpose"
                text="We understand that design is not merely a visual endeavor; it's a strategic choice. Our team is committed to understanding your goals, values, and audience. This knowledge becomes the foundation upon which we build designs that convey your message with authenticity and impact."
            />
            <P1S 
                title="Collaboration in Design"
                text="We believe that great designs emerge from collaboration. We work closely with you, listening to your insights and weaving them into the design process. This partnership ensures that your vision is not just realized but elevated to new heights."
            />
            <P1S 
                title="Innovating for Tomorrow"
                text="Innovation is the cornerstone of our work. We remain on the cutting edge of design trends, exploring new techniques and technologies to push creative boundaries. Our goal is to design for today with an eye on the future."
            />
            <P1S 
                title="Crafting Unique Experiences"
                text="From creating immersive digital platforms to crafting tangible brand identities, we embrace diversity in our design portfolio. Our designs are not just aesthetically pleasing; they're engineered to deliver seamless and engaging experiences across various mediums."
            />
            <P1S 
                title="Dedicated to Excellence"
                text="Excellence is the driving force behind everything we do. Our team of passionate designers, developers, and strategists dedicate themselves to delivering designs that surpass expectations. Every detail is meticulously polished to ensure your brand shines brightly."
            />
            <P1S 
                title=""
                text="We invite you to explore our design realm – a space where ideas come to life, and where your brand's story gains a vibrant visual voice. Let's embark on a creative expedition together and craft designs that inspire, connect, and stand the test of time."
            />
            <div className='md:w-1/2 m-auto'><WAppear className='w-full'>
                <div className='flex m-auto text-white w-fit sm:text-xl my-6 text-lg border-[2px] px-3 rounded-full py-1 border-neutral-600 hover:border-r-l duration-300'>
                    <Link href='/services'>Check Out Our Services</Link>
                    <div className='my-auto ml-2 text-r-l'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
               </div>
               <div className='flex m-auto text-white w-fit sm:text-xl my-6 text-lg border-[2px] px-3 rounded-full py-1 border-neutral-600 hover:border-g-m duration-300'>
                    <Link href='/services'>Get in Touch With Us</Link>
                    <div className='my-auto ml-2 text-g-m'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                    </div>
               </div>
            </WAppear></div>
        </div>
        <Footer />
    </>;
}