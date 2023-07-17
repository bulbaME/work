import Link from "next/link";

export function Button(props) {
    return <div className='w-fit m-auto'>
        <div className='m-2 sm:m-5 p-2 px-3 font-bold text-sm sm:text-md lg:text-xl xl:text-3xl bg-white rounded-md hover:bg-g-l duration-300 cursor-pointer'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function ButtonBlue(props) {
    return <div className='w-fit m-auto'>
        <div className='m-2 sm:m-5 p-2 px-3 font-bold text-sm sm:text-md lg:text-xl xl:text-3xl bg-white rounded-md hover:bg-b-l duration-300 cursor-pointer'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}


export function ButtonDark(props) {
    return <div className='w-fit m-auto'>
        <div className='m-2 sm:m-5 p-2 px-3 font-bold text-sm sm:text-md lg:text-xl bg-black rounded-md hover:underline transition-underline text-white decoration-b-l duration-300 cursor-pointer'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}