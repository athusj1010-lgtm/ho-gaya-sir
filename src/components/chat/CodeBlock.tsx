// src/components/chat/CodeBlock.tsx

type Props = {
  code: string;
};

export default function CodeBlock({
  code,
}: Props) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}