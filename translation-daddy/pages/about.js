import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, P1R, WGetStarted } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='max-w-7xl m-auto p-6 py-10 text-center'>
            <div className='sm:text-3xl text-xl font-bold text-b-m'>
                {"About Translation Daddy"}
            </div>
            <div className='sm:text-xl text-lg text-b-d font-bold my-4'>
                {"Breaking Barriers, Connecting Cultures - Our Journey to Multilingual Excellence"}
            </div>
        </div>
        <a id='learn-our-story'><P1L img='6' title='Learn Our Story' text="At Translation Daddy, our story is one of passion, dedication, and a shared vision to break down language barriers and empower global communication. Our journey began with a simple idea - to bridge cultures and enable businesses and individuals to connect with diverse audiences worldwide. Over the years, we have grown into a trusted language partner, serving clients from various industries and helping them expand their horizons internationally. Our commitment to accuracy, cultural sensitivity, and exceptional customer service has been the cornerstone of our success. We invite you to learn more about our story, from our humble beginnings to our present standing as a leading language translation service provider. Discover the driving force behind Translation Daddy and our unwavering determination to make a positive impact in the world of multilingual communication." /></a>
        <a id='meet-our-team'><P1R img='7' title='Meet Our Team' text="At Translation Daddy, we are proud to have a team of dedicated linguists and language enthusiasts who share a common passion for communication and cultural understanding. Our team members hail from diverse linguistic and cultural backgrounds, allowing us to offer a comprehensive range of language services. From skilled translators and language experts to project managers, each member of our team plays a vital role in ensuring the success of our clients' translation projects. Beyond their linguistic expertise, our team embodies the core values of Translation Daddy - accuracy, professionalism, and a customer-centric approach. Meet the faces behind our translations and discover the individuals who are committed to breaking barriers and making the world a more connected place." /></a>
        <a id='explore-our-values'><P1L img='8' title='Explore Our Values' text="At Translation Daddy, our values form the foundation of our approach to translation services. We believe in the power of accurate and culturally sensitive translations to create meaningful connections between people and businesses across the globe. Our core values include excellence, integrity, cultural understanding, and a commitment to continuous improvement. We hold ourselves to the highest standards of quality and professionalism, ensuring that every translation project we undertake reflects these values. Explore how our values guide our decision-making, shape our interactions with clients, and drive us to achieve multilingual excellence. Experience firsthand the difference our values make in delivering exceptional translation solutions tailored to your specific needs." /></a>
        <a id='discover-our-expertise'><P1R img='9' title='Discover Our Expertise' text="Translation Daddy is well-versed in serving clients from a diverse range of industries. Our expertise spans various sectors, including but not limited to business, technology, healthcare, legal, marketing, and e-commerce. Each industry has its unique language requirements and nuances, and we take pride in our specialized knowledge to deliver accurate and industry-specific translations. Whether you are a multinational corporation or a startup looking to go global, we have the expertise to cater to your translation needs. Discover how our industry-specific approach ensures that your translated content is not only linguistically accurate but also culturally relevant to your target audience. Partner with Translation Daddy and tap into our wealth of experience in diverse industries to take your global communication to new heights." /></a>
        <a id='join-our-mission'><P1L img='10' title='Join Our Mission' text="We believe that effective communication has the power to create a world without borders, where cultures connect and thrive together. Join us on our mission to bridge cultures, unlock global opportunities, and empower businesses and individuals to communicate effectively across languages. At Translation Daddy, we see translation as more than just words - it's a catalyst for understanding, collaboration, and growth. Whether you are a business expanding internationally or an individual seeking personal translation services, we invite you to be a part of our mission. Let's make a difference together in the world of multilingual communication. Join hands with Translation Daddy and embrace the multilingual advantage to reach new horizons and make a lasting impact on a global scale." /></a>
        <WGetStarted />
        <Footer />
    </>;
}