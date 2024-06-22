import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TransitionProvider } from './context/TransitionContext';
import { ThemeProvider } from './context/ThemeContext';
import useDocumentTitle from './hooks/useDocumentTitle';
import RoutesContainer from './router/Routes';
import Layout from './components/Layout/Layout';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useDocumentTitle();

  return (
    <ThemeProvider>
      <TransitionProvider>
        <Layout />
        <RoutesContainer />
      </TransitionProvider>
    </ThemeProvider>
  );
}

export default App;
