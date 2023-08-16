export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='text-black flex'>
            <div className='p-4 my-auto bg-gradient-to-br from-m to-b rounded-2xl text-white drop-shadow-lg mr-8'>
                {props.img}
            </div>
            <div>
                <div className='font-extrabold sm:text-3xl text-xl'>
                    {props.title}
                </div>
                <div className='sm:text-lg font-semibold'>
                    {props.text}
                </div>
            </div>
        </div>
</div>;
}