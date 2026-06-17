import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import {
  faMagnifyingGlass,
  faBagShopping,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full  bg-[#f5f5f7da] backdrop-blur-md h-10 z-50">

        <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between text-sm text-gray-700">

          <FontAwesomeIcon
            icon={faApple}
            className="cursor-pointer hover:text-black"
          />

          <ul className="hidden md:flex items-center gap-10">
            <li className="cursor-pointer hover:text-black">Store</li>
            <li className="cursor-pointer hover:text-black">Mac</li>
            <li className="cursor-pointer hover:text-black">iPad</li>
            <li className="cursor-pointer hover:text-black">iPhone</li>
            <li className="cursor-pointer hover:text-black">Watch</li>
            <li className="cursor-pointer hover:text-black">AirPods</li>
            <li className="cursor-pointer hover:text-black">TV & Home</li>
            <li className="cursor-pointer hover:text-black">Entertainment</li>
            <li className="cursor-pointer hover:text-black">Accessories</li>
            <li className="cursor-pointer hover:text-black">Support</li>
          </ul>

          <div className="flex items-center gap-5">

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer hover:text-black"
            />

            <FontAwesomeIcon
              icon={faBagShopping}
              className="cursor-pointer hover:text-black"
            />

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                className="text-lg"
              />
            </button>

          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden fixed h-screen font-bold  top-10 left-0 w-full bg-white shadow-lg border-t">
            <ul className="flex flex-col p-4 gap-4 text-gray-700">

              <li className="cursor-pointer hover:text-black">Store</li>
              <li className="cursor-pointer hover:text-black">Mac</li>
              <li className="cursor-pointer hover:text-black">iPad</li>
              <li className="cursor-pointer hover:text-black">iPhone</li>
              <li className="cursor-pointer hover:text-black">Watch</li>
              <li className="cursor-pointer hover:text-black">AirPods</li>
              <li className="cursor-pointer hover:text-black">TV & Home</li>
              <li className="cursor-pointer hover:text-black">Entertainment</li>
              <li className="cursor-pointer hover:text-black">Accessories</li>
              <li className="cursor-pointer hover:text-black">Support</li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar