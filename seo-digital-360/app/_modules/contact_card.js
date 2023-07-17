export default function ContactCard(props) {
    return <div className='p-5 m-auto'>
        <div className='bg-black text-center p-10 drop-shadow-xl m-auto w-full text-white rounded-lg'>
            <div className='m-auto w-fit h-fit p-4' >{props.img}</div>
            <div className='text-lg font-semibold underline decoration-g-l'>{props.title}</div>
            <div>{props.descr}</div>
        </div>
    </div>;
}