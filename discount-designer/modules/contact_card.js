export default function ContactCard(props) {
    return <div className='p-5 m-auto flex text-p-d w-fit ml-0 text-white'>
        <div className='p-4 m-auto text-v1-l'>
            {props.img}
        </div>
        <div className='p-4 m-auto'>
            <div className='font-semibold text-3xl sm:text-5xl underline decoration-v1-m'>
                {props.title}
            </div>
            <div className='text-lg sm:text-2xl sm:mt-4'>
                {props.descr}
            </div>
        </div>
    </div>;
}