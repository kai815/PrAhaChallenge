import Link from 'next/link'
import Text from '../components/atoms/Text/index'

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Text as="h1" size="3">
      Hello, from Stitches.
    </Text>
  </>
)

export default IndexPage
