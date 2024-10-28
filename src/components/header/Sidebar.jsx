import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useEffect, useState } from "react";


function Sidebar() {
    const[data, setData] = useState(null)
    useEffect(() =>{
    fetch("https://neptunbk.vercel.app/categories")
    .then(res => res.json())
    .then(mehsul => setData(mehsul))
    },[])

    return (
        <div className="hidden lg:block absolute top-[115px] left-0 text-black z-[999] custom:top-[146px] lg:top-[-6px] lg:pt-0  bg-white min-h-full w-full custom:w-[70%] md:w-[40%] md:pt-4 lg:w-[230px] lg:rounded-md lg:border-t-[6px] lg:border-[#ff8300]">
            <div className="hidden sm:flex justify-end pt-2 pr-4 w-full lg:hidden">
                <IoCloseSharp />
            </div>
            <div className="hidden w-[90%] h-[46px] text-[0.9rem] mx-auto lg:flex lg:items-center px-3 lg:px-0 text-[#ff8300] font-bold">
                <GiHamburgerMenu className="text-xl mr-3" />
                <h3>Kategoriyalar</h3>
            </div>
            <ul className="p-5 lg:p-0">
                {data &&
                    data.map((item,i) => {
                        return (
                            <li key={i} className="group border-b-2 lg:relative">
                                <div className="flex items-center justify-start hover:bg-[#fed9be]">
                                <a href="#" className=" hover:bg-[#ff84003f] py-1 lg:px-3 lg:py-2 flex items-center">
                                    <div className="w-[20px]">
                                        <svg className="fill-[#ff8300] object-fill w-[22px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.75 23.844">
                                            <defs>
                                            </defs>
                                            <path id="Meyvə_və_tərəvəz" data-name="Meyvə və tərəvəz" className="cls-1" d="M64.433,187.438a0.373,0.373,0,0,1-.047,0,0.5,0.5,0,0,1-.454-0.542,6.275,6.275,0,0,0-.342-2.851c-0.786-2.031-3.362-2.066-3.471-2.067a0.5,0.5,0,1,1,0-1c0.137,0,3.373.031,4.409,2.707a7.257,7.257,0,0,1,.4,3.3A0.5,0.5,0,0,1,64.433,187.438Zm3.508,17.382a7.257,7.257,0,0,1-1.829-.312,7.622,7.622,0,0,0-1.633-.3,6.417,6.417,0,0,0-1.862.3,4.157,4.157,0,0,1-2.763.087c-3.283-1.274-6.853-7.781-6.148-12.947,0.553-4.041,2.7-6.233,6.379-6.514a4.44,4.44,0,0,1,3.209,1.286,2.33,2.33,0,0,0,1.152.653,2.176,2.176,0,0,0,1.238-.656,4.334,4.334,0,0,1,3.232-1.282c3.657,0.206,5.806,2.4,6.368,6.513h0c0.706,5.166-2.864,11.674-6.147,12.947A3.254,3.254,0,0,1,67.941,204.82Zm-3.581-1.607c0.051,0,.1,0,0.152,0a8.3,8.3,0,0,1,1.855.33,3.808,3.808,0,0,0,2.4.128c2.555-.992,6.192-6.958,5.519-11.888-0.5-3.626-2.278-5.476-5.45-5.655a3.441,3.441,0,0,0-2.521,1.064,2.352,2.352,0,0,1-3.652.007,3.538,3.538,0,0,0-2.5-1.071c-3.232.247-4.967,2.044-5.461,5.655-0.673,4.93,2.963,10.9,5.519,11.888a3.233,3.233,0,0,0,2.129-.12A7.409,7.409,0,0,1,64.36,203.213Zm4.625-2.527A0.5,0.5,0,0,1,68.7,200.6a0.5,0.5,0,0,1-.135-0.691c5.428-7.92,1.513-10.917,1.344-11.041a0.5,0.5,0,0,1-.11-0.694,0.506,0.506,0,0,1,.7-0.112c0.2,0.144,4.907,3.637-1.1,12.406A0.5,0.5,0,0,1,68.984,200.686Z" transform="translate(-53.625 -180.969)" />
                                        </svg>
                                    </div>
                                </a>
                                    <div className="uppercase text-[.8rem] text-[#000] lg:text-[.60rem] lg:capitalize lg:font-semibold pr-3 flex-1 items-center">{item.categoryName}   
                                  </div>
                                  <RiArrowDropRightLine className="hidden mr-1 lg:block text-xl text-gray-500" /> 
                                </div>
                                <div>
                                    <ul className="hidden h-0 group-hover:block group-hover:h-full lg:group-hover:transition-all lg:group-hover:duration-400 lg:ease-in-out lg:group-hover:h-auto lg:group-hover:my-0 group-hover:my-4 border-x-2 uppercase lg:capitalize text-[.8rem] border-l-[#fdae4b] px-2 lg:absolute lg:top-0 lg:left-[230px] lg:my-0 lg:bg-white lg:min-w-[200px] lg:text-[.7rem] lg:shadow-md">
                                        {
                                           item && 
                                           item.subcategory.map((item,i) => {
                                            return (
                                                <li key={i} to="item.slug" className="py-2 pl-2 hover:text-[#ff8300] hover:underline"><a href="#">{item.categoryName}</a></li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }          
            </ul>
        </div>
    )
}
export default Sidebar