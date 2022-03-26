import { styled } from '../../../../../stitches.config';
import LinkButton from '@/components/atoms/LinkButton';
import Text from '@/components/atoms/Text';
import AvatarText from '@/components/molecules/AvatarText';
import { AvatarType } from '@/components/atoms/Avatar';
import CardOutLine from '@/components/atoms/CardOutLine';

export type PropsType = {
  date: string;
  title: string;
  description?: string;
  tag: {
    text: string;
    href: string;
  };
  user: {
    name: string;
    avatar: AvatarType;
  };
  key: number;
  className?: string;
};

const LayoutTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ContentLayout = styled('div', {
  marginTop: '0.5rem',
});

const ReadMoreLink = styled('a', {
  color: 'rgba(59, 130, 246, 1)',
  textDecoration: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const LayoutBottom = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
});

const PostCard = ({ date, title, description, tag, user, className = '' }: PropsType) => {
  return (
    <CardOutLine paddingXSize='l' paddingYSize='m' maxWidth='m' className={className}>
      <LayoutTop>
        <Text as='span' color='grey600' size='base' weight='light'>
          {date}
        </Text>
        <LinkButton text={tag.text} href={tag.href} fontWeight='bold' />
      </LayoutTop>
      <ContentLayout>
        <Text as='h2' color='grey700' size='xl2' weight='bold'>
          {title}
        </Text>
        <Text as='p' color='grey600' size='base' weight='normal'>
          {description}
        </Text>
      </ContentLayout>
      <LayoutBottom>
        <ReadMoreLink href='#'>ReadMore</ReadMoreLink>
        <AvatarText avatar={user.avatar} text={user.name} />
      </LayoutBottom>
    </CardOutLine>
  );
};

export default PostCard;
