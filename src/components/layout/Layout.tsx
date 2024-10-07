
import Header from "@/components/layout/Header";

function Layout({ children }:any) {
 

  return (
    <>
      <Header />
      <div className="min-h-[220px]">{children}</div>
      
    </>
  );
}

export default Layout;
