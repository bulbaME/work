import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P1D, P1L, WProcess, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={2} />
        <div className='py-16 m-auto text-center bg-b-m'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                About Us
            </div>
            <div className='sm:text-3xl text-xl font-bold text-b-l my-4'>
                Empowering Global Communication
            </div>
        </div>
            <P1L title='Our Story' img='/img/6.jpg' slogan="A Foundation of Excellence" text="Licensed Translation was founded by language enthusiasts who recognized the transformative power of effective communication across borders. What started as a small team of linguists with a shared vision has now blossomed into a dynamic company that serves individuals, businesses, and institutions on a global scale. Our foundation of excellence is built on a deep appreciation for languages and cultures, fueling our drive to deliver top-tier translation services." />
            <P1D title='A Team of Language Experts' img='/img/5.jpg' slogan="Your Trusted Advisors" text="At the heart of Licensed Translation lies our exceptional team of language experts. Handpicked for their linguistic proficiency and subject matter expertise, our native-speaking translators are industry specialists who understand the intricacies of various domains. From legal professionals and medical experts to marketing gurus and educators, our team is your trusted advisor in navigating the complexities of multilingual communication." />
            <P1L title='Client-Centric Approach' img='/img/4.jpg' slogan="Your Success is Our Priority" text="We take immense pride in our client-centric approach. Your success is at the forefront of everything we do. By understanding your unique needs and objectives, we curate personalized language solutions that perfectly align with your vision. Whether you require accurate legal translations, engaging e-learning courses, or culturally sensitive marketing materials, we tailor our services to amplify your impact on a global scale." />
            <P1D title='Uncompromising Quality' img='/img/8.jpg' slogan="Precision at Every Turn" text="Licensed Translation is synonymous with unmatched quality. We set high standards for ourselves, conducting rigorous quality assurance processes at every stage of the translation journey. From meticulous proofreading and editing to comprehensive checks for accuracy and context, we leave no room for compromise. Rest assured, your content is in the hands of consummate professionals." />
            <P1L title='Global Impact' img='/img/7.jpg' slogan="Empowering Success Stories" text="The impact of our language solutions extends far beyond words. Our services have empowered businesses to transcend geographical boundaries and flourish in international markets. We've enabled students to access quality education in their native languages and empowered medical professionals to provide patient care with precision. Licensed Translation's global reach is built on a foundation of successful partnerships and inspiring success stories." />
        <div className='max-w-7xl m-auto p-8'>
            <Cta title='Join Us in Embracing Diversity' text="At Licensed Translation, we celebrate diversity and embrace the richness of different languages and cultures. Join us in creating a world where effective communication knows no boundaries. Whether you are a business looking to expand globally, an educational institution with a vision of inclusivity, or an individual seeking seamless connections, our team stands ready to be your language ally. Let's connect and embark on a journey of endless possibilities together." slogan="Let's Connect" route='/contact' cta='Reach out' />
        </div>
        <Footer/>
    </>;
} 