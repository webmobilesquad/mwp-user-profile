import cx from 'classnames';
import jwtDecode from 'jwt-decode';
import Polyglot from 'node-polyglot';
import style from './style.module.scss';
import messages from './messages';

const initPolyglotTranslator = (locale) => {
  let polyglotLocale = locale || 'en';
  if (polyglotLocale.includes('-')) {
    [polyglotLocale] = polyglotLocale.split('-');
  }
  const phrases = messages[polyglotLocale] || messages.en;
  return new Polyglot({ polyglotLocale, phrases });
};

export const UserProfile = ({
  className, idToken, mwpDomain, onLogout, ...props
}) => {
  const jwtDecoded = jwtDecode(idToken);
  const translator = initPolyglotTranslator(jwtDecoded.locale);
  return (
    <div className={cx(style.UserProfile, className)} {...props}>
      <img src={jwtDecoded.picture} alt="user avatar" />
      <h2> {jwtDecoded.given_name} {jwtDecoded.family_name} </h2>
      <h3> {jwtDecoded.email} </h3>
      <ul>
        <li><a href={`https://${mwpDomain}/msn/user-profile`}>{translator.t('profile')}</a></li>
        <li><a onClick={onLogout} href={`https://${mwpDomain}/msn/logout`}>{translator.t('logout')}</a></li>
      </ul>
    </div>
  );
};
