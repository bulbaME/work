import Link from "next/link";

export default function BigButton(props) {
    return <div className='background-2 my-12 drop-shadow-md h-fit w-fit text-center align-super m-auto rounded-full'>
        <div className='hover:bg-white duration-300 rounded-full'>
            <Link href={props.route}><div className='text-4xl font-bold p-4'>{props.text}</div></Link>
        </div>
    </div>;
}