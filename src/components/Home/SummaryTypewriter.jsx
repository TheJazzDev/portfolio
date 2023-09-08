import Typewriter from 'typewriter-effect';

const SummaryTypewriter = () => {
  return (
    <div className="text-2xl hidden lg:block text-lightMode-paragraph dark:text-darkMode-heading font-semibold">
      <Typewriter
        options={{
          loop: true,
          delay: 70,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString('Software')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Crypto Enthusiast')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Interactive Animator')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Freelancer')
            .pauseFor(2000)
            .deleteAll(40)
            .start();
        }}
      />
    </div>
  );
};

export default SummaryTypewriter;
