


import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/forecast.png',
      title: 'Time Series Forecasting',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://e6.ijs.si/ParallelAndDistributedSystems/projects/eles_npr/'
    },
    {
      imgSrc: '/images/emp.png',
      title: 'EMF Modeling',
      tags: ['API', 'SPA'],
      projectLink: 'https://e6.ijs.si/ParallelAndDistributedSystems/projects/rf_model/'
    },
    {
      imgSrc: '/images/modelling.png',
      title: 'Modeling projects',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/Bentley386/Model_Analysis_1'
    },
    {
      imgSrc: '/images/navier.gif',
      title: 'ODE/PDE Modeling',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Bentley386/Model_Analysis_2'
    },
    {
      imgSrc: '/images/dynamical.gif',
      title: 'Dynamical System',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/Bentley386/Dynamical_Systems'
    },
    {
      imgSrc: '/images/phase.png',
      title: 'Physics Simulation',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Bentley386/Advanced_Computational_Methods'
    },
    {
      imgSrc: '/images/higgs.png',
      title: 'ML Projects',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Bentley386/Machine_Learning_Practicum/tree/main'
    },
    {
      imgSrc: '/images/discordbot.png',
      title: 'Discord bot',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Bentley386/Dueling_Bot'
    },
    {
      imgSrc: '/images/terminator.png',
      title: 'Term Scheduling Website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Bentley386/Terminator'
    },
    {
      imgSrc: '/images/unitygame.png',
      title: 'Simple Unity game',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com'
    },
  ];






const Work = () => {
    return (
        <section
        id="work"
        className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Some selected projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work