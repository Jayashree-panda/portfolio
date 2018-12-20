import React,{ Component } from 'react';
export default class Resume extends Component{
	render()
	{
    let skillsData=this.props.skillsData;
   
		return(
			<React.Fragment>
					<section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{skillsData.college}</h3>
                  <p className="info">{ skillsData.degree} <span>•</span> <em className="date">{ skillsData.collegeDate}</em></p>
                  <p>
                  {skillsData.collegeDes}
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>{skillsData.school}</h3>
                  <p className="info">B.A. Degree in Graphic Design <span>•</span> <em className="date">{skillsData.schoolDate}</em></p>
                  <p>
                    {skillsData.schoolDes}
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{skillsData.prof1}</h3>
                  <p className="info">{skillsData.place1} <span>•</span> <em className="date">{skillsData.date1}</em></p>
                  <p>
                    {skillsData.prof1Des}
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Super Cool Studio</h3>
                  <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                  <p>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                    ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section> {/* Resume Section End*/}

			</React.Fragment>
			);
	}
}