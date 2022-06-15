import uniqid from 'uniqid'
import './WorkContainer.css'

const WorkContainer = ({ work }) => (
  <div className='work'>
    <h4>{work.position}</h4>

    <p className='work__company'>{work.company}</p>
    <p className='work__years'>{work.yearsOfService}</p>

    {work.tasks && (
      <ul className='work__tasks'>
        {work.tasks.map((item) => (
          <ol key={uniqid()} className='work__tasks-item'>
            {item}
          </ol>
        ))}
      </ul>
    )}
  </div>
)

export default WorkContainer
