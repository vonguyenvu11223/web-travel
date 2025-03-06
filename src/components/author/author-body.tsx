export default function AuthorBody({ content }: { content: string }) {
  return (
    <div className="max-w-full">
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
