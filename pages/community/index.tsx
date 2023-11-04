export default function Community() {
    return (
        <div className="py-10 px-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="pt-7">
                    <span className=" bg-slate-200 p-1 rounded-md">동네질문</span>
                    <div className="space-x-3 mt-3 font-medium text-base">
                        <span className=" text-orange-500">Q.</span> What is the best mandu restaurant?
                    </div>
                    <div className="mt-5 flex justify-between text-gray-500 text-sm">
                        <span>니꼬</span>
                        <span>18시간 전</span>
                    </div>
                    <div className="flex items-center mt-3 border-t border-b-[2px] py-3 w-full space-x-3">
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>궁금해요 1</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                            <span>답변 1</span>
                        </div>
                    </div>
                </div>
            ))}
            <button className='fixed bottom-16 bg-orange-400 p-3 border rounded-full text-white right-5 shadow-md hover:bg-orange-500 hover:cursor-pointer hover:transition-bg'>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}