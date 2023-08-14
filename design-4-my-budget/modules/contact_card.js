export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='flex'>
            <div className='p-4 my-auto text-v1-l text-white rounded-2xl drop-shadow-lg bg-gradient-to-br from-g-l to-g-m mr-4'>
                {props.img}
            </div>
            <div>
                <div className='font-extrabold sm:text-2xl text-lg'>
                    {props.title}
                </div>
                <div className='sm:text-base text-sm font-medium'>
                    {props.text}
                </div>
            </div>
        </div>
</div>;
}