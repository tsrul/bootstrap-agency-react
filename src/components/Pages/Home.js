import React, { Component } from 'react';
import Header from '../Common/Heder';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio';
import About from '../Pages/About';
import Team from '../Common/Team';
import Clients from '../Common/Clients';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* <!-- Masthead--> */}
            <Header
                title="Welcome To Our Studio!"
                subtitle="It's Nice To Meet You"
                buttonText="tell me more"
                link="/services"
                showButton={true}
                image={image}
            />
            <Services/>
            <Portfolio/>
            <About/>
            <Team/>
            <Clients/>

            </div>
         );
    }
}
 
export default Home;