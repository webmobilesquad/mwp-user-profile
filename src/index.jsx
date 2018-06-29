import { render } from 'preact';
import { UserProfile } from './UserProfile';

export const renderUserProfile = ({ container, ...props }) => render(
  <UserProfile {...props} />,
  container,
);
