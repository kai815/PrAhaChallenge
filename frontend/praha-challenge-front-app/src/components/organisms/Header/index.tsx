import { styled } from '../../../../stitches.config';
import Link from "next/link";
import Text from '@/components/atoms/Text'

const Wrapper = styled('nav', {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem'
});

const Container = styled('div',{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  margin:"auto",
  maxWidth: "1536px",
  width: "100%"
});

const Left = styled('div',{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Right = styled('div',{
  display: "flex",
  flexDirection: "row",
});

const Header = ()=>{
  return(
    <Wrapper>
      <Container>
        <Left>
          <Link href="#" prefetch={false}>
            <a>
              <Text size="xl2" as="h1">
                Brand
              </Text>
            </a>
          </Link>
        </Left>
        <Right><Text size="xl2">テスト</Text></Right>
      </Container>
    </Wrapper>
  )
}

export default Header;
