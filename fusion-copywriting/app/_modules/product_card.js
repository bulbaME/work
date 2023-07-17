import Link from "next/link";

export function ProductCard(props) {
    return <div className='m-auto'>
        <div className='bg-white p-4 m-6 hover:mt-2 hover:mb-10 text-center max-w-xxs rounded-3xl duration-300 hover:drop-shadow-lg'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='background-3 rounded-full w-fit m-auto'>
                        <Link href={props.link}>
                            <div className='text-2xl duration-300 m-auto w-36 font-bold  bg-csblue-l p-4 rounded-full hover:bg-opacity-0'>
                                See more
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}

export function SubProductCard(props) {
    return <div className='m-auto'>
        <div className='bg-white p-4 m-6 hover:mt-2 hover:mb-10 text-center rounded-3xl duration-300 hover:drop-shadow-lg'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-2xl font-bold m-4 mb-1'><a className='underline decoration-cspink'>{props.price}</a> / hour</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='background-3 rounded-full w-fit m-auto'>
                        <Link href='/contact'>
                            <div className='text-2xl duration-300 m-auto w-36 font-bold  bg-csblue-l p-4 rounded-full hover:bg-opacity-0'>
                                Select
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}