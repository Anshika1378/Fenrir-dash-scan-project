import { AiOutlineHome } from "react-icons/ai";
export default function Top(){
    return(
        <div className="flex justify-between flex-wrap mb-2">
          <h1 className="flex items-center gap-2">
            Scan <AiOutlineHome />/{" "}
            <span className="text-gray-400">Private Assets/</span>
            <span className="text-green-600"> New Scan</span>
          </h1>
          <div>
            <button className="bg-white mr-3 hover:bg-blue-700 text-black  py-2 px-4 border border-gray-200 rounded">
              Export Report
            </button>
            <button className="bg-red-300 hover:bg-blue-700 text-red-700 font-bold py-2 px-4 rounded">
              Stop Scan
            </button>
          </div>
        </div>
    )
}