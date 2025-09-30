import { ReactNode } from "react";
import TOC from "./TOC";
import "bootstrap/dist/css/bootstrap.min.css"; 
export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
    <table>
      <tbody>
        <tr>
          <td valign="top" width="100px">
            <TOC />
          </td>
          <td></td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}