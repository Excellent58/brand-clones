import { Globe, Search, ChevronDown } from 'lucide-react';
import { navLinks } from '../constants';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null)
            }
        }

        if (activeDropdown) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [activeDropdown])

    
    const handleDropdownClick = (e: React.MouseEvent, title: string) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === title ? null : title)
    }

    return (
        <header className="w-full z-10 py-4 px-2">
            <nav className="flex justify-between items-center mx-4">
                <a href="/" className='flex lg:space-x-1 items-center text-[#eb1700]'>
                    <svg aria-hidden="true" width="32" height="18" viewBox="0 0 99.5 56.5" fill="var(--base-color-red-60)" className='text-[#eb1700]'>
                        <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16">
                        </path>
                    </svg>
                    <span className='hidden lg:block text-lg font-bold text-red-400'>Dasher Central</span>
                </a>

                <ul className='flex gap-x-6 items-center'>
                    {navLinks.map(( link ) => (
                        <li key={link.title} className='relative'>
                            <button 
                                className='flex items-center cursor-pointer'
                                onClick={(e)=> handleDropdownClick(e, link.title)}
                            >
                                <span className='text-lg text-bold'>{link.title}</span>
                                <ChevronDown size={18} />
                            </button>
                            {/* dropdown menu */}
                            <div 
                                className={`
                                    dropdown absolute z-10  bg-white divide-y  divide-gray-300 rounded-lg shadow-lg min-w-44  w-full max-w-[400px]
                                    ${activeDropdown === link.title ? "block" : "hidden"}
                                `}
                                ref={dropdownRef}
                            >
                                <ul className='font-semibold'>
                                    {link.links.map((link) => (
                                        <li 
                                            key={link.name}
                                            className='mt-1 mb-1'
                                        >
                                            <a 
                                                href={link.link}
                                                className='block px-4 py-2 text-red-400 hover:bg-red-100 hover:text-black'
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-x-3 items-center">
                    <button className='cursor-pointer'>
                        <span className='sr-only'>search</span>
                        <Search/>
                    </button>
                    <div>
                        <button className='flex space-x-1 cursor-pointer'>
                            <Globe/>
                            <span>US</span>
                        </button>
                    </div>
                    <div className="px-3 py-1 font-bold text-lg bg-red-400 text-white rounded-full cursor-pointer">
                        Sign Up
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar