// frontend/src/components/panels/ProfilePanel.tsx

import {
  X,
  UserCircle2,
  Pencil,
  Download,
  LogOut,
  Mail,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

type ProfilePanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfilePanel({
  open,
  onClose,
}: ProfilePanelProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="sidebar-overlay"
        onClick={onClose}
      />

      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="sidebar-logo">
            <UserCircle2 size={22}/>
          </div>

          <div className="sidebar-title">
            <h2>Profile</h2>
            <span>Your account</span>
          </div>

          <button
            className="sidebar-close"
            onClick={onClose}
          >
            <X size={20}/>
          </button>

        </div>

        <div
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            padding:"28px 0 34px",
          }}
        >

          <div
            style={{
              width:96,
              height:96,
              borderRadius:"50%",
              display:"grid",
              placeItems:"center",
              background:"linear-gradient(135deg,#6366f1,#3b82f6)",
              color:"#fff",
              fontSize:36,
              fontWeight:700,
              boxShadow:"0 18px 40px rgba(99,102,241,.35)",
            }}
          >
            A
          </div>

          <h3
            style={{
              marginTop:18,
              color:"#fff",
            }}
          >
            Atharv
          </h3>

          <span
            style={{
              color:"#94a3b8",
              marginTop:6,
              fontSize:14,
            }}
          >
            Ho Gaya Sir User
          </span>

        </div>

        <div className="sidebar-section">

          <button className="sidebar-item">
            <Pencil size={18}/>
            <span>Edit Profile</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Mail size={18}/>
            <span>Account</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <ShieldCheck size={18}/>
            <span>Privacy</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Download size={18}/>
            <span>Export Chats</span>
            <ChevronRight size={16}/>
          </button>

        </div>

        <div className="sidebar-bottom">

          <button className="sidebar-item">
            <LogOut size={18}/>
            <span>Logout</span>
          </button>

        </div>

      </aside>
    </>
  );
}