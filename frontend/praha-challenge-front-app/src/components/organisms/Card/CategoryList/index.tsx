import { styled } from '../../../../../stitches.config'
import Text from '@/components/atoms/Text' 

type Category = {
  name: string,
  key:number,
}

export type PropsType = {
  categories:Category[]
  className?:string
}

const CategoryListCardOutLine = styled('div',{
  backgroundColor:'$white',
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

const CategoryListCard = ({
  categories,
  className = ''
}:PropsType)=>{
  return (
    <CategoryListCardOutLine className={className}>
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
