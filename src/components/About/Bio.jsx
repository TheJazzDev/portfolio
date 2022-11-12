const Bio = ({className}) => {
  return (
    <div className={className}>
      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[50rem] mb-5">
        I'm a very ambitious front-end developer that is passionate about
        bringing business logic and designs to life.
      </p>
      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[50rem] mb-5">
        I became enthusiastic about web development in early 2022 when I worked
        as a Product Quality Assurance Person and equally incharge of a team of
        developers — turns out, I don't really like getting a 'No' for an
        answer, so I decided to learn programming to become well-informed.
      </p>
      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[50rem] mb-5">
        I'm a very ambitious front-end developer that is passionate about
        bringing business logic and designs to life. A fast learner with strong
        problem-solving skill and the ability to work well in a team. I'm
        fascinated by UI effects/animations and I enjoy taking on new
        challenges.
      </p>
    </div>
  );
};

export default Bio;
