import {CustomizeLabels, PieWithGradient} from "./Charts.jsx";


export default function Home(){


    return(
        <div>
            <div className="center-content pt-2 min-w-screen max-h-[87vh]  min-h-[87vh] flex flex-col items-end gap-2 pl-25 pr-10">
                <div className="flex flex-row min-w-[90vw] max-h-[35vh] mt-5">
                    <div className="flex flex-row justify-evenly w-full pr-5 ">
                        <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                        <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                        <div className="min-w-[30%] min-h-fit border-2 border-amber-50 rounded-4xl bg-gray-500/50"></div>
                    </div>
                    <PieWithGradient/>
                </div>
                <div className='flex justify-end w-[90vw] mt-8 max-h-[41vh]'>
                    <div className="w-[35%] min-h-[30vh] border-2 border-amber-50 rounded-4xl bg-gray-500/50 mr-auto ml-7">

                    </div>
                    <div className=" w-[16%] mx-9 border-2 border-amber-50 rounded-4xl bg-gray-500/50">

                    </div>
                    <CustomizeLabels/>
                </div>
            </div>
        </div>
    )
}


/*
    tu ce biti vecinon sve al u minimalnon izdanju amo rec u neku ruku preview od nekog djela
    ili jednostavno quick access do toga
 */