export default function ContactCard(props) {
    return <div className='py-4 m-auto w-full'>
        <div className='p-4 bg-white rounded-xl drop-shadow-lg'>
            <div className='text-black'>
                <div className='flex mb-4 text-p-b'>
                    <div className='my-auto mr-4 scale-110'>
                        {props.img}
                    </div>
                    <div className='font-bold sm:text-2xl pt-1 text-lg my-auto'>
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