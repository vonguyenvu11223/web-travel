import { Link } from '@/navigation';
export default function NotFound() {
  return (
    <div className="relative inset-0 z-50 flex flex-col items-center justify-center h-screen overflow-hidden bg-white">
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
