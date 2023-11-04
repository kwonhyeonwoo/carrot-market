export default function ChatsDetail() {
    return (
        <div className="py-10 px-4 space-y-5">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className=" border rounded-md p-2 w-1/2">
                    <p className="text-sm text-gray-700">Hi how much are you selling them for?</p>
                </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className=" border rounded-md p-2 w-1/2 ">
                    <p className="text-sm text-gray-700">I want ￦20,000</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-400" />
                <div className=" border rounded-md p-2 w-1/2">
                    <p className="text-sm text-gray-700">미쳤어</p>
                </div>
            </div>
            <div className='fixed w-full px-3  mx-auto max-w-md inset-x-0 bottom-0 pb-2'>
                <div className="flex itesm-center  relative">
                    <input className="border px-3 rounded-full  focus:border-orange-500 focus:border-2 focus:outline-none w-full py-1 pr-12" type="text" />
                    <div className="absolute  inset-y-0 flex items-center right-4">
                        <button className="bg-orange-500 block rounded-full p-0.5 hover:bg-orange-600 text-white">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}