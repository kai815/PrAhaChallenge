import { useRef, useEffect } from "react";

export const SomeComponent = ({ someFlag }) => {
  //こっちでもいいかと思ったけどsomeFlagの変更でのレンダリング以外を検知できなからダメ？？
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prevState) => prevState + 1);
  // }, [someFlag]);

  const count = useRef(0);
  useEffect(() => {
    if (someFlag) {
      count.current++;
    }
  });

  return (
    <>
      <p>ここに、このコンポーネントがレンダリングされた回数を表示してみよう!</p>
      <p>
        {/* useRefの値は変更した値がDOMにすぐに反映されるわけではないので、+1する */}
        <span>{count.current + 1}</span>回
      </p>
    </>
  );
};
