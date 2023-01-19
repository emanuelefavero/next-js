import ArticleItem from '@/components/ArticleItem'
import articleStyles from '@/styles/Article.module.css'

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleItem article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticleList
