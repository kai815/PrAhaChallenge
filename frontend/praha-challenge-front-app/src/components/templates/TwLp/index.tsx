import { styled } from '../../../../stitches.config'
import Header from '@/components/organisms/Header'
import PostCard from '@/components/organisms/Card/Post'
import PostCardStories from '@/components/organisms/Card/Post/PostCard.stories'
import AuthorListCard from '@/components/organisms/Card/AuthorList'
import CategoryListCard from '@/components/organisms/Card/CategoryList'
import PageNation from '@/components/molecules/PageNation'
import AvatarText from '@/components/molecules/AvatarText'
import Text from '@/components/atoms/Text'
import Select,{PropsType as SelectPropsType} from '@/components/atoms/Select'

type TwLpTemplateType = {
} & SelectPropsType

const Layout = styled('div',{
  overflowX: 'hidden',
  backgroundColor: '$grey100'
})

const LayoutInner = styled('div',{
  paddingBottom:'2rem',
  paddingTop:'2rem',
  paddingRight:'1.5rem',
  paddingLeft:'1.5rem',
})

const Container = styled('div',{
  display:'flex',
  justifyContent: 'spage-between',
  paddingRight:'auto',
  paddingLeft:'auto',
  maxWidth: '1536px'
})
const MainContent = styled('div',{
  width: "66.666667%",
  //width: '100%',
})

const MainContentTitle = styled('div',{
  display:'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})
const SelectWidth = styled('div',{
})

const TwLpTemplate = ({options}:TwLpTemplateType)=>{
  return (
    <Layout>
      <Header/>
      <LayoutInner>
        <Container>
        <MainContent>
          <MainContentTitle>
            <Text as="h1" size="xl" weight="bold" color="grey700">
              Post
            </Text>
            <SelectWidth>
              <Select options={options}/>
            </SelectWidth>
          </MainContentTitle>
        </MainContent>
        </Container>
      </LayoutInner>
    </Layout>
  )
}
export default TwLpTemplate;
