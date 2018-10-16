import style from './style.module.scss';
import { AvatarPicture } from '../AvatarPicture';

export function AvatarButton({
  src, alt, forwardedRef, ...props
}) {
  return (
    <button
      type="button"
      className={style.AvatarButton}
      ref={forwardedRef}
      {...props}
    >
      <AvatarPicture src={src} alt={alt} />
    </button>
  );
}
