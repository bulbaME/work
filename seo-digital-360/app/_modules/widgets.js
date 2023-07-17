function CardTop(props) {
    return <div className='m-auto w-fit'>
        <div className='m-5 align-middle my-12 md:my-5 max-w-sm'>
            <div className='flex-wrap text-center grid text-xl font-medium w-fit'>{props.text}</div>
        </div>
    </div>;
}

export function Rating() {
    return <> 
        <div className='text-4xl p-1 mb-8 drop text-white w-fit m-auto font-extrabold mt-16 duration-300 text-center'>Trust us. We are professionals.</div>
        <div className='m-auto w-fit my-10'>
            <div className='flex flex-wrap text-center bg-zinc-950 text-white max-w-6xl w-fit mx-5 rounded-lg drop-shadow-xl p-4'>
                <CardTop text={<>Websites on the first search page receive <a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>95%</a> of clicks, with the top three results getting the majority.</>} />
                <CardTop text={<>Investing in SEO leads to an average <a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>135%</a> increase in organic traffic.</>} />
                <CardTop text={<>Structured data markup can boost click-through rates by <a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>30%</a></>} />
                <CardTop text={<>Over <a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>50%</a> of online searches are conducted on mobile devices, emphasizing the importance of mobile optimization.</>} />
                <CardTop text={<>Active local SEO efforts result in a <a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>23%</a> increase in foot traffic and a 46% rise in customer inquiries.</>} />
                <CardTop text={<><a className='w-fit m-auto my-2 font-bold text-3xl underline decoration-g-l'>70-80%</a> of users ignore paid ads and focus on organic search results.</>} />
            </div>
        </div>
    </>;
}