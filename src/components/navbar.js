import React from 'react'
import bar from "./bars.png";


const navbar = () => {

    return ( 
        <div className = "navbar">
            <div className="newNav"><img src={bar} alt=""/></div>
            <ul className= "useItYr">
                <div className="dropdown">
                    <button className="btn">About Us</button>
                    <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Academics</button>
                    <div className="dropcont">
                    <a href="">CBSE Curriculum</a>
                    <hr />
                    <a href="">Teaching Methodology</a>
                    <hr />
                    <a href="">Early Childhood Program</a>
                    <hr />
                    <a href="">Teaching Manuals</a>
                    <hr />
                    <a href="">Parent's Corner</a>
                    <hr />
                    <a href="">Experienced Teacher's</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Admissions</button>
                    <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Student Life</button>
                    <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Infrastructure</button>
                    <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Hostel</button>
                    <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn">Reach Us</button>
                    {/* <div className="dropcont">
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    <hr />
                    <a href="">Link</a>
                    </div> */}
                </div>
            </ul>
        </div>
    )
}

export default navbar