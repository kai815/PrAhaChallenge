import { styled } from '../../../../../stitches.config'
import Text from '@/components/atoms/Text' 

type Category = {
  name: string,
  key:number,
}

type PropsType = {
  categories:Category[]
}

const CategoryListCardOutLine = styled('div',{
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

const ListItem = styled('li',{
  display: "flex",
  alignItems: "center",
})

const CategoryListCard = ({categories}:PropsType)=>{
  return (
    <CategoryListCardOutLine>
      <ul>
        {
          categories.map((category)=>(
            <ListItem key={category.key}>
              <Text as="span" weight="bold" color="grey700" size="base">
                - {category.name}
              </Text>
            </ListItem>
          ))
        }
      </ul>
    </CategoryListCardOutLine>
  )
}

export default CategoryListCard;
