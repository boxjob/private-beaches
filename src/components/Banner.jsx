const Banner = () => {
    return (
        <div>
            <img className="w-full h-screen object-cover"  src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="/" />
            <div className="w-full h-screen absolute bg-black/30 top-0 left-0">
                <div className="w-full h-screen max-w-[1100px] flex flex-col justify-center items-center text-white">
                    <div className="p-4 ">
                        <p>All Incluse</p>
                        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">Private Beaches & Gateways</h1>
                        <p className='max-w-[600px] w-full py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis est, id consequuntur sequi ipsum vitae sit non exercitationem.</p>
                        <button className="bg-white text-black px-4 py-2 rounded-xl">Reserve Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;