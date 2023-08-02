export default function ContactCard(props) {
    return <div className='p-5 m-auto w-full sm:w-fit'>
        <div className='bg-gray-900 text-center p-5 drop-shadow-xl m-auto text-white'>
            <div className='m-auto w-fit h-fit p-4' >{props.img}</div>
            <div className='text-lg font-semibold underline decoration-y-l'>{props.title}</div>
            <div>{props.descr}</div>
        </div>
    </div>;
}