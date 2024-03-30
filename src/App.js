import React, {useState} from "react"
import './App.css';


function App() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div style={{display:"flex",textAlign:"center",justifyContent:"center",height: '100vh',alignItems:"center"}}>
    <div style={{padding:"20px",background: 'linear-gradient(135deg, #6a0dad, #cb40f2)',borderRadius:"5px"}}>
    <h1 style={{color:"red",textAlign:"left",color:"transparent",backgroundImage:'linear-gradient(to right, #FF4E50, #F9D423)',backgroundClip:"text"}}>Contact Form</h1>
    <form onSubmit={onSubmit}   style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
      <div>
      <input
          type="text"
          name="from_name"
          placeholder='UserName'
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px"}}
          required
        />
      </div> 
      <div>
        
        <input
          type="email"
          placeholder='Email'
          name="from_email"
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:"10px"}}
          required
        />
      </div>
      <div>
    
        <textarea
          placeholder='Add Your Message...'
          name="message"
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:'10px'}}
          required
        />
      </div>
      <button style={{marginTop:"10px",background:'linear-gradient(to right, #FF4E50, #F9D423)',borderRadius:"5px",border:"none",cursor:"pointer",padding:"5px"}} type="submit">Submit</button>
    </form>
    <span>{result}</span>
    </div>
    </div>
   
    
  );
}

export default App;
