export function AvatarPicture({
  src, alt, ...props
}) {
  return (
    <img
      {...props}
      src={src || 'https://mywebportal.michelin-solutions.com/msn-avatars/73c9c100a15a943fc0446f4b5e880d12.png'}
      alt={alt || 'Avatar'}
    />
  );
}
