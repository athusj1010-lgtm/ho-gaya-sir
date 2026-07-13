// src/components/common/Toast.tsx

type ToastProps = {
  open: boolean;
  message: string;
};

export default function Toast({
  open,
  message,
}: ToastProps) {
  if (!open) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
}