// src/components/chat/ImagePreview.tsx

type Props = {
  src: string;
};

export default function ImagePreview({
  src,
}: Props) {
  return (
    <img
      className="image-preview"
      src={src}
      alt="Preview"
    />
  );
}