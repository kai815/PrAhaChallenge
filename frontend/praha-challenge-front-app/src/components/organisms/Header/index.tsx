import { styled } from '../../../../stitches.config';

const Wrapper = styled('nav', {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  addingTop: '1rem',
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
        <Left>テスト</Left>
        <Right>テスト</Right>
      </Container>
    </Wrapper>
  )
}

export default Header;
