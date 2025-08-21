import express from 'express';
import { createPost, likePost, getPosts, getPost, getUserPosts } from '../controllers/post.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';
const router = express.Router();

// public routes
router.get('/', getPosts);
router.get('/:postId', getPost);
router.get('/user/:username', getUserPosts);

// protected routes
router.post('/', protectedRoute, upload.single('image'), createPost);
router.post('/', protectedRoute, likePost);
router.delete('/', protectedRoute, deletePost);

export default router;
