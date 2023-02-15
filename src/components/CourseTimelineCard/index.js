import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseCardDetails} = props
  console.log(courseCardDetails)

  const {courseTitle, description, duration, tagsList} = courseCardDetails

  const liItem = eachLiItem => {
    const {name} = eachLiItem
    return (
      <li className="li-item">
        <p>{name}</p>
      </li>
    )
  }

  return (
    <div>
      <div className="course-card-time-title-container">
        <h1>{courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="discription">{description}</p>
      <ul className="un-order-list">
        {tagsList.map(eachLiItem => liItem(eachLiItem))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
