import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../slices/postsSlice';
import { AppDispatch, RootState } from '../store';

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts Page</h1>
      <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default Posts;
