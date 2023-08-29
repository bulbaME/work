import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WAppear, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-2'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='text-center sm:text-5xl text-3xl font-black text-b-d'>
                        {"Our Story"}
                    </div>
                </WAppear>
            </div>
        </div>
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <P1L 
                title='Our Story'
                text="At OneToTranslate, we believe in the power of words to transcend boundaries and connect people across the globe. Our journey began with a passion for languages and a vision to bridge the gaps that language barriers create. Founded by a team of dedicated linguists and language enthusiasts, we have evolved into a platform that facilitates seamless communication in an increasingly interconnected world. Our commitment to accuracy, cultural sensitivity, and customer satisfaction drives us to deliver high-quality translation services that help our clients break down linguistic walls and embrace the diversity of languages."
                img='/img/8.jpg'
            />
            <P1R 
                title='Our Mission'
                text="Our mission at OneToTranslate is simple yet impactful: to empower individuals and businesses with accurate and reliable translation services that enable them to communicate effortlessly across languages. We understand the importance of preserving the nuances and intentions behind each word, and our team of skilled linguists is dedicated to providing translations that capture the essence of the original message. Through our services, we strive to foster understanding, promote global collaboration, and celebrate the richness of languages and cultures worldwide."
                img='/img/9.jpg'
            />
            <P1L 
                title='Our Approach'
                text="At the heart of our approach lies a deep respect for languages and the art of effective communication. We take a collaborative and client-centered approach to each translation project, working closely with our clients to understand their needs and preferences. Our team of linguists not only possesses language expertise but also brings a profound understanding of diverse industries and subject matters. This enables us to offer accurate translations that resonate with target audiences while maintaining the integrity of the content."
                img='/img/10.jpg'
            />
            <P1R 
                title='Why Choose Us'
                text="Choosing OneToTranslate means choosing excellence in translation. Our dedication to delivering accurate, culturally sensitive translations sets us apart. With a commitment to timely delivery, competitive pricing, and a seamless user experience, we make the translation process effortless for our clients. Whether you're a business expanding into new markets or an individual seeking to share your ideas with the world, OneToTranslate is your trusted partner in breaking down language barriers and unlocking the potential of global communication."
                img='/img/11.jpg'
            />
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto'>
            <WAppear>
                <div className='sm:text-2xl text-xl font-bold text-b-m text-center'>
                    {"Discover the OneToTranslate difference. Break language barriers, connect cultures."}
                </div>
                <div className='my-4 rounded-2xl p-4 font-bold text-xl m-auto w-fit text-b-m bg-white hover:drop-shadow-lg duration-300 hover:mb-6 hover:mt-2'>
                    <Link href='/contact'>{"Explore now"}</Link>
                </div>
            </WAppear>
        </div>
        <Footer />
    </>;
}