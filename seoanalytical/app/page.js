import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ButtonLG } from "./_modules/buttons";
import { SpliterSvg } from "./_modules/spliter";
import { FeedbackWidget, ServiceWidget, WidgetFeatures } from "./_modules/widgets";
import { Circle, Rect } from "./_modules/box";
import { Paragraph, ParagraphL } from "./_modules/paragraph";

export default function Main() {
    return <>
        <Header page={1} />
        <div className='flex max-w-6xl m-auto p-3 mt-16 flex-wrap'>
            <div className='text-p-d text-4xl sm:w-1/2 font-semibold text-center p-4 m-auto'>
                {"Unlock Your Website's Potential with Powerful SEO Strategies - Let's Boost Your Online Success Today!"}
            </div>
            <div className='mt-8 w-fit m-auto h-fit'>
                <ButtonLG text={<div>Begin your seo <br /> journey today!</div>} route='/contact' />
            </div>
        </div>
        <SpliterSvg svg={
            <svg className='overflow-hidden' xmlns="http://www.w3.org/2000/svg" width="1280" height="321" viewBox="-50 -50 1330 371" fill="none">
            <path d="M-78.3333 54C-78.3333 83.4552 -54.4552 107.333 -25 107.333C4.45519 107.333 28.3333 83.4552 28.3333 54C28.3333 24.5448 4.45519 0.666668 -25 0.666668C-54.4552 0.666668 -78.3333 24.5448 -78.3333 54ZM985.292 186L985.634 176.006L985.292 186ZM1199.67 267C1199.67 296.455 1223.54 320.333 1253 320.333C1282.46 320.333 1306.33 296.455 1306.33 267C1306.33 237.545 1282.46 213.667 1253 213.667C1223.54 213.667 1199.67 237.545 1199.67 267ZM-27.5171 63.678C120.731 102.235 189.877 134.702 244.445 163.822C299.458 193.18 341.138 220.017 432.951 246.119L438.42 226.881C349.08 201.483 309.407 175.82 253.861 146.178C197.869 116.298 127.248 83.2648 -22.4829 44.322L-27.5171 63.678ZM432.951 246.119C526.048 272.586 632.693 258.318 731.07 238.682C755.75 233.755 780.027 228.463 803.502 223.351C827.01 218.232 849.695 213.297 871.345 209.047C914.792 200.518 953.299 194.911 984.95 195.994L985.634 176.006C951.539 174.839 911.117 180.857 867.492 189.422C845.605 193.718 822.717 198.698 799.246 203.809C775.742 208.928 751.635 214.182 727.155 219.068C628.888 238.682 526.475 251.914 438.42 226.881L432.951 246.119ZM984.95 195.994C1087.83 199.515 1203.29 250.553 1248.1 275.719L1257.9 258.281C1211.9 232.447 1093.14 179.685 985.634 176.006L984.95 195.994Z" fill="#F5B0B0"/>
            </svg>
        } />
        <WidgetFeatures />
        <div className='py-10'>
            <Paragraph img='/img/17.png' title='Boost Your Online Visibility with Expert SEO Services' text="In today's digital age, having a strong online presence is crucial for businesses of all sizes. If you want to stand out from the competition and attract more customers, you need effective search engine optimization (SEO) strategies. At Seoanalytical, we specialize in providing expert SEO services that can help your website rank higher in search engine results, drive targeted traffic, and increase conversions. Our team of experienced professionals stays up-to-date with the latest SEO trends and techniques to ensure maximum visibility for your online business. Whether you're a small local business or a multinational corporation, we have the knowledge and expertise to take your website to new heights." />
            <ParagraphL img='/img/18.png' title='Tailored SEO Solutions for Your Unique Business Needs' text="At Seoanalytical, we understand that every business is unique and has specific goals and target audiences. That's why we offer customized SEO solutions that are tailored to your business needs. Our team takes the time to thoroughly analyze your website, industry, competition, and target market to develop a personalized SEO strategy that aligns with your objectives. Whether you need on-page optimization, content marketing, link building, or local SEO, we have the tools and expertise to deliver results. With our tailored approach, you can rest assured that you're investing in SEO services that are designed to drive real, measurable success for your business." />
            <Paragraph img='/img/19.png' title='Stay Ahead of the SEO Curve with Our Cutting-Edge Techniques' text="The world of SEO is constantly evolving, with search engines updating their algorithms and ranking factors regularly. To keep your website ahead of the curve, you need an SEO partner that stays on top of these changes and adapts strategies accordingly. At [Your SEO Website Name], we pride ourselves on being at the forefront of the SEO industry. Our team of SEO experts constantly monitors industry trends, conducts in-depth research, and tests new techniques to ensure that our clients benefit from the latest advancements in SEO. With our cutting-edge strategies, you can stay one step ahead of your competitors and achieve long-term success in the ever-changing digital landscape." />
        </div>
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="244" viewBox="-50 -50 1292 294" fill="none">
            <path d="M0 100.172L134.389 133.931L96.4303 0.667757L0 100.172ZM935.5 66.3641L934.258 78.2997L935.5 66.3641ZM1166.32 133.521L1241.06 243.5L1310.94 123.845L1178.43 112.796L1166.32 133.521ZM101.995 82.4436C120.116 85.2939 138.496 92.3537 159.907 101.833C180.947 111.149 205.124 122.909 233.029 133.81C289.537 155.885 362.721 175.091 469.532 170.352L468.468 146.376C365.444 150.947 295.596 132.485 241.762 111.455C214.496 100.803 191.673 89.6509 169.623 79.8882C147.944 70.2893 127.142 62.1039 105.724 58.7351L101.995 82.4436ZM469.532 170.352C618.028 163.764 680.957 134.448 734.292 109.754C760.515 97.6123 783.327 87.172 813.037 80.9534C842.709 74.7425 879.877 72.6402 934.258 78.2997L936.742 54.4286C880.623 48.5881 840.854 50.6108 808.12 57.4624C775.423 64.3063 750.36 75.866 724.208 87.9747C672.793 111.78 612.972 139.964 468.468 146.376L469.532 170.352ZM934.258 78.2997C1032.99 88.5748 1117.67 114.283 1177.99 140.232L1187.48 118.186C1125.1 91.354 1038.07 64.9739 936.742 54.4286L934.258 78.2997Z" fill="#F5B0B0"/>
            </svg>
        } />
        <ServiceWidget />
        <div className='my-52' />
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="121" viewBox="0 0 1242 121" fill="none">
            <path d="M1242 31L1148.59 0.880273L1169.21 96.8388L1242 31ZM1.99031 92.2007C51.0191 86.4494 150.142 77.677 253.69 76.2576C357.624 74.8329 464.596 80.8594 530.17 104.015L535.83 87.985C467.081 63.708 357.312 57.8356 253.457 59.2592C149.215 60.6881 49.4982 69.5112 0.00969059 75.3165L1.99031 92.2007ZM530.17 104.015C561.262 114.995 603.805 119.909 652.782 120.67C701.919 121.432 758.203 118.015 817.14 111.946C935.021 99.8078 1064.1 76.9982 1168.94 55.3952L1165.51 38.745C1060.96 60.2869 932.498 82.9777 815.399 95.0357C756.845 101.065 701.279 104.42 653.046 103.672C604.654 102.921 564.307 98.0409 535.83 87.985L530.17 104.015Z" fill="#8FC3D9"/>
            </svg>
        } />
        <FeedbackWidget />
        <div className='flex flex-wrap max-w-7xl m-auto p-8 my-24 text-center'>
            <div className='text-5xl sm:w-2/3 my-10 font-semibold text-p-d'>
                {"Don't Let Your Competitors Outrank You - Act Now!"}
            </div>
            <ButtonLG route='/contact' text='Reach us today!' />
        </div>
        <Footer />
    </>;
}