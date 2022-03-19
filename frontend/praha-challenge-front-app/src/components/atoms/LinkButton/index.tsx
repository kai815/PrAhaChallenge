import { styled } from '../../../../stitches.config';

type PropsType={
  text:string,
  href:string,
}

const BaseLinkButton = styled('a', {
  backgroundColor:"$grey600",
  padding:"0.25rem 0.5rem",
  borderRadius:"0.25rem",
  color: 'inherit',
  textDecoration:'none'
});

const LinkButtonText = styled('span',{
  fontWeight: '$bold',
  color: '$grey100'
})

const LinkButton =({text,href}:PropsType)=>{
  return(
    <BaseLinkButton href={href}>
      <LinkButtonText>
        {text}
      </LinkButtonText>
    </BaseLinkButton>
  )
}
export default LinkButton;
