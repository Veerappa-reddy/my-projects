import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1 className="heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>

      <Chrono slideShow mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard
                courseCardDetails={eachItem}
                key={eachItem.id}
              />
            )
          }
          return <ProjectTimelineCard projectsCardDetails={eachItem} />
        })}
      </Chrono>
    </div>
  )
}

export default TimeLineView
