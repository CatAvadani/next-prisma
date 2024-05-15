'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { savePost } from '../actions/actions';
import { PostCreate, PostCreateSchema } from '../validations/post';

export default function PostForm() {
  const form = useForm<PostCreate>({ resolver: zodResolver(PostCreateSchema) });

  const {
    formState: { errors },
  } = form;

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
      {errors.title && (
        <span className=' text-red-600'>{errors.title.message}</span>
      )}
      <textarea
        {...form.register('content')}
        placeholder='Content'
        className='w-full p-2 border border-gray-300'
      ></textarea>
      {errors.content && (
        <span className=' text-red-600'>{errors.content.message}</span>
      )}
      <button type='submit' className='w-full p-2 bg-blue-500 text-white'>
        Save Post
      </button>
    </form>
  );
}
