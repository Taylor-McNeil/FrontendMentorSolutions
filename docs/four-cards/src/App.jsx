import "./App.css";
import Card from "./Card.jsx";
import supervisorIcon from "./assets/icon-supervisor.svg";
import teamBuilderIcon from "./assets/icon-team-builder.svg";
import calculatorIcon from "./assets/icon-calculator.svg";
import karmaIcon from "./assets/icon-karma.svg";

export default function App() {
  return(
    <div className="">


      <header className="header-container">
        <p style={{ marginBottom:"0px"}} className="subtitle">Reliable, efficient delivery</p>
        <h1 style={{ marginTop: "0px" }}>Powered by Technology</h1>
        <p className="description">
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
        </p>
      </header>

      <div className="grid">


      <Card
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
        icon={<img src={supervisorIcon} alt="Magnifying Glass Icon" />}
        borderColor="#44D3D2"
        className="supervisor-card"
        />

        <Card
        title="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
        icon={<img src={teamBuilderIcon} alt="Team Builder Icon" />}
        borderColor="EA5454"
        className="team-builder-card"
        />
      
 



<Card
        title="Karma"
        description="Scans our talent network to create the optimal team for your project"
        icon={<img src={karmaIcon} alt="Lightbulb Icon" />}
        borderColor="#FCAE4A"
        className="karma-card"
        />


<Card
        title="Calculator"
        description="Scans our talent network to create the optimal team for your project"
        icon={<img src={calculatorIcon} alt="Calculator Icon" />}
        borderColor="#549Ef2"
        className="calculator-card"
        />
      </div>
    </div>
  );
}
