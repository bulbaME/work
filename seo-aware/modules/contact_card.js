export default function ContactCard(props) {
    return <div className='p-4 m-auto min-w-[20rem]'>
        <div className='p-8 flex'>
            <div className='p-4 my-auto mr-8 w-fit text-g-m'>
                {props.img}
            </div>
            <div className='m-auto ml-0 w-fit'>
                <div className='sm:text-5xl text-3xl font-bold text-white'>
                    {props.title}
                </div>
                <div className='mt-4 sm:text-2xl text-lg font-medium text-g-m'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}
