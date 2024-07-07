import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Layer from "./components/layout/Layout";
import Home from "./components/main/Home";
import Cart from "./components/main/Cart";
import Checkout from "./components/main/Checkout";
import ProductList from "./components/main/ProductList";

// import Moon from "./components/main/destination/moon/Moon";
// import Mars from "./components/main/destination/mars/Mars";
// import Europa from "./components/main/destination/europa/Europa";
// import Titan from "./components/main/destination/titan/Titan";

// import Commander from "./components/main/crew/commander/commander"
// import MissionSpecialist from "./components/main/crew/mission-specialist/MissionSpecialist";
// import FlightEngineer from "./components/main/crew/flight-engineer/FlightEngineer";
// import Pilot from "./components/main/crew/pilot/Pilot"

// import Launch from "./components/main/technology/launch/launch";
// import Spaceport from "./components/main/technology/spaceport/spaceport";
// import Capsule from "./components/main/technology/capsule/capsule";

const ErrorMsg = () => {
  return (
    <section
      className="error-message"
      style={{
        color: "#0B0D17",
        fontSize: "1.75rem",
        fontWeight: "Bold",
        height: "100dvh",
        
      }}
    >
      <h2>
        404 Error <br /> Page will be live soon!!!
      </h2>
      <Link to="/home">Back to home</Link>
    </section>
  );
};

const App = () => {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layer />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* <Route path="/destination/*" element={<Destination />}>
          <Route index element={<Navigate to="moon" />} />
          <Route path="moon" element={<Moon />} />  
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="/crew/*" element={<Crew />}>
          <Route index element = {<Navigate to="commander" />} />
          <Route path="commander" element={<Commander />} /> 
          <Route path="mission-specialist" element={<MissionSpecialist/>} /> 
          <Route path="flight-engineer" element={<FlightEngineer />} /> 
          <Route path="pilot" element={<Pilot />} />
        </Route>

        <Route path="/technology" element={<Technology />}>
          <Route index element = {<Navigate to="launch" />} />
          <Route path="launch" element={<Launch />} /> 
          <Route path="spaceport" element={<Spaceport/>} /> 
          <Route path="capsule" element={<Capsule />} /> 
        </Route> */}
      </Route>
      <Route path="*" element={<ErrorMsg />}></Route>
    </Routes>
    </>
  );
}

export default App;
