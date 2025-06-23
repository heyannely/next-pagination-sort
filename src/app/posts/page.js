
// app/posts/page.js

import { Suspense } from 'react';
import PostsList from './PostsList';

const Loader = () => {
  return <>Loading...</>
}

export default function PostsPage ({searchParams}) {
  const page = parseInt(searchParams?.page || '1', 10);
  const order = searchParams?.order === 'desc' ? 'desc' : 'asc';
  return(<div>
      <h1>Products</h1>
      <a href={`?page=${page}&order=${order==='asc' ? 'desc' : 'asc'}`}>
        Sort {order === 'asc' ? 'Z -> A' : 'A -> Z'}
      </a>
      <Suspense fallback={<Loader/>}>
        <PostsList page={page} order={order} />
      </Suspense>
    </div>)
}