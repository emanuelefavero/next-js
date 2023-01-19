import Link from 'next/link'
import articleStyles from '@/styles/Article.module.css'

function ArticleItem({ article }) {
  return (
    <div className={articleStyles.card}>
      <Link href='/article/[id]' as={`/article/${article.id}`}>
        <h3>{article.title}</h3>
        <p>{article.body.substring(0, 100).concat('...')}</p>
      </Link>
    </div>
  )
}

export default ArticleItem
