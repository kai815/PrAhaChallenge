import Link from 'next/link'
import Layout from '../components/Layout'
import Text from '../components/Text/index'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Text as="h1" size="3">
      Hello, from Stitches.
    </Text>
  </Layout>
)

export default IndexPage
