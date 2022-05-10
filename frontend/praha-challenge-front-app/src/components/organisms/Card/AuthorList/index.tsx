import { styled } from '../../../../../stitches.config';
import { AvatarType } from '@/components/atoms/Avatar';
import AuthorListCardPresentor, { NoAuthorList } from './Presentor';

type Author = {
  name: string;
  createdPostCount: number;
  key: number;
  avatar: AvatarType;
};

export type PropsType = {
  authors: Author[];
  className?: string;
};

const AuthorListCardContainer = ({ authors, className = '' }: PropsType) => {
  if (authors.length <= 0) {
    return <NoAuthorList />;
  }
  return <AuthorListCardPresentor authors={authors} className={className} />;
};
export default AuthorListCardContainer;
