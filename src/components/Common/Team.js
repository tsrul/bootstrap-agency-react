import React from 'react';
import TeamItem from './TeamItem';

const team=[
    {img:"../assets/img/team/1.jpg", name: 'Kay Garland', target:'Lead Designer'},
    {img:"../assets/img/team/2.jpg", name: 'Larry Parker', target:'Lead Marketer'},
    {img:"../assets/img/team/3.jpg", name: 'Diana Petersen', target:'Lead Developer'},
];

const Team = (props) => {
    return (
        <div>
             {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {team.map((t,index)=>{
                       return <TeamItem {...t} key={index}/>
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        </div>
      );
}
 
export default Team;