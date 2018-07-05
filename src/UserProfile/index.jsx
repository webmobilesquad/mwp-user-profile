import { Component } from 'preact';
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

function UserProfileMenu({
  jwt, mwpDomain, onLogout, visible, ...props
}) {
  const translator = initPolyglotTranslator(jwt.locale);
  return (
    <div
      className={cx(style.UserProfile_Menu, { [style.UserProfile_Menu__visible]: visible })}
      {...props}
    >
      <header>
        <img src={jwt.picture} alt="user avatar" />
        <div>
          <h2>
            {jwt.given_name} {jwt.family_name}
          </h2>
          <h3>{jwt.email}</h3>
        </div>
      </header>
      <ul>
        <li>
          <a href={`https://${mwpDomain}/msn/user-profile`}>{translator.t('profile')}</a>
        </li>
        <li>
          <a onClick={onLogout} href={`https://${mwpDomain}/msn/logout`}>
            {translator.t('logout')}
          </a>
        </li>
      </ul>
    </div>
  );
}

export class UserProfile extends Component {
  state = {
    menuVisible: false,
  };

  handleClick = () => {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  };

  render({
    className, idToken, mwpDomain, onLogout, ...props
  }, { menuVisible }) {
    const jwt = jwtDecode(idToken);

    return (
      <div className={cx(style.UserProfile, className)} {...props}>
        <button type="button" onClick={this.handleClick} className={cx(style.UserProfile_Button)}>
          <img src={jwt.picture} alt="user avatar" />
        </button>
        {/* TODO: hide UserProfileMenu when clicking elswhere */}
        <UserProfileMenu
          jwt={jwt}
          mwpDomain={mwpDomain}
          onLogout={onLogout}
          visible={menuVisible}
        />
      </div>
    );
  }
}
