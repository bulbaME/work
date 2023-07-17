import Link from "next/link"
import { expirience } from "../data.json"

function CardTop(props) {
    return <div className='m-3 align-middle my-12 md:my-3'>
        <div className='text-2xl font-semibold'>{props.text_top}</div>
        <div className='text-5xl font-bold m-2'>{props.data}</div>
        <div className='text-2xl font-semibold'>{props.text_bottom}</div>
    </div>
}
function Star() {
    return <div className='m-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
    </div>;  
}

function CardBottom(props) {
    return <div className='m-auto'>
        <div className='m-4 p-6 bg-white rounded-3xl drop-shadow-lg max-w-md'>
            <div className='m-auto w-fit p-4'>{props.img}</div>
            <div className='text-2xl font-semibold m-2'>{props.title}</div>
            <div className='text-xl p-2'>{props.text}</div>
        </div>
    </div>
}

export function Rating() {
    return <> 
        <div className='text-4xl p-1 mb-8 bg-csblue w-fit m-auto font-extrabold mt-16 hover:bg-cspink duration-300'>Trust us. We are professionals</div>
        <div className='flex flex-wrap text-center'>
            <div className='bg-white m-auto w-fit p-6 rounded-3xl md:flex drop-shadow-lg'>
                <CardTop text_top="With our team of" text_bottom="members" data={expirience.group_count} />
                <div className='w-px my-2 bg-slate-200 mx-4' />
                <CardTop text_top="Our average rating" text_bottom={<div className='flex'><Star /><Star /><Star /><Star /><Star /></div>} data={4.9}/>
                <div className='w-px my-2 bg-slate-200 mx-4' />
                <CardTop text_top="More than" text_bottom="projects" data={expirience.projects_count}/>
        </div>
        </div>
    </>;
}

export function ExpWidget() {
    return <div className='w-full p-6 text-center my-20'>
        <Rating />
        <div className='flex my-10 flex-wrap'>
            <CardBottom img={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
                </svg>
            } title='Increased Engagement' text=" Engaging copywriting can help businesses connect with their target audience on a deeper level, fostering stronger relationships and increasing customer engagement. Highlight how your copywriting services can captivate customers and encourage them to take action, or subscribing to newsletters." />
            <CardBottom img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            } title='Enhanced Brand Image' text="Effective copywriting has the potential to elevate a brand's image and reputation. Emphasize how your services can help customers establish a distinct brand voice, convey their values, and create a positive perception among their audience. " />
            <CardBottom img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
            } title='Improved Return on Investment' text="Well-executed copywriting can generate a higher return on investment for businesses by driving conversions and increasing sales. Illustrate how your services can optimize customers' marketing efforts, maximize the impact of their campaigns, and ultimately deliver a better ROI. Provide examples or case studies that demonstrate the tangible results and financial benefits customers can expect." />
            <CardBottom img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            } title='Time and Effort Savings' text="Time and Effort Savings: Highlight the value of your copywriting services in terms of saving customers' time and effort. Effective copywriting can help streamline the content creation process, allowing businesses to focus on their core competencies. Illustrate how your services can help customers achieve their copywriting goals efficiently, freeing up their resources to concentrate on other important aspects of their business." />
        </div>
    </div>
}