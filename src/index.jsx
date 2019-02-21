import { render } from 'preact';
import { UserProfile } from './UserProfile';
import { init as init18n } from './i18n';

// Init internationalisation
init18n();

export function renderUserProfile({ container, ...props }) {
  return render(<UserProfile {...props} />, container);
}
