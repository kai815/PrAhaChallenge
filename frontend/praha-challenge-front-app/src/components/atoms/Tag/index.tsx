import { styled } from '../../../../stitches.config';
import Text from '@/components/atoms/Text';

type PropsType={
  text:String
}

const BaseTag = styled('div', {
  color:"$grey100",
  padding:"0.25rem 0.5rem",
  borderRadius:"0.25rem"
});

const Tag =({text}:PropsType)=>{
  return(
    <BaseTag>
      <Text size="base">
        {text}
      </Text>
    </BaseTag>
  )
}
export default Tag;
