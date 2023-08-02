import Link from "next/link";

export function ProductCard(props) {
    return <div className='m-auto w-fit'>
        <div className='bg-gray-900 text-white p-4 m-6 text-center max-w-xs duration-300 drop-shadow-xl'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='rounded-full w-fit m-auto'>
                        <Link href={props.link}>
                            <div className='text-2xl bg-white hover:bg-y-l text-black duration-300 m-auto w-36 font-bold p-3 rounded-full'>
                                See more
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}

export function SubProductCard(props) {
    return <div className='m-auto w-fit'>
        <div className='bg-gray-900 text-white p-4 m-6 text-center max-w-xs duration-300 drop-shadow-xl'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-2xl font-bold m-auto my-2 mb-1 flex w-fit'><a className='underline decoration-y-l mx-1.5'>{props.price}</a> / project</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='rounded-full w-fit m-auto'>
                        <Link href='/contact#contact-us'>
                            <div className='text-2xl hover:bg-y-l bg-white text-black duration-300 m-auto w-36 font-bold p-3 rounded-full'>
                                Select
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}
