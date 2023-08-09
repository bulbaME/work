import { Button } from "./buttons";

export function MainBanner() {
    return <div className='w-full background-1'>
        <div className='max-w-7xl m-auto text-center text-white pt-10 pb-24'>
            <div className='font-semibold text-3xl py-4'>
                Elevate Your Design Game
                <br />
                Inspire with Style!
            </div>
            <div className='font-semibold opacity-80 text-lg mt-10'>
                Discover Endless Design 
                <br />
                Possibilities Today!
            </div>
            <Button route='/services' text='Our offerings' />
        </div>
    </div>
}

export function Banner(props) {
    return <div className='w-full background-1'>
        <div className='max-w-7xl m-auto text-center text-white pt-10 pb-24'>
            <div className='font-semibold text-3xl py-4'>
                {props.title}
            </div>
            <div className='font-semibold opacity-80 text-lg mt-10'>
                {props.text}
            </div>
        </div>
    </div>
}