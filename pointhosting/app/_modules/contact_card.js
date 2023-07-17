export default function ContactCard(props) {
    return <div className='p-3 m-auto flex text-b max-w-[22rem] sm:max-w-none bg-white rounded-3xl border-[0.1rem] border-b w-fit mt-4 mb-0 hover:mt-0 hover:mb-4 hover:drop-shadow-xl duration-300'>
        <div className='p-4 m-auto text-b-d'>
            {props.img}
        </div>
        <div className='p-4 m-auto'>
            <div className='font-semibold text-3xl text-b-d'>
                {props.title}
            </div>
            <div className='text-lg sm:text-xl'>
                {props.descr}
            </div>
        </div>
    </div>;
}