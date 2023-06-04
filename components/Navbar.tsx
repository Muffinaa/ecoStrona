
import { FaShoppingCart } from 'react-icons/fa'

interface NavbarLink {
  name: string;
  href: string;
  icon?: any;
  iconMode: boolean;
}

const navbarLinks: NavbarLink[] = [
  {
    name: 'Koszyk',
    href: '/cart',
    icon: <FaShoppingCart />,
    iconMode: true,
  }
]

function Navbar() {
  return (
    <div className="bg-gray-800 p-3 flex shadow-sm m-1 rounded-md text-white ">
      <h1 className="font-bold"><span className="text-teal-500">Green</span>Zone</h1>
        <div className="flex flex-grow justify-end">
          <ul className="flex  items-center">
            {navbarLinks.map((link) => (
              <li className="mx-2" key={link.href}>
                <a className="hover:text-teal-500 " title={link.name} href={link.href}>
                  { link.iconMode && link.icon ? link.icon : link.name }
                </a>
              </li>
            )
            ) }
          </ul>
        </div>
    </div>
  )
}

export default Navbar