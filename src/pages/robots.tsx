import React from 'react';
import Head from 'next/head';
import RobotEntry from '../components/RobotEntry';
import RobotEntry2 from '../components/RobotEntry2'; 
import RobotEntry3 from '../components/RobotEntry3';
import RobotEntry4 from '../components/RobotEntry4'; 
import RobotEntry5 from '../components/RobotEntry5';
import RobotEntry6 from '../components/RobotEntry6'; 
function RobotsPage() {
  return (
    <div>
      <Head>
        <title>Robots | 4788</title>
        <meta name="description" content="Curtin FRC's robots" />
      </Head>
      <div className="page">
        <div className='hero-no-padding'>
          <div className="column">
            <div>
              <br/><br/><br/><br/>
              <RobotEntry/>
              <br/><br/><br/><br/>
              <RobotEntry2/>
              <br/><br/><br/><br/>
              <RobotEntry3/>
              <br/><br/><br/><br/>
              <RobotEntry4/>
              <br/><br/><br/><br/>
              <RobotEntry5/>
              <br/><br/><br/><br/>
              <RobotEntry6/>
              <br/><br/><br/><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotsPage;
