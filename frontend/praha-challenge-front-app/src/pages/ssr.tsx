import { API_URL } from '@/consts/url';

type Props = {
  stars: number;
};

const SsrPage = ({ stars }: Props) => (
  <>
    <h1>Hello Next.js SSR👋</h1>
    <span>Star:{stars}</span>
  </>
);

export async function getServerSideProps() {
  const res = await fetch(API_URL);
  const response = await res.json();
  return {
    props: {
      stars: response.stargazers_count,
    },
  };
}

export default SsrPage;
