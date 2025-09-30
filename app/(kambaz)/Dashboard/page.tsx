import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">

      
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Full Stack software developer</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/5610/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/nodejs.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5610 Node JS</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Backend Development</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/5500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/python.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5500 Python</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Data Science Fundamentals</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/5010/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/java.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5010 PDP</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Object Oriented Programming</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/4550/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4550 Web Development</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            HTML, CSS, JavaScript</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/3200/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/database.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3200 Database Design</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            SQL and NoSQL Databases</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/4800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/mobile.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4800 Mobile Development</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            iOS and Android Apps</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/3800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/toc.jpg" width="100%" height={160}/>
            <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">  CS3800 Theory of Computation</CardTitle>
            <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Automata Theory</CardText>
            <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

  </Row>



        

      
      </div>
    </div>
  );
}