import { styled } from '../../../../../../stitches.config' 
import LinkButton from '@/components/atoms/LinkButton'
import Text from '@/components/atoms/Text'
import AvatarText from '@/components/molecules/AvatarText'
import {AvatarType} from '@/components/atoms/Avatar'


type PropsType = {
  title:string
  date:string
  category:string
  author:{
    name:string
    avatar:AvatarType
  }
}

const RecentPostCardOutLine = styled('div',{
  display: "flex",
  flexDirection: "column",
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  maxWidth: '24rem',
  borderRadius: '0.5rem',
  boxShadow: "$md",
})

const RecentPostCard = ({
  title,
  date,
  category,
  author,
}: PropsType)=>{
  return (
    <RecentPostCardOutLine>
      <LinkButton text={category} href={`#${category}`}/>
      <Text size="lg" weight="medium" color="grey700">
        {title}
      </Text>
      <AvatarText avatar={author.avatar} text={author.name} />
      <Text as="span" size="sm" weight="light" color="grey600">
        {date}
      </Text>
    </RecentPostCardOutLine>
  )
}

export default RecentPostCard;
