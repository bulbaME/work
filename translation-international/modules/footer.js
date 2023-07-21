import Link from "next/link";

export default function Footer() {
    return <div className='w-full p-8 bg-y-l'>
        <div className='max-w-6xl m-auto flex'>
            <div className='m-auto'>
                <div className='font-bold'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link>
            </div>
            <div className='m-auto flex-wrap text-center'>
                <Link className='m-auto' href='/policy'>Policy</Link> <br />
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
            </div>
        </div>
    </div>;
}