// frontend/src/components/panels/PrivateChatsPanel.tsx

import { useState } from "react";
import {
  X,
  Lock,
  ShieldCheck,
  KeyRound,
  Wallet,
  NotebookPen,
  Briefcase,
  Plus,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PrivateChatsPanel({
  open,
  onClose,
}: Props) {

  const [password,setPassword]=useState("");
  const [unlocked,setUnlocked]=useState(false);

  if(!open) return null;

  const savedPassword=
    localStorage.getItem("hgs_private_password");

  function createPassword(){

    if(password.length<4){

      alert("Minimum 4 characters");

      return;

    }

    localStorage.setItem(
      "hgs_private_password",
      password
    );

    setUnlocked(true);

    setPassword("");

  }

  function unlock(){

    if(password===savedPassword){

      setUnlocked(true);

      setPassword("");

    }else{

      alert("Wrong Password");

    }

  }

  return(
    <>

      <div
        className="sidebar-overlay"
        onClick={()=>{
          setUnlocked(false);
          onClose();
        }}
      />

      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="sidebar-logo">
            <Lock size={22}/>
          </div>

          <div className="sidebar-title">
            <h2>Private Vault</h2>
            <span>Protected conversations</span>
          </div>

          <button
            className="sidebar-close"
            onClick={()=>{
              setUnlocked(false);
              onClose();
            }}
          >
            <X size={20}/>
          </button>

        </div>

        {!savedPassword ? (

          <>

            <h3 style={{marginBottom:18}}>
              Create Vault Password
            </h3>

            <input
              className="private-input"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e)=>
                setPassword(e.target.value)
              }
            />

            <button
              className="sidebar-item active"
              onClick={createPassword}
            >
              <ShieldCheck size={18}/>
              <span>Create Vault</span>
            </button>

          </>

        ) : !unlocked ? (

          <>

            <h3 style={{marginBottom:18}}>
              Unlock Vault
            </h3>

            <input
              className="private-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>
                setPassword(e.target.value)
              }
            />

            <button
              className="sidebar-item active"
              onClick={unlock}
            >
              <KeyRound size={18}/>
              <span>Unlock</span>
            </button>

          </>

        ) : (

          <div className="sidebar-section">

            <button className="sidebar-item">
              <Wallet size={18}/>
              <span>Banking</span>
            </button>

            <button className="sidebar-item">
              <NotebookPen size={18}/>
              <span>Personal Notes</span>
            </button>

            <button className="sidebar-item">
              <KeyRound size={18}/>
              <span>Passwords</span>
            </button>

            <button className="sidebar-item">
              <Briefcase size={18}/>
              <span>Business</span>
            </button>

            <button className="sidebar-item active">
              <Plus size={18}/>
              <span>New Private Chat</span>
            </button>

          </div>

        )}

      </aside>

    </>
  );

}