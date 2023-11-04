export default function Upload() {
    return (
        <div className="px-4 py-16">
            <div >
                <label className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex justify-center items-center font-medium hover:border-orange-500 hover:text-orange-500 ">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input className="hidden" type="file" />
                </label>
            </div>
            <div className="mt-5 mb-5 relative">
                <label htmlFor="price" className="text-sm font-medium">Price</label>
                <div className="flex items-center mt-2">
                    <div className="absolute pl-2">
                        <span>$</span>
                    </div>
                    <input id='price' className="w-full border rounded-md border-gray-400 pl-5 h-10" type=" text" placeholder="0.00" />
                    <div className="absolute right-0 pr-3 text-gray-600">
                        <span className="text-sm font-medium">USD</span>
                    </div>
                </div>
            </div>
            <div >
                <label className="text-sm font-medium">Description</label>
                <div className="mt-3">
                    <textarea className="w-full border border-gray-400 rounded-md focus:ring-orange-500 focus:outline-none focus:ring-1 focus:border-orange-500" rows={4} />
                </div>
            </div>
            <button className="bg-orange-500 w-full text-white py-3 mt-4 border rounded-md text-sm hover:bg-orange-400 focus:outline-none focus:ring-2 ring-offset-2 ring-orange-500">Upload product</button>
        </div>
    )
}