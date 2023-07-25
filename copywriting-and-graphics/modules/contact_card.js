export default function ContactCard(props) {
    return <div className='p-4 m-auto w-full'>
        <div className='text-white rounded-[2rem] p-4 text-center bg-2 drop-shadow-xl'>
            <div className='m-auto text-white w-fit my-2'>
                {props.img}
            </div>
            <div className='font-bold sm:text-4xl text-2xl my-4'>
                {props.title}
            </div>
            <div className='sm:text-xl text-r-l'>
                {props.descr}
            </div>
        </div>
</div>;
}