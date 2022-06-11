import styles from './styles.module.scss'

interface Props {
  hasBorder?: boolean;
  src: string;
}
export function Avatar({ hasBorder = true, src }: Props) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}