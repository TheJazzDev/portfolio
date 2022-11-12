import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useContext } from 'react';
import particlesConfig from '../../config/particle-config';
import ThemeContext from '../../store/theme-context';

const ParticlesBackground = () => {
  const { theme } = useContext(ThemeContext);

  let color;
  let size;

  switch (theme) {
    case 'dark':
      color = '#ffffff';
      size = 1;
      break;
    case 'light':
      color = '#0084ff';
      size = 2;
      break;
    default:
      break;
  }

  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute'
      }}
      params={particlesConfig(color, size)}
    />
  );
};

export default ParticlesBackground;
