import Link from "next/link";

export function ProductCard(props) {
    return <div className='m-auto'>
        <div className='bg-white p-4 m-6 text-center max-w-xs rounded-3xl duration-300 drop-shadow-lg'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='rounded-full w-fit m-auto'>
                        <Link href={props.link}>
                            <div className='text-2xl bg-v-m hover:drop-shadow-xl text-white duration-300 m-auto w-36 font-bold p-3 rounded-full'>
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
        <div className='bg-white p-4 m-6 text-center max-w-xs rounded-3xl duration-300 drop-shadow-lg'>
            <div className='text-2xl font-bold m-4 mb-1'>{props.title}</div>
            <div className='text-2xl font-bold m-auto my-2 mb-1 flex w-fit'><a className='underline decoration-v-l mx-1.5'>{props.price}</a> / hour</div>
            <div className='text-lg m-4'>{props.descr}</div>
                <div className='w-full p-4'>
                    <div className='rounded-full w-fit m-auto'>
                        <Link href='/contact'>
                            <div className='text-2xl bg-v-m hover:drop-shadow-xl text-white duration-300 m-auto w-36 font-bold p-3 rounded-full'>
                                Select
                            </div>
                        </Link> 
                    </div>
                </div>
        </div>
    </div>;
}