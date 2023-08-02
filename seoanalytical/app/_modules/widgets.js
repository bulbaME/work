import { Circle, Rect } from "./box";
import { services } from "@/app/data.json";
import { ButtonLight } from "./buttons";

function FeatureCard(props) {
    return <div className='p-3 m-auto w-[25rem] h-[28rem] cursor-pointer hover:pt-1 hover:pl-1 hover:p-5 duration-300'>
        <div className='absolute w-[25rem] h-[28rem] -z-10'>
            {props.svg}
        </div>
        <div className='m-auto w-fit mt-[5rem] px-[4rem] text-center text-white'>
            <div className='font-semibold text-xl'>{props.title}</div>
            <div>{props.text}</div>
        </div>
    </div>;
}

export function WidgetFeatures(props) {
    return <div className='max-w-7xl m-auto'>
        <div className='my-16 w-fit m-auto text-5xl text-white bg-p-m p-1 font-semibold'>
            Why choose us?
        </div>
        <div className='flex flex-wrap'>
            <FeatureCard svg={
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M40.4,-69.6C52.8,-62.8,63.5,-52.8,72.8,-40.7C82.1,-28.6,90,-14.3,89.4,-0.3C88.8,13.6,79.8,27.3,70.9,40.1C62,52.8,53.1,64.8,41.3,71.4C29.5,78.1,14.8,79.5,0.8,78.1C-13.2,76.7,-26.3,72.5,-40,67C-53.7,61.4,-67.9,54.4,-77.1,43C-86.4,31.6,-90.7,15.8,-88.4,1.3C-86.1,-13.1,-77.1,-26.3,-69.3,-40.1C-61.5,-54,-54.8,-68.6,-43.4,-75.9C-32,-83.3,-16,-83.3,-1,-81.6C14,-79.9,28,-76.3,40.4,-69.6Z" transform="translate(100 100)" />
                </svg>
            } title='Skyrocket Your Rankings' text="We conduct extensive keyword research to identify high-performing keywords relevant to your industry, ensuring your website ranks higher in search engine results." />
            <FeatureCard svg={
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M44.9,-79C57.5,-70.5,66.6,-57.1,72.5,-43.1C78.4,-29.1,81.1,-14.6,82.7,0.9C84.4,16.4,84.9,32.9,77.7,44.7C70.6,56.5,55.8,63.8,41.5,68.1C27.3,72.5,13.7,73.9,-0.5,74.8C-14.7,75.7,-29.4,76,-42.4,71C-55.5,66,-66.9,55.6,-75.7,42.9C-84.5,30.1,-90.6,15.1,-92,-0.8C-93.3,-16.7,-89.9,-33.3,-81.5,-46.5C-73,-59.8,-59.4,-69.6,-45,-77.1C-30.6,-84.6,-15.3,-89.8,0.4,-90.6C16.1,-91.3,32.3,-87.6,44.9,-79Z" transform="translate(100 100)" />
                </svg>
            } title="Optimize Your Website's Performance" text="Our team performs thorough technical SEO audits to identify and fix any underlying issues that may hinder your website's performance, resulting in improved site speed, user experience, and search engine visibility." />
            <FeatureCard svg={
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F5B0B0" d="M38.1,-66.9C50.6,-58.8,62.7,-51,70,-39.9C77.2,-28.8,79.6,-14.4,80.5,0.5C81.4,15.5,80.9,30.9,73.7,42.2C66.5,53.4,52.8,60.5,39.4,68.6C26,76.6,13,85.7,-1,87.5C-15,89.2,-30,83.6,-42.6,75C-55.2,66.5,-65.5,55.1,-70.7,42.1C-75.9,29.1,-76,14.6,-76.4,-0.2C-76.7,-15,-77.3,-29.9,-72.1,-43C-66.9,-56.1,-56.1,-67.3,-43.2,-75.1C-30.2,-83,-15.1,-87.5,-1.1,-85.5C12.8,-83.5,25.6,-75,38.1,-66.9Z" transform="translate(100 100)" />
                </svg>
            } title='Engage, Inform, and Convert' text="We optimize your website's content, including on-page elements and meta tags, to ensure maximum relevance and visibility for search engines, enhancing your online presence and driving organic traffic to your website." />
        </div>
    </div>;
}

export function ServiceWidget() {
    return <div className='max-w-7xl m-auto py-16'>
        <div className='my-16 w-fit m-auto text-5xl text-white bg-p-m p-1 font-semibold'>
            Our services
        </div>
        <div className='m-4 flex flex-wrap'>
            <Circle inner={<div>{services[0].title} <ButtonLight route={services[0].link} text='Check out now!' /></div>} />
            <Circle inner={<div>{services[1].title} <ButtonLight route={services[1].link} text='Check out now!' /></div>} />
            <Circle inner={<div>{services[2].title} <ButtonLight route={services[2].link} text='Check out now!' /></div>} />
        </div>
        <div className='text-center text-xl text-p-d font-semibold p-8'>
            {"Transform your online presence with our comprehensive range of SEO services. From on-page optimization to content marketing and local SEO, we have the expertise to boost your website's visibility and drive targeted traffic. Our team of SEO professionals will analyze your website, conduct thorough keyword research, and implement cutting-edge techniques to ensure maximum results. With transparent reporting and measurable outcomes, you'll have full visibility into the success of your SEO investment. Whether you're a small local business or a multinational corporation, we tailor our services to your unique needs, delivering exceptional results at competitive prices. Take the first step towards online success and partner with us today."}
        </div>
    </div>;
}

function FeedbackCard(props) {
    return <div className='w-fit m-auto'>
        <Rect inner={<div className='text-left'>
            <div className='font-medium'>{props.text}</div>
            <div className='font-bold text-2xl'>- {props.title}</div>
        </div>} />
    </div>;
}

export function FeedbackWidget() {
    return <div className='mb-24 m-auto max-w-7xl'>
        <div className='text-center mb-16 w-fit m-auto text-5xl text-white bg-b-l p-1 font-semibold'>
            Feedback from our clients
        </div>
        <div className='m-auto w-full p-0 sm:ml-12 flex flex-wrap my-16'>
            <FeedbackCard title='John D.' text="Thanks to Seoanalytical, my online store's search engine rankings skyrocketed, resulting in a significant boost in sales. Their expertise and strategies have delivered outstanding results. Highly recommended!" />
            <img className='max-h-[20rem] m-auto' src='/img/20.png' />
        </div>
        <div className='m-auto w-full p-0 sm:ml-12 flex flex-wrap-reverse my-16'>
            <img className='max-h-[20rem] m-auto' src='/img/21.png' />
            <FeedbackCard title='Sarah M.' text="Seoanalytical transformed my struggling blog with their content marketing services. Engaging blog articles and improved search engine visibility have made all the difference. I'm grateful for their contribution to my blog's success." />
        </div>
        <div className='m-auto w-full p-0 sm:ml-12 flex flex-wrap my-16'>
            <FeedbackCard title='Michael S.' text="Seoanalytical helped my small business dominate the local market. With optimized Google My Business listings and valuable insights, my business now appears prominently in local search results. Highly recommended for local SEO!" />
            <img className='max-h-[20rem] m-auto' src='/img/23.png' />
        </div>
        <div className='m-auto w-full p-0 sm:ml-12 flex flex-wrap-reverse my-16'>
            <img className='max-h-[20rem] m-auto' src='/img/22.png' />
            <FeedbackCard title='Emily P.' text="Seoanalytical did wonders with my website's on-page optimization. Improved search engine rankings and a significant increase in organic traffic speak volumes about their professionalism and expertise." />
        </div>
    </div>;
}