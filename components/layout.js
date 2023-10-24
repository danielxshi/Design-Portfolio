import Meta from "../components/meta";
import Footer from "../components/footer";
import { useRouter } from "next/router";

export default function Layout({ preview, children }) {
  const router = useRouter();
  return (
    <>
      <Meta />
      <div className={`${(router.pathname === "/posts/[slug]" && "dark-mode")}`}>
        {console.log(router.pathname)}
        <main>{children}</main>
      </div>
    </>
  );
}
