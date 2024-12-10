
import Clientsaying from "./component/clientsaying";
import Document_of_everyfood from "./component/documenteveryfood";
import ExtraExperience from "./component/experince";
import Fooditem from "./component/fooditem";
import Foodproduct from "./component/foodproduct";
import Foodrating from "./component/foodrating";
import Footer from "./component/footer";
import Herosection from "./component/herosection";
import Navbar from "./component/navbar";
import News_and_Blog from "./component/news_and_Blog";
import Ourchef from "./component/ourchieg";
import Ourmenu from "./component/ourmenu";

export default function HOme(){
  return(
    <div>
      <Navbar/>
      <Herosection/>
      <Foodproduct/> 
      <Fooditem/>
      <ExtraExperience/>
      <Foodrating/>
      <Ourmenu/>
      <Ourchef/>
      <Clientsaying/>
      <Document_of_everyfood/>
      <News_and_Blog/>
      <Footer/>

    </div>
  )
}

