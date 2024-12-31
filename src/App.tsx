import NavBar from "./components/Navbar";
import HeroTextContent from "./components/HeroText";
import HeroAnimation from "./components/HeroAnimation";
import EffortlessDocumentation from "./components/Effortless";
import PrecisionAIContent from "./components/precisionAI";
import MeetOurTeam from "./components/MeetOurTeam";
import WaitlistJoin from "./components/JoinWaitlist";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <div className="w-screen bg-white relative">
          <NavBar />
          <HeroTextContent />
          <HeroAnimation />
          <EffortlessDocumentation />
          <PrecisionAIContent />
          <MeetOurTeam />
          <WaitlistJoin />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
