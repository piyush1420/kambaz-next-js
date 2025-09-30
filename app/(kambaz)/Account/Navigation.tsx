import Link from "next/link";
// import "bootstr÷ap/dist/css/bootstrap.min.css";
export default function AccountNavigation() {
return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link href="Signin" id="wd-course-home-link"
//         className="list-group-item active border-0"> Signin </Link>
       

// <Link href="Signup"> Signup </Link> <br />
// <Link href="Profile"> Profile </Link> <br />
// </div>


<div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="Signin" id="wd-course-home-link"
        className="list-group-item active border-0"> Signin </Link>

        <Link href="Signup" id="wd-course-modules-link"
        className="list-group-item text-danger border-0"> Signup </Link>

      <Link href="Profile" id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"> Profile </Link>
      
</div>
);}