export default function ContactCard(props) {
    return <div className='py-4 m-auto w-full'>
        <div className='p-4 px-6 duration-300'>
            <div className='text-white flex'>
                <div className='flex text-p-b'>
                    <div className='my-auto mr-4 scale-110 rounded-xl drop-shadow-md bg-b-m text-g-m p-3'>
                        {props.img}
                    </div>
                    {/* <div className='font-bold sm:text-2xl pt-1 text-lg my-auto'>
                        {props.title}
                    </div> */}
                </div>
                <div>
                    <div className='sm:text-xl font-bold text-b-d'>
                        {props.title}
                    </div>
                    <div className='sm:text-lg font-light text-b-d'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
</div>;
}