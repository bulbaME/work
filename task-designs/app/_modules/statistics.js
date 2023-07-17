function StatisticCard(props) {
    return <div className='m-auto'>
        <div className='m-10 bg-gray-900 p-5 text-white max-w-sm text-center drop-shadow-xl hover:mt-8 hover:mb-12 duration-300'>
            <div className='text-xl font-bold mb-3 w-fit m-auto'>
                <span className='underline decoration-y-l'>{props.rate}</span>{props.title}
            </div>
            <div>{props.text}</div>
        </div>
    </div>;
}

export default function Statistics() {
    return <div className='max-w-7xl m-auto p-5'>
        <div className='m-auto p-2 px-3 text-3xl font-bold bg-gray-900 text-white w-fit'>
                {/* The Power of Design:*/} Unleashing Growth and Trust
            </div>
        <div className='flex flex-wrap m-auto w-fit'>
            <StatisticCard rate='95' title='% Increase in User Engagement' text="Brands that prioritize design and user experience witness a staggering 95% increase in user engagement on their digital platforms. By focusing on intuitive navigation, appealing visuals, and seamless interactions, businesses are able to captivate their audience and encourage them to stay longer, explore more, and take desired actions." />
            <StatisticCard rate='80' title='% Boost in Conversion Rates' text="A well-designed website or landing page has the power to significantly improve conversion rates. Studies have shown that businesses that invest in professional design experience an average boost of 80% in conversion rates. By crafting compelling visuals, persuasive call-to-action buttons, and optimizing user flows, brands are able to drive more visitors to convert into customers or leads." />
            <StatisticCard rate='70' title='% Increase in Brand Trust' text="Aesthetically pleasing and cohesive design elements contribute to building brand trust and credibility. Research indicates that companies with visually consistent branding across all touchpoints see a remarkable 70% increase in brand trust among their target audience. By presenting a professional and visually appealing image, businesses can establish trust and foster long-term relationships with their customers." />
            <StatisticCard rate='65' title='% Higher Perceived Value' text="Consumers associate high-quality design with high value. A study found that products or services presented with visually appealing designs were perceived to have a 65% higher value by potential customers compared to those with average or poor design quality. By investing in design, businesses can position their offerings as premium, thus commanding higher prices and attracting a discerning clientele." />
        </div>
    </div>;
}