

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/cpp.svg',
      label: 'C++',
      desc: 'Most experienced'
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Most experienced'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Familiar'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Familiar'
    },
    {
      imgSrc: '/images/matlab.svg',
      label: 'MATLAB',
      desc: 'Familiar'
    },
    {
      imgSrc: '/images/bash.svg',
      label: 'Bash',
      desc: 'Basic'
    },
    {
      imgSrc: '/images/haskell.svg',
      label: 'Haskell',
      desc: 'Basic'
    },
    {
      imgSrc: '/images/mathematica.svg',
      label: 'Mathematica',
      desc: 'Basic'
    },
];

const Languages = () => {
    return (
        <section 
        id="skills" 
        className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Languages I have so far used in my projects
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Languages