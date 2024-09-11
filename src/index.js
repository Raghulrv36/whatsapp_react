import ReactDOM from "react-dom/client";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import round from "./images/round.jpg"
import photo from "./images/new.jpg"
import jack from "./images/jack.jpg"
import john from "./images/john.jpg"
import peter from "./images/peter.jpg"
import lana from "./images/lana.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Name(props)

{
    
    return(
        
        <div className="box">
            <div className="profileimg">
            <img src={props.image} alt="Profile" className="profile" />
            </div>
            <div className="contact">
            <h1>{props.name} </h1>
            <p>{props.desc} </p>
            </div>
            <div className="content">
            <span className="time" style={{fontSize:"15px", fontWeight:"lighter"}}>11:00</span>
            <span className="star">★</span>
            </div>
         </div>
        
    )
    
}

var details = [

    {
        name: "Jessica Koel",
        desc: "Hey,Joel, I here to help you",
        image: round
    },
    {
        name: "Koemoel Bolger",
        desc: "I will send you all documents soon",
        image: peter
    },
    {
        name: "Tamaara Suiel",
        desc: "Are you going to business next week",
        image: lana
    },
    {
        name: "Sam Nielson",
        desc: "I Suggest you to start a new business soon",
        image: john
    },
    {
        name: "Caroline Nexon",
        desc: "We need you to start new research center",
        image: photo
    },
    {
        name: "Patrick Koeler",
        desc: "We need you to start new research center",
        image: jack
    }
]


root.render(
    <div className="container">
        <div className="container_box">
                <p className="search">Search <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000"}} ></FontAwesomeIcon></p>
        </div>
        
        
        
        {
            details.map(function(item)
        {
            return <Name name = {item.name} desc = {item.desc} image={item.image}></Name>
        })
        }
    </div>
)