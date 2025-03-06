export default function PostTitle({ children }: { children: string }) {
  return (
    <h1
      className="font-semibold leading-tight tracking-tighter text-1xl text-start md:text-left md:text-xl md:leading-none lg:text-2xl"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
