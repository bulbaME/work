import Link from "next/link";

import { contacts } from "@/public/json/data.json";

export default function Footer() {
    return <div className='w-full p-8 py-2 bg-white'>
        <div className='max-w-6xl m-auto flex flex-wrap'>
            <div className='m-auto px-8 py-6'>
                <div className='font-bold'>Contact us</div>
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
            <div className='m-auto py-6'>
                <div className='font-bold'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link>
            </div>
            <div className='m-auto flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link> <br />
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
            </div>
        </div>
    </div>;
}