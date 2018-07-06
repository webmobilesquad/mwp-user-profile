import { render } from 'preact';
import { UserProfile } from './UserProfile';

export function renderUserProfile({ container, ...props }) {
  return render(<UserProfile {...props} />, container);
}
