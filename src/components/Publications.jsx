
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);


import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Presented at "Eurotherm 2024" conference',
      name: 'A superconvergence result in the RBF-FD method',
      company: 'https://arxiv.org/abs/2404.03393'
    },
    {
      content: 'Presented at "SpliTech 2023" conference',
      name: 'Computational electromagnetics with the RBF-FD method',
      company: 'https://arxiv.org/abs/2303.11806'
    },
    {
      content: 'Published in "Journal of Computational Science"',
      name: 'Some observations regarding the RBF-FD approximation accuracy dependence on stencil size',
      company: 'https://www.sciencedirect.com/science/article/pii/S1877750324000772'
    },
    {
      content: 'Published in "Mathematics and Computers in Simulation',
      name: 'A representation and comparison of three cubic macro-elements',
      company: 'https://www.sciencedirect.com/science/article/abs/pii/S0378475423005505'
    },
    {
      content: 'Published in "Matrika"',
      name: 'Theoretical calculation of nucleon mass',
      company: 'https://matrika.fmf.uni-lj.si/letnik-6/stevilka-1/andrej_pozun.pdf'
    },
    {
      content: "My Master's thesis",
      name: 'Quenches between topological phases in a disordered Su-Schrieffer-Heeger model',
      company: 'https://repozitorij.uni-lj.si/Dokument.php?id=136724&lang=slv'
    }
];


const Publications = () => {

    useGSAP(() => {
      gsap.to('.scrub-slide', {
        scrollTrigger: {
          trigger: '.scrub-slide',
          start: 'top 60%',
          end: '+=400',
          scrub: true
        },
        x: '-1300'
      })
    });
    return (
        <section
        id="publications"
        className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My scientific publications
                </h2>

                <div className="scrub-slide-container">
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({content, name, company}, key) => (
                        <ReviewCard
                        key={key}
                        name={name}
                        content={content}
                        projectLink={company}
                        classes="reveal-up"
                        />
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}


export default Publications