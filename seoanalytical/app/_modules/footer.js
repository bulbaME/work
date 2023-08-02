import Link from "next/link";

export default function Footer() {
    return <div className='w-full bg-p-m'>
        <div className='flex text-white w-fit m-auto opacity-80 font-light text-center p-3'>
            <div className='m-auto px-2'>
                <div className='m-auto w-fit font-semibold'>Navigation</div>
                <div className='flex'>
                    <div className='mx-1'><Link href='/'>Home</Link></div>
                    <div className='mx-1'><Link href='/contact'>Contact</Link></div>
                    <div className='mx-1'><Link href='/services'>Services</Link></div>
                    <div className='mx-1'><Link href='/about'>About</Link></div>
                </div>
            </div>
            <div className='m-auto px-2'>
                <div><Link href='/terms_&_conditions'>Terms & Conditions</Link></div>
                <div><Link href='/policy'>Policy</Link></div>
            </div>
        </div>
    </div>;
}