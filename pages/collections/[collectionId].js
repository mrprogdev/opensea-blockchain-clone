import React from 'react'
import { useRouter } from 'next/router'

const Collection = () => {
  // Gets URL parameter
  const router = useRouter()
  return <div>{router.query.collectionId}</div>
}

export default Collection
