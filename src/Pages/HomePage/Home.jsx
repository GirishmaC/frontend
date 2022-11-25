import React,{useState,useEffect} from "react";
import Display from "./Display/Display";
import "./Design.css";
import "./PageStyle.css";
import Latest from "./Latest/Latest";
import LatestArticles from "./LatestArticles/LatestArticles";
import SideArticles from "./LatestArticles/SideArticles";
import TopPost from "./LatestArticles/TopPost";
import FetchApi from "../FetchApi/index"

const Home = () => {
  const [api,setApi] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      setApi(await FetchApi());
    }
    getApi();
  },[api]);
  console.log("home API working fine",api);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Display />
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
      <div className="container2" style={{ marginTop: "2%" }}>
        <div className="latestTitle2">
          <p className="latestText2">Latest Articles</p>
          <hr style={{ width: "16%", marginLeft: "2%" }} />
        </div>
        <div className="splitBox">
          <div className="splitLeft">
            <div className="leftOuter">
              {api.filter((curElem) => {
                return curElem.category === "LatestArticle";
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
            <div className="bigLeftImage">
              <img
                alt="not found"
                width={"98%"}
                height={"90%"}
              />
            </div>
          </div>
          <div className="splitRight">
            <div className="ad">Advertisement</div>
            <div className="homeTopPostText">Top Posts</div>
            <div className="rightSide">
              <div className="staticBox">
                <TopPost />
              </div>
              <div className="rightOuter">
                {api.filter((curElem) => {
                  return curElem.category === "LatestArticle";
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
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="latestTitle2">
          <p className="latestText2">Latest Stories</p>
          <hr style={{ width: "16%", marginLeft: "2%" }} />
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
  );
};

export default Home;
