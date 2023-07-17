import Link from "next/link";
import { services } from "@/app/data.json";
import { ButtonD } from "./buttons";

function Card(props) {
    return <div className='w-fit m-auto p-4'>
        <div className='rounded-3xl bg-white p-2 drop-shadow-lg'>
            {props.inner}
        </div>
    </div>;
}

export function FeaturesWidget() {
    return <div className='my-16'>
        <div className='w-fit m-auto text-center p-4 font-bold text-4xl'>You should work with us</div>
        <div className='w-full m-auto p-4 flex flex-wrap'>
            <Card inner={
                <div className='max-w-[22rem]'>
                    <div className='flex'>
                        <div className='p-2 m-auto font-bold text-2xl text-center'>
                            Customized Design Solutions
                        </div>
                        <div className='w-fit m-auto p-4 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-1/2 h-px bg-r-l m-auto my-4 opacity-70' />
                    <div className='p-4 text-lg font-medium text-center'>
                        {"At our design agency, we pride ourselves on providing customized design solutions that are tailored to your specific needs. Whether you're looking for a captivating logo, a visually stunning website, or unique graphic illustrations, our team will work closely with you to understand your vision and bring it to life. By harnessing the power of personalized creativity, we ensure that your brand stands out in a crowded marketplace, leaving a lasting impression on your target audience."}
                    </div>
                </div>
            } />
            <Card inner={
                <div className='max-w-[22rem]'>
                    <div className='flex'>
                        <div className='p-2 m-auto font-bold text-2xl text-center'>
                            Experienced and Talented Designers
                        </div>
                        <div className='w-fit m-auto p-4 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-1/2 h-px bg-r-l m-auto my-4 opacity-70' />
                    <div className='p-4 text-lg font-medium text-center'>
                        {"When you choose to work with us, you gain access to a team of experienced and talented designers who are passionate about their craft. Our designers have a keen eye for aesthetics, attention to detail, and a deep understanding of design principles. They stay up-to-date with the latest trends and technologies, ensuring that your design projects are not only visually stunning but also aligned with industry standards. With their expertise, we bring your ideas to life and create designs that resonate with your target audience."}
                    </div>
                </div>
            } />
            <Card inner={
                <div className='max-w-[22rem]'>
                    <div className='flex'>
                        <div className='p-2 m-auto font-bold text-2xl text-center'>
                            Dedication to Customer Satisfaction
                        </div>
                        <div className='w-fit m-auto p-4 mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-1/2 h-px bg-r-l m-auto my-4 opacity-70' />
                    <div className='p-4 text-lg font-medium text-center'>
                        {"We take pride in our commitment to customer satisfaction. Your success is our success, and we go the extra mile to ensure that you are delighted with the final results. We actively listen to your feedback, incorporate your input into the design process, and make revisions until you are completely satisfied with the outcome. Our goal is to forge long-term relationships with our clients, built on trust, reliability, and exceptional design services. Experience the dedication and personalized attention you deserve when you choose to work with us."}
                    </div>
                </div>
            } />
        </div>
    </div>
}

export function Paragraph(props) {
    return <div className='m-4 flex flex-wrap my-16'>
        <div className='sm:w-2/5 p-2 m-auto min-w-[15rem]'>
            <img className='drop-shadow-lg rounded-3xl' src={props.img} />
        </div>
        <div className='sm:w-3/5 p-2 m-auto'>
            <div className='underline font-semibold decoration-r-l'>
                <Link href={props.route}>{props.route_text}</Link>
            </div>
            <div className='my-2 font-bold text-2xl'>
                {props.title}
            </div>
            <div className='text-lg font-medium'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function ParagraphL(props) {
    return <div className='m-4 flex flex-wrap-reverse my-16'>
        <div className='sm:w-3/5 p-2 m-auto'>
            <div className='underline font-semibold decoration-r-l'>
                <Link href={props.route}>{props.route_text}</Link>
            </div>
            <div className='my-2 font-bold text-2xl'>
                {props.title}
            </div>
            <div className='text-lg font-medium'>
                {props.text}
            </div>
        </div>
        <div className='sm:w-2/5 p-2 m-auto min-w-[15rem]'>
            <img className='drop-shadow-lg rounded-3xl' src={props.img} />
        </div>
    </div>;
}

export function ServicesMini() {
    return <div>
        <div className='w-fit m-auto text-center p-4 font-bold text-4xl'>What we offer</div>
        <div className='m-auto flex flex-wrap'>
            <Card inner={
                <div className=' p-4'>
                    <div className='font-bold text-center text-2xl max-w-[10rem]'>{services[0].title}</div>
                    <div className='mt-3'><ButtonD text='See more' route={services[0].link} /></div>
                </div>
            } />
            <Card inner={
                <div className=' p-4'>
                    <div className='font-bold text-center text-2xl max-w-[10rem]'>{services[1].title}</div>
                    <div className='mt-3'><ButtonD text='See more' route={services[1].link} /></div>
                </div>
            } />
            <Card inner={
                <div className=' p-4'>
                    <div className='font-bold text-center text-2xl max-w-[10rem]'>{services[2].title}</div>
                    <div className='mt-3'><ButtonD text='See more' route={services[2].link} /></div>
                </div>
            } />
        </div>
    </div>;
}

export function Testimonials() {
    return <div className='w-full my-36'>
        <div className='max-w-4xl m-auto'>
            <div className='text-center font-bold text-4xl text-black mb-12'>
                Feedback from our clients
            </div>
            <div className='flex p-4 flex-wrap'>
                <div className='min-w-[15rem] w-1/2 m-auto'>
                    <img src='/img/p1.jpg' className='m-auto drop-shadow-xl sm:w-1/2 rounded-full' />
                    <div className='text-center p-4 pt-2 m-auto w-fit underline decoration-r-l text-black font-bold text-2xl'>
                        John Tayler, Founder
                    </div>
                </div>
                <div className='sm:w-1/2 m-auto ml-0'>
                    <Card inner={
                        <div className='p-4 font-medium text-center text-xl'>
                            {"I had the pleasure of working with this design agency for my brand's logo design, and I couldn't be happier with the outcome. Their team understood my vision and translated it into a stunning, unique logo that perfectly represents my brand. The level of professionalism and attention to detail was impressive. I highly recommend their services to anyone in need of exceptional design work."}
                        </div>
                    } />
                </div>
            </div>
            <div className='flex p-4 flex-wrap mt-24'>
                <div className='min-w-[15rem] w-1/2 m-auto'>
                    <img src='/img/p2.jpg' className='m-auto drop-shadow-xl sm:w-1/2 rounded-full' />
                    <div className='text-center p-4 pt-2 m-auto w-fit underline decoration-r-l text-black font-bold text-2xl'>
                        Mark Johnson, CEO
                    </div>
                </div>
                <div className='sm:w-1/2 m-auto ml-0'>
                    <Card inner={
                        <div className='p-4 font-medium text-center text-xl'>
                            {"I approached this design agency for website development, and they exceeded my expectations in every way. Their team of talented designers and developers created a visually captivating and user-friendly website that perfectly showcased my business. The collaboration process was seamless, and they were always responsive to my ideas and suggestions. I'm thrilled with the results and have received numerous compliments on my website. I wholeheartedly recommend their services!"}
                        </div>
                    } />
                </div>
            </div>
        </div>
    </div>;
}

export function ServiceCard(props) {
    return <div className='flex my-16 flex-wrap-reverse'>
        <div className='sm:w-3/4 p-4 min-w-[15rem] m-auto'>
            <div className='font-bold text-3xl my-2'>
                {props.title}
            </div>
            <div className='text-lg font-medium mb-4'>
                {props.text}
            </div>
            <div className='w-fit m-auto'>
                <ButtonD route={props.link} text='Discover more' />
            </div>
        </div>
        <div className='p-4 sm:w-1/4 m-auto'>
            <img src={props.img} className='rounded-3xl drop-shadow-xl' />
        </div>
    </div>;
}

export function ProductCard(props) {
    return <div className='w-fit m-auto max-w-sm'>
        <Card inner={
            <div className='text-center p-4'>
                <div className='font-bold text-2xl'>{props.title}</div>
                <div className='font-medium text-xl flex w-fit m-auto my-2'>
                    <div className='mx-1 font-bold underline decoration-r-l w-fit m-auto'>{props.price}</div>
                    <div className='mx-1 font-semibold m-auto w-fit'>per {props.per}</div>
                </div>
                <div className='font-medium text-lg my-4'>{props.text}</div>
                <ButtonD route='/contact#contact-us' text='Select' />
            </div>
        } />
    </div>;
}

export function ContactCard(props) {
    return <div className='m-auto'>
        <Card inner={
            <div className='p-2 w-[18rem] h-[12rem] flex'>
                <div className='m-auto w-fit h-fit'>
                    <div className='w-fit m-auto'>{props.img}</div>
                    <div className='font-bold my-4 m-auto w-fit text-2xl'>{props.title}</div>
                    <div className='my-2 m-auto w-fit text-lg text-center font-semibold'>{props.descr}</div>
                </div>
            </div>
        } />
    </div>;
}