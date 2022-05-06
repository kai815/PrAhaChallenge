import { useEffect, useState } from "react";

export const FetchComponent = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0
  });

  // ここでuseEffectを使ってstar数を取得してみましょう!
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then((responseData) => {
        const data = {
          subscribers: responseData.subscribers_count,
          stars: responseData.stargazers_count
        };
        setData(data);
      });
  }, []);
  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{data.stars} stars</p>
      <p>{data.subscribers} subscribers</p>
    </div>
  );
};
