import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/ce/6d/50/ce6d508b88c256d070dc886cd3bf3eb6.jpg"
                alt=""
              />
              <span>Danielle</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/1f/96/30/1f9630a2e58c9a426171254b9b1e06a2.jpg"
                alt=""
              />
              <span>Sunghoon</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/94/7e/a5/947ea5bbc78edc0c357951e733cae928.jpg"
                alt=""
              />
              <p>
                <span>Hanni</span> changed her cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/ac/5d/48/ac5d48cf36692082a39a084066e8981c.jpg"
                alt=""
              />
              <p>
                <span>Jungwon</span> changed his cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/ac/5d/48/ac5d48cf36692082a39a084066e8981c.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jungwon</span>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/736x/1a/8c/cc/1a8ccc79ae2511c620f89e0b8d11a3c7.jpg"
                alt=""
              />
              <div className="online" />
              <span>Rei</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/94/7e/a5/947ea5bbc78edc0c357951e733cae928.jpg"
                alt=""
              />
              <div className="online" />
              <span>Hanni</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
