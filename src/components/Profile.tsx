import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div>
            <img src='https://github.com/rochatora.png' alt='rcr Rocha' />
            <div>
                <strong>Renato Rocha</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />
                    Level 1
                </p>
            </div>
        </div>
    );
}