import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./card.css";
ReactDOM.render(

<>

<section className="pricing py-5">
  <div className="container">
     <div className="row">
       <div className="col-lg-4">
<Card 
index= {1}
plan = {Sdata[0].plan}
price = {Sdata[0].price}

users = {Sdata[0].users}
storage= {Sdata[0].storage}
publicProjects= {Sdata[0].publicProjects}
access= {Sdata[0].access}
privateProjects= {Sdata[0].privateProjects}
support= {Sdata[0].support}
free= {Sdata[0].free}
reports = {Sdata[0].reports}


/>

</div> 

<div className="col-lg-4">
<Card 
index= {2}
plan = {Sdata[1].plan}
price = {Sdata[1].price}

users = {Sdata[1].users}
storage= {Sdata[1].storage}
publicProjects= {Sdata[1].publicProjects}
access= {Sdata[1].access}
privateProjects= {Sdata[1].privateProjects}
support= {Sdata[1].support}
free= {Sdata[1].free}
reports = {Sdata[1].reports}

/>
</div>

<div className="col-lg-4">
<Card
index= {0}
plan = {Sdata[2].plan}
price = {Sdata[2].price}

users = {Sdata[2].users}
storage= {Sdata[2].storage}
publicProjects= {Sdata[2].publicProjects}
access= {Sdata[2].access}
privateProjects= {Sdata[2].privateProjects}
support= {Sdata[2].support}
free= {Sdata[2].free}
reports = {Sdata[2].reports}



/>
</div>
</div>
</div>
</section>



</>,

document.getElementById("root")

);