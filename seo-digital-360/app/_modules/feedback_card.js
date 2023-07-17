export function FeedbackCard(props) {
    return <div className='m-auto w-fit'>
        <div className='m-4 p-6 my-8 bg-black drop-shadow-xl text-white max-w-xs md:max-w-sm rounded-lg'>
            <div className='flex'>
                <div className='w-1/3'>
                    <img className='rounded-full' src={props.img} />
                </div>
                <div className='font-semibold text-xl sm:text-2xl m-auto mx-4'>
                    {props.title}
                </div>
            </div>
            <div className='mt-5 text-sm sm:text-md md:text-xl'>
                {props.text}
            </div>
        </div>
    </div>;
}