import { redirect } from "next/dist/client/components/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AccountPage() {
  redirect("/Account/Signin");
}