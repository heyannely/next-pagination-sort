// app/posts/page.js

import styles from './Posts.module.css';

/**
 * 
 * @param {searchParams} - always available
 * @returns 
 */

export default async function PostsPage({searchParams}) {
    const page = parseInt(searchParams?.page || '1', 10)
    const order = searchParams?.order === 'desc' ? 'desc' : 'asc';

    const limit = 10;
    const skip = (page - 1) * limit;

    const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=title&order=${order}`,
        { cache: 'no-store' }
      );

    const data = await res.json();
    const totalPages = Math.ceil(data.total / limit)

      return (
        <div className={styles.container}>
          {JSON.stringify(data)}
        </div>
      );
    }
