import cx from 'classnames';
import jwtDecode from 'jwt-decode';
import { Component } from 'preact';
import { AvatarButton } from '../AvatarButton';
import { i18n } from '../i18n';
import {
  LogoutIcon,
  Menu,
  MenuHeader,
  MenuItem,
  MenuItems,
  MenuItemText,
  ProfileIcon,
} from '../Menu';
import { getLogoutUrl, getUserProfileUrl } from '../url';
import { UserProfileHeader } from '../UserProfileHeader';
import style from './style.module.scss';

export class UserProfile extends Component {
  state = {
    menuVisible: false,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.handleWindowClick);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('click', this.handleWindowClick);
    }
  }

  handleWindowClick = (event) => {
    if (event.target !== this.button) {
      this.setState({ menuVisible: false });
    }
  };

  handleClick = () => {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  };

  render({
    className, idToken, baseUrl, anchor, onLogout, ...props
  }, { menuVisible }) {
    const jwt = jwtDecode(idToken);
    const t = i18n(jwt.locale);

    return (
      <div className={cx(style.UserProfile, className)} {...props}>
        <AvatarButton
          src={jwt.picture}
          alt={jwt.name}
          onClick={this.handleClick}
          forwardedRef={(ref) => {
            this.button = ref;
          }}
        />
        <Menu visible={menuVisible} anchor={anchor}>
          <MenuHeader>
            <UserProfileHeader jwt={jwt} href={getUserProfileUrl(baseUrl)} />
          </MenuHeader>
          <MenuItems>
            <MenuItem href={getUserProfileUrl(baseUrl)}>
              <ProfileIcon>account_circle</ProfileIcon>
              <MenuItemText>{t('profile')}</MenuItemText>
            </MenuItem>
            <MenuItem href={getLogoutUrl(baseUrl)} onClick={onLogout}>
              <LogoutIcon>exit_to_app</LogoutIcon>
              <MenuItemText>{t('logout')}</MenuItemText>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    );
  }
}
