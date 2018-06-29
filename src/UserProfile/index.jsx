import { Component } from 'preact';
import cx from 'classnames';
import style from './style.module.scss';

export class UserProfile extends Component {
  state = {
    links: [
      { name: 'Profile', url: 'https://wms-dev.michelin.net/msn/user-profile' },
      { name: 'Logout', url: 'https://wms-dev.michelin.net/msn/logout' },
    ],
  }

  render({ className, ...props }, { links }) {
    const { UserGivenName } = props;
    const { UserFamilyName } = props;
    const { UserEmail } = props;
    const { UserPicture } = props;

    return (
      <div className={cx(style.UserProfile, className)} {...props}>
        <img src={UserPicture} alt="User pic" />
        <h2> { UserGivenName } { UserFamilyName } </h2>
        <h3> { UserEmail } </h3>
        <ul>
          {links && links.map(link => <li><a href={link.url}>{link.name}</a></li>)}
        </ul>
      </div>
    );
  }
}
