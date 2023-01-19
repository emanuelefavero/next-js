// import Meta from '@/components/Meta'
import Head from 'next/head'

function About() {
  return (
    <>
      {/* Give a custom title to the page */}
      {/* <Meta title='About' /> */}

      {/* TIP: You can also simply use the Head component, it will only override the given tag (title) */}
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </>
  )
}

export default About
