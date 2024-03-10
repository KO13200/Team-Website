import Head from 'next/head';
import RobotEntry from '../components/RobotEntry';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Robots | 4788</title>
        <meta name="description" content="Curtin FRC's robots" />
      </Head>
      <div className="page">
        <div className='hero-no-padding'>
          <div className="column">
            <RobotEntry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
