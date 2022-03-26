import { styled } from '../../../../../../stitches.config';
import LinkButton from '@/components/atoms/LinkButton';
import Text from '@/components/atoms/Text';
import AvatarText from '@/components/molecules/AvatarText';
import { AvatarType } from '@/components/atoms/Avatar';
import CardOutLine from '@/components/atoms/CardOutLine';

export type PropsType = {
  title: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: AvatarType;
  };
  className?: string;
};

const TopLayout = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const TitleLayout = styled('div', {
  marginTop: '1rem',
});

const BottomLayout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1rem',
});

const RecentPostCard = ({ title, date, category, author, className = '' }: PropsType) => {
  return (
    <CardOutLine
      paddingXSize='m'
      paddingYSize='m'
      maxWidth='s'
      flexDirection='column'
      className={className}
    >
      <TopLayout>
        <LinkButton text={category} href={`#${category}`} textColor='green' />
      </TopLayout>
      <TitleLayout>
        <Text as='span' size='lg' weight='medium' color='grey700'>
          {title}
        </Text>
      </TitleLayout>
      <BottomLayout>
        <AvatarText avatar={author.avatar} text={author.name} />
        <Text as='span' size='sm' weight='light' color='grey600'>
          {date}
        </Text>
      </BottomLayout>
    </CardOutLine>
  );
};

export default RecentPostCard;
