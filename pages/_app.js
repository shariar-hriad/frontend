import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider enableSystem={true} attribute='class'>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
