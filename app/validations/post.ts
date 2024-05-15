import { z } from 'zod';

const PostCreateSchema = z.object({
  title: z.string().min(3).max(50),
  content: z.string().min(3),
});

export type PostCreate = z.infer<typeof PostCreateSchema>;
