import React, { useEffect } from 'react';
import './MeteorShower.scss';
// import Meteors from "@/components/magicui/meteors";



const MeteorShower = () => {
  useEffect(() => {
    // Generate meteors dynamically based on the given count
    const meteorContainer = document.querySelector('.meteors-container');
    const numberOfMeteors = 15; // Adjust the number as needed

    for (let i = 0; i < numberOfMeteors; i++) {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.animationDelay = `${Math.random() * 5}s`;
      meteor.style.animationDuration = `${2 + Math.random() * 3}s`;
      meteorContainer.appendChild(meteor);
    }
  }, []);

  return (
    <div className="framer-page-container">
      <div className="meteors-container"></div>
    </div>

  //   <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
  //   <Meteors number={30} />
  //   <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
  //     Meteors
  //   </span>
  // </div>
  );
};

export default MeteorShower;
