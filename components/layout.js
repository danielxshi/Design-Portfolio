import Meta from "../components/meta";
import Footer from "../components/footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
}
