import Link from "next/link";

import { contacts } from "@/public/json/data.json";

export default function Footer() {
    return <div className='w-full p-8 py-2 bg-white text-black sm:text-base text-sm'>
        <div className='max-w-7xl m-auto flex md:flex-nowrap flex-wrap'>
            <div className='m-auto py-6 px-8 md:ml-auto ml-0'>
                <div className='font-bold mb-2 text-p-b'>Navigation</div>
                <Link href='/'>Home</Link> <br />
                <Link href='/contact'>Contact</Link> <br />
                <Link href='/services'>Services</Link> <br />
                <Link href='/about'>About</Link> <br />
                <Link href='/faq'>FAQ</Link>
            </div>
            <div className='m-auto px-8 py-6 ml-0 md:w-1/5 w-2/3'>
                <div className='font-bold mb-2 text-p-b'>Contact us</div>
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
                <div className='font-bold mb-2 text-p-b'>{"© 2023 TranslationInbox. All rights reserved."}</div>
                {"At TranslationInbox, we're committed to transcending linguistic barriers and fostering meaningful connections across languages. Our expert linguists and dedicated team ensure that your message retains its essence and impact, no matter where it's heard. Join us in unlocking the boundless potential of global communication. "}
            </div>
        </div>
        <div className='m-auto flex flex-wrap w-fit py-6'>
                <Link className='m-auto' href='/policy'>Policy</Link>
                <div className='mx-2'>|</div>
                <Link className='m-auto' href='terms-&-conditions'>Terms & Conditions</Link>
            </div>
    </div>;
}