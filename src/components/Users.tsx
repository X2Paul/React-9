import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../slices/usersSlice';
import { AppDispatch, RootState } from '../store';

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users Page</h1>
      <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default Users;
