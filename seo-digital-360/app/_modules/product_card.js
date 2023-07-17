import Link from "next/link";

export function ProductCard(props) {
    return <div className='m-auto w-fit'>
        <div className='bg-zinc-950 rounded-lg text-white p-4 m-6 text-center max-w-sm duration-300 drop-shadow-xl'>
            <div className='text-2xl font-bold m-4 mb-1 underline decoration-g-l'>{props.title}</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='rounded-full w-fit m-auto'>
                        <Link href={props.link}>
                            <div className='text-2xl bg-white hover:bg-g-l text-black duration-300 m-auto w-36 font-bold p-3 rounded-full'>
                                See more
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}

function PriceMod(props) {
    return <>
        <div className='text-xl sm:text-5xl m-auto font-bold w-fit h-fit text-left hidden sm:flex'>
            <div className='underline decoration-g-l'>{props.price}</div>
            <div className='m-auto'>
                <div className='absolute mt-5 ml-1'>/</div>
                <br />
                <div className='text-xl sm:text-5xl ml-6'>per month</div>
            </div>
        </div>
        <div className='text-3xl m-auto font-bold w-fit h-fit text-center sm:hidden'>
            <div className='underline decoration-g-l'>{props.price}</div>
            <div className='my-2'>/</div>
            <div className='text-3xl'>per month</div>
        </div>
    </>;
}

export function SubProductCard(props) {
    return <div className='m-auto w-fit'>
        <div className='bg-zinc-950 rounded-lg text-white m-6 text-center duration-300 drop-shadow-xl'>
            <div className='flex'>
                <div className='w-1/3 p-4 flex items-center text-center'>
                    <PriceMod price={props.price} />
                </div>
                <div className='w-2/3 sm:p-4 text-left'>
                    <div className='text-xl sm:text-3xl font-bold m-4 mb-1'>{props.title}</div>
                    <div className='text-sm sm:text-xl m-4'>{props.descr}</div>
                </div>
            </div>
            <div className='w-full p-4'>
                        <div className='rounded-full w-fit m-auto sm:mb-4'>
                            <Link href='/contact#contact-us'>
                                <div className='text-xl sm:text-2xl hover:bg-g-l bg-white text-black duration-300 m-auto font-bold p-1 px-2 sm:p-3 sm:px-5 rounded-full'>
                                    Select
                                </div>
                            </Link> 
                        </div>
                    </div>
        </div>
    </div>;
}