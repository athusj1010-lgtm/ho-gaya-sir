// src/components/BottomBar.tsx

import {
  Paperclip,
  Mic,
  ArrowUp,
} from "lucide-react";

import "./BottomBar.css";


type Props = {
  listening?: boolean;
  onMicClick?: () => void;
};


export default function BottomBar({
  listening,
  onMicClick,
}: Props) {

  return (

    <div className="bottom-wrapper">


      <footer className="bottom-bar">


        <div className="left-tools">


          <button
            className="tool-btn"
            type="button"
            onClick={onMicClick}
          >

            <Mic 
              size={18}
              strokeWidth={2.2}
            />

          </button>



          <button
            className="tool-btn"
            type="button"
          >

            <Paperclip
              size={18}
              strokeWidth={2.2}
            />

          </button>


        </div>



        <input
          type="text"
          className="chat-input"
          placeholder="Ask anything..."
        />



        <div className="right-tools">


          <button
            className="send-btn"
            type="button"
          >

            <ArrowUp
              size={18}
              strokeWidth={2.5}
            />

          </button>


        </div>


      </footer>


    </div>

  );

}