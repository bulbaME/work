export function Paragraph(props) {
    return <div className='md:flex my-10'>
        <img src={props.img} className='m-auto md:m-7 w-11/12 md:w-1/3 rounded-3xl md:rounded-imgrd drop-shadow-xl' />
        <div className='text-2xl m-auto p-7 font-medium'>{props.text}</div>
    </div>;
}

export function ParagraphL(props) {
    return <div className='md:flex my-10'>
        <div className='text-2xl m-auto p-7 font-medium'>{props.text}</div>
        <img src={props.img} className='m-auto md:m-7 w-11/12 md:w-1/3 rounded-3xl md:rounded-imgrd drop-shadow-xl' />
    </div>;
}