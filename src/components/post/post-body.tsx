export default function PostBody({ content }: { content: string }) {
  return (
    <div
      className="max-w-full mb-10 post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
