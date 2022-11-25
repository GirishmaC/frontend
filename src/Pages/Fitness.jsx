import React,{useState,useEffect} from "react";
import "../Pages/HomePage/PageStyle.css"
import LatestArticles from "./HomePage/LatestArticles/LatestArticles";
import SideArticles from "./HomePage/LatestArticles/SideArticles";
import TopPost from "./HomePage/LatestArticles/TopPost";
import FetchApi from "./FetchApi/index"

const Fitness = () => {

  const [api,setApi] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      setApi(await FetchApi());
    }
    getApi();
  },[api]);
  console.log("home API working fine",api);

  return (
    <div>
      <div className="container2New">
        <div className="latestTitleInPage">
          <div className="latestText">Fitness</div>
          <div className="topPostsText">Top Posts</div>
        </div>
        <div className="splitBox1">
          <div className="splitLeft1">
            <div className="leftOuter">
              {api.filter((curElem) => {
                return curElem.category === "Fitness";
              }).map((elem) => {
                return (
                  <LatestArticles
                    key={elem.id}
                    img={elem.imgUrl}
                    titleText={elem.title}
                    des={elem.description.slice(0, 200)}
                  />
                );
              })}
            </div>
          </div>
          <div className="splitRight1">
            <div className="staticBox">
              <TopPost />
            </div>
            <div className="rightSide">
              <div className="rightOuter1">
                {api.filter((curElem) => {
                  return curElem.category === "Fitness";
                }).map((elem) => {
                  return (
                    <SideArticles
                      key={elem.id}
                      img={elem.imgUrl}
                      titleText={elem.title}
                    />
                  );
                })}
              </div>            
            <div className="ad">Advertisement</div>
            <div className="random">
              <img src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/d/c/dc2-10034-_1_.webp" alt="not found" width={"100%"} height={"100%"} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
