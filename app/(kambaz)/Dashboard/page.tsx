import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5610" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="Node" />
            <div>
              <h5> CS5610 Node JS </h5>
              <p className="wd-dashboard-course-title">
                Backend Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5500" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python" />
            <div>
              <h5> CS5500 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5200" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt="Java" />
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/webdev.jpg" width={200} height={150} alt="Web" />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                HTML, CSS, JavaScript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/database.jpg" width={200} height={150} alt="Database" />
            <div>
              <h5> CS3200 Database Design </h5>
              <p className="wd-dashboard-course-title">
                SQL and NoSQL Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4800" className="wd-dashboard-course-link">
            <Image src="/images/mobile.jpg" width={200} height={150} alt="Mobile" />
            <div>
              <h5> CS4800 Mobile Development </h5>
              <p className="wd-dashboard-course-title">
                iOS and Android Apps
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/3800" className="wd-dashboard-course-link">
            <Image src="/images/toc.jpg" width={200} height={150} alt="TOC" />
            <div>
              <h5> CS3800 Theory of Computation </h5>
              <p className="wd-dashboard-course-title">
                Automata Theory
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}