export default function ContactCard(props) {
    return <div className='p-5 m-auto flex text-p-d w-fit ml-0'>
        <div className='p-4 m-auto'>
            {props.img}
        </div>
        <div className='p-4 m-auto'>
            <div className='font-semibold text-3xl'>
                {props.title}
            </div>
            <div className='text-lg sm:text-xl'>
                {props.descr}
            </div>
        </div>
    </div>;
}