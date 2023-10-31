import classes from './Cube.module.css';
import {useRef} from 'react';
import {motion, useAnimationFrame} from 'framer-motion';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Cube = ({id}) => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <motion.div id={id} className={classes.container}>
      <div className={classes.cube} ref={ref}>
        {[
          [`${classes.side} ${classes.front}`, faReact, '#61dbfb'],
          [`${classes.side} ${classes.left}`, faPython, '#61dbfb'],
          [`${classes.side} ${classes.right}`, faCss3, '#28A4D9'],
          [`${classes.side} ${classes.top}`, faJsSquare, '#EFD81D'],
          [`${classes.side} ${classes.bottom}`, faGitAlt, '#EC4D28'],
          [`${classes.side} ${classes.back}`, faHtml5, '#563d7c'],
        ].map(([sides, icon, color]) => (
          <div key={icon + sides} className={sides}>
            <FontAwesomeIcon icon={icon} color={color} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cube;
