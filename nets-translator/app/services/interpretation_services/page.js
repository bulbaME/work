import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { Paragraph, ParagraphL } from "@/app/_modules/paragraph";
import { SubProductCard } from "@/app/_modules/product_card";
import { BigButtonGreen } from "@/app/_modules/bit_button";

import { services } from "@/app/data.json"; 

const service = services[2].sub_services;

export default function Main() {
    return <>
        <Header page={7} />
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl font-bold'>{services[2].title}</div>
        <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Bridging Languages, Amplifying Connections: Our Interpretation Services Speak Your Language"}</div>
        <div className='flex flex-wrap max-w-6xl m-auto'>
            <SubProductCard title={service[0].title} descr={service[0].text} price={service[0].price} />
            <SubProductCard title={service[1].title} descr={service[1].text} price={service[1].price} />
            <SubProductCard title={service[2].title} descr={service[2].text} price={service[2].price} />
        </div>
        <div className='max-w-4xl m-auto'>
            <Paragraph img='/img/13.jpg' title='Expert Interpreters for Every Occasion' text="Our team of highly skilled interpreters is ready to facilitate smooth and effective communication in any setting. Whether you require interpretation for business meetings, conferences, legal proceedings, or medical consultations, our experts possess the linguistic proficiency and cultural understanding to ensure accurate and nuanced interpretation. With their expertise, you can overcome language barriers and engage in meaningful conversations with confidence." />
            <ParagraphL img='/img/14.jpg' title='Simultaneous Interpretation for Dynamic Events' text="Make your conferences, seminars, and virtual events truly global with our simultaneous interpretation services. Our skilled interpreters work in real-time, delivering seamless translations to participants listening through headsets. By offering simultaneous interpretation in multiple languages, we ensure that every attendee can fully understand and engage with the content being presented. Experience dynamic and inclusive communication that transcends linguistic boundaries." />
            <Paragraph img='/img/15.jpg' title='Consecutive Interpretation for Personalized Communication' text="During one-on-one interactions, business negotiations, or legal proceedings, our consecutive interpretation services shine. Our skilled interpreters listen carefully to the speaker and deliver accurate translations during pauses, ensuring smooth and personalized communication. With consecutive interpretation, you can engage in in-depth discussions, ask questions, and build rapport, knowing that language will never be a barrier to effective dialogue." />
            <ParagraphL img='/img/16.jpg' title='On-Demand Language Assistance' text="Need language support at a moment's notice? Our telephonic interpretation service is here for you. With a simple phone call, our professional interpreters can assist with immediate language needs, whether it's for customer support, helpdesk interactions, or remote communication. Our telephonic interpretation services provide quick and reliable language assistance, connecting you to people around the world in their preferred language." />
            <div className='my-3 mb-16'>
                <BigButtonGreen text='Reach us today' route='/contact' /> 
            </div>
        </div>
        <Footer />
    </>;
}