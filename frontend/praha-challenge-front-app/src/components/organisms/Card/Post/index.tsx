import { styled } from '../../../../../stitches.config'
import LinkButton from '@/components/atoms/LinkButton'
import Text from '@/components/atoms/Text'

type PropsType = {
  date: string,
  title: string,
  description?: string,
  tag:{
    text:string,
    href:string
  },
  user?:{
    name:string,
    avatar:{
      src:string,
      alt:string
    }
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
const LayoutDateTag = styled('div',{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

const ContentLayout = styled('div',{
  marginTop:"0.5rem"
}
)


const PostCard = ({
  date,
  title,
  description,
  tag,
  user
}:PropsType)=>{
  return (
    <CardOutLine>
      <LayoutDateTag>
        <Text as="span" color="grey600" size="base" weight="light">
          {date}
        </Text>
        <LinkButton text={tag.text} href={tag.href}/>
      </LayoutDateTag>
      <ContentLayout>
        <Text as="h2" color="grey700" size="xl2" weight="bold">
          {title}
        </Text>
      </ContentLayout>
    </CardOutLine>
  )
}

export default PostCard;
