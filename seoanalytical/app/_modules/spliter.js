export function SpliterSvg(props) {
    return <div className='relative max-w-7xl m-auto w-full overflow-hidden'>
        <div className='absolute left-1/2 -translate-x-1/2'>
            {props.svg}
        </div>
        <div className={`w-20 h-[24rem]`} />
    </div>;
}