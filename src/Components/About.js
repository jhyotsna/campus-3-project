import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-section-title">About Us</h2>
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDsx5yLHbg7quYPl9zu_OHZPIZG2fHS4k9wWsiDp1BsroJDKA3WH2UJr7R4g7M2YAC9eN78PNwn28bE8Eh_Xb3CSdBUmrT5ADa5pTWT_VzhtZ2Y36ER0hM8JN7IRRAKdYh9GrxP1hL8MVs_In3iP8-VyMUzfUngmK2EDiFyZKdWIsb_rwfO_i8DNIuszf3/s320/director.jpg"
            alt="About Us"
          />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h3>Welcome to Our College</h3>
          <p>
            Prof. K. V. G. D. Balaji is a Distinguished Professor and former
            Registrar of GITAM University. He has done B. Tech from NIT,
            Warangal in 1983, M. Tech from NIT Kurukshetra in 1987 and Ph. D
            from Andhra University in 2000. He has 6 Indian Patents (Published)
            and published more than 150 papers (out of which more than 70 are in
            Scopus Indexed Journals) in National, International Journals and
            Conferences. He has successfully completed 7 DST and UGC supported
            research projects.
          </p>
          <p>The Director</p>
          <p>
            RGUKT Srikakulam Campus,<br />
            Rajiv Gandhi University of Knowledge Technologies (RGUKT),<br />
            Administrative Block, S.M Puram, Etcherla(M)<br />
            Srikakulam District,<br />
            Andhra Pradesh - 532402<br />
          </p>
        </div>
      </div>

      {/* College Information Section */}
      <div className="college-info">
        <h3>College Information</h3>
        <ul>
          <li><strong>Established:</strong> 2008</li>
          <li><strong>Number of Faculty:</strong> 120+</li>
          <li><strong>Number of Students:</strong> 6000+</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

