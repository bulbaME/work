export default function ContactCard(props) {
    return <div className='py-4 m-auto w-full'>
        <div className='p-4 px-6 border-[1px] rounded-full bg-white hover:drop-shadow-lg duration-300'>
            <div className='text-black flex'>
                <div className='flex text-p-b'>
                    <div className='my-auto mr-4 scale-110 text-gm'>
                        {props.img}
                    </div>
                    {/* <div className='font-bold sm:text-2xl pt-1 text-lg my-auto'>
                        {props.title}
                    </div> */}
                </div>
                <div>
                    <div className='sm:text-lg font-medium'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
</div>;
}