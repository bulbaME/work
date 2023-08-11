export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='text-white flex'>
            <div className='p-4 my-auto text-v1-l text-white rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-r-o to-o-y mr-8'>
                {props.img}
            </div>
            <div>
                <div className='font-bold sm:text-3xl text-xl'>
                    {props.title}
                </div>
                <div className='sm:text-lg font-semibold text-y-d'>
                    {props.text}
                </div>
            </div>
        </div>
</div>;
}