import { styled } from '../../../../stitches.config'
import { css } from '@stitches/core';
import Header from '@/components/organisms/Header'
import PostCard,{PropsType as PostCardPropsType} from '@/components/organisms/Card/Post'
import RecentPostCard,{PropsType as RecentPostCardPropsType} from '@/components/organisms/Card/Post/Recent'
import AuthorListCard,{PropsType as AuthorListCardPropsType} from '@/components/organisms/Card/AuthorList'
import CategoryListCard,{PropsType as CategoryListCardPropsType} from '@/components/organisms/Card/CategoryList'
import PageNation from '@/components/molecules/PageNation'
import Text from '@/components/atoms/Text'
import Select,{PropsType as SelectPropsType} from '@/components/atoms/Select'

type TwLpTemplateType = {
  posts:PostCardPropsType[]
  recentPost:RecentPostCardPropsType
} & SelectPropsType
  & AuthorListCardPropsType
  & CategoryListCardPropsType

const MarginXAuto = css({
  marginLeft: 'auto',
  marginRight: 'auto',
})

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
  justifyContent: 'space-between',
  marginRight:'auto',
  marginLeft:'auto',
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

const PostLayout = styled('div',{
  marginTop:'1.5rem',
})

const PageNationLayout = styled('div',{
  marginTop:'2rem',
})

const SubConentLayout = styled('div',{
  width: '33.333333%',
  marginLeft: '-2rem',
  marginRight: '-2rem',
})

const SubConentTitleLayout = styled('div',{
  marginBottom: '1rem',
})

const AuthorContentLayout = styled('div',{
  paddingLeft:'2rem',
  paddingRight: '2rem',
})

const CategoryContentLayout = styled('div',{
  paddingLeft:'2rem',
  paddingRight: '2rem',
  marginTop: '2.5rem',
})

const RecentPostLayout = styled('div',{
  paddingLeft:'2rem',
  paddingRight: '2rem',
  marginTop: '2.5rem',
})

const TwLpTemplate = ({
  options,
  posts,
  authors,
  categories,
  recentPost
}:TwLpTemplateType)=>{
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
          {
            posts.map((post)=>(
              <PostLayout key={post.key}>
                <PostCard {...post}/>
              </PostLayout>
            ))
          }
          <PageNationLayout>
            <PageNation pageCount={3}/>
          </PageNationLayout>
        </MainContent>
        <SubConentLayout>
          <AuthorContentLayout>
            <SubConentTitleLayout>
              <Text as="h1" size="xl" weight="bold" color="grey700">
                Authors
              </Text>
            </SubConentTitleLayout>
            <AuthorListCard authors={authors} className={MarginXAuto()}/>
          </AuthorContentLayout>
          <CategoryContentLayout>
            <SubConentTitleLayout>
              <Text as="h1" size="xl" weight="bold" color="grey700">
                Categories
              </Text>
            </SubConentTitleLayout>
            <CategoryListCard categories={categories}/>
          </CategoryContentLayout>
          <RecentPostLayout>
            <SubConentTitleLayout>
              <Text as="h1" size="xl" weight="bold" color="grey700">
                Recent Post
              </Text>
            </SubConentTitleLayout>
            <RecentPostCard {...recentPost} />
          </RecentPostLayout>
        </SubConentLayout>
        </Container>
      </LayoutInner>
    </Layout>
  )
}
export default TwLpTemplate;
