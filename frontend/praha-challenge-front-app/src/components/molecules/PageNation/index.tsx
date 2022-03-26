import { styled } from '../../../../stitches.config';

type PropsType = {
  pageCount: number;
  //本来ならcurrentPageとか必要
};

const PageNationLayout = styled('div', {
  display: 'flex',
});

const PageNationItem = styled('a', {
  backgroundColor: '$white',
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: '$medium',
  color: '$grey700',
  borderRadius: '0.375rem',
  '&:hover': {
    //https://tailwindcss.jp/docs/background-colorのblue500
    backgroundColor: '#4299e1',
    color: '$white',
    cursor: 'pointer',
  },
  variants: {
    disabled: {
      disabled: {
        '&:hover': {
          cursor: 'not-allowed',
          backgroundColor: '$white',
          color: '$grey700',
        },
      },
    },
  },
});

const PageNation = ({ pageCount }: PropsType) => {
  return (
    <PageNationLayout>
      <PageNationItem disabled='disabled'>previous</PageNationItem>
      {[...Array(pageCount)].map((_, pageIndex) => (
        <PageNationItem key={pageIndex}>{pageIndex + 1}</PageNationItem>
      ))}
      <PageNationItem>Next</PageNationItem>
    </PageNationLayout>
  );
};

export default PageNation;
