import React from 'react';
import {Paper} from "@material-ui/core";

function Visions(props) {
    const {image,title,content,classname} = props
    return(
        <div>
            <Paper elevation={3} className={classname}>
                <div>
                    <div className="icon_holder">
                        <img alt="vision" src={image}/>
                    </div>
                    <div className="icon_text_holder">
                        <div className="icon_text_inner">
                            <h3 className="icon_title">{title}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="story_content">
                        {
                            content.map((item,index)=>{
                                return(
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </Paper>
        </div>

    )
}

export default Visions;