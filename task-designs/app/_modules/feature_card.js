export default function FeatureCard(props) {
    return <div className='text-black max-w-sm m-auto'>
        <div className='m-5 text-center p-8 drop-shadow-md hover:mt-3 hover:mb-7 duration-300'>
            <div className='font-bold text-xl mb-5'>{props.title}</div>
            <div>{props.text}</div>
        </div>
    </div>;
}