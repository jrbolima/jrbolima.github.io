import uniqid from 'uniqid'
import { works } from '../../portfolio'
import WorkContainer from '../WorkContainer/WorkContainer'
import './Works.css'

const Works = () => {
  if (!works.length) return null

  return (
    <section id='works' className='section projects'>
      <h2 className='section__title'>Work Experiences</h2>

      <div className='works__grid'>
        {works.map((work) => (
          <WorkContainer key={uniqid()} work={work} />
        ))}
      </div>
    </section>
  )
}

export default Works
