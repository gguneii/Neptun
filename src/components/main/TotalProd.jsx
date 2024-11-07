import { useContext } from "react"
import { BASKET } from "../../context/BasketContext"
import { RiDeleteBin5Line } from "react-icons/ri"

function TotalProd() {
    const { cart, setCart } = useContext(BASKET)
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-4xl font-semibold leading-tight">Səbət</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300 ">
                        <tr className="text-left ">
                            <th className="p-3 border-x border-gray-400">Şəkil</th>
                            <th className="p-3 border-x border-gray-400">Məhsulun adı</th>
                            <th className="p-3 border-x border-gray-400">Model</th>
                            <th className="p-3 border-x border-gray-400">Sayı</th>
                            <th className="p-3  border-x border-gray-400 text-right">Qiyməti</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-400 dark:bg-gray-100">
                            <td className="p-3 border-x border-gray-300">
                                <img src="" alt="image" />
                            </td>
                            <td className="p-3 border-x border-gray-300">
                                <p>Nar</p>
                            </td>
                            <td className="p-3 border-x border-gray-300">
                                <p>14 Jan 2022</p>
                            </td>
                            <td className="p-3 flex gap-3 border-x border-gray-300">
                                <input className="h-10 w-16 rounded-md" type="text" />
                                <button className="h-10 w-16 bg-[#ff8300] hover:bg-[#cd6b02] rounded-full text-white text-lg">Reset</button>
                                <button className="h-10 w-16 bg-red-500 hover:bg-red-600 rounded-full text-lg flex justify-center items-center"><RiDeleteBin5Line className=" text-white"/></button>
                            </td>
                            <td className="p-3 text-right border-x border-gray-300">
                                <p>$2</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TotalProd