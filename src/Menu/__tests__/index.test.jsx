import render from 'preact-render-spy';
import {
  LogoutIcon,
  Menu,
  MenuHeader,
  MenuItem,
  MenuItems,
  MenuItemText,
  ProfileIcon,
} from '../index';

describe('<Menu />', () => {
  test('<Menu /> matches snapshot', () => {
    expect(render(<Menu />)).toMatchSnapshot();
  });
  test('<Menu visible /> matches snapshot', () => {
    expect(render(<Menu visible />)).toMatchSnapshot();
  });
  test('<Menu anchor="top-left" /> matches snapshot', () => {
    expect(render(<Menu anchor="top-left" />)).toMatchSnapshot();
  });
  test('<Menu anchor="top-right" /> matches snapshot', () => {
    expect(render(<Menu anchor="top-right" />)).toMatchSnapshot();
  });
});

describe('<MenuHeader />', () => {
  test('<MenuHeader /> matches snapshot', () => {
    expect(render(<MenuHeader />)).toMatchSnapshot();
  });
});

describe('<MenuItems />', () => {
  test('<MenuItems /> matches snapshot', () => {
    expect(render(<MenuItems />)).toMatchSnapshot();
  });

  test('<MenuItems/> with <MenuItem/> matches snapshot', () => {
    expect(
      render(
        <MenuItems>
          <MenuItem href="https://mywebportal.michelin-solutions.com/profile" />
          <MenuItem href="https://mywebportal.michelin-solutions.com/logout" />
        </MenuItems>,
      ),
    ).toMatchSnapshot();
  });
});

describe('<MenuItem />', () => {
  test('<MenuItem /> matches snapshot', () => {
    expect(
      render(<MenuItem href="https://mywebportal.michelin-solutions.com/msn/profile" />),
    ).toMatchSnapshot();
  });

  test('<MenuItem /> with text and icon matches snapshot', () => {
    expect(
      render(
        <MenuItem href="https://mywebportal.michelin-solutions.com/msn/profile">
          <ProfileIcon />
          <MenuItemText>Profile</MenuItemText>
        </MenuItem>,
      ),
    ).toMatchSnapshot();
  });
});

describe('<MenuItemText />', () => {
  test('<MenuItemText /> matches snapshot', () => {
    expect(render(<MenuItemText>Logout</MenuItemText>)).toMatchSnapshot();
  });
});

describe('<ProfileIcon />', () => {
  test('<ProfileIcon /> matches snapshot', () => {
    expect(render(<ProfileIcon />)).toMatchSnapshot();
  });
});

describe('<LogoutIcon />', () => {
  test('<LogoutIcon /> matches snapshot', () => {
    expect(render(<LogoutIcon />)).toMatchSnapshot();
  });
});
