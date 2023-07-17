export function FeatureCard(props) {
    return <div className='m-auto'> 
        <div className='bg-white p-4 m-6 text-center max-w-sm rounded-3xl duration-300 drop-shadow-lg'>
            {/* <img src={props.img} className='w-2/5 h-fit p-4 m-auto' /> */}
            <div className='w-fit h-fit p-4 m-auto'>{props.img}</div>
            <div className='font-semibold text-2xl p-4 underline decoration-v-m'>{props.title}</div>
            <div className='text-xl p-4'>{props.descr}</div>
        </div>
    </div>;
}