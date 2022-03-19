import { styled } from '../../../../stitches.config';

type PropsType={
  src:string,
  alt:string
}

const BaseImage = styled('img',{
  width: "2.5rem",
  objectFit:"cover",
  height: "2.5rem",
  borderRadius:"9999px"
})


const Avatar =({src,alt}:PropsType)=>{
  return(
    <BaseImage src={src} alt={alt}/>
  )
}
export default Avatar;
