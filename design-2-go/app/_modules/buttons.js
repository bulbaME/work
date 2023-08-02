import Link from "next/link";

export function Button(props) {
    return <div className='bg-white cursor-pointer p-2 px-4 rounded-full hover:bg-y-l duration-300'>
        <div className='text-xl font-bold'><Link href={props.route}>{props.text}</Link></div>
    </div>;
}

export function ButtonDark(props) {
    return <div className='pt-2 hover:pt-0 hover:pb-2 duration-300'>
        <div className='bg-black cursor-pointer p-2 px-4 rounded-full text-white hover:drop-shadow-xl duration-300'>
            <div className='text-xl font-bold'><Link href={props.route}>{props.text}</Link></div>
        </div>
    </div>;
}