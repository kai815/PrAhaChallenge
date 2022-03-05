import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'
import { red } from './ListItem.css'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a className={red}>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
