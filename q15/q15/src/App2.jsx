import { Provider } from "@/components/ui/provider"

function App2({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
export default App2;
