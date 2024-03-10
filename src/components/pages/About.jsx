import backgroundImage from "../../assets/main-image.jpg";
import headshotImage from "../../assets/headshot.jpg";

export default function About() {
  return (
    <div className="background">
      <div className="aboutme container text-center m-5 p-5">
        <h1>About Me</h1>
        <div>
          <img src={headshotImage} alt="Meredith" />
          <h1>Full Stack Web Developer</h1>
        </div>
      </div>
    </div>
  );
}