export default function FeedbackCard(props) {
    return <div className='m-10 max-w-2xl bg-gray-900 text-white p-5 flex '>
        <img className='w-1/4 m-auto mb-0 sm:mb-auto' src={props.img} />
        <div className='sm: w-3/4 ml-5'>
            <div className='mb-5'>{props.text}</div>
            <div className='font-bold'>{props.author}</div>
        </div>
    </div>;
}