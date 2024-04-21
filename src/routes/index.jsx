import React from 'react';
import { MainPages, LoginPages } from './paths';
import MainLayout from '../components/layouts/MainLayout';

import Login from '../views/Login';
import Signup from '../views/Signup';
import Home from '../views/Home';
import About from '../views/About';
import Consultation from '../views/Consultation';
import SelfAssessment from '../views/SelfAssessment';
import EducationalResources from '../views/EducationalResources';
import Hotlines from '../views/Hotlines';
import News from '../views/News';
import Communities from '../views/Communities';
import Contact from '../views/Contact';
import Privacy from '../views/Privacy';

const MainRoutes = [
    {
        path: MainPages.HOME,
        element: <Home />
    },
    {
        path: MainPages.ABOUT,
        element: <About />
    },
    {
        path: MainPages.ASSESSMENT,
        element: <SelfAssessment />
    },
    {
        path: MainPages.CONSULTATION,
        element: <Consultation />
    },
    {
        path: MainPages.RESOURCES,
        element: <EducationalResources />
    },
    {
        path: MainPages.HOTLINES,
        element: <Hotlines />
    },
    {
        path: MainPages.NEWS,
        element: <News />
    },
    {
        path: MainPages.COMMUNITIES,
        element: <Communities />
    },
    {
        path: MainPages.CONTACT,
        element: <Contact />
    },
    {
        path: MainPages.PRIVACY,
        element: <Privacy />
    },
];

const routes = [
    {
        element: <MainLayout />,
        children: MainRoutes
    },
    {
        path: LoginPages.LOGIN,
        element: <Login />
    },
    {
        path: LoginPages.SIGNUP,
        element: <Signup />
    }
];

export default routes;