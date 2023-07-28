export default function ContactCard(props) {
    return <div className='p-4 m-auto min-w-[20rem]'>
        <div className='md:p-8 py-8 flex'>
            <div className='p-4 my-auto mr-8 w-fit text-b-m'>
                {props.img}
            </div>
            <div className='m-auto ml-0 w-fit'>
                <div className='sm:text-5xl text-3xl font-bold text-b-m'>
                    {props.title}
                </div>
                <div className='mt-4 sm:text-2xl text-lg font-medium text-b-d'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>;
}
