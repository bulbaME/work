import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WProcess, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-2 w-full'>
            <div className='max-w-7xl m-auto p-14 py-8'>
                <div className='sm:text-center text-grad sm:text-4xl text-2xl font-light text-center'>
                    <span className='font-bold'>O</span>ur <span className='font-bold'>S</span>ervices
                </div>
                <div className='text-center sm:text-2xl text-xl mt-4 font-bold text-p'>
                    {"Crafting Visual Narratives for Brands"}
                </div>
            </div>
        </div>
        <P1L
            title='Our Diverse Range of Services'
            text="Discover a world of creative possibilities with our diverse range of services at Seven Studio Design. We believe that every brand deserves a tailored approach, which is why our offerings span across multiple facets of design. From branding that captures your essence to web experiences that engage users, our services are meticulously crafted to cater to your unique needs. Explore our range of creative solutions below and let's collaborate on bringing your design aspirations to life."
            img='/img/12.jpg'
            kt={[]} 
        />
        <P1R
            title='Elevating Brands through Design'
            text="At Seven Studio Design, we're passionate about the art of design and its transformative potential. Our services are designed to elevate your brand by seamlessly combining creativity with strategy. Whether you're looking to establish a captivating brand identity, create user-centric digital experiences, or leave a lasting impression through print materials, our team is equipped to exceed your expectations. Each service we offer is an opportunity for us to tell your brand's story through visuals that resonate."
            img='/img/13.jpg'
            kt={[]} 
        />
        <WServices />
        <WProcess />
        <Footer />
    </>;
}