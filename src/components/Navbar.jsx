import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { MainPages, LoginPages } from '../routes/paths';
import Button from './Button';
import sprite from '/sprite.svg';
import { auth } from '../config/firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Menu = props => {
  return (
    props.name ? (
      <li className='group relative z-50'>
        <div className='flex items-center gap-2 group-hover:text-accent transition-colors'>
          <Link to={props.link}>{props.name}</Link>
          <svg className='w-[14px] h-[14px] fill-secondary-200 group-hover:fill-accent group-hover:rotate-180 transition-all ease-in-out duration-300'>
            <use xlinkHref={`${sprite}#dropdown`} />
          </svg>
        </div>
        <ul className='hidden group-hover:block absolute p-2 -ml-2 w-56 h-auto bg-primary rounded shadow-md'>
          {props.children}
        </ul>
      </li>
      
    ) : (
      <li className='z-50 hover:text-accent transition-colors'>
        <Link to={props.link}>{props.children}</Link>
      </li>
    )
  );
};

const SubMenu = props => {
  return (
    <li className='group/sub p-1 h-8 flex items-center'>
      <div className='bg-accent w-0 h-full group-hover/sub:w-1 rounded-sm transition-all duration-300'></div>
      <p className='group-hover/sub:pl-2 text-secondary-200 group-hover/sub:text-accent transition-all duration-300'>
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
          <Menu link={MainPages.HOME}>Home</Menu>
          <Menu link={MainPages.ABOUT}>About</Menu>
          <Menu name="Services" link={MainPages.CONSULTATION}>
            <SubMenu link={MainPages.CONSULTATION}>Consultation</SubMenu>
            <SubMenu link={MainPages.ASSESSMENT}>Self-Assessment</SubMenu>
          </Menu>
          <Menu name="Resources" link={MainPages.RESOURCES}>
            <SubMenu link={MainPages.RESOURCES}>Educational Resources</SubMenu>
            <SubMenu link={MainPages.HOTLINES}>Emergency Hotlines</SubMenu>
            <SubMenu link={MainPages.NEWS}>News and Updates</SubMenu>
            <SubMenu link={MainPages.COMMUNITIES}>Support Communities</SubMenu>
          </Menu>
          <Menu link={MainPages.CONTACT}>Contact</Menu>
        </ul>
        
        {user ? (
          <>
            <ul className='flex gap-10'>
            <Menu name={user?.email}>
              <UserMenu link={MainPages.HOME}>Profile</UserMenu>
              <UserMenu onClick={signUserOut} link={MainPages.HOME}>Logout</UserMenu>
            </Menu>
            </ul>
          </>
        ) : (
        <Button link={LoginPages.LOGIN}>Join Us</Button>
        )
        }
                
      </nav>
    </header>
  );
};

export default Navbar;