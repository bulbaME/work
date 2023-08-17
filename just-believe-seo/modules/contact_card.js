export default function ContactCard(props) {
    return <div className='p-4 m-auto sm:w-auto w-full'>
        <div className='border-[1px] border-neutral-300 bg-white hover:drop-shadow-lg duration-300 p-4 rounded-2xl'>
            <div className='flex w-fit m-auto'>
                <div className='sm:text-2xl text-lg font-bold text-b my-auto'>
                    {props.title}
                </div>
                <div className='pl-2 my-auto w-fit text-b'>
                    {props.img}
                </div>
            </div>
            <div className='mt-2 sm:text-xl font-semibold text-center'>
                {props.text}
            </div>
        </div>
    </div>;
}
