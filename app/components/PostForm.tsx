'use client';
import { useForm } from 'react-hook-form';
import { savePost } from '../actions/actions';
import { PostCreate } from '../validations/post';

export default function PostForm() {
  const form = useForm<PostCreate>();

  const handleSubmit = async (data: PostCreate) => {
    await savePost(data);
    form.reset();
  };

  return (
    <form
      className='w-96 flex flex-col gap-2'
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <input
        {...form.register('title')}
        placeholder='Title'
        className='w-full p-2 border border-gray-300'
      />
      <textarea
        {...form.register('content')}
        placeholder='Content'
        className='w-full p-2 border border-gray-300'
      ></textarea>
      <button type='submit' className='w-full p-2 bg-blue-500 text-white'>
        Save Post
      </button>
    </form>
  );
}
