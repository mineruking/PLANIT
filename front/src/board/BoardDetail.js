import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './BoardDetail.css';

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/board/${id}`)
      .then(response => {
        setPost(response.data);
        if (response.data.fileAttached === 1) {
          axios.get(`http://localhost:8080/board/${id}`)
            .then(fileResponse => {
              setFiles(fileResponse.data);
            });
        }
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/board/delete/${id}`)
      .then(() => navigate('/'));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <td>{post.id}</td>
          </tr>
          <tr>
            <th>title</th>
            <td>{post.title}</td>
          </tr>
          <tr>
            <th>writer</th>
            <td>{post.writer}</td>
          </tr>
          <tr>
            <th>date</th>
            <td>{post.createdAt}</td>
          </tr>
          <tr>
            <th>hits</th>
            <td>{post.hits}</td>
          </tr>
          <tr>
            <th>contents</th>
            <td>{post.content}</td>
          </tr>
          {post.fileAttached === 1 && (
            <tr>
              <th>image</th>
              <td>
                {files.map(file => (
                  <img
                    key={file.id}
                    src={`http://localhost:8080/upload/${file.storedFileName}`}
                    alt=""
                    width="200"
                    height="200"
                  />
                ))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => navigate('/board/list')}>목록</button>
      <button onClick={() => navigate(`/board/update/${post.id}`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default BoardDetail;