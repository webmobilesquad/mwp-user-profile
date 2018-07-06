import render from 'preact-render-spy';
import { AvatarButton } from '../index';

describe('<AvatarButton />', () => {
  test('<AvatarButton /> matches snapshot', () => {
    expect(
      render(
        <AvatarButton
          src="https://mywebportal.michelin-solutions.com/msn-avatars/73c9c100a15a943fc0446f4b5e880d12.png"
          alt="John Doe"
        />,
      ),
    ).toMatchSnapshot();
  });
});
