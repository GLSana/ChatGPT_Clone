import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImageLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  const handleSend = async () =>{
    const res = await sendMsgToOpenAI(input)
    console.log(res);
  }

  return (
    <div className="App">
          <div className='sideBar'>
            <div className='upperSide'>
              <div className='upperSideTop'><img src={gptlogo} alt="logo" className="logo" /><span className="brand">ChatGPT</span></div>
              <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
                <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
              </div>
            </div>

            <div className='lowerSide'>
                 <div className="listItems"><img src={home} alt="" className="listitemsImg" />Home</div>
                 <div className="listItems"><img src={saved} alt="" className="listitemsImg" />Saved</div>
                 <div className="listItems"><img src={rocket} alt="" className="listitemsImg" />Upgrade to Pro</div>
            </div>


          </div>

          <div className='main'>
            <div className="chats">

              <div className="chat">
                <img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sint id commodi itaque ab eveniet dolor in laboriosam doloremque inventore?</p>
              </div>

              <div className="chat bot">
                <img className='chatimg' src={gptImageLogo} alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam esse in aut praesentium nisi, non eveniet doloribus, facilis dolorem reiciendis laborum corporis perspiciatis amet, expedita illo fuga adipisci numquam sequi cumque. Sit aut eveniet, omnis commodi accusantium culpa, nobis earum nihil in sunt fugiat pariatur officiis consectetur eligendi saepe maiores tenetur minima architecto possimus assumenda! Quis impedit, harum vel obcaecati assumenda nisi, quibusdam vero voluptatem qui deserunt itaque labore odit! Incidunt natus vel voluptates reiciendis commodi amet quisquam quibusdam odio officia nobis deserunt consequatur eum explicabo numquam molestiae, possimus esse ad unde aspernatur, rem id? Fuga ullam iste distinctio?</p>
              </div>

            </div>

            <div className="chatFooter">
              <div className="inp">
                <input type="text" placeholder='Send a messege' value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
              </div>
              <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version</p>
            </div>
          </div>
    </div>
  );
}

export default App;
