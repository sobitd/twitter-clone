import React, {useState} from "react";
import "../App.css"
import { Avatar, Button } from "@mui/material";


const CreateTweet = () => {


  return( 
  <div className="tweet-container">
<form>
    {/* compose a new tweet */}
<div className="create-tweet-box">
    <input value={} placeholder= "What's happening?" type="text" />
</div>
{/* you can add an image  */}
<input className="tweet-box-image" value={} placeholder= "Enter image url" type="text" />
<Button type="submit" className="create-tweet-button">Tweet</Button>
</form>
  </div>
 
)};
export default CreateTweet;


