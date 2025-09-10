import React from "react";
import "./FriendRequests.css";

const FriendRequests = () => {
  const friendRequests = [
    { id: 1, name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Bob Smith", image: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Charlie Brown", image: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Bob Smith", image: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Charlie Brown", image: "https://i.pravatar.cc/150?img=6" },
  ];

  return (
    <div className="friend-requests">
      {friendRequests.length > 0 ? (
        friendRequests.map((request) => (
          <div key={request.id} className="request-item">
            <img
              src={request.image}
              alt={request.name}
              className="request-image"
            />
            <div className="request-details">
              <span className="request-name">{request.name}</span>
              <div className="request-actions">
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-requests">No new friend requests.</p>
      )}
    </div>
  );
};

export default FriendRequests;
