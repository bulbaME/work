export function Rect(props) {
    return <div className='m-auto w-fit relative p-0 text-center my-8'>
        <div className='absolute mt-4 ml-4 m-0 w-[20rem] h-[20rem] bg-b-l opacity-50' />
        <div className='m-0 relative w-[20rem] h-[20rem] bg-b-l p-3'>
            <div className='text-white font-semibold text-xl'>
                {props.inner}
            </div>
        </div>
    </div>;
}

export function Circle(props) {
    return <div className='m-auto w-fit relative p-4 text-center'>
        <div className='absolute mt-8 ml-8 m-2 w-[17rem] h-[17rem] bg-p-m opacity-50 rounded-full' />
        <div className='m-4 relative w-[17rem] h-[17rem] bg-p-m p-3 rounded-full flex'>
            <div className='text-white p-8 text-lg font-semibold w-fit h-fit m-auto'>
                {props.inner}
            </div>
        </div>
    </div>;
}