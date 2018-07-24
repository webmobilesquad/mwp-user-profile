import style from './style.module.scss';

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
      <img src={src} alt={alt} />
    </button>
  );
}
