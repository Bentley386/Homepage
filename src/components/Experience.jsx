
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
    return (
    <section 
        id="experience" 
        className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Work experience
            </h2>
            <VerticalTimeline
            layout="1-column-left"
            lineColor="rgb(250,250,250,0.1)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2023 - present"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Teaching assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Ljubljana, Faculty of Mathematics and Physics</h4>
                    <p> Working as an assistant for the courses:</p>
                    <ul class="list-disc pl-4">
                        <li>Mathematics 2 (Multivariable calculus)</li>
                        <li>Analysis 4 (Differential/Difference equations, qualitative analysis, variational calculus, PDEs)</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2022 - present"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Young Researcher</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jožef Stefan Institute, Parallel and Distributed Systems Laboratory</h4>
                    <p>Working as a researcher in the field of meshless methods, mainly ones based on Radial Basis Functions (RBF).</p>
                    <ul class="list-disc pl-4">
                        <li>Maintaining our C++ library <a href="https://e6.ijs.si/medusa/">Medusa</a></li>
                        <li>Performing original research, including code and analysis and drafts/presentations (refer to publications below)</li>
                        <li>Presenting the results in a readable manner, independently writing reports/papers</li>
                        <li>Presenting our work at international conferences</li>
                        <li>Supervising a small team of students that work on one of our industrial projects.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2022 (6 months)"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Associate Researcher</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jožef Stefan Institute, Parallel and Distributed Systems Laboratory</h4>
                    <p>Worked on an industrial project for Slovenian power transmission operator.
                    The topic was forecasting transformer tap changer maintenance.</p>
                    <ul class="list-disc pl-4">
                        <li>Created and tested the complete framework based on Bayesian Dynamic Linear Model.</li>
                        <li>Assisted with its robust implemenation it into our partner's environment.</li>
                        <li>Assisted with writing a detailed technical report.</li>
                    </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2019 (6 months)"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                    >
                    <h3 className="vertical-timeline-element-title">Student Researcher</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jožef Stefan Institute, Department of Artificial Intelligence</h4>
                    <p>
                    As a student researcher I assisted in two projects:</p>
                    <ul class="list-disc pl-4">
                        <li>Finding similarities between topics covered by different news sources.</li>
                        <li>Using an in-house data analysis tool to classify operating states of an oil refinery.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
    );
};

export default Experience;