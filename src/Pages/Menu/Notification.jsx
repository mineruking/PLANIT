//Dummy Data
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Fetch notification data based on the id
    const fetchNotification = async () => {
      try {
        const response = await fetch(`/api/notifications/${id}`);
        const data = await response.json();
        setNotification(data);
      } catch (error) {
        console.error('Error fetching notification:', error);
      }
    };

    fetchNotification();
  }, [id]);

  const handleClose = () => {
    navigate('/notifications');
  };

  return (
    <div className="container my-5">
      {notification ? (
        <div>
          <h2>{notification.title}</h2>
          <p>{notification.message}</p>
          <p>Date: {new Date(notification.createdAt).toLocaleString()}</p>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NotificationDetail;
