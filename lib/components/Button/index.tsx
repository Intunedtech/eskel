import { CustomButtonProps } from './button'
import styles from './styles.module.css'

export function Button(props: CustomButtonProps) {
  const { className, fullWidth, ...restProps } = props
  return <button className={`${className || ''} ${fullWidth && styles.fullWidth} ${styles.defaultButton}`} {...restProps} />
}
