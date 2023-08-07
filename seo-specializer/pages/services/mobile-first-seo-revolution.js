import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CTestimonials, P1, WService } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[2];

export default function X() {
    return <>
        <Header page={7} />
        <div className='sm:p-12 p-4 max-w-7xl m-auto py-8'>
            <div className='text-white text-center sm:text-3xl text-2xl font-bold'>
                {s.title}
            </div>
            <div className='text-c text-center sm:text-xl text-lg font-bold mt-6'>
                {s.text_short}
            </div>
        </div>
        <div className='sm:p-12 p-4 max-w-5xl m-auto'>
            <P1 text={s.text_long} title={s.title} />
        </div>
        <WService s={s.services} />
        <div className='max-w-7xl m-auto sm:p-12 p-4'>
            <div className='sm:text-3xl text-2xl font-bold text-white text-center mb-8'>
                {"Feedback from our clients"}
            </div>
            <div className='flex flex-wrap'>
                <CTestimonials img='6' name="Sarah Anderson, Digital Marketing Manager" text="SeoSpecializer's SEO expertise has been instrumental in our online growth. With their on-page optimization mastery service, we witnessed a remarkable improvement in our search rankings and organic traffic. Their team's professionalism and commitment to results have made them an indispensable partner in our digital success." />
                <CTestimonials img='8' name="David Carter, Founder" text="SeoSpecializer's local SEO domination service made a significant impact on our travel agency. Our local visibility skyrocketed, leading to a surge in bookings and revenue. The team's attention to detail and effective strategies have been game-changers for our business. I highly recommend SeoSpecializer to any business looking to dominate their local market." />
                <CTestimonials img='7' name="Jennifer Williams, E-commerce Entrepreneur" text="SeoSpecializer's mobile-first SEO revolution service worked wonders for our online store. Their mobile speed optimization resulted in faster load times, improving user experience and conversion rates. We're impressed by their expertise and personalized approach, and we now enjoy increased sales and satisfied customers." />
                <CTestimonials img='9' name="Michael Lee, Small Business Owner" text="SeoSpecializer has been a trusted partner in my boutique's success story. Their dedication to providing tailored solutions through on-page optimization mastery has been invaluable. Our website's organic traffic has surged, and we've seen a positive impact on our sales. Their team's commitment to excellence sets them apart from the rest." />
            </div>
        </div>
        <Footer />
    </>;
}