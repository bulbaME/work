import Link
 from "next/link";

export function Button(props) {
    return <div className='w-fit m-auto p-2'>
        <div className='p-2 px-3 bg-white text-black rounded-full font-bold text-xl mt-2 hover:mt-0 hover:mb-2 hover:drop-shadow-lg duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function ButtonD(props) {
    return <div className='w-fit m-auto p-2'>
        <div className='p-2 px-3 bg-r-d text-white rounded-full font-bold text-xl hover:bg-r duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function ButtonL(props) {
    return <div className='w-fit m-auto p-2'>
        <div className='p-4 px-6 bg-white text-black rounded-full font-bold text-3xl mt-2 hover:mt-0 hover:mb-2 hover:drop-shadow-lg duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function ButtonLD(props) {
    return <div className='w-fit m-auto p-2'>
        <div className='p-4 px-6 bg-r-d text-white rounded-full font-bold text-3xl hover:bg-r duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}