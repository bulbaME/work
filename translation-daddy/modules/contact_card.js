export default function ContactCard(props) {
    return <div className='p-4 m-auto sm:w-auto w-full'>
        <div className='border-[1px] duration-300 p-4 rounded-2xl bg-white'>
            <div className='flex w-fit'>
                <div className='pr-4 my-auto w-fit text-b-m'>
                    {props.img}
                </div>
                <div className='sm:text-2xl text-lg font-bold text-b-m my-auto'>
                    {props.title}
                </div>
            </div>
            <div className='mt-2 sm:text-xl font-semibold text-b-d'>
                {props.text}
            </div>
        </div>
    </div>;
}
