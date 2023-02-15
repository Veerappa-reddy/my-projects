import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectsCardDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectsCardDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="course-card-time-title-container">
        <h1>{projectTitle}</h1>
        <div className="clock-container">
          <AiFillCalendar className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="discription">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
