import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

import profile from '../assets/Profile.png'
import sidebarImg from '../assets/sidebarimg.svg';

import { Avatar } from './Avatar';


export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img src={sidebarImg}
             className={styles.cover}
            />  

            <div className={styles.profile}>
                <Avatar src={profile } />

                <strong>Leslie Alexander</strong>
                <span>Ui Designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20 } />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}