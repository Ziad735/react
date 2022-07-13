import Aos, { AOS } from "aos";
import React from "react";
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Sec6 from './components/Sec6';



class Home extends React.Component{

    render(){
        return(
            <div>
              <Sec1/>
              <Sec2/>
              <Sec3/>
              <Sec4/>
              <Sec5/>
              <Sec6/>
                
            </div>
          

        )

        }
        componentDidMount(){
            Aos.init()
        }
}
export default Home;