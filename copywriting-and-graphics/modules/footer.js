import Link from "next/link";

export default function Footer() {
    return <div className='w-full bg-r-1 text-white flex p-4 text-center'>
        <div className='m-auto'>
            <div className='m-auto font-semibold'>
                Navigation
            </div>
            <div className=''>
                <Link className='mx-2' href='/'>Home</Link>
                <Link className='mx-2' href='/contact'>Contact</Link>
                <br />
                <Link className='mx-2' href='/services'>Services</Link>
                <Link className='mx-2' href='/about'>About</Link>
            </div>
        </div>
        <div className='w-fit m-auto'>
            <Link href='/policy'>Policy</Link>
            <br />
            <Link href='/terms-&-conditions'>Terms & Conditions</Link>
        </div>
    </div>;
}