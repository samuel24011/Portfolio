import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <h5 className='heading'>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
             <div>
             <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
        <div className="other__Kills">
        <h3>Other Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>

      </div>
      </section>
  )
}

export default Experience;