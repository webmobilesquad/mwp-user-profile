import cx from 'classnames';
import style from './style.module.scss';

export function MenuItems(props) {
  return <ul className={style.Menu_Items} {...props} />;
}

export function MenuItem({ href, children, ...props }) {
  return (
    <li className={style.Menu_Item} {...props}>
      <a href={href}>{children}</a>
    </li>
  );
}

export function MenuItemText(props) {
  return <span {...props} />;
}

export function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

export function MenuHeader(props) {
  return <header className={style.Menu_Header} {...props} />;
}

export function Menu({ visible, anchor = 'top-right', ...props }) {
  return (
    <div
      className={cx(style.Menu, {
        [style.Menu__visible]: visible,
        [style[`Menu__anchor_${anchor}`]]: anchor,
      })}
      {...props}
    />
  );
}
