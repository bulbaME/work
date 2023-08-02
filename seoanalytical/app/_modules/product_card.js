import Link from "next/link";
import { Button, ButtonLight } from "./buttons";

export function ServiceCard(props) {
    return <div className='p-4 m-auto flex flex-wrap my-12'>
        <div className='sm:w-2/5 p-2 m-auto min-w-[20rem]'>
            <img src={props.img} />
        </div>
        <div className='sm:w-3/5 p-2 m-auto text-p-d'>
            <div className='text-3xl font-bold'>
                {props.title}
            </div>
            <div className='text-xl'>
                {props.text}
            </div>
            <div className='p-4'>
                <Button route={props.link} text='See more' />
            </div>
        </div>
    </div>;
}

export function ProductCard(props) {
    return <div className='p-4 w-fit m-auto'>
        <div className='m-auto w-[22rem] h-[18rem] cursor-pointer flex'>
            <div className='w-fit m-auto'>
                <div className='absolute w-[22rem] h-[18rem] -z-10'>
                    {props.svg}
                </div>
                <div className='m-auto w-fit mt-[5rem] px-[4rem] text-center text-white'>
                    <div className='font-semibold text-2xl mb-4'>{props.title}</div>
                    <div className='flex w-fit m-auto text-2xl'>
                        <div className='mx-2 font-bold underline decoration-p-d m-auto'>{props.price}</div>
                        <div className='m-auto'>per</div>
                        <div className='mx-2 m-auto'>{props.per}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[22rem] mt-10 py-8 text-p-d text-xl text-center'>
            {props.text}
        </div>
        <div className='-mt-8'>
            <Button route='/contact' text='Select' />
        </div>
    </div>;
}