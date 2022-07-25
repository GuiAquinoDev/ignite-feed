import styles from './Header.module.css';
import Icon from '../assets/Ignitesimbol.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ Icon } alt="Logo Ignite" />
        </header>
    );
}