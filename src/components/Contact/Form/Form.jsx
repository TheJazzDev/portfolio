import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Sent from './Sent';
import Sending from './Sending';

const Form = ({className}) => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const handleClose = () => {
    setSent(false);
    setIsSending(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const message = messageInputRef.current.value;

    const parameters = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        'service_s7mucmk',
        'template_ixmn6tb',
        parameters,
        'GL_VfhOvYN3IMeZNg'
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          nameInputRef.current.value = '';
          emailInputRef.current.value = '';
          subjectInputRef.current.value = '';
          messageInputRef.current.value = '';
        },
        () => {
          alert('Failed to send the message, please try again!');
        }
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className={className}>
      <div
        className="relative p-8 md:p-12 w-fit max-w-[50rem] shadow-2xl bg-lightMode-card dark:bg-darkMode-card rounded-2xl mb-24 lg:mb-0">
        <form
          onSubmit={sendEmail}
          autoComplete="off"
          className="text-lightMode-paragraph dark:text-darkMode-card-text w-full">
          <input
            type="text"
            name="name"
            ref={nameInputRef}
            required
            placeholder="Name"
            className="pt-4 pb-1 mb-6 bg-transparent border-b border-lightMode-100 outline-none w-full placeholder:italic"
          />
          <br />
          <input
            type="email"
            ref={emailInputRef}
            required
            placeholder="Email"
            className="pt-4 pb-1 mb-6 bg-transparent border-b border-lightMode-100 outline-none w-full placeholder:italic"
          />
          <br />
          <input
            type="subject"
            name="subject"
            ref={subjectInputRef}
            required
            placeholder="Subject"
            className="pt-4 pb-1 mb-6 bg-transparent border-b border-lightMode-100 outline-none w-full placeholder:italic"
          />
          <br />
          <textarea
            name="message"
            rows="4"
            cols="50"
            required
            ref={messageInputRef}
            placeholder="Message"
            className="pt-4 pb-1 mb-6 bg-transparent border-b border-lightMode-100 resize-none outline-none w-full placeholder:italic"
          />
          <span className="flex gap-6 items-center h-20">
            {isSending ? (
              <Sending />
            ) : (
              <button
                type="submit"
                className="block px-8 py-2 border border-lightMode-100 rounded text-lightMode-100 hover:bg-lightMode-100 hover:text-white transition-all ease-in-out duration-300">
                Send
              </button>
            )}
          </span>
        </form>

        {sent && <Sent handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default Form;
