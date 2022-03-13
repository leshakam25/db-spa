import s from "./home.module.css";
import Company from "./company/company";
import Services from "./services/services";
import Benefits from "./benefits/benefits";
import Work from "./work/work";

function Home() {
  return (
    <div>
      <Company />
      <Services />
      <Benefits />
      <Work />
    </div>
  );
}

export default Home;
