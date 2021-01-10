import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{textAlign: 'center', fontSize: '21px'}}>
        
        <p>
          Use in application <code>next js</code>, <code>redux</code>, <code>react-redux</code>, <code>redux sauce</code> 
        </p>

        <Link href="/login">
          <a style={{textDecoration: 'none'}}>Login GitHub</a>
        </Link>
      </div>

    </div>
  )
}
