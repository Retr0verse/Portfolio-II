import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demoLink, repoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={"demoLink"}>Live Demo</a>
          <br />
          <a href={"repoLink"}>Github Repo</a>
        </div>
      </div>
    </Col>
  )
}