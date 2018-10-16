import render from 'preact-render-spy';
import { AvatarPicture } from '..';

describe('<AvatarPicture />', () => {
  test('<AvatarPicture /> displays given src and alt', () => {
    expect(
      render(
        <AvatarPicture
          src="https://mywebportal.michelin-solutions.com/msn-avatars/ef0eccf32b62a0c05d98f4b91cfa9a9a.png"
          alt="John Doe"
        />,
      ),
    ).toMatchSnapshot();
  });

  test('<AvatarPicture /> displays given alt and fallback src', () => {
    expect(
      render(
        <AvatarPicture
          alt="John Doe"
        />,
      ),
    ).toMatchSnapshot();
  });

  test('<AvatarPicture /> displays given src and fallback alt', () => {
    expect(
      render(
        <AvatarPicture
          src="https://mywebportal.michelin-solutions.com/msn-avatars/ef0eccf32b62a0c05d98f4b91cfa9a9a.png"
        />,
      ),
    ).toMatchSnapshot();
  });

  test('<AvatarPicture /> displays fallback src and alt', () => {
    expect(
      render(
        <AvatarPicture />,
      ),
    ).toMatchSnapshot();
  });
});
