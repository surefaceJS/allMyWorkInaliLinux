
import "./sass/main.scss";
import NavigationBar from "./companets/NavigationBar"
import SectionBody from "./companets/section-body"
import  SectionPic from "./companets/section-pic"
import  SectionMiddle from "./companets/Section-middle"
import Nowhome from "./companets/nowhome";


function App() {




  return (
    <div>

      <NavigationBar />
      <SectionBody/>
        <SectionPic/>
        <SectionMiddle/>
        <Nowhome/>
    </div>
  );
}

export default App;
