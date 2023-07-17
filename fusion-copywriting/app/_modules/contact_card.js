export default function ContactCard(props) {
    return <div className='p-5 m-auto'>
        <div className='bg-white text-center p-5 rounded-3xl drop-shadow-xl m-auto'>
            <div className='m-auto w-fit h-fit p-4 scale-150' >{props.svg}</div>
            <div className='text-xl font-semibold'>{props.title}</div>
            <div>{props.descr}</div>
        </div>
    </div>;
}