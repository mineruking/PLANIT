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
      .then(() => navigate('/boardList'));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="board-detail-container">
      <table className="board-detail-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{post.id}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{post.boardTitle}</td>
          </tr>
          <tr>
            <th>작성일자</th>
            <td>{post.createdAt}</td>
          </tr>
          <tr>
            <th>조회수</th>
            <td>{post.boardHits}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>{post.boardContents}</td>
          </tr>
          {post.fileAttached === 1 && (
            <tr>
              <th>첨부파일</th>
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
      <div className="board-detail-buttons">
        <button onClick={() => navigate('/boardList')}>목록</button>
        <button onClick={() => navigate(`/boardForm/update/${post.id}`)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
};

export default BoardDetail;
