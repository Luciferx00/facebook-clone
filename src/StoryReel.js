import React from 'react'
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" profileSrc="https://avatars.githubusercontent.com/u/68679460?s=460&u=b73b360b6da7395e0ff82388a229950df30ad021&v=4" title="Apurva Kumar"/>
            <Story image="http://webmeup.com/upload/blog/lead-image-105.png" profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" title="Adarsh Kumar Singh"/>
            <Story image="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg" profileSrc="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" title="Ankur Tikoo"/>
        </div>
    )
}

export default StoryReel
