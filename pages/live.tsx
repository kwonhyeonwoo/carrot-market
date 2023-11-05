import LayOut from "@/components/layout";
import { NextPage } from "next";

const Live: NextPage = () => {
    return (
        <LayOut title='라이브 방송' hasTabBar>
            <div className="px-4 py-10 divide-y-2 space-y-2">
                {[1, 1, 1, 1, 1,].map((_, i) => (
                    <div className="pt-4 px-4" key={i}>
                        <div className="">
                            <div className="w-full bg-slate-300 aspect-video rounded-md" />
                            <h3 className="font-medium text-gray-700">Lets try tomato</h3>
                        </div>
                    </div>
                ))}
                <button className='fixed bottom-16 bg-orange-400 p-3 border rounded-full text-white right-5 shadow-md hover:bg-orange-500 hover:cursor-pointer hover:transition-bg'>
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
            </div>
        </LayOut>
    )
}
export default Live;