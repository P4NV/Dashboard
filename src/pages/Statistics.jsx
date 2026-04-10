import SimplePie from "./Charts.jsx";


export default function Statistics() {
    return (
        <div className="center-content pt-2 max-w-fit max-h-fit flex flex-wrap flex-col mx-auto items- border-2 border-black">
            <div className="flex items-center justify-start flex-wrap ml-35 h-[45vh] border-black border-2">
                <div className="flex max-w-[50vw] border-2 rounded-4xl bg-gray-500/50 border-amber-50">
                    <div className="w-full overflow-hidden">
                        <SimplePie />
                    </div>
                </div>
                <div className="flex min-w-[48vw] min-h-[41vh] ml-15 mt-5 border-2 border-amber-50">

                </div>
            </div>
            <div className="flex items-end justify-start flex-wrap ml-35 h-[39vh] border-black border-2">
                <div className='flex max-w-[61vw] min-h-[32vh] mb-5 border-2 border-amber-50'>

                </div>
                <div className="flex max-w-[27vw] min-h-[32vh] mb-5 ml-15 border-2 border-amber-50">

                </div>
            </div>
        </div>
    )
}