import { styled } from '../../../../../stitches.config'
import Text from '@/components/atoms/Text'
import AvatarText from '@/components/molecules/AvatarText'
import {AvatarType} from '@/components/atoms/Avatar'

type Author = {
  name: string,
  createdPostCount: number,
  key:number
  avatar:AvatarType
} 

type PropsType = {
  authors:Author[]
}

const AuthorListCardOutLine = styled('div',{
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

const List = styled('ul',{
  marginLeft: "-1rem",
  marginRight: "-1rem"
})

const ListItem = styled('li',{
  display: "flex",
  alignItems: "center",
})

const AuthorListCard = ({authors}:PropsType)=>{
  console.log("authors",authors)
  return(
    <AuthorListCardOutLine>
      <List>
        {
          authors?.map((author)=>(
            <ListItem key={author.key}>
              <AvatarText avatar={author.avatar} text={author.name}/>
              <Text
                as="span"
                size="sm"
                weight="light"
                color="grey700">
                  Created {author.createdPostCount} Posts
              </Text>
            </ListItem>)
          )
        }
      </List>
    </AuthorListCardOutLine>
  )
}
export default AuthorListCard;
