import React, { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom/dist';
import TransitionComponent from '../utils/Transition';
import { Resume } from '../components/Home/Resume';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const WorkPage = lazy(() => import('../pages/WorkPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const RoutesComponent = () => (
  <Routes>
    <Route path="" element={<Outlet />}>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="/about"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
      <Route
        path="/skills"
        element={
          <TransitionComponent>
            <SkillsPage />
          </TransitionComponent>
        }
      />
      <Route
        path="/work"
        element={
          <TransitionComponent>
            <WorkPage />
          </TransitionComponent>
        }
      />
      <Route
        path="/work/:id"
        element={
          <TransitionComponent>
            <WorkPage />
          </TransitionComponent>
        }
      />
      <Route
        path="/contact"
        element={
          <TransitionComponent>
            <ContactPage />
          </TransitionComponent>
        }
      />
    </Route>
    <Route path="/my-resume" element={<Resume />} />
    <Route path="/*" element={<ErrorPage />} />
  </Routes>
);

const RoutesContainer = () => {
  return (
    <Suspense>
      <RoutesComponent />
    </Suspense>
  );
};

export default RoutesContainer;
