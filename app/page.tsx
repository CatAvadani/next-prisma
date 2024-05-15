import { db } from '@/prisma/db';
import PostForm from './components/PostForm';

export default async function Home() {
  const posts = await db.post.findMany({
    include: { author: true },
    orderBy: { id: 'desc' },
  });

  return (
    <main className='flex  flex-col gap-8  p-24 items-center'>
      <PostForm />
      {posts.map((post: any) => (
        <div key={post.id} className=' flex flex-col gap-2'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <span>{post.author.name}</span>
        </div>
      ))}
    </main>
  );
}
