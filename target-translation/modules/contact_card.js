export default function ContactCard(props) {
    return <div className='p-8 m-auto w-full'>
        <div className='text-black bg-white p-4 drop-shadow-xl'>
            <div className='p-4 m-auto text-v1-l w-fit text-black'>
                {props.img}
            </div>
            <div className='font-extrabold text-3xl sm:text-5xl underline decoration-c-l w-fit m-auto'>
                {props.title}
            </div>
            <div className='text-xl sm:text-3xl mt-4 w-fit m-auto font-bold text-center'>
                {props.descr}
            </div>
        </div>
</div>;
}