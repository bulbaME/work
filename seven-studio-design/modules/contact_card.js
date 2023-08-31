export default function ContactCard(props) {
    return <div className='py-4 m-auto w-full'>
        <div className='p-4 px-6 duration-300'>
            <div className='flex'>
                <div className='flex'>
                    <div className='my-auto mr-4 scale-110 text-white bg-gradient-to-br from-m to-p drop-shadow-lg rounded-2xl p-3'>
                        {props.img}
                    </div>
                </div>
                <div>
                    <div className='sm:text-xl text-lg font-bold'>
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