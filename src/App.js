import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/Navbar/Navbar";
import Mainabout from "./components/Main-about-us/Mainabout";
import ChooseUs from "./components/Chooseus/Chooseus";
import Aboutcourses from "./components/Aboutcourses/Aboutcourses";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Main></Main>
      <Mainabout></Mainabout>
      <Aboutcourses></Aboutcourses>
      <ChooseUs></ChooseUs>
      <Courses></Courses>
      <Team></Team>
      <Footer></Footer>
    </>
  );
}

export default App;
