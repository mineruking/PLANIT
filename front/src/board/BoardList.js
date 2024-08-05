import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BoardList.css';

const BoardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/board/list')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className='boardContainer'>
      <div className='text-container'>
        <strong>공지사항</strong><br></br><br></br>
      </div>
      <Link to="BoardForm.js">글쓰기</Link>
      <table>
        <thead>
          <tr>
            <th className='id'>번호</th>
            <th className='title'>제목</th>
            <th className='fileAttached'>첨부파일</th>
            <th className='createdAt'>작성일</th>
            <th className='hits'>조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.fileAttached}</td>
              <td>{post.createdAt}</td>
              <td>{post.hits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
