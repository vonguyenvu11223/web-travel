import { User } from '@/types/post';
import ImageCustom from '../image-custom';

export default async function Avatar({ slug }: { slug: string }) {
  const user: User | null = null
  if (!user) return null;

  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        
      </div>
    </div>
  );
}
