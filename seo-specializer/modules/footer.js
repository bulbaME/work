import Link from "next/link";

import { contacts } from "@/public/json/data.json";

export default function Footer() {
    return <div className='w-full p-8 py-2 bg-black text-white sm:text-base text-sm'>
        <div className='max-w-7xl m-auto flex md:flex-nowrap flex-wrap'>
            <div className='m-auto py-6 px-8 md:ml-auto ml-0'>
                <div className='font-bold mb-2'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link>
            </div>
            <div className='m-auto px-8 py-6 ml-0 md:w-1/4'>
                <div className='font-bold mb-2'>Contact us</div>
                <div>
                    Phone: {contacts.phone}
                </div>
                <div>
                    E-mail: {contacts.mail}
                </div>
                <div>
                    Adress: {contacts.adress}
                </div>
            </div>
            <div className='m-auto py-6 px-8 sm:ml-auto ml-0 md:w-2/5'>
                <div className='font-bold mb-2'>{"© 2023 SeoSpecializer. All rights reserved."}</div>
                {"At SeoSpecializer, we're dedicated to your online success through expert SEO strategies. With transparency, innovation, and proven results, we empower your brand to thrive in the digital landscape."}
            </div>
        </div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
            </div>
    </div>;
}