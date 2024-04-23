import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainPages, LoginPages } from '../routes/paths';
import { auth } from '../config/firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Button from './Button';
import sprite from '/sprite.svg';

const menuList = [
  {
    name: 'Home', link:  MainPages.HOME,
  },
  {
    name: 'About', link:  MainPages.ABOUT,
  },
  {
    name: 'Services', link:  MainPages.CONSULTATION,
    submenu: [
      { name: 'Consultation', link: MainPages.CONSULTATION },
      { name: 'Self-Assessment', link: MainPages.ASSESSMENT },
    ],
  },
  {
    name: 'Resources', link:  MainPages.RESOURCES,
    submenu: [
      { name: 'Educational Resources', link: MainPages.RESOURCES },
      { name: 'Emergency Hotlines', link: MainPages.HOTLINES },
      { name: 'News and Updates', link: MainPages.NEWS },
      { name: 'Support Communities', link: MainPages.COMMUNITIES },
      { name: 'Privacy Policy', link: MainPages.PRIVACY },
    ],
  },
  {
    name: 'Contact', link:  MainPages.CONTACT,
  },
];

const Menu = ({ menu }) => {
  const { pathname } = useLocation();
  const { name, link, submenu } = menu;
  
  return (
    submenu ? (
      <li className='group relative z-50'>
        <div className={`flex items-center gap-2 group-hover:text-accent ${(submenu.map(item => item.link)).includes(pathname) && 'text-accent'} transition-colors`}>
          <Link to={link}>{name}</Link>
          <svg className={`w-[14px] h-[14px] ${(submenu.map(item => item.link)).includes(pathname) ? 'fill-accent' : 'fill-secondary-200 '} group-hover:fill-accent group-hover:rotate-180 transition-all ease-in-out duration-300`}>
            <use xlinkHref={`${sprite}#dropdown`} />
          </svg>
        </div>
        <ul className='hidden group-hover:block absolute p-2 -ml-2 w-56 h-auto bg-primary rounded shadow-md'>
          {submenu.map((current, index) => 
            <SubMenu key={index} link={current.link}>{current.name}</SubMenu>
          )}
        </ul>
      </li>
    ) : (
      <li className={`z-50 hover:text-accent ${pathname === menu.link && 'text-accent'} transition-colors`}>
        <Link to={menu.link}>{menu.name}</Link>
      </li>
    )
  );
};  

const SubMenu = props => {
  const { pathname } = useLocation();

  return (
    <li className='group/sub p-1 h-8 flex items-center'>
      <div className='bg-accent w-0 h-full group-hover/sub:w-1 rounded-sm transition-all duration-300'></div>
      <p className={`group-hover/sub:pl-2 ${pathname === props.link ? 'text-accent' : 'text-secondary-200'} group-hover/sub:text-accent transition-all duration-300`}>
        <Link to={props.link}>{props.children}</Link>
      </p>
    </li>
  );
};

const UserMenu = props => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <li className='group/sub p-1 h-8 flex items-center' onClick={handleClick}>
      <div className='bg-accent w-0 h-full group-hover/sub:w-1 rounded-sm transition-all duration-300'></div>
      <p className='group-hover/sub:pl-2 text-secondary-200 group-hover/sub:text-accent transition-all duration-300'>
        <Link to={props.link}>{props.children}</Link>
      </p>
    </li>
  );
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <header className='sticky top-0 flex justify-between items-center w-full z-50 p-2 bg-primary text-secondary-200 shadow-lg'>
      <div className='flex items-center text-2xl font-extrabold'>
        <img src='/logo.png' className='w-20 h-auto mr-1' />
        Safe Space
      </div>
      
      <nav className='flex items-center gap-10'>
        <ul className='flex gap-10'>
          {menuList.map((menu, index) => 
            <Menu key={index} menu={menu} />
          )}
        </ul>
        
        {user ? (
          <div className='group relative z-50'>
            <Button>{user?.email}</Button>
            <ul className='hidden group-hover:block absolute right-0 p-2 -ml-2 w-40 h-auto bg-primary rounded shadow-md'>
              <UserMenu link={MainPages.HOME}>Profile</UserMenu>
              <UserMenu onClick={signUserOut} link={MainPages.HOME}>Logout</UserMenu>
            </ul>
          </div>
        ) : (
          <Button link={LoginPages.LOGIN}>Join Us</Button>
        )}
                
      </nav>
    </header>
  );
};

export default Navbar;