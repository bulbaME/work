export function FeatureCard(props) {
    return <div className='m-auto'>
        <div className='p-4 md:p-8 text-white bg-gray-950 max-w-sm sm:m-4 rounded-lg'>
            <div className='flex sm:mb-4'>
                <div className='w-fit m-auto scale-75 sm:scale-100'>
                    {props.img}
                </div>
                <div className='w-1/2 m-auto font-semibold sm:text-xl underline decoration-g-l'>
                    {props.title}
                </div>
            </div>
            <div className='text-sm sm:text-md'>
                {props.text}
            </div>
        </div>;
    </div>
}