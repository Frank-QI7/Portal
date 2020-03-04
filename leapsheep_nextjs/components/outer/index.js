import React from 'react';

function Outer(props) {
    // need to get [name, Component,color] from parent component
    const {name, Component,color} = props
    return(
        <div className="story_outer" style={{background:color}}>
            <div>
                <div className="testimonials">
                    {name}
                </div>
                <Component/>
            </div>

        </div>
    )
}
export default Outer;