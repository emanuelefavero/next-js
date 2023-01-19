// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

import Meta from '@/components/Meta'

import { server } from '@/config'
import Link from 'next/link'

function Article({ article }) {
  // NOTE: This will fetch the article on the client side at each page load:
  // (the id from the url that you can get from router.query)
  // const router = useRouter()
  // const { id } = router.query
  // const [article, setArticle] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticle(data)
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!article) return <p>No article</p>

  /*
  When should I use client-side data fetching?
    - when your page doesn't require SEO indexing
    - when you don't need to pre-render your data
    - when the content of your pages needs to update frequently 
    (Unlike the server-side rendering APIs, you can use client-side data fetching at the component level)
  */

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>
        <span className='link-go-back'>Go Back</span>
      </Link>

      <style jsx>{`
        .link-go-back {
          color: var(--color-primary);
        }
      `}</style>
    </>
  )
}

// NOTE: This will pre-render the article on the server side at each request (the request happens when you click on the article link):
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

/*
When should I use getServerSideProps?
  - only if you need to render a page whose data must be fetched at request time
  (such as authorization headers or geo location)
*/

// NOTE: This will pre-render the article on the server side at build time (much faster than getServerSideProps and you can use this ina static site):
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

// NOTE: If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated
// When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  // NOTE: Now we need to get the articles data (array of objects) and turn it into this:
  // { params: { id: '1', id: '2', ... } },

  // get an array of ids
  const ids = articles.map((article) => article.id)

  // map over the ids and return an object with params
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  // note: the paths must be strings

  return {
    paths,
    // NOTE: fallback: false means that if we go to a page that doesn't exist, it will show a 404 page
    fallback: false,
  }
}

/*
When should I use getStaticPaths?
  - The data comes from a headless CMS
  - The data comes from a database
  - The data comes from the filesystem
  - The data can be publicly cached (not user-specific)
  - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
*/

export default Article
