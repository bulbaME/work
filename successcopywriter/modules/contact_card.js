export default function ContactCard(props) {
    return <div className='p-4 m-auto'>
        <div className='p-6 flex bg-white rounded-lg border-[1px] border-neutral-300 hover:drop-shadow-lg duration-300'>
            <div className='p-4 my-auto mr-8 w-fit text-o-m'>
                {props.img}
            </div>
            <div className='m-auto ml-0 w-fit'>
                <div className='sm:text-5xl text-3xl font-bold text-o-m'>
                    {props.title}
                </div>
                <div className='mt-4 sm:text-2xl text-lg font-medium text-black break-words break-all'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}
