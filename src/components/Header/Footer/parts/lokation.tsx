import React from 'react';

const Lokation = () => {
  return <div className="flex p-8 pt-6 pb-0 col-start-1">
        <a href="https://www.google.com/maps/place/Applebys+Pl.+7,+1411+K%C3%B8benhavn/@55.671335,12.5829565,17z/data=!3m1!4b1!4m5!3m4!1s0x4652533fc596626f:0xd15c5af5d23dea94!8m2!3d55.671335!4d12.5851452">
          <img className="inline w-8 mr-1" src="data:image/png;base64,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" alt="FEJL"/>
          Applebys PL7, 1411 København, DK
        </a>
  </div>;
};

export default Lokation;