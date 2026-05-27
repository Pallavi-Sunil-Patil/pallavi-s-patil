import React, { Component } from 'react'
import {
  SiReact,
  SiJavascript,
  SiBootstrap,
  SiHtml5,
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiWebflow,
  SiSquarespace,
  SiWordpress,
  SiShopify,
  SiWix,
  SiCanva,
  SiGithub
} from "react-icons/si";

import { SiPhp } from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";


export class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      years: 0,
      projects: 0,
      tools: 0,
      responsive: 0,
    };
  }

  componentDidMount() {
    this.startCounter("years", 2.5, 20);
    this.startCounter("projects", 30, 20);
    this.startCounter("tools", 5, 20);
    this.startCounter("responsive", 100, 10);
  }

  startCounter = (key, target, speed) => {
    let count = 0;

    const interval = setInterval(() => {
      count += target / speed;

      if (count >= target) {
        count = target;
        clearInterval(interval);
      }

      this.setState({
        [key]: parseFloat(count.toFixed(1))
      });

    }, 30);
  };

  render() {
    return (
      <>

         {/* banner section */}
        <section className="hero">
          <div className="hero-bg-grid"></div>
          <div className="hero-glow"></div>

          <div className="container">
            <div className="row">

              <div className="col-12 col-md-6 col-sm-12">
                <div className="hero-sub" data-aos="fade-right" data-aos-duration="1500">Front-End Developer</div>

                <h1 className="text-white" data-aos="fade-right" data-aos-duration="1500">
                  Hey <span><img src="src/assets/hand.png" alt="hand" /></span>
                  {" "}I'm Pallavi Patil
                </h1>

                <p className="my-4" data-aos="fade-right" data-aos-duration="1500">
                  Front-End Developer skilled in ReactJS, PHP, MySQL,
                  and modern web technologies, creating responsive and
                  user-friendly digital experiences.
                </p>

                <a href="src/assets/PALLAVI PATIL.pdf" data-aos="fade-right" data-aos-duration="1500" download className="btn text-white mt-2">Download Resume <span>→</span></a>
                <div className="social-icon mt-5" data-aos="fade-right" data-aos-duration="1500">
                    <a href="https://www.linkedin.com/in/pallavi-sunil-patil" target="_blank" className="me-2"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/Pallavi-Sunil-Patil" target="_blank" className="me-2"><i className="bi bi-github"></i> </a>
                    <a href="mailto:patilpallavi2599@gmail.com" target="_blank"><i className="bi bi-envelope-fill"></i></a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-sm-12">
                <img data-aos="fade-In" data-aos-duration="1500"
                  className="pallavi"
                  src="src/assets/pallavi.jpg"
                  alt="Pallavi"
                />
              </div>

            </div>
          </div>
        </section>
        {/* counter block */}
        <section className="counter-block" id="about">
          <div className="container">
            <div className="row">

              {/* Counter 1 */}
              <div className="col-12 col-md-3 col-sm-12 px-3" data-aos="fade-up" data-aos-duration="500">
                <div className="counter-inside-block">
                  <div className="counter-section text-center">
                    <h2>{this.state.years}+</h2>
                    <p className="text-muted m-0">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Counter 2 */}
              <div className="col-12 col-md-3 col-sm-12 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="counter-inside-block">
                  <div className="counter-section text-center">
                    <h2>{Math.ceil(this.state.projects)}+</h2>
                    <p className="text-muted m-0">Projects Completed</p>
                  </div>
                </div>
              </div>

              {/* Counter 3 */}
              <div className="col-12 col-md-3 col-sm-12 px-3" data-aos="fade-up" data-aos-duration="1500">
                <div className="counter-inside-block">
                  <div className="counter-section text-center">
                    <h2>{Math.ceil(this.state.tools)}+</h2>
                    <p className="text-muted m-0">Front-End Tools</p>
                  </div>
                </div>
              </div>

              {/* Counter 4 */}
              <div className="col-12 col-md-3 col-sm-12 px-3" data-aos="fade-up" data-aos-duration="2000">
                <div className="counter-inside-block">
                  <div className="counter-section text-center">
                    <h2>{Math.ceil(this.state.responsive)}%</h2>
                    <p className="text-muted m-0">Responsive Design</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* experince section */}
        <section className="exerince all-section" id="experience">
            <div className="container">
                <div className="row">
                    <h4 className="section-label" data-aos="fade-up" data-aos-duration="1500">Experience</h4>
                    <h2>My Work Experience</h2>
                </div>

                <div className="row experiment-block">
                  <div className="col-12 col-md-4 col-sm-12 p-0">
                    <div className="inside-exper">
                      <h4>Frond-End Developer</h4>
                      <div>Full-Time</div>
                      <span>2026 - Present</span> 
                    </div> 
                  </div>
                  <div className="col-12 col-md-8 col-sm-12 p-0">
                    <div className="inside-exper-ri">
                      <h3>OMX Technologies Pune</h3>
                      <p>Managed end-to-end website development, including design,
                          functionality, and server deployment.<br/>
                          Experienced with hosting platforms like Hostinger and
                          GoDaddy, including domain setup, DNS configuration, and
                          website maintenance.<br/>
                          Implemented API integrations.<br/>
                          Collaborated with clients to understand requirements and
                          deliver projects on time with high quality.</p>

                        <h5>Technologies</h5>
                        <div className="tech">
                          <span>PHP</span>
                          <span>MySQL</span>
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>Javascript</span>
                          <span>Wordpress</span>
                        </div>
                      </div>
                  </div>
                </div>      

                <div className="row experiment-block mt-4">
                  <div className="col-12 col-md-4 col-sm-12 p-0">
                    <div className="inside-exper">
                      <h4>Web Developer (Team Lead)</h4>
                      <div>Full-Time</div>
                      <span>2023 - 2025</span>
                    </div>  
                  </div>
                  <div className="col-12 col-md-8 col-sm-12 p-0">
                    <div className="inside-exper-ri">
                      <h3>Walstar Technologies Kolhapur</h3>
                      <p>Experienced in WordPress, Wix, Webflow, Squarespace, Shopify
                          CMS. Proficient with WordPress page builders: Elementor, Divi,
                          WPBakery, and Gutenberg. Knowledgeable in Shopify website customization.<br/>
                          Worked as a Team Lead at Walstar Technologies, managing a team
                          of 5–6 members and ensuring timely delivery of high-quality
                          projects aligned with client requirements.<br/>
                          Experienced in site optimization.</p>

                        <h5>Technologies</h5>
                        <div className="tech">
                          <span>Shopify</span>
                          <span>Wordpress</span>
                          <span>Wix</span>
                          <span>Webflow</span>
                          <span>Squarespace</span>
                          <span>Divi</span>
                          <span>Gutenberg</span>
                        </div>
                      </div>
                  </div>
                </div>        
            </div>
        </section>

        {/* skills secton */}
        <section className="skills all-section" id="skills">
           <div className="container">
                <div className="row text-center">
                  <h4 className="section-label aos-init aos-animate d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1500">My Skills</h4>
                  <h2>See my expertise</h2>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-sm-12 p-0">
                      <div className="inside-exper-ri skill-box">
                        <h3>Frontend</h3>
                          <div className="d-flex gap-3 pt-3">
                            <span><SiReact size={40} color="#61DBFB" /><br/> ReactJs</span>
                            <span><SiHtml5 size={40} color="#E34F26" /> <br/>HTML5</span>
                            <span><FaCss3Alt size={40} color="#1572B6" /> <br/>CSS3</span>
                            <span><SiJavascript size={40} color="#F7DF1E" /> <br/>JavaScript</span>
                            <span><SiBootstrap size={40} color="#7952B3" /><br/>Bootstrap</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 p-0">
                      <div className="inside-exper-ri skill-box">
                        <h3>Programming Languages</h3>
                          <div className="d-flex gap-3 pt-3">
                            <span><SiC size={40} color="lightblue" title="C" /><br/> C</span>
                            <span><SiCplusplus size={40} color="#00599C" title="C++" /> <br/>C++</span>
                            <span><FaJava size={40} color="#f89820" /> Java</span>
                            <span><SiPython size={40} color="#3776AB" title="Python" /><br/> Python</span>
                            <span><SiJavascript size={40} color="#F7DF1E" /> <br/>JavaScript</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 p-0">
                      <div className="inside-exper-ri skill-box">
                        <h3>CMS</h3>
                          <div className="d-flex gap-3 pt-3">
                            <span><SiWordpress size={40} color=" #21759B" /> <br/>Wordpress</span>
                            <span><SiShopify size={40} color="#96BF48" /> <br/>Shopify</span>
                            <span><SiWebflow size={40} color="#4353FF" /> <br/>Webflow</span>
                            <span><SiSquarespace size={40} color="#000" /><br/> Squarespace</span>
                            <span><SiWix size={40} color="#FFD400" /><br/> Wix</span>
                          </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-sm-12 p-0">
                      <div className="inside-exper-ri skill-box">
                        <h3>Backend</h3>
                          <div className="d-flex gap-3 pt-3">
                            <span><SiPhp size={40} color="#777BB3" /><br/> PHP</span>
                            <span><SiMysql size={40} color="	#F29111" /> <br/>MySQL</span>
                          </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-4 col-sm-12 p-0">
                      <div className="inside-exper-ri skill-box">
                        <h3>Development Tools</h3>
                          <div className="d-flex gap-3 pt-3">
                            <span><SiGithub size={40} color="#181717" /><br/> Github</span>
                            <span><img src="src/assets/psd-img.png"/><br/> Adobe Photoshop</span>
                            <span><SiCanva size={40} color=" #00C4CC" /> <br/>Canva</span>
                          </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>

        {/* project section */}
        <section className="projects all-section" id="projects">
            <div className="container">
               <div className="row text-center">
                  <h4 className="section-label d-flex justify-content-center aos-animate" data-aos="fade-up" data-aos-duration="1500">My Recent Work</h4>
                  <h2>My Projects</h2>
               </div>

               <div className="row mt-4">
                   <div className="col-12 col-md-4 col-sm-12">
                       <div className="project-details">
                           <div>
                              <img src="src/assets/textify.jpg"/>
                           </div>
                           <div className="d-flex justify-content-between align-items-center pt-4">
                               <h3>Textify</h3>
                               <a href="https://textoperates.netlify.app/" target="_blank"><span>→</span></a>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 col-md-4 col-sm-12"></div>
                   <div className="col-12 col-md-4 col-sm-12"></div>
               </div>
            </div>
        </section>

        {/* footer section */}
        <section className="footer">
            <div className="container">
              <div className="row p-3 text-center">
                   <p className="m-0 text-white">© 2026 copyright all right reserved</p>
              </div>
            </div>
            <div className="fixed-icon">
            <div className="d-flex flex-column gap-4">
                <a href="https://www.linkedin.com/in/pallavi-sunil-patil" target="_blank" className="me-2 fixed-linkden"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/Pallavi-Sunil-Patil" target="_blank" className="text-decoration-none me-2 fixed-gitbub"><i className="bi bi-github"></i> </a>
                <a href="mailto:patilpallavi2599@gmail.com" target="_blank" className="fixed-email me-2"><i className="bi bi-envelope-fill"></i></a>
                <a href="https://wa.me/917387581850" target="_blank" className="fixed-whatsapp"><i className="bi bi-whatsapp"></i></a>
              </div>
        </div>
        </section>
      </>
    )
  }
}

export default Page;