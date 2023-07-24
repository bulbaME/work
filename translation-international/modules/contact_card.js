export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='text-black flex'>
            <div className='p-4 my-auto text-v1-l text-black bg-y-l mr-8'>
                {props.img}
            </div>
            <div>
                <div className='font-bold text-3xl'>
                    {props.title}
                </div>
                <div className='text-xl font-semibold text-y-d'>
                    {props.descr}
                </div>
            </div>
        </div>
</div>;
}