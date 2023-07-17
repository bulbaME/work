export default function PageTitle(props) {
    return <div className='max-w-3xl m-auto'>
        <div className='background-1 m-6 text-5xl p-6 text-center text-white font-semibold'>
            {props.text}
        </div>
    </div>
}