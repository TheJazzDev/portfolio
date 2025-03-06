const Bio = ({ id }) => {
  return (
    <div
      id={id}
      className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[50rem] [&>p]:mb-5 ">
      <p>
        I’m a detail-oriented Front-End Engineer & Mobile App Developer with a
        passion for translating business logic and designs into seamless,
        high-performance user experiences. With hands-on experience in
        developing scalable architectures, integrating complex APIs, and
        optimizing performance, I specialize in building pixel-perfect,
        responsive web and mobile applications across cryptocurrency, fintech,
        and health-tech sectors.
      </p>
      <p>
        My journey into software development started in 2022 when, as a Product
        Quality Assurance Lead, I managed a team of developers and realized that
        I wanted to take a more active role in the development process. Since
        then, I have honed my skills in React.js, Next.js, React Native,
        Flutter, TailwindCSS, GSAP, and modern web technologies, consistently
        delivering high-quality, maintainable code.
      </p>
      <p>
        Beyond coding, I enjoy mentoring junior developers, leading technical
        teams, and exploring UI animations and performance optimization to
        enhance user engagement. I thrive on solving challenging problems and
        continuously pushing the boundaries of front-end development.
      </p>
    </div>
  );
};

export default Bio;
