import Link from "next/link";

import { contacts } from "@/public/json/data.json";

export default function Footer() {
    return <div className='w-full p-8 py-2 bg-white text-black sm:text-base text-sm'>
        <div className='max-w-7xl m-auto flex md:flex-nowrap flex-wrap'>
            <div className='m-auto py-6 px-8 sm:ml-auto ml-0'>
                <div className='font-bold'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link>
            </div>
            <div className='m-auto px-8 py-6 ml-0'>
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
            <div className='m-auto py-6 px-8 sm:ml-auto ml-0 md:w-1/3'>
                {"Translator Daddy - Breaking Barriers, Empowering Communication. Contact us for inquiries or explore our services. © 2023 Translator Daddy. All rights reserved."}
            </div>
        </div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
            </div>
    </div>;
}