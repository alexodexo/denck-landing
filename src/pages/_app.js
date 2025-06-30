import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  // Check if the component has a custom layout
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  // Use default layout
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}