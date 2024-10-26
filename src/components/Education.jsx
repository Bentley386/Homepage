
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {
    return (
    <section 
        id="education" 
        className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Education
            </h2>
            <VerticalTimeline
            layout="1-column-left"
            lineColor="rgb(250,250,250,0.1)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2022 - present"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">PhD - Mathematics</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Ljubljana, Faculty of Mathematics and Physics</h4>
                    <p>PhD in Numerical Analysis. Average study grade: 10.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2017 - 2020"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Master's - Mathematical Physics</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Ljubljana, Faculty of Mathematics and Physics</h4>
                    <p>120/90 credits, average study grade: 10.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(39 39 42)', color: 'rgb(212 212 216)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(39, 39, 42)' }}
                    date="2017 - 2020"
                    iconStyle={{ background: 'rgb(24, 24, 27)', color: '#fff'}}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's - Physics</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Ljubljana, Faculty of Mathematics and Physics</h4>
                    <p>Average study grade: 9.2</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
    );
};

export default Education;