import React, { useState } from "react";
import "./SearchFriends.css";
import { FaUserPlus, FaUserTimes } from "react-icons/fa";

const SearchFriends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [friends, setFriends] = useState([
    { id: 1, name: "Alice Johnson", username: "alice", added: false, photo: "https://i.pravatar.cc/50?img=1" },
    { id: 2, name: "Bob Smith", username: "bob", added: false, photo: "https://i.pravatar.cc/50?img=2" },
    { id: 3, name: "Charlie Brown", username: "charlie", added: true, photo: "https://i.pravatar.cc/50?img=3" },
       { id: 4, name: "Charlie Brown", username: "charlie", added: true, photo: "https://i.pravatar.cc/50?img=3" },
          { id: 5, name: "Charlie Brown", username: "charlie", added: true, photo: "https://i.pravatar.cc/50?img=3" },
  ]);

  const handleToggleFriend = (id) => {
    setFriends(
      friends.map((f) =>
        f.id === id ? { ...f, added: !f.added } : f
      )
    );
  };

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-friends">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for friends..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="friend-requests">
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <div key={friend.id} className="search-request-item">
              <img src={friend.photo} alt={friend.name} className="friend-photo" />
              <div className="friend-info">
                <h4>{friend.name}</h4>
                <p>{friend.username}</p>
              </div>
              <button
                className={`friend-action ${friend.added ? "unfriend" : "add"}`}
                onClick={() => handleToggleFriend(friend.id)}
              >
                {friend.added ? <FaUserTimes /> : <FaUserPlus />}
              </button>
            </div>
          ))
        ) : (
          <p>No friends found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchFriends;
