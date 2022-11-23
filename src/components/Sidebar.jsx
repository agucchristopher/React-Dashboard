import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel, MdRestaurant} from 'react-icons/md'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../../public/images/logo.jpg'
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()
  const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'ecommerce',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'orders',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
          icon: <IoMdContacts />,
        },
        {
          name: 'customers',
          icon: <RiContactsLine />,
        },
        {
          name: 'restaurants',
          icon: <MdRestaurant />
        }
      ],
    },
    {
      title: 'Charts',
      links: [
        // {
        //   name: 'line',
        //   icon: <AiOutlineStock />,
        // },
        {
          name: 'area',
          icon: <AiOutlineAreaChart />,
        },
  
        {
          name: 'bar',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <FiPieChart />,
        },
        {
          name: 'financial',
          icon: <RiStockLine />,
        },
        {
          name: 'pyramid',
          icon: <GiLouvrePyramid />,
        },
        {
          name: 'stacked',
          icon: <AiOutlineBarChart />,
        },
      ],
    },
  ];
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-700  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

 
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      { activeMenu ? 
      <>
      <div className="flex justify-between items-center">
        <Link to={'/'} onClick={()=>{setActiveMenu(false)}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <img src={logo} className='h-9 rounded-full'/> Chop Paddi
        </Link>
        <TooltipComponent content={'Menu'} position='BottomCenter'>
          <button type='button' onClick={()=>{setActiveMenu(prev => !prev)}} className='text-xl rounded-full hover:bg-light-gray mt-4 block md:hidden m-2'>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10 ">
        {links.map(item => (
          <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase '>
            {item.title}
            </p>
            {item.links.map(link => (
              <NavLink to={`/${link.name}`} onClick={() => {}} className={({isActive}) => isActive ? activeLink : normalLink } >
                {link.icon}
                <span className="capitalize">
                  {link.name}
                </span>
              </NavLink>
            ))}
            </div>
        ))}
      </div>
      </> :''}
    </div>
  )
}

export default Sidebar