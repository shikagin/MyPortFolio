import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
       <a href={gitUrl} target="_blank" className="text-white visited:text-white hover:text-white">
      <div className="proj-imgbx">
       
          <img src={imgUrl} className="rounded-2xl"/>
        
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span >{description}</span>
        </div>
      </div>
      </a>
    </Col>

  )
}