export type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
};

const KEY = "hgs_uploads";

export function getUploads(): UploadedFile[] {
  const data = localStorage.getItem(KEY);

  return data ? JSON.parse(data) : [];
}

export function saveUploads(
  files: UploadedFile[]
) {
  localStorage.setItem(
    KEY,
    JSON.stringify(files)
  );
}

export function addUploads(
  newFiles: UploadedFile[]
) {
  const files = getUploads();

  files.unshift(...newFiles);

  saveUploads(files);
}

export function deleteUpload(id: string) {
  saveUploads(
    getUploads().filter(
      (file) => file.id !== id
    )
  );
}

export function clearUploads() {
  localStorage.removeItem(KEY);
}