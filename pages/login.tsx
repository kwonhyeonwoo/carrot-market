import { useState } from "react"

export default function Login() {
    const [method, setMethod] = useState<"email" | "phone">("email");
    const onEmailClick = () => setMethod('email');
    const onPhoneClick = () => setMethod('phone');
    return (
        <div className="mt-3 ">
            <h3 className="font-bold text-xl text-center">Enter to Carrot</h3>
            <div className="mt-4 px-5">
                <div>
                    <h5 className="text-center text-sm text-gray-400 font-medium">Enter using:</h5>
                    <div className="flex justify-center w-full space-x-28 mt-5 border-b border-gray-200">
                        <button className={`text-gray-500 pb-2 ${method === 'email' && 'text-orange-400 font-bold border-b-2 border-orange-400'}`} onClick={onEmailClick}>Email</button>
                        <button className={`text-gray-500 pb-2 ${method === 'phone' && 'text-orange-400 font-bold border-b-2 border-orange-400'}`} onClick={onPhoneClick}>Phone</button>
                    </div>
                </div>
                <form className="flex flex-col mt-6">
                    <label className="text-gray-500 mb-3">
                        {method === "email" && "Email address"}
                        {method === "phone" && "Phone number"}
                    </label>
                    <div>
                        {method === "email" ? <input className="w-full border-2 rounded-md border-orange-300 py-2 focus:outline-none " type="email" required /> : null}
                        {method === "phone" ? (
                            <div className="flex">
                                <span className="border-2 rounded-md rounded-r-none border-r-0 bg-gray-50 px-2 py-2">+82</span>
                                <input className="w-full border-2 rounded-md rounded-l-none border-gray-300 py-2" type="number" required />
                            </div>
                        ) : null}
                    </div>
                    <button className="bg-orange-500 text-white py-3 mt-4 border rounded-md text-sm hover:bg-orange-400 focus:outline-none focus:ring-2 ring-offset-2 ring-orange-500">
                        {method === "email" ? "Get login link" : null}
                        {method === "phone" ? "Get one-time password" : null}
                    </button>
                </form>
                <div className="mt-11 ">
                    <div className="relative">
                        <div className="w-full border-t absolute border-gray-200" />
                        <div className="relative -top-3 text-center">
                            <span className="bg-white text-gray-500">Or enter with</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-10">
                        <button className="border rounded-md py-2 text-gray-500 flex justify-center items-center mr-2 border-gray-300 w-full hover:bg-gray-100">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </button>
                        <button className="border rounded-md py-2 text-gray-500 flex justify-center items-center border-gray-300 w-full hover:bg-gray-100">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}