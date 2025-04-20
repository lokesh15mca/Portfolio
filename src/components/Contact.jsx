import React from "react";
import "./Contact.css";
import gitlogo from "../Img/git-new.png";
import linkdin from "../Img/ldin.png";
// import contactImg from "../Img/roundedpic.png";
// import git_logo from "../Img/git-new.png";
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                {/* <div className="col__2"> */}
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text">Contact me.</h1>
                        <p className="hire__text white">Got an idea or a project in mind?</p>
                        <p className="hire__text white">Let’s create something amazing together!</p>

                        {/* <p className="hire__text white">Connect with me via phone:</p> */}
                        <p className="hire__text white">Feel free to reach out via: 📞 Phone:
                            <strong>+91-8302880785</strong> or 
📧 Email{" "}
                            <strong>lokesh15mca@gmail.com</strong>
                        </p>
                        <div style={{marginLeft:"40%"}}>
                        <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://github.com/lokesh15mca">
                            <img
                                src={gitlogo}
                                alt="no-img"
                                className="footer__img pointer"
                                style={{ height: "40px" }}
                            />
                        </a>
                        <a style={{display: "table-cell"}} target="_blank" rel = "noopener noreferrer" href="https://www.linkedin.com/in/lokesh-singh-4bb1b6126/">
                            <img
                                src={linkdin}
                                alt=""
                                className="footer__img pointer"
                                style={{ height: "40px" }}
                            />
                        </a>
                        </div>
                    </div>
                    {/* <div>
                        <a href="https://github.com/lokesh15mca">
          <img
            src={git_logo}
            alt="no-img"
            className="footer__img pointer"
            style={{ height: "20px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/lokesh-singh-4bb1b6126/">
          <img
            src={linkdin}
            alt=""
            className="footer__img pointer"
            style={{ height: "20px" }}
          />
        </a>
                        </div> */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
