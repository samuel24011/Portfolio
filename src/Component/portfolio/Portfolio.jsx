import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  const data=[
    {
      id:1,
      image:IMG1,
      title: 'GymYourWay website',
      github: 'https://github.com/samuel24011/GymYourWay.git',
      demo: 'https://adorable-zuccutto-b4fbde.netlify.app'
    },
    {
      id:2,
      image:IMG2,
      title: 'Aptech  website',
      github: 'https://github.com/samuel24011/AptechWebsite.git',
      demo: 'https://fabulous-torte-72bb64.netlify.app'
    },
    {
      id:3,
      image:IMG3,
      title: 'BootCamp website',
      github: 'https://github.com/samuel24011/samuel24011.github.io',
      demo: 'https://darling-scone-29d08a.netlify.app'
    }
  ]
  return (
    <section id='portfolio'>
       <h5 className='heading'> My Recent Projects</h5>
       <h2>Portfolio</h2>
       <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />

          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer noopener'>Live Demo</a>
          </div>
        </article> 
        
            )
          })
        }
       </div>

    </section>
  )
}

export default Portfolio;