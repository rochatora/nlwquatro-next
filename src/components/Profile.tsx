import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level} = useContext(challengesContext);

    return (
        <div>
            <img src='https://github.com/rochatora.png' alt='rcr Rocha' />
            <div>
                <strong>Renato Rocha</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />
                    Level {level}
                </p>
            </div>
        </div>
    );
}