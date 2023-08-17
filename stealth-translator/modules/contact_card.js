export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='text-white flex'>
            <div className='p-4 my-auto text-m-m border-[1px] border-neutral-600 mr-8 bg-black'>
                {props.img}
            </div>
            <div>
                <div className='font-bold sm:text-3xl text-xl'>
                    {props.title}
                </div>
                <div className='sm:text-lg font-light'>
                    {props.text}
                </div>
            </div>
        </div>
</div>;
}