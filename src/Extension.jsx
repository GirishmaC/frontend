import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Latest from './Pages/HomePage/Latest/Latest';
import FetchApi from "./Pages/FetchApi/index";
const Extension = () => {
const [api,setApi] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      setApi(await FetchApi());
    }
    getApi();
  },[api]);
  console.log("home API working fine",api);

    const accessLocation = useLocation();
    console.log(accessLocation);
  return (
    <div className='extensionPage'>
        <div className='extensionTitle'>
            <p>{accessLocation.state.titleHead}</p>
        </div>
        <div className='extensionImage'>
            <img src={accessLocation.state.imageDisplay} alt="not found" width={"100%"} height={"100%"}/>
        </div>
        <div className='extensionDes'>
            <div><p>{accessLocation.state.descriptionContent}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque tenetur soluta inventore ad deserunt vero veritatis laboriosam ab dolores, ratione, eveniet pariatur eius maiores doloremque numquam amet provident accusamus.
            Rem et aliquam, nobis repudiandae tenetur quibusdam quis minima ratione asperiores doloribus perferendis saepe praesentium corrupti deserunt quasi. Voluptatibus recusandae laborum at labore amet culpa nam facere alias provident cum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga soluta qui iusto blanditiis, sint repellendus. Sit veniam doloribus aut recusandae alias culpa officiis incidunt blanditiis, hic repellendus minima accusamus!</p></div>
        </div>
        <div className="container1">
        <div className="latestTitle">
          <p className="latestText">The Latest</p>
          <hr style={{ width: "12%", marginLeft: "2%" }} />
        </div>
        <div className="box">
          {api.filter((curElem) => {
            return curElem.category === "Latest";
          }).map((elem) => {
            return (
              <Latest
                key={elem.id}
                img={elem.imgUrl}
                titleText={elem.title}
                des={elem.description.slice(0, 200)}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Extension;