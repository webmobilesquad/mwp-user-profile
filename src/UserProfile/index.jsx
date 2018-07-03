import { Component } from 'preact';
import cx from 'classnames';
import jwtDecode from 'jwt-decode';
import style from './style.module.scss';

export class UserProfile extends Component {
  constructor(props) {
    super();
    const { idToken } = props;
    const { backendUrl } = props;
    const jwtDecoded = jwtDecode(idToken);

    this.setState({
      profileUrl: { name: 'Profile', url: `https://${backendUrl}/msn/user-profile` },
      logoutUrl: { name: 'Logout', url: `https://${backendUrl}/msn/logout` },
      userInfo: {
        givenName: jwtDecoded.given_name,
        familyName: jwtDecoded.family_name,
        email: jwtDecoded.email,
        picture: jwtDecoded.picture,
      },
    });
  }

  state = {
    profileUrl: undefined,
    logoutUrl: undefined,
    userInfo: {
      picture: undefined,
      givenName: undefined,
      familyName: undefined,
      email: undefined,
    },
  }

  render({ className, ...props }, { userInfo, profileUrl, logoutUrl }) {
    return (
      <div className={cx(style.UserProfile, className)} {...props}>
        <img src={userInfo.picture} alt="User pic" />
        <h2> {userInfo.givenName} {userInfo.familyName} </h2>
        <h3> {userInfo.email} </h3>
        <ul>
          <li><a href={profileUrl.url}>{profileUrl.name}</a></li>
          <li><a href={logoutUrl.url}>{logoutUrl.name}</a></li>
        </ul>
      </div>
    );
  }
}
