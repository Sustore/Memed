import React, {useEffect, useState} from 'react'
import './StyleMeme.css';
function MemeGenerator() 
{
    const [top,setTop] = useState(false);
    const [bottom,setBottom] = useState(false);
    const [text,setText] = useState("");
    const [msg,setMsg] = useState("");
    const[count,setCount] = useState(0);
    const[url,setUrl] = useState([
        "https://burst.shopifycdn.com/photos/running-cloudy-day.jpg?width=925&format=pjpg&exif=1&iptc=1' alt='A Fitness images",
        "https://burst.shopifycdn.com/photos/person-sits-on-the-sidewalk-next-to-suitcases.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://burst.shopifycdn.com/photos/two-people-diving-into-the-water.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://burst.shopifycdn.com/photos/seagulls-on-a-concrete-surface.jpg?width=925&format=pjpg&exif=1&iptc=1",
        "https://burst.shopifycdn.com/photos/mens-fashion-stonewash-jeans-and-boots.jpg?width=925&format=pjpg&exif=1&iptc=1"
    ])
    const [status,setStatus] = useState(false);

    useEffect(()=>
    {
        document.getElementById("top").focus();
    },[count,top,bottom])
    function topFun(event)
    {
        setText(event.target.value);
    }
   

    function displayTop()
    {
        setTop(true);
        setBottom(false);
        setMsg("");
    }
    function displayBot()
    {
        setTop(false);
        setBottom(true);
        setMsg("");
    }

    function memeMaker()
    {
        if(!top && !bottom && text!=="")
        {
            setMsg("Please Select The Position Of The Text")
        }
        else if(text==="" && (top || bottom))
        {
            document.getElementById("top").focus();
        }
        else
        {
            console.log("The length of the url is:",url.length)
            setMsg("");
            setStatus(true);
            document.getElementById("top").setAttribute("hidden","hidden");
            document.getElementById("topBtn").setAttribute("hidden","hidden");
            document.getElementById("botBtn").setAttribute("hidden","hidden");
            document.getElementById("midBtn").setAttribute("hidden","hidden");
        }
    }
    function nextImage()
    {
        document.getElementById("top").removeAttribute("hidden");
        document.getElementById("topBtn").removeAttribute("hidden");
        document.getElementById("botBtn").removeAttribute("hidden");
        document.getElementById("midBtn").removeAttribute("hidden");
        
        setMsg("");
        setText("");
        setTop(false);
        setBottom(false);

        if (url.length - 1 > count) {
            setCount((prvCount) => prvCount + 1);
            console.log("was i thre");
        }
        else {
            setCount(0);
        }
    }
    function prvImage()
    {
        document.getElementById("top").removeAttribute("hidden");
        document.getElementById("topBtn").removeAttribute("hidden");
        document.getElementById("botBtn").removeAttribute("hidden");
        document.getElementById("midBtn").removeAttribute("hidden");
        setMsg("");
        setText("");
        setTop(false);
        setBottom(false);

        if (count>0) {
            setCount((prvCount) => prvCount - 1);
        }
        else {
            setCount(url.length-1);
        }
    }
  return (
      <React.Fragment>
          <div className='containerDiv' id='containerDiv'>
              <div className='topDiv'>
                  <input type="text" className='top' id='top' value={text} placeholder="Humour Me..."
                      onChange={(event) => topFun(event)} />
                  {top && <h3 className='topText'>{text}</h3>}
              </div>
              <img src={url[count]} alt='A Fitness images'/>
              <div>
                  {bottom && <h3 className='botText'>{text}</h3>}
              </div>
              <div className='btnDiv' id='btnDiv'>
                  <button id="topBtn" onClick={() => displayTop()}>On Top</button>
                  <button id="botBtn" onClick={() => displayBot()}>On Bottom</button>
                  <button id="midBtn" onClick={() => memeMaker()}>Submit</button>
              </div>
              <div>
                  {(top && text === "") && <p>Your Text will be displayed at top</p>}
                  {(bottom && text === "") && <p>Your Text will be displayed at bottom</p>}
              </div>
              <div>
                  <p>{msg}</p>
              </div>
          </div>
          <div className="toggle">
            <button className="firstBtn" onClick={prvImage}>Prv Image</button>
            <button className="secondBtn" onClick={nextImage}>Next Image</button>
          </div>
    </React.Fragment>
  )
}

export default MemeGenerator