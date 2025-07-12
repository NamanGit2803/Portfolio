import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";

export default function App({ Component, pageProps }) {
  return <>
    {/* <Navbar /> can be used to include a navigation bar across all pages */}
    <Navbar />
    {/* The Component prop is the active page, so when navigating between pages, this component will change */}
    {/* pageProps are the initial props preloaded for your page by Next.js */}
    <Component {...pageProps} />
  </>
}
