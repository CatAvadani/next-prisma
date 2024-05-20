import { auth } from '@/auth';
import { db } from '@/prisma/db';
import SignOutUser from './actions/actions';
import PostForm from './components/PostForm';
import SigninButton from './components/SigninButton';

export default async function Home() {
  const posts = await db.post.findMany({
    include: { author: true },
    orderBy: { id: 'desc' },
  });

  const session = await auth();

  return (
    <main className='flex  flex-col gap-8  p-24 items-center'>
      {session?.user && (
        <header>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <form action={SignOutUser}>
            <button>Sign Out</button>
          </form>
        </header>
      )}
      {session?.user ? <PostForm /> : <SigninButton />}
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
