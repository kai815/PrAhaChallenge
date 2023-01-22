import { useEffect, useState } from 'react';
import { API_URL } from '@/consts/url';

const CsrPage = () => {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch(API_URL, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((responseData) => {
        const data = responseData.stargazers_count;
        setStars(data);
      });
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <h1>Hello Next.js SSR👋</h1>
      <span>Star:{stars}</span>
    </>
  );
};

export default CsrPage;
