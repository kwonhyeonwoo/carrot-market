import LayOut from "@/components/layout";
import { NextPage } from "next";

const Edit: NextPage = () => {
    return (
        <LayOut title='정보수정' hasTabBar>
            <div className="py-10 px-4 ">
                <div className="flex items-center space-x-3 mb-10">
                    <div className="w-14 h-14 bg-slate-400 rounded-full" />
                    <label htmlFor="avater" className="text-sm text-gray-600 font-medium border border-gray-500 rounded-md p-2 cursor-pointer hover:bg-gray-200 ">
                        Change
                        <input type="file" className="hidden" />
                    </label>
                </div>
                <label className="text-gray-500 mb-3 space-y-2 block">
                    <span className="text-base text-black">Email Address</span>
                    <div className="flex">
                        <input className="w-full border-2 rounded-md  py-2 focus:outline-none " type="email" required />
                    </div>
                </label>
                <label className="text-gray-500 mb-3 space-y-2">
                    <span className="text-base text-black">Phone Number</span>
                    <div className="flex">
                        <span className="border-2 rounded-md rounded-r-none border-r-0 bg-gray-50 px-2 py-2">+82</span>
                        <input className="w-full border-2 rounded-md rounded-l-none border-gray-300 py-2" type="number" required />
                    </div>
                </label>
                <button className="w-full bg-orange-500 text-white py-2 font-medium mt-4 border rounded-md text-sm hover:bg-orange-400 focus:outline-none focus:ring-2 ring-offset-2 ring-orange-500">
                    Edit Profile
                </button>
            </div >
        </LayOut>
    )
}
export default Edit;