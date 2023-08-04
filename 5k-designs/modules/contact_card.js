export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='p-4 border-[1px] border-black'>
            <div className='text-black'>
                <div className='flex mb-4'>
                    <div className='my-auto mr-4'>
                        {props.img}
                    </div>
                    <div className='font-bold sm:text-2xl text-lg my-auto underline decoration-g-m decoration-4'>
                        {props.title}
                    </div>
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