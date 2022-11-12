import React, { useState, useEffect } from 'react';

import MotionLogo from '../components/UI/MotionLogo';

let d;
let h;
let m;
let s;

const useCountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const target = new Date('2022-11-07 9:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLaunch(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  const countDown = (
    <div className="bg-darkBackground text-white flex flex-col items-center justify-center h-screen gap-6 text-center">
      <span className="h-fit ">
        <MotionLogo />
      </span>
      <div className="text-3xl mb-6">Portfolio Launch In:</div>
      <div className="flex justify-center gap-6 basis-10 flex-wrap">
        {[
          [days, 'DAYS'],
          [hours, 'HOURS'],
          [minutes, 'MINS'],
          [seconds, 'SECS'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-3xl bg-darkMode-card px-10 py-6">
            <div className="text-4xl font-bold mb-2">{format(value)}</div>
            <span className="">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-8">Taiwo Jazz is Working...</p>
    </div>
  );

  return { countDown, launch };
};

export default useCountDown;
