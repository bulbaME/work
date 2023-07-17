import Link from "next/link";

export function BigButton(props) {
    return <div className='w-fit m-auto'>
        <div className='bg-v-m w-fit text-center mx-3 sm:mx-0 hover:drop-shadow-xl text-white duration-300 rounded-full'>
            <Link href={props.route}><div className='text-2xl font-bold p-4'>{props.text}</div></Link>
        </div>
    </div>;
}

export function BigButtonGreen(props) {
    return <div className='w-fit m-auto'>
        <div className='bg-g-m w-fit text-center mx-3 sm:mx-0 hover:drop-shadow-xl text-white duration-300 rounded-full'>
            <Link href={props.route}><div className='text-2xl font-bold p-4'>{props.text}</div></Link>
        </div>
    </div>;
}