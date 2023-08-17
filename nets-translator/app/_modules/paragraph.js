import { BannerImg1 } from "./banner_img";

export function ParagraphL(props) {
    return <div className='flex flex-wrap-reverse my-20 mx-5'>
        <div className='md:w-6/12 font-medium text-xl m-auto mt-10 md:mt-auto'>
            <div className='font-bold text-2xl'>{props.title}</div>
            <div>{props.text}</div>
        </div>
        <div className='w-fit h-fit drop-shadow-xl m-auto'>
            <div className='rounded-3xl max-w-xs sm:max-w-sm absolute overflow-hidden'>
                <div className='absolute w-full h-full rounded-3xl'><BannerImg1 /></div>
                <div className='absolute w-16 h-16 left-6 top-6 rounded-full drop-shadow-xl bg-white z-20'></div>
                <div className='absolute w-12 h-12 left-14 top-28 rounded-full drop-shadow-xl bg-white z-20'></div>
                <img src={props.img} />
            </div>
            <img className='max-w-xs sm:max-w-sm rounded-3xl' src={props.img} />
        </div>
    </div>;
}

export function Paragraph(props) {
    return <div className='flex flex-wrap my-20 mx-5'>
        <div className='w-fit h-fit drop-shadow-xl m-auto'>
            <div className='rounded-3xl max-w-xs sm:max-w-sm absolute overflow-hidden'>
                <div className='absolute w-full h-full rounded-3xl'><BannerImg1 /></div>
                <div className='absolute w-28 h-28 right-6 top-6 rounded-full drop-shadow-xl bg-white z-20'></div>
                <div className='absolute w-16 h-16 right-32 top-32 rounded-full drop-shadow-xl bg-white z-20'></div>
                <img src={props.img} />
            </div>
            <img className='max-w-xs sm:max-w-sm rounded-3xl' src={props.img} />
        </div>
        <div className='md:w-6/12 font-medium text-xl m-auto mt-10 md:mt-auto'>
            <div className='font-bold text-2xl'>{props.title}</div>
            <div>{props.text}</div>
        </div>
    </div>;
}