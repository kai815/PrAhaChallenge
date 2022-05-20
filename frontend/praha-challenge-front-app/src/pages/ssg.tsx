import { API_URL } from '@/consts/url';

type Props = {
  stars: number;
};

const SsgPage = ({ stars }: Props) => (
  <>
    <h1>Hello Next.js SSG👋</h1>
    <span>Star:{stars}</span>
  </>
);

export async function getStaticProps() {
  const res = await fetch(API_URL);
  const response = await res.json();
  return {
    props: {
      stars: response.stargazers_count,
    },
  };
}

export default SsgPage;
