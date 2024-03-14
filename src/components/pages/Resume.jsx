import backgroundImage from "../../assets/main-image.jpg";
import { Link } from 'react-router-dom';


export default function Resume() {
  return (
    <div className="background">
      <div className="resume container text-center m-5 p-5 justify-content-start">     
        <ol>
        <h1>Resume</h1>
          <li>HTML/CSS</li>
          <li>JavaScript/JQuery</li>
          <li>Bootstrap/Tailwind</li>
          <li>Progressive Web Applications (PWAS)</li>
          <li>Local Storage, Session Storage, IndexedDB</li>
          <li>React.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>User Authentication</li>
          <li>MERN Stack</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Client-Server Model</li>
          <li>API</li>
          <li>Rest</li>
          <li>JSON</li>
          <li>AJAX(Fetch API)</li>
          <li>GraphQL</li>
          <li>Heroku</li>
          <li>Git/GitHub</li>
          <li>Shell Scripting</li>
          <li>Unit Testing</li>
          <li>Exposure to Python</li>
          <div className="text-center">
          <Link to="https://docs.google.com/document/d/14xB9WbJ6C9bBn01DnSAaR3THo53WVNvD/edit?usp=drive_link&ouid=110680909082817876115&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            Meredith McDonald's Resume
        </Link>
        </div>
        </ol>

      </div>
    </div>
  );
}