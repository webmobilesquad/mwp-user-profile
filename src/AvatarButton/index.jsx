import style from './style.module.scss';

export function AvatarButton({ src, alt, ...props }) {
  return (
    <button type="button" className={style.AvatarButton} {...props}>
      <img src={src} alt={alt} />
    </button>
  );
}
