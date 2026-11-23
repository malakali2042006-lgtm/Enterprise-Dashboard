
import { useState } from 'react';

function Users() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({
    key: 'id',
    direction: 'asc'
  });

  const users = [
    { id: 1, name: "Ahmed Ali", email: "ahmed@example.com", role: "Admin" },
    { id: 2, name: "Sara Mohamed", email: "sara@example.com", role: "Editor" },
    { id: 3, name: "Omar Hassan", email: "omar@example.com", role: "User" },
    { id: 4, name: "Mona Adel", email: "mona@example.com", role: "User" }
  ];

 
const filteredUsers = users.filter((user) => {
  const matchesSearch =
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase());

  const matchesRole =
    roleFilter === 'All' || user.role === roleFilter;

  return matchesSearch && matchesRole;
});


  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (valueA < valueB) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }

    return 0;
  });

  function handleSort(key) {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === 'asc'
          ? 'desc'
          : 'asc'
    }));
  }

  return (
    <div className="users-page">
      <h1>Users Management</h1>
      <p>Manage and view all registered users.</p>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


<select
  value={roleFilter}
  onChange={(e) => setRoleFilter(e.target.value)}
>
  <option value="All">All Roles</option>
  <option value="Admin">Admin</option>
  <option value="Editor">Editor</option>
  <option value="User">User</option>
</select>


      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('role')}>Role</th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {sortedUsers.length === 0 && <p>No users found.</p>}
    </div>
  );
}

export default Users;
