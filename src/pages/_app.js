import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
