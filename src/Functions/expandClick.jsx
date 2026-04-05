import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center min-w-45 min-h-4/5 rounded-4xl px-5 py-10 fixed bg-[#E1D9BC] left-10 top-40 gap-10 ">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-4xl font-bold ">Name</h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <ul className="space-y-8 ">
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                </ul>
                <hr className="my-3 min-w-4/5 border-3 rounded-4xl"/>
                <ul className="space-y-8">
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                    <li><button>Something</button></li>
                </ul>
            </div>
            <div className="flex flex-col items-center ">
                <h1>Social support</h1>
                <hr className="my-3 min-w-4/5 border-3 rounded-4xl"/>
                <div>
                    <button>Some</button>
                    <button>Some</button>
                    <button>Some</button>
                    <button>Some</button>
                </div>
            </div>
        </div>
    );
}

//triba napraviti na drugoj strani i da prvo bude vertikalno vidljive icone i onda sa
//use stateom da rendera pune liste podataka naprimjer
/*
   {isOpen ? to i to renderati : da budu samo ikone}
 */

/*
onMouseEnter/onMouseLeave funkcija za hover efect
 */