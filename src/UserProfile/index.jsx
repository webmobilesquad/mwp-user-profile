import cx from 'classnames';
import jwtDecode from 'jwt-decode';
import style from './style.module.scss';

export const UserProfile = ({
  className, idToken, mwpDomain, onLogout, ...props
}) => {
  const jwtDecoded = jwtDecode(idToken);
  // TODO: translate a-links with polyglotJS
  return (
    <div className={cx(style.UserProfile, className)} {...props}>
      <img src={jwtDecoded.picture} alt="User pic" />
      <h2> {jwtDecoded.given_name} {jwtDecoded.family_name} </h2>
      <h3> {jwtDecoded.email} </h3>
      <ul>
        <li><a href={`https://${mwpDomain}/msn/user-profile`}>Profile</a></li>
        <li><a onClick={onLogout} href={`https://${mwpDomain}/msn/logout`}>Logout</a></li>
      </ul>
    </div>
  );
};
