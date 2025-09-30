
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import KambazNavigation from "./navigation";
import "./styles.css";
// import "./globals.css"; 




export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
    <div>
      <KambazNavigation />
    </div>
    <div className="wd-main-content-offset p-3 flex-fill">
      {children}
    </div>
  </div>
  </div>
  );
}