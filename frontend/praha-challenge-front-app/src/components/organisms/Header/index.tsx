import { styled } from '../../../../stitches.config';
import { css } from '@stitches/core';
import Link from "next/link";
import Text from '@/components/atoms/Text'

const ListIconStyle = styled('div', {
  color:"$grey600",
  display:'none',
  '@sm':{
    display:'block',
  }
})
const ListIconCss = css({
  width: "1.5rem",
  height:"1.5rem",
  fill: "currentColor",
})

const ListIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className={ListIconCss()}>
      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
      </path>
    </svg>
  )
}

const Wrapper = styled('nav', {
  backgroundColor: '$white',
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
});

const RightListInner = styled('div',{
  display: "flex",
  flexDirection: "row",
  '@sm':{
    display:'none'
  }
})

const LinkText = css({
  color: '$grey800',
  arginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "0px",
  marginBottom: "0px",
})

const AtagReset = css({
  color: 'inherit',
  textDecoration:'none'
})

const Header = ()=>{
  return(
    <Wrapper>
      <Container>
        <Left>
          <Link href="#" prefetch={false}>
            <a className={AtagReset()}>
              <Text size="xl2" as="h1">
                Brand
              </Text>
            </a>
          </Link>
        </Left>
        <Right>
          <RightListInner>
            <Link href="#" prefetch={false}>
              <a className={AtagReset()}>
              <Text className={LinkText()} size="base">
                Home
              </Text>
              </a>
            </Link>
            <Link href="#" prefetch={false}>
              <a className={AtagReset()}>
              <Text className={LinkText()} size="base">
                Blog
              </Text>
              </a>
            </Link>
            <Link href="#" prefetch={false}>
              <a className={AtagReset()}>
              <Text className={LinkText()} size="base">
                About us
              </Text>
              </a>
            </Link>
          </RightListInner>
          <ListIconStyle>
            <ListIcon/>
          </ListIconStyle>
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Header;
