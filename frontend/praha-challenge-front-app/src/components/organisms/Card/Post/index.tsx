import { styled } from '../../../../../stitches.config'
import LinkButton from '@/components/atoms/LinkButton'
import Text from '@/components/atoms/Text'
import AvatarText from '@/components/molecules/AvatarText'
import {PropsType as AvartarType} from '@/components/atoms/Avatar'

type PropsType = {
  date: string,
  title: string,
  description?: string,
  tag:{
    text:string,
    href:string
  },
  user:{
    name:string,
    avatar:AvartarType
  }
}

const CardOutLine = styled('div',{
  borderRadius: "0.5rem",
  paddingLeft: "2.5rem",
  paddingRight: "2.5rem",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  maxWidth: "56rem",
})
const LayoutTop = styled('div',{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

const ContentLayout = styled('div',{
  marginTop:"0.5rem"
})

const ReadMoreLink = styled('a',{
  color:"rgba(59, 130, 246, 1)",
  textDecoration: "inherit",
  "&:hover":{
    textDecoration: "underline",
  }
})

const LayoutBottom = styled('div',{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop:"1rem"
})

const PostCard = ({
  date,
  title,
  description,
  tag,
  user
}:PropsType)=>{
  return (
    <CardOutLine>
      <LayoutTop>
        <Text as="span" color="grey600" size="base" weight="light">
          {date}
        </Text>
        <LinkButton text={tag.text} href={tag.href}/>
      </LayoutTop>
      <ContentLayout>
        <Text as="h2" color="grey700" size="xl2" weight="bold">
          {title}
        </Text>
        <Text as="p" color="grey600" size="base" weight="normal">
          {description}
        </Text>
      </ContentLayout>
      <LayoutBottom>
      <ReadMoreLink href="#">ReadMore</ReadMoreLink>
      <AvatarText avatar={user.avatar} text={user.name}/>
      </LayoutBottom>
    </CardOutLine>
  )
}

export default PostCard;
