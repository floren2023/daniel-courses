

const Navbar = () => {
  return (
    <nav className='fixed z-40 top-0 w-full text-bold  
      flex justify-between px-30 py-1 items-center '>
        <p className='text-xl text-[rgb(154,36,235)] font-semibold'><span className='text-3xl '>3D </span>DANIEL'S </p>
        <ul className="flex gap-10 p-4 flex-end text-[#faec93] font-semibold">
            <li className='hover:text-[#ff5fd0] rounded-full py-1 px-4 transition-colors duration-500 hover:bg-slate-800 '><a href="#">Home</a></li>
             <li className='hover:text-[#ff5fd0] rounded-full py-1 px-4 transition-colors duration-500 hover:bg-slate-800'><a href="#">Explore</a></li>
              <li className='hover:text-[#ff5fd0] rounded-full py-1 px-4 transition-colors duration-500 hover:bg-slate-800'><a href="#">About</a></li>
               <li className='hover:text-[#ff5fd0] rounded-full py-1 px-4 transition-colors duration-500 hover:bg-slate-800'><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar