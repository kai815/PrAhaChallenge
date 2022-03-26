import { styled } from '../../../../stitches.config';
import { css } from '@stitches/core';
import Text from '@/components/atoms/Text';
import Avatar, { AvatarType } from '@/components/atoms/Avatar';

type PropsType = {
  avatar: AvatarType;
  text: string;
};

const Layout = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  textecoration: 'inherit',
});
const AvatarLayout = styled('div', {
  marginLeft: '1rem',
  marginRight: '1rem',
  //本当は画像を読み込まないとかまでした方が良さそう
  '@sm': {
    display: 'none',
  },
});

const AvatarText = ({ avatar, text }: PropsType) => {
  return (
    <Layout>
      <AvatarLayout>
        <Avatar {...avatar} />
      </AvatarLayout>
      <Text color='grey700' weight='bold' size='base'>
        {text}
      </Text>
    </Layout>
  );
};

export default AvatarText;
