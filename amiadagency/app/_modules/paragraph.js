export function Paragraph(props) {
    return <div className='max-w-7xl m-auto p-4 flex flex-wrap my-16'>
        <div className='min-w-[20rem] sm:w-2/5 p-2 m-auto'>
            <img src={props.img} />
        </div>
        <div className='min-w-[20rem] sm:w-3/5 p-2 m-auto'>
            <div className='font-semibold text-2xl mb-2 text-p-d'>
                {props.title}
            </div>
            <div className='text-xl text-p-d'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function ParagraphL(props) {
    return <div className='max-w-7xl m-auto p-4 flex flex-wrap-reverse my-16'>
        <div className='min-w-[20rem] sm:w-3/5 p-2 m-auto'>
            <div className='font-semibold text-2xl mb-2 text-p-d'>
                {props.title}
            </div>
            <div className='text-xl text-p-d'>
                {props.text}
            </div>
        </div>
        <div className='min-w-[20rem] sm:w-2/5 p-2 m-auto'>
            <img src={props.img} />
        </div>
    </div>;
}