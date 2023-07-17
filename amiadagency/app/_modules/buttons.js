import Link from "next/link";

export function ButtonLG(props) {
    return <div className='m-auto text-white font-semibold text-3xl text-center w-fit'>
        <div className='m-4 p-5 px-7 hover:mt-2 hover:ml-2 hover:m-6 duration-300 bg-p-m rounded-full'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>
}

export function ButtonLight(props) {
    return <div className='m-auto w-fit p-4'>
        <div className='p-3 px-4 bg-white text-p-d rounded-full text-xl font-bold cursor-pointer my-2 hover:mt-0 hover:mb-4 hover:drop-shadow-md duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}

export function Button(props) {
    return <div className='m-auto w-fit p-4'>
        <div className='p-3 px-4 bg-p-m text-white rounded-full text-xl font-bold cursor-pointer my-2 hover:mt-0 hover:mb-4 hover:drop-shadow-md duration-300'>
            <Link href={props.route}>{props.text}</Link>
        </div>
    </div>;
}
