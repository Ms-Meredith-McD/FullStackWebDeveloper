import backgroundImage from "../../assets/main-image.jpg";
import headshotImage from "../../assets/headshot.jpg";

export default function About() {
  return (
    <div className="background">
      <div className="aboutme container text-center m-5 p-5">
        <h1>About Me</h1>
        <div>
          <img src={headshotImage} alt="Meredith" />
          <h2 className="text-center">Full Stack Web Developer</h2>
          <p style={{ textAlign: "left" }}>After spending several years as a financial advisor and then in HR, I was ready for something new. I'm looking for a career that is more in tune with my love of logic, technology, and solving problems. I've recently come up with a phrase that I've been using to sum up my goal:</p>
          <h4>"Show me what you want & I will build my way to it!"</h4>
        </div>
      </div>
    </div>
  );
}