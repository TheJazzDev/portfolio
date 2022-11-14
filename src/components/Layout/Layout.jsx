import useLoader from '../../hooks/use-loader';
import Nav from './MainNavigation/Nav';
// import ParticlesBackground from '../UI/ParticlesBackground';

const Layout = () => {
  const {loading, loader} = useLoader();

  return loading ? (
    loader
  ) : (
    <div className="-z-10">
      <Nav />
      <div className="hidden text-[.95rem] lg:block lg:blocktext-sm fixed bottom-36 -right-16 rotate-90 text-lightMode-paragraph hover:text-lightMode-100 dark:text-darkMode-100 dark:hover:text-darkMode-400 tracking-wide z-40">
        <a
          href="mailto:babsman4all@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          babsman4all@gmail.com
        </a>
      </div>
      {/* <ParticlesBackground /> */}
    </div>
  );
};

export default Layout;
