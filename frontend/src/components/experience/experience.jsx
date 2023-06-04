import React from "react";
import "./experience.css"
 function Experience(){

    return(
<div className="experienceMainDiv">
<p>What skills i have</p>
<div id="list">
    <div className="skills" id="frontend">
        <h5>frontend skills</h5>
    <ul>
    <li>hmtl ,css</li>
    <li>javascript</li>
    <li>React js </li>
   
    <li>bootstrap </li>
    <li>jquery and ajax</li>
</ul>

    </div>
    <div className="skills" id="backend">
        <h5>backend skills</h5>
    <ul>
    <li>node js with express </li>
    <li> </li>
    <li>python with django</li>
    <li>php with lareval </li>
    <li>java with spring boot</li>
</ul>

    </div>

    <div className="skills" id="database">
        <h5>database language</h5>
    <ul>
    <li>mysql database </li>
    <li>mongo db database </li>
    <li>mariel db database </li>
</ul>

    </div>
</div>

<h2>My Experience</h2>
<h3>1+ YEAR EXPERIENCE</h3>


</div>
    );
}

export default Experience;