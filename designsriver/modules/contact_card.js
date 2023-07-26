export default function ContactCard(props) {
    return <div className='p-4 m-auto min-w-[20rem]'>
    <div className='p-8 rounded-[2rem] bg-white drop-shadow-lg'>
        <div className='p-4 m-auto w-fit'>
            {props.img}
        </div>
        <div className='sm:text-4xl text-2xl sm:mt-8 font-bold text-center drop-shadow-md'>
            {props.title}
        </div>
        <div className='text-center mt-4 sm:text-2xl text-lg font-medium text-b'>
            {props.text}
        </div>
    </div>
</div>;
}