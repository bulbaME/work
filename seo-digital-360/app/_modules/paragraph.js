export function Paragraph(props) {
    return <div className='bg-zinc-950 w-full'>
        <div className='max-w-7xl m-auto md:flex'>
            <div className='md:w-1/2 p-10 md:p-5 m-auto'>
                <img src={props.img} />
            </div>
            <div className='p-10 md:p-5 md:w-1/2 text-white h-fit m-auto'>
                <div className='lg:text-3xl md:text-2xl text-xl mb-5 font-bold underline decoration-g-l'>{props.title}</div>
                <div className='lg:text-xl md:text-lg text-md'>{props.text}</div>
            </div>
        </div>
    </div>;
}

export function ParagraphLight(props) {
    return <div className='w-full'>
        <div className='max-w-7xl m-auto md:flex'>
            <div className='md:w-1/2 p-10 md:p-5 m-auto'>
                <img src={props.img} className='drop-shadow-xl' />
            </div>
            <div className='p-10 md:p-5 md:w-1/2 h-fit m-auto'>
                <div className='lg:text-3xl md:text-2xl text-xl mb-5 font-bold underline decoration-y-l'>{props.title}</div>
                <div className='lg:text-xl md:text-lg text-md'>{props.text}</div>
            </div>
        </div>
    </div>;
}

export function ParagraphL(props) {
    return <div className='bg-zinc-950 w-full'>
        <div className='max-w-7xl m-auto md:flex'>
            <div className='p-10 md:p-5 md:w-1/2 text-white h-fit m-auto'>
                <div className='lg:text-3xl md:text-2xl text-xl mb-5 font-bold underline decoration-g-l'>{props.title}</div>
                <div className='lg:text-xl md:text-lg text-md'>{props.text}</div>
            </div>
            <div className='md:w-1/2 p-10 md:p-5 m-auto'>
                <img src={props.img} />
            </div>
        </div>
    </div>;
}

export function ParagraphLightL(props) {
    return <div className='w-full'>
        <div className='max-w-7xl m-auto md:flex'>
            <div className='p-10 md:p-5 md:w-1/2 h-fit m-auto'>
                <div className='lg:text-3xl md:text-2xl text-xl mb-5 font-bold underline decoration-y-l'>{props.title}</div>
                <div className='lg:text-xl md:text-lg text-md'>{props.text}</div>
            </div>
            <div className='md:w-1/2 p-10 md:p-5 m-auto'>
                <img src={props.img} className='drop-shadow-xl' />
            </div>
        </div>
    </div>;
}