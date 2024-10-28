import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useState, useEffect } from 'react';

function Sidebar() {
    const [categ, setCateg] = useState([]);
    useEffect(() => {
        fetch('https://neptunbk.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCateg(data))
    }, [])

    const arrIcon = ["https://neptun.az/image/catalog/icon-menu/Meyvə-və-tərəvəz.svg", "https://neptun.az/image/catalog/icon-menu/ət-və-toyuq məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Qastronom.svg", "https://neptun.az/image/catalog/icon-menu/ərzaq məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Şirniyyat-çay-və qəhvə.svg", "https://neptun.az/image/catalog/icon-menu/İçkilər.svg", "https://neptun.az/image/catalog/icon-menu/Süd-məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Uşaq-məhsulları.svg", "https://neptun.az/image/catalog/icon-menu/Kosmetik-və-gigiyenik.svg", "https://neptun.az/image/catalog/icon-menu/Yuyucu-vasitələr.svg", "https://neptun.az/image/catalog/icon-menu/Məişət-mətbəx-və-tekstil.svg", "https://neptun.az/image/catalog/icon-menu/Konselyariya.svg", "https://neptun.az/image/catalog/icon-menu/Heyvan-yemləri.svg", "https://neptun.az/image/catalog/icon-menu/neptun-icon.svg", "https://neptun.az/image/catalog/icon-menu/elektronika-və-mebel.svg", "https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg"]
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
                { categ && categ.map((item, index) => {
                    return (
                        <li key={item.id} className="group border-b-2 lg:relative">
                            <a href="#"  className={` ${index < categ.length - 1 ? 'hover:bg-[#ff84003f]' : '' } py-1 lg:px-3 lg:py-2 flex items-center ${index === categ.length - 1 ? 'bg-[#ff8300]' : ''}`}>
                                <div className="w-[20px]">
                                    <img src={arrIcon[index]} alt="" className="fill-[#ff8300] object-fill w-[22px] h-[24px]"/>
                                </div>
                                <span className="uppercase text-[.8rem] text-[#000] lg:text-[.65rem] flex-1 lg:capitalize lg:font-bold pl-3 flex items-center ">{item.categoryName}</span>
                                <RiArrowDropRightLine className="hidden lg:block text-xl ml-3 text-gray-500" /> 
                            </a>
                            <div>
                                <ul className="overflow-hidden opacity-0 h-0 group-hover:opacity-100 group-hover:h-full lg:group-hover:transition-all lg:group-hover:duration-400 lg:ease-in-out lg:group-hover:h-auto lg:group-hover:my-0 group-hover:my-4 border-x-2 uppercase lg:capitalize text-[.8rem] border-l-[#fdae4b] px-2 lg:absolute lg:top-0 lg:left-[230px] lg:my-0 lg:bg-white lg:min-w-[200px] lg:text-[.7rem] lg:shadow-md">
                                    {
                                        item.subcategory.map(item => {
                                            return (
                                                <li to={item.slug} key={item.id}  className="py-3 pl-2 hover:text-[#ff8300] hover:underline"><a href="#">{item.categoryName}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Sidebar