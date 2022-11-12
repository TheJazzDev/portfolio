import Typewriter from 'typewriter-effect'

const TypewriterText = () => {
  return (
    <div className="text-2xl text-lightMode-paragraph dark:text-darkMode-heading font-semibold">
      <Typewriter
        options={{
          loop: true,
          delay: 70,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(3000)
            .typeString('Web Developer')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Crypto Enthusiast')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Strategic Manager')
            .pauseFor(2000)
            .deleteAll(40)
            .pauseFor(5)
            .typeString('Freelancer')
            .pauseFor(2000)
            .deleteAll(40)
            .start()
        }}
      />
    </div>
  )
}

export default TypewriterText
