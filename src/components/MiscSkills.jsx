

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/mathematical.png',
      label: 'Mathematical Modelling',
      desc: 'Experienced'
    },
    {
      imgSrc: '/images/algorithms.svg',
      label: 'Algorithms',
      desc: 'Experienced'
    },
    {
      imgSrc: '/images/slovenian.png',
      label: 'Slovenian',
      desc: 'Native'
    },
    {
        imgSrc: '/images/english.svg',
        label: 'English',
        desc: 'Fluent'
    },
    {
        imgSrc: '/images/italian.svg',
        label: 'Italian',
        desc: 'Comfortable'
    },
    {
        imgSrc: '/images/croatian.png',
        label: 'Serbo-Croatian',
        desc: 'Comfortable'
    },
    {
        imgSrc: '/images/german.svg',
        label: 'German',
        desc: 'Basic'
    },
    {
      imgSrc: '/images/korean.png',
      label: 'Korean',
      desc: 'Basic'
    },
];

const MiscSkills = () => {
    return (
        <section className="sectionClean">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Miscellaneous skills
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

export default MiscSkills