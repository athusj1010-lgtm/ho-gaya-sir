// frontend/src/components/panels/UploadsPanel.tsx

import { useEffect, useRef, useState } from "react";

import {
  X,
  Upload,
  FileText,
  Image,
  Music2,
  Video,
  Trash2,
  HardDrive,
} from "lucide-react";

import {
  addUploads,
  deleteUpload,
  getUploads,
  type UploadedFile,
} from "../../services/uploads";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function UploadsPanel({
  open,
  onClose,
}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [files,setFiles] =
    useState<UploadedFile[]>([]);

  useEffect(()=>{

    if(open){

      setFiles(getUploads());

    }

  },[open]);

  if(!open) return null;

  function pickFiles(accept?:string){

    if(!inputRef.current) return;

    inputRef.current.accept=accept || "";

    inputRef.current.click();

  }

  function onFilesSelected(
    e:React.ChangeEvent<HTMLInputElement>
  ){

    const selected:UploadedFile[]=
      Array.from(
        e.target.files || []
      ).map(file=>({

        id:crypto.randomUUID(),

        name:file.name,

        size:file.size,

        type:file.type,

      }));

    addUploads(selected);

    setFiles(getUploads());

    e.target.value="";

  }

  function remove(id:string){

    deleteUpload(id);

    setFiles(getUploads());

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
            <Upload size={22}/>
          </div>

          <div className="sidebar-title">
            <h2>Uploads</h2>
            <span>Manage your files</span>
          </div>

          <button
            className="sidebar-close"
            onClick={onClose}
          >
            <X size={20}/>
          </button>

        </div>

        <input
          hidden
          multiple
          ref={inputRef}
          type="file"
          onChange={onFilesSelected}
        />

        <div className="sidebar-section">

          <button
            className="sidebar-item"
            onClick={()=>pickFiles(".pdf")}
          >
            <FileText size={18}/>
            <span>Upload PDF</span>
          </button>

          <button
            className="sidebar-item"
            onClick={()=>pickFiles("image/*")}
          >
            <Image size={18}/>
            <span>Upload Image</span>
          </button>

          <button
            className="sidebar-item"
            onClick={()=>pickFiles("audio/*")}
          >
            <Music2 size={18}/>
            <span>Upload Audio</span>
          </button>

          <button
            className="sidebar-item"
            onClick={()=>pickFiles("video/*")}
          >
            <Video size={18}/>
            <span>Upload Video</span>
          </button>

        </div>

        <div className="sidebar-section">

          <p>Uploaded Files</p>

          {files.length===0 ? (

            <div
              style={{
                textAlign:"center",
                color:"#94a3b8",
                padding:"50px 20px",
              }}
            >
              <HardDrive
                size={46}
                style={{
                  margin:"0 auto 18px",
                  opacity:.65,
                }}
              />

              No uploads yet.

            </div>

          ) : (

            files.map(file=>(

              <div
                key={file.id}
                className="sidebar-item"
              >

                <div
                  style={{
                    flex:1,
                    overflow:"hidden",
                  }}
                >

                  <div
                    style={{
                      color:"#fff",
                      fontWeight:600,
                      whiteSpace:"nowrap",
                      overflow:"hidden",
                      textOverflow:"ellipsis",
                    }}
                  >
                    {file.name}
                  </div>

                  <small
                    style={{
                      color:"#94a3b8",
                    }}
                  >
                    {(file.size/1024).toFixed(1)} KB
                  </small>

                </div>

                <button
                  className="sidebar-close"
                  onClick={()=>
                    remove(file.id)
                  }
                >
                  <Trash2 size={16}/>
                </button>

              </div>

            ))

          )}

        </div>

      </aside>

    </>

  );

}