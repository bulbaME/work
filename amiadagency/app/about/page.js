import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";

import { SpliterSvg } from "../_modules/spliter";
import { Paragraph, ParagraphL } from "../_modules/paragraph";
import { ButtonLG } from "../_modules/buttons";
import { ServiceWidget } from "../_modules/widgets";

export default function Main() {
    return <>
        <Header page={4} />
        <div className='w-fit m-auto text-5xl font-bold p-16 text-center text-p-d'>
            About our company
            <div className='mt-8 text-3xl font-medium opacity-80'>Learn about us!</div>
        </div>
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="153" viewBox="-50 -50 1230 203" fill="none">
            <path d="M0 150L86.5743 152.212L45.2029 76.1304L0 150ZM715.5 66.4999L717.841 73.6251L715.5 66.4999ZM1066 24L1066 16.5L1066 24ZM1313.5 57.9998L1248.82 0.410928L1231.29 85.22L1313.5 57.9998ZM62.3474 124.606C113.648 101.879 181.242 88.5197 293.38 113.323L296.62 98.6769C181.723 73.2635 110.824 86.7242 56.2717 110.891L62.3474 124.606ZM293.38 113.323C455.881 149.265 586.457 116.794 717.841 73.6251L713.159 59.3747C582.543 102.292 455.119 133.734 296.62 98.6769L293.38 113.323ZM717.841 73.6251C752.055 62.3834 814.149 51.8222 880.572 44.0744C946.835 36.3454 1016.65 31.5 1066 31.5L1066 16.5C1015.89 16.5 945.456 21.4045 878.834 29.1754C812.372 36.9277 748.945 47.6164 713.159 59.3747L717.841 73.6251ZM1066 31.5C1120.57 31.5 1192.8 42.0374 1246.05 51.7112L1248.73 36.9527C1195.32 27.2507 1121.99 16.5 1066 16.5L1066 31.5Z" fill="#F5B0B0"/>
            </svg>
        } />
        <div className='mb-24 -mt-24 max-w-7xl m-auto'>
            <Paragraph img='/img/24.png' title='Our Mission' text="At Amiadagency, our mission is to empower businesses with the tools and strategies they need to succeed in the ever-evolving digital landscape. We are passionate about helping our clients achieve their online goals and maximize their online presence. With our expertise in search engine optimization (SEO) and digital marketing, we strive to provide innovative solutions that drive results and deliver exceptional value to our clients." />
            <ParagraphL img='/img/25.png' title='Our Expert Team' text="Behind Amiadagency is a team of experienced professionals who are dedicated to staying at the forefront of the SEO industry. Our team comprises SEO strategists, content creators, web developers, and digital marketing specialists who bring a wealth of knowledge and expertise to every project. We are committed to continuous learning and keeping up with the latest trends and algorithms to ensure our clients receive cutting-edge strategies and tactics that drive tangible results." />
            <Paragraph img='/img/26.png' title='Our Approach' text="At Amiadagency, we believe in a collaborative approach that puts our clients' goals and objectives at the forefront. We begin by understanding your unique business needs, target audience, and industry landscape. Based on this knowledge, we develop customized strategies and solutions that align with your specific requirements. Throughout the process, we maintain open lines of communication, provide regular progress updates, and ensure transparency in our actions and results." />
            <ParagraphL img='/img/27.png' title="Let's Work Together" text="Are you ready to take your online presence to the next level? Partner with Amiadagency today and discover the power of effective SEO strategies. Whether you are looking to increase website traffic, improve search engine rankings, or boost conversions, our team is ready to help you achieve your goals. Contact us for a consultation and let's embark on a journey towards online success together." />
            <div className='p-8'>
                <ButtonLG route='/contact' text='Contact us now' />
            </div>
        </div> 
        <SpliterSvg svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="226" viewBox="-50 -50 1330 276" fill="none">
            <path d="M2.91315 175.135L106.635 152.587L84.0869 48.8649L-19.6351 71.4132L2.91315 175.135ZM1335.27 128.333L1237.83 86.23L1195.73 183.667L1293.17 225.77L1335.27 128.333ZM54.4353 119.03C66.6593 100.015 82.1027 70.019 105.773 49.9856C117.222 40.2957 129.872 33.6817 144.135 32.031C158.3 30.3917 175.498 33.4788 196.438 45.7225L209.562 23.2776C184.752 8.77119 161.95 3.79579 141.146 6.20339C120.441 8.59959 103.153 18.1418 88.9767 30.1394C61.3973 53.481 42.8407 88.9853 32.5647 104.97L54.4353 119.03ZM196.438 45.7225C216.129 57.2357 227.311 73.7705 234.922 92.3626C242.942 111.953 246.171 131.04 251.89 150.748C257.04 168.493 264.78 188.512 284.212 197.133C303.277 205.591 328.484 200.836 361.973 185.292L351.027 161.708C318.266 176.914 302.598 176.846 294.756 173.367C287.282 170.051 282.085 161.507 276.86 143.502C272.204 127.46 267.621 103.61 258.984 82.5124C249.939 60.417 235.621 38.5144 209.562 23.2776L196.438 45.7225ZM361.973 185.292C431.079 153.216 471.948 95.8984 506.162 60.9721C523.885 42.8796 539.116 31.2601 555.416 27.551C570.948 24.0165 590.191 27.1343 617.257 45.2951L631.743 23.705C601.059 3.1157 574.489 -3.45399 549.647 2.19906C525.572 7.67748 505.865 24.1204 487.588 42.7779C449.802 81.3516 414.421 132.284 351.027 161.708L361.973 185.292ZM617.257 45.2951C645.196 64.0422 667.87 84.5569 688.245 104.19C708.286 123.5 726.96 142.859 745.56 157.571C764.478 172.534 784.751 183.928 809.035 186.771C833.347 189.617 859.866 183.691 890.988 167.539L879.012 144.461C850.884 159.059 829.653 163.008 812.059 160.948C794.437 158.884 778.647 150.591 761.69 137.179C744.415 123.516 727.401 105.813 706.286 85.4667C685.505 65.4432 661.554 43.7078 631.743 23.705L617.257 45.2951ZM890.988 167.539C920.797 152.068 946.005 138.083 967.865 125.853C989.807 113.576 1008.14 103.206 1024.55 94.741C1057.33 77.8315 1080.7 69.5 1106 69.5V43.5C1074.37 43.5 1046.49 54.1685 1012.63 71.634C995.718 80.3565 976.879 91.0173 955.17 103.163C933.378 115.355 908.453 129.182 879.012 144.461L890.988 167.539ZM1106 69.5C1111.93 69.5 1119.13 73.6646 1129.33 85.4169C1134.15 90.9801 1139.05 97.5122 1144.35 104.758C1149.56 111.869 1155.18 119.697 1161.09 127.22C1172.81 142.138 1186.94 157.557 1204.83 166.608C1223.48 176.046 1245.18 178.042 1270.29 168.085L1260.71 143.915C1242.32 151.208 1228.39 149.392 1216.56 143.408C1203.97 137.037 1192.75 125.424 1181.53 111.155C1175.98 104.084 1170.73 96.7792 1165.33 89.4002C1160.03 82.1558 1154.57 74.8402 1148.97 68.38C1138.3 56.0854 1124.32 43.5 1106 43.5V69.5Z" fill="#F5B0B0"/>
            </svg>
        } />
        <ServiceWidget />
        <Footer />
    </>;
}