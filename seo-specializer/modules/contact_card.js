export default function ContactCard(props) {
    return <div className='p-4 m-auto md:w-fit ml-0'>
        <div className='text-white flex'>
            <div className='p-4 my-auto text-v1-l text-black bg-white mr-8 rounded-lg'>
                {props.img}
            </div>
            <div>
                <div className='font-bold text-3xl'>
                    {props.title}
                </div>
                <div className='text-xl font-semibold text-y-d'>
                    {props.text}
                </div>
            </div>
        </div>
</div>;
}