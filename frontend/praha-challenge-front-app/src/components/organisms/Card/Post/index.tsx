import { styled } from '../../../../../stitches.config';
import LinkButton from '@/components/atoms/LinkButton'

type PropsType = {
  date: string,
  title?: string,
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

const DateText = styled('span',{
  fontWeight:"$light",
  color:"$grey600"
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
      <DateText>{date}</DateText>
      <LinkButton text={tag.text} href={tag.href}/>
    </CardOutLine>
  )
}

export default PostCard;
