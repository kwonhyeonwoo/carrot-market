import LayOut from "@/components/layout";

export default function ItemDetail() {
    return (
        <LayOut canGoBack hasTabBar>
            <div className="py-10 px-5">
                <div className="">
                    {/* 나중에 상품이미지 들어가야함 */}
                    <div className="h-96  bg-slate-300" />
                    <div className="flex mt-3 itesm-center">
                        {/* 나중에 프로필 이미지 들어가야함 */}
                        <div className="w-16 h-16 border rounded-full bg-slate-300" />
                        <div className="flex flex-col justify-center pl-2 cursor-pointer">
                            <p className="text-sm font-medium text-gray-500">Steve Jebs</p>
                            <p className="text-sm font-medium ">View profile &rarr;</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-3xl font-medium">Galaxy S50</h1>
                        <span className="text-3xl block mt-5 font-medium">$140</span>
                        <p className="text-gray-700 py-4">
                            My money&apos;s in that office, right? If she start giving me some
                            bullshit about it ain&apos;t there, and we got to go someplace else
                            and get it, I&apos;m gonna shoot you in the head then and there.
                            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
                            my goddamn money is. She gonna tell me too. Hey, look at me when
                            I&apos;m talking to you, motherfucker. You listen: we go in there,
                            and that ni**a Winston or anybody else is in there, you the first
                            motherfucker to get shot. You understand?
                        </p>
                        <div className="flex space-x-3 mt-3">
                            <button className=" flex-1 bg-orange-500 py-3 text-white text-sm font-medium rounded-md">Talk to seller</button>
                            <button className="p-2 bg-gray-100 border rounded-md text-gray-900">
                                <svg
                                    className="h-6 w-6 "
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
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl mt-5 font-medium mb-4">Similar items</h2>
                    <div className="mt-5 grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((_, i) => (
                            <div key={i}>
                                {/* 관련 상품이미지 들어가야함 */}
                                <div className="h-56 w-full bg-slate-300 mb-2" />
                                <h3 className="text-sm text-gray-500 font-medium">Galaxy S60</h3>
                                <span className="text-sm text-gray-900 font-medium">$6</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayOut>
    )
}