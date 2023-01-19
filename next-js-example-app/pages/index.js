import { server } from '@/config'
import ArticleList from '@/components/ArticleList'

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  )
}

// NOTE: This will fetch the articles from the api folder on the server side at build time:
export const getStaticProps = async () => {
  // TIP: The server variable will be the localhost url when you are in development mode and the production url when you are in production mode
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// // NOTE: This will fetch the articles on the server side at build time:
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

