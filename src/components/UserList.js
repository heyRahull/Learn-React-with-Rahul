import "./UserList.css"; // Import CSS file

const UserList = () => {
  const users = [
    { id: 1, name: "Rohan", age: 25 },
    { id: 2, name: "Priya", age: 22 },
    { id: 3, name: "Ankit", age: 27 },
    { id: 4, name: "Sneha", age: 24 },
  ];

  return (
    <div className="list-container">
      <h2 className="list-title">User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
