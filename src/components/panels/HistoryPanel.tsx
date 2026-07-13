// frontend/src/components/panels/HistoryPanel.tsx

import { useEffect, useState } from "react";

import {
  X,
  History,
  Trash2,
  CalendarDays,
} from "lucide-react";

import {
  getHistory,
  deleteHistory,
  type ChatHistory,
} from "../../services/history";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function HistoryPanel({
  open,
  onClose,
}: Props) {

  const [history,setHistory] =
    useState<ChatHistory[]>([]);

  useEffect(()=>{

    if(open){

      setHistory(getHistory());

    }

  },[open]);

  if(!open) return null;

  function remove(id:string){

    deleteHistory(id);

    setHistory(getHistory());

  }

  return(
    <>

      <div
        className="sidebar-overlay"
        onClick={onClose}
      />

      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="sidebar-logo">
            <History size={22}/>
          </div>

          <div className="sidebar-title">
            <h2>History</h2>
            <span>Previous conversations</span>
          </div>

          <button
            className="sidebar-close"
            onClick={onClose}
          >
            <X size={20}/>
          </button>

        </div>

        {history.length===0 ? (

          <div
            style={{
              textAlign:"center",
              color:"#94a3b8",
              padding:"70px 20px",
            }}
          >
            <History
              size={48}
              style={{
                margin:"0 auto 18px",
                opacity:.6,
              }}
            />

            <h3
              style={{
                color:"#fff",
                marginBottom:10,
              }}
            >
              No History
            </h3>

            <p>
              Your previous chats will appear here.
            </p>

          </div>

        ) : (

          <div
            style={{
              display:"flex",
              flexDirection:"column",
              gap:"14px",
            }}
          >

            {history.map((chat)=>(

              <div
                key={chat.id}
                style={{
                  background:"rgba(255,255,255,.05)",
                  border:"1px solid rgba(255,255,255,.06)",
                  borderRadius:"18px",
                  padding:"18px",
                }}
              >

                <div
                  style={{
                    color:"#fff",
                    fontWeight:600,
                    marginBottom:12,
                  }}
                >
                  {chat.title}
                </div>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                  }}
                >

                  <span
                    style={{
                      display:"flex",
                      alignItems:"center",
                      gap:8,
                      color:"#94a3b8",
                      fontSize:13,
                    }}
                  >
                    <CalendarDays size={14}/>

                    {new Date(
                      chat.createdAt
                    ).toLocaleString()}
                  </span>

                  <button
                    className="sidebar-close"
                    onClick={()=>
                      remove(chat.id)
                    }
                  >
                    <Trash2 size={16}/>
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </aside>

    </>
  );

}