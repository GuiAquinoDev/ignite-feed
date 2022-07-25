import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProos extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true , ...props}:AvatarProos) {
 

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}