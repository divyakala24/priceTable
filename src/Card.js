import React from "react";
import "./card.css";


function Card(props){
    return(


        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.plan}</h5>
            <h6 className="card-price text-center">{props.price}<span class="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.users}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.publicProjects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.access}</li>
              
              <li className={props.index==1 ? "text-muted": "" } ><span className="fa-li"><i className={props.index==1 ? "fas fa-times": "fas fa-check" }></i></span>{props.privateProjects}</li>
              <li className={props.index==1 ? "text-muted": "" }><span className="fa-li"><i className={props.index==1 ? "fas fa-times": "fas fa-check" }></i></span>{props.support}</li>
              <li className={props.index==1 ? "text-muted": "" }><span className="fa-li"><i className={props.index==1 ? "fas fa-times": "fas fa-check" }></i></span>{props.free}</li>
              <li className={props.index==0 ? "": "text-muted" }><span className="fa-li"><i className={props.index==0 ? "fas fa-check": "fas fa-times" }></i></span>{props.reports}</li>
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>

    )
}

export default Card;