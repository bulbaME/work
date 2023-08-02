import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Paragraph, WidgetContacts, WidgetCta, WidgetFeatures } from "@/modules/widgets";

export default function page() {
    return <> 
        <Header page={4} />
        <div className='max-w-7xl m-auto background-2 py-16 p-4'>
            <div className='w-fit m-auto text-4xl text-center sm:text-6xl font-bold text-white'>
                {"Crafting Words That Make a Difference"}
            </div>
            <div className='font-bold w-fit m-auto text-xl sm:text-4xl my-4 text-center text-y-d'>
                {"Inspiring Brands Through Compelling Narratives"}
            </div>
        </div>
        <Paragraph img='/img/8.png' title='Our Passion for Persuasive Communication' slogan='Words that Inspire, Engage, and Propel Brands Forward' text="At CopywriteProfessional, we are passionate about the art of persuasive communication. Our story began with a shared vision: to create compelling narratives that leave a lasting impact. We believe that every brand has a unique story to tell, and we are here to help you tell it with power and authenticity." />
        <Paragraph img='/img/9.png' title='Crafting Compelling Narratives' slogan='Weaving Stories that Leave a Lasting Impact' text="With a team of dedicated copywriters, we have honed our craft and perfected the art of storytelling. We understand that words have the power to inspire, persuade, and drive action. It is our mission to leverage this power to help your brand thrive." />
        <Paragraph img='/img/10.png' title='Collaboration for Success' slogan='Partnering with You to Bring Your Vision to Life' text="Over the years, we have had the privilege of working with a diverse range of clients, from startups to established brands across various industries. Our ability to adapt, think creatively, and stay ahead of industry trends has been instrumental in our success." />
        <Paragraph img='/img/11.png' title='Impact that Drives Our Purpose' slogan='Our Success is Your Success, Measure in Impact' text="But it's not just about the words; it's about the impact. We measure our success by the success of our clients. When we see your business grow, conversions increase, and customers engage with your message, we know we have made a difference." />
        <Paragraph img='/img/12.png' title='Join the Journey of Remarkable Narratives' slogan="Unleash Your Brand's Potential through Captivating Storytelling" text="Join us on this journey of crafting words that make a difference. Let's unlock the true potential of your brand through compelling storytelling and strategic copywriting. Together, we will create remarkable narratives that captivate, inspire, and drive your brand's success." />
        <WidgetContacts />
        <WidgetFeatures />
        <WidgetCta title='Transform Your Message, Ignite Your Success' text="Unlock the Power of Compelling Copywriting Today" cta='Contact us' route='/contact' />
        <Footer />
    </>;
}