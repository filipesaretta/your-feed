import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.scss'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props }: Props) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
  )
}