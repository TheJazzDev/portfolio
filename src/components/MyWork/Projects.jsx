import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectList } from '../../utils/Projects';

gsap.registerPlugin(ScrollTrigger);

const PRojects = () => {
  const projectContainer = useRef();

  useGSAP(() => {}, { scope: projectContainer });

  return (
    <div ref={projectContainer} className="flex-1 h-fit overflow-y-auto">
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {projectList.map(
          (
            {
              title,
              description,
              languages,
              github,
              githubLink,
              liveDemo,
              liveDemoLink,
            },
            index
          ) => (
            <div
              key={index}
              className="flex flex-col justify-between h-72 p-4 bg-lightMode-card dark:bg-darkMode-card rounded-lg">
              <div>
                <h2 className="text-md text-center font-bold text-lightMode-300 dark:text-darkMode-card-text">
                  {title}
                </h2>
                <p className="text-xs text-center mt-4 text-lightMode-300 dark:text-darkMode-card-text">
                  {description}
                </p>
              </div>

              <div className="flex">
                <p className="flex-1 text-[12px] text-lightMode-300 dark:text-darkMode-card-text">
                  {languages}
                </p>
                <div className="flex gap-6">
                  {github && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lightMode-300 dark:text-darkMode-card-text">
                      {github}
                    </a>
                  )}
                  {liveDemo && (
                    <a
                      href={liveDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lightMode-300 dark:text-darkMode-card-text">
                      {liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PRojects;
