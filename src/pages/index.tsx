import Head from 'next/head'
import { CompleteChallenge } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/challengeBox';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio  | NLW4</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
        <Profile />
        <CompleteChallenge/>
        <Countdown />
        </div>
        <div>
        <ChallengeBox />
        </div>

      </section>
    </div>
  )
}
