
/**
 * 
 * @param {searchParams} - always available
 * @returns 
 * 
 * @var {limit} : Maximum number of items to fetch per page
 * Skip
Page   Limit   Skip   Items Returned       
-----  ------  -----  ---------------------
1      10      0      Products 1–10        
2      10      10     Products 11–20       
3      10      20     Products 21–30       
4      10      30     Products 31–40       
5      10      40     Products 41–50       
 */
import styles from './Posts.module.css';
export default async function PostsList({ page, order }) {
    const limit = 10;
    const skip = (page - 1) * limit;
    const sortBy = 'title';
  
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
      { cache: 'no-store' }
    );
  
    if (!res.ok) {
      return <div>Error loading products.</div>;
    }
  
    const data = await res.json();
    const totalPages = Math.ceil(data.total / limit);
  
    return (
      <>
        <ul>
          {data.products.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
        <div>
          {page > 1 && <a href={`?page=${page - 1}&order=${order}`}>Previous</a>}
          {page < totalPages && <a href={`?page=${page + 1}&order=${order}`}>Next</a>}
        </div>
      </>
    );
  }
  