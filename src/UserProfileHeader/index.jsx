import style from './style.module.scss';
import { AvatarPicture } from '../AvatarPicture';

export function UserProfileHeader({ jwt, href, ...props }) {
  return (
    <a className={style.UserProfileHeader} href={href} {...props}>
      <AvatarPicture className={style.UserProfileHeader_Avatar} src={jwt.picture} alt={jwt.name} />
      <div className={style.UserProfileHeader_Information}>
        <span className={style.UserProfileHeader_Name}>
          {jwt.given_name} {jwt.family_name}
        </span>
        <span className={style.UserProfileHeader_Email}>{jwt.email}</span>
      </div>
    </a>
  );
}
