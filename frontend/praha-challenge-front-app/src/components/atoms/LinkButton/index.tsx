import { styled } from '../../../../stitches.config';

type PropsType={
  text:string,
  href:string,
}

const BaseLinkButton = styled('a', {
  backgroundColor:"$grey100",
  padding:"0.25rem 0.5rem",
  borderRadius:"0.25rem",
});

const LinkButton =({text,href}:PropsType)=>{
  return(
    <BaseLinkButton href={href}>
      {text}
    </BaseLinkButton>
  )
}
export default LinkButton;
