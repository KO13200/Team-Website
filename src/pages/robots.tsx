import React from 'react';
import Head from 'next/head';
import RobotEntry from '../components/RobotEntry';
import RobotEntry2 from '../components/RobotEntry2'; 

function RobotsPage() {
  var robots = [
    {desc: "Our 2019 robot KillSwitch: Designed to be capable of scoring cargo quickly with a small hatch panel 'flooper' this robot has been described as a cargo beast. Competed at: South Pacific Regional - Lost in Semi Finals", image: "/5663_2019.jpg"}
    ,{desc2: "Our 2020 robot ,TBC", image: "/2020_render.png" }
  ];

  return (
    <div>,
      <Head>
        <title>Robots | 4788</title>
        <meta name="description" content="Curtin FRC's robots" />
      </Head>
      <div className="page">
        <div className='hero-no-padding'>
          <div className="column">
            {robots.map((robot, index) => (
              <div key={index}>
                <RobotEntry desc={robot.desc} />
                <br/><br/><br/><br/>
              </div>
            ))}
            <div>
              <RobotEntry2  desc2={robots.desc2}/>
              <br/><br/><br/><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotsPage;
