import Head from 'next/head'

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
}

export default Meta
