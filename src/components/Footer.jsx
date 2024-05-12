import React from 'react';
import { Link } from 'react-router-dom';
import { MainPages } from '../routes/paths';

const Item = props => {
  return (
    <div>
      <h1 className='mb-1 text-lg font-bold'>{props.title}</h1>
      <div className='flex flex-col gap-1 text-sm'>
        {props.children}
      </div>
    </div>
  );
};

const ItemLink = props => {
  return (
    <Link to={props.link} className='hover:text-tertiary-200 transition-colors'>{props.name}</Link>
  );
};

const Footer = () => {
  return (
    <footer className='flex justify-between px-32 py-16 bg-secondary-200 text-primary'>
      <div className='pr-20'>
        <h1 className='text-xl font-bold transition-colors hover:text-tertiary-200'>
          <Link to={MainPages.HOME}>Safe Space</Link>
        </h1>
        <div className='whitespace-pre-wrap'>“Take care of your MIND.<br/> Take care of your LIFE.”</div>
        <div className='mt-1 text-xs'>&copy; 2024 <ItemLink name="Safe Space" link={MainPages.PRIVACY} />. All rights reserved.</div>
      </div>

      <Item title="Services">
        <ItemLink name="Consultation" link={MainPages.CONSULTATION} />
        <ItemLink name="Self-Assessment" link={MainPages.ASSESSMENT} />
      </Item>

      <Item title="Resources">
        <ItemLink name="Educational Resources" link={MainPages.RESOURCES} />
        <ItemLink name="News and Updates" link={MainPages.NEWS} />
        <ItemLink name="Privacy Policy" link={MainPages.PRIVACY} />
        <ItemLink name="Support Communities" link={MainPages.COMMUNITIES} />
      </Item>

      <Item title="Contact Us">
        <p>safespace@email.com</p>
        <p>0912-456-7890</p>
      </Item>

      <Item title="Emergency Hotlines">
        <p>In case of emergencies, dial the following numbers:</p>
        <p>PNP: 911</p>
        <p>Hopeline PH: 2919</p>
        <p>NCMH: 1553</p>
        <p>MLC: 8-969-1600</p>
      </Item>
    </footer>
  );
};

export default Footer;