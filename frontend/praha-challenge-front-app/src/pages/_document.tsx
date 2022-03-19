import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText,globalCss } from '../../stitches.config';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  a:{
    color: 'inherit',
    textDecoration:'none'
  }
});


export default class Document extends NextDocument {
  render() {
    globalStyles()
    return (
      <Html lang="ja">
        <Head>
        {/* ssrでもstitchesがうまく動くように */}
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
