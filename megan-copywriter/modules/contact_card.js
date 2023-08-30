export default function ContactCard(props) {
    return <div className='py-4 m-auto w-full'>
        <div className='p-4 px-6 duration-300'>
            <div className='flex'>
                <div className='flex text-p-b'>
                    <div className='my-auto mr-4 scale-110 rounded-lg border-[2px] text-b-m p-3'>
                        {props.img}
                    </div>
                    {/* <div className='font-bold sm:text-2xl pt-1 text-lg my-auto'>
                        {props.title}
                    </div> */}
                </div>
                <div>
                    <div className='sm:text-xl font-bold'>
                        {props.title}
                    </div>
                    <div className='sm:text-lg font-light'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
</div>;
}