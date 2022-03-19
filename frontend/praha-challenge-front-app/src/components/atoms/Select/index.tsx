import { styled } from '../../../../stitches.config';

type OptionValue ={
  text:string,
  value:string,
  key:string
}

export type PropsType={
  options:OptionValue[]
}

const BaseSelect = styled('select',{
  width: "100%",
  borderRadius: "0.375rem",
  borderColor:'$grey300',
  bosShadow:'0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  backgroundColor: '#fff',
  borderWidth: "1px",
  paddingTop: "0.5rem",
  paddingRight: "0.75rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.75rem",
  fontSize: "1rem",
  "&:focus":{
    // https://tailwindcss.jp/docs/border-colorのインディゴ300
    borderColor:"#a3bffa",
    outline: "2px solid transparent",
    outlineOffset: "2px",
  }
})


const Avatar =({options}:PropsType)=>{
  return(
    <BaseSelect >
    {
      options.map((option)=>(
        <option key={option.key} value={option.value}>
          {option.text}
        </option>)
      )
    }
    </BaseSelect>
  )
}
export default Avatar;
