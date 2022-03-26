import { styled } from '../../../../stitches.config';

export type AvatarType = {
  src: string;
  alt: string;
};

type PropsType = {
  className?: string;
} & AvatarType;

const BaseImage = styled('img', {
  width: '2.5rem',
  objectFit: 'cover',
  height: '2.5rem',
  borderRadius: '9999px',
});

const Avatar = ({ src, alt, className = '' }: PropsType) => {
  return <BaseImage src={src} alt={alt} className={className} />;
};
export default Avatar;
