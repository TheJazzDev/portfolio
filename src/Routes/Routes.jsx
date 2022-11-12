import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom/dist';
import {Outlet} from 'react-router-dom/dist';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import SkillsPage from '../pages/SkillsPage';
import WorkPage from '../pages/WorkPage';
import ErrorPage from '../pages/ErrorPage';
import {Resume} from '../components/Home/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/about', element: <AboutPage />},
      {path: '/skills', element: <SkillsPage />},
      {
        path: '/work',
        element: <WorkPage />,
        children: [
          {
            path: ':id',
            element: <WorkPage />,
          },
        ],
      },
      {path: '/contact', element: <ContactPage />},
    ],
  },
  {path: '/my-resume', element: <Resume />},
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
