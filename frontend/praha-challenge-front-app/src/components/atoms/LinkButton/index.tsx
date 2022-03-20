import { styled } from '../../../../stitches.config';

type PropsType={
  text:string,
  href:string,
  textColor? : 'grey' | 'green',
  fontWeight? : 'normal' | 'bold'
}

const BaseLinkButton = styled('a', {
  backgroundColor:"$grey600",
  padding:"0.25rem 0.5rem",
  borderRadius:"0.25rem",
  color: 'inherit',
  textDecoration:'none'
});

const LinkButtonText = styled('span',{
  variants: {
    color:{
      green: {
        color:'$green100'
      },
      grey:{
        color:'$grey100'
      }
    },
    fontWeight: {
      bold:{
        fontWeight:'$bold'
      },
      normal:{
        fontWeight: '$normal'
      }

    },
  }
})

const LinkButton =({
  text,
  href,
  textColor = "grey",
  fontWeight = "normal"
}:PropsType)=>{
  return(
    <BaseLinkButton href={href}>
      <LinkButtonText color={textColor} fontWeight={fontWeight}>
        {text}
      </LinkButtonText>
    </BaseLinkButton>
  )
}
export default LinkButton;
