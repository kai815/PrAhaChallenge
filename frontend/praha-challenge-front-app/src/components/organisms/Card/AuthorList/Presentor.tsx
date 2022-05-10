import { styled } from '../../../../../stitches.config';
import Text from '@/components/atoms/Text';
import AvatarText from '@/components/molecules/AvatarText';
import { AvatarType } from '@/components/atoms/Avatar';
import CardOutLine from '@/components/atoms/CardOutLine';

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

const List = styled('ul', {
  marginLeft: '-1rem',
  marginRight: '-1rem',
});

const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '1.5rem',
});

const TextMargin = styled('div', {
  marginLeft: '0.25rem',
});
export const NoAuthorList = () => {
  return (
    <CardOutLine paddingXSize='s' paddingYSize='s' maxWidth='s' flexDirection='column' className=''>
      著者は誰もいません。
    </CardOutLine>
  );
};

const AuthorListCardPresentor = ({ authors, className = '' }: PropsType) => {
  return (
    <CardOutLine
      paddingXSize='s'
      paddingYSize='s'
      maxWidth='s'
      flexDirection='column'
      className={className}
    >
      <List>
        {authors.map((author) => (
          <ListItem key={author.key}>
            <AvatarText avatar={author.avatar} text={author.name} />
            <TextMargin>
              <Text as='span' size='sm' weight='light' color='grey700'>
                Created {author.createdPostCount} Posts
              </Text>
            </TextMargin>
          </ListItem>
        ))}
      </List>
    </CardOutLine>
  );
};
export default AuthorListCardPresentor;
