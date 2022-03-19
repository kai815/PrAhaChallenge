import { styled } from '../../../../stitches.config'
import { css } from '@stitches/core';
import Text from '@/components/atoms/Text'
import Avatar,{ PropsType as AvatarType } from '@/components/atoms/Avatar'

type PropsType={
  avatar:AvatarType,
  text:string
}

const Layout = styled('a', {
  display: "flex",
  alignItems: "center",
  color: "inherit",
  textecoration: "inherit"
})
const AvatarMargin = css({
  marginLeft:'1rem',
  marginRight: '1rem'
})

const AvatarText = ({avatar, text}:PropsType) =>{
  return (
    <Layout>
      <Avatar {...avatar} className={AvatarMargin()}/>
      <Text color="grey700" weight="bold" size="base">
        {text}
      </Text>
    </Layout>
  )
}

export default AvatarText;
