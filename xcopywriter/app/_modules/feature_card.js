export default function FeatureCard(props) {
    return <div className='m-auto'> 
        <div className='bg-white p-4 m-6 text-center max-w-sm rounded-3xl duration-300 drop-shadow-lg'>
            <div className='flex text-left align-middle'>
                <img src={props.img} className='w-2/5 h-fit p-4 m-auto' />
                <div className='font-semibold text-2xl p-4'>{props.title}</div>
            </div>
            <div className='text-lg p-4'>{props.descr}</div>
        </div>
    </div>;
}