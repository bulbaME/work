function CardTop(props) {
    return <div className='m-auto w-fit'>
        <div className='m-5 align-middle my-12 md:my-5 max-w-sm'>
            <div className='flex-wrap text-center grid text-xl font-medium w-fit'>{props.text}</div>
        </div>
    </div>;
}

export function Rating() {
    return <> 
        <div className='text-4xl p-1 mb-8 drop underline decoration-g-l w-fit m-auto font-extrabold mt-16 duration-300'>Trust us. We are professionals.</div>
        <div className='m-auto w-fit my-10'>
            <div className='flex flex-wrap text-center bg-white max-w-4xl w-fit mx-5 rounded-3xl drop-shadow-lg'>
                <CardTop text={<><a className='w-fit m-auto font-bold text-3xl underline decoration-v-l'>95%</a> of Clients Experience Improved Global Communication and Business Expansion</>} />
                <CardTop text={<>Professional Translations Yield a <a className='w-fit m-auto font-bold text-3xl underline decoration-v-l'>30%</a> Increase in International Customer Engagement</>} />
                <CardTop text={<>Over<a className='w-fit m-auto font-bold text-3xl underline decoration-v-l'>10,000</a> Documents Translated Successfully for Seamless Cross-Border Collaboration</>} />
                <CardTop text={<>Website Localization Spurs a<a className='w-fit m-auto font-bold text-3xl underline decoration-v-l'>50%</a> Boost in Online Sales Conversions</>} />
                <CardTop text={<><a className='w-fit m-auto font-bold text-3xl underline decoration-v-l'>98%</a> Express Confidence in the Accuracy and Quality of Our Translations</>} />
            </div>
        </div>
    </>;
}