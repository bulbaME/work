import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WServices, WTestimony } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='max-w-7xl m-auto py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {"Our Powerful SEO Services - Unleash Your Website's Potential!"}
            </div>
            <div className='sm:text-xl text-center max-w-5xl m-auto font-medium mt-16 text-white'>
                {"At SEO Aware, we offer a range of expert SEO services tailored to elevate your online presence. Our team of SEO wizards will work their magic to optimize your website, drive organic traffic, and enhance your search engine rankings. Whether you're looking for local SEO domination, e-commerce optimization, or an all-encompassing SEO strategy, we've got you covered. Discover how our services can transform your digital landscape and take your business to new heights!"}
            </div>
        </div>
        <WServices />
        <WTestimony />
        <Footer />
    </>;
}