import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Heading from './Heading';
import Form from './Form/Form';

const Contact = () => {
  const contactMe = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: 'back(3)', duration: 1 },
        })
        .from('#contact', { ease: 'linear', autoAlpha: 0 })
        .from('#content > p', { x: -100, stagger: 0.3 })
        .from('.form div', { x: 100 }, '<')
        .from('.form input', { x: 100, stagger: 0.2 }, '-=0.8')
        .from('.form textarea', { x: 100 }, '-=0.8')
        .from('.form span', { x: 100 }, '-=0.8');
    },
    { scope: contactMe }
  );

  return (
    <section ref={contactMe}>
      <div
        id="contact"
        className="invisible flex flex-col lg:flex-row items-center justify-center h-fit lg:h-screen lg:pl-16 px-8 w-screen gap-20 lg:pb-24 overflow-x-hidden">
        <Heading id="content" />
        <Form className="form" />
      </div>
    </section>
  );
};

export default Contact;
