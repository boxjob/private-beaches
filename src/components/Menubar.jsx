import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Menubar = () => {
    
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="absolute w-full flex justify-between items-center p-4">
            <h1 className="text-white font-bold text-2xl z-10">Experiences</h1>
            {   nav 
                    ? <MdClose size={ 25 } className="text-white cursor-pointer z-20" onClick={ handleNav }/>
                    : <HiMenuAlt3 size={ 25 } className="text-white cursor-pointer z-20" onClick={ handleNav }/>
            }
            <div className={ 
                nav 
                    ? 'ease-out duration-500 bg-black/80 text-gray-300 w-full h-screen fixed left-0 top-0 z-10' 
                    : 'fixed top-0 left-[-120%] w-full h-screen ease-in-out duration-700 z-10' 
                }>
                <ul className="flex flex-col justify-center items-center w-full h-screen scroll-auto">
                    <li className="font-bold text-3xl p-8">Home</li>
                    <li className="font-bold text-3xl p-8">Destinations</li>
                    <li className="font-bold text-3xl p-8">Reservations</li>
                    <li className="font-bold text-3xl p-8">Amenities</li>
                    <li className="font-bold text-3xl p-8">Rooms</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Menubar;