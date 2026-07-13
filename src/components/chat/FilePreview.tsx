// src/components/chat/FilePreview.tsx

type Props = {
  name: string;
};

export default function FilePreview({
  name,
}: Props) {
  return (
    <div className="file-preview">
      📄 {name}
    </div>
  );
}