import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BoardList.css';

const BoardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/board/list')
      .then(response => {
        const data = response.data;
        console.log(data);//test
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("API 응답 형식이 예상과 다릅니다:", data);
          setPosts([]); // 응답이 배열이 아닐 경우 빈 배열로 설정
        }
      })
      .catch(error => {
        console.error("데이터 가져오기 오류:", error);
        setPosts([]); // 오류 발생 시 빈 배열로 설정
      });
  }, []);

  return (
    <div className='boardContainer'>
      <div className='text-container'>
        <strong>공지사항</strong><br /><br />
      </div>
      <Link to="/boardForm/new">글쓰기</Link> {/* 링크 경로 수정 */}
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
              <td>{post.id}</td>
              <td>
                <Link to={`/board/${post.id}`}>{post.boardTitle}</Link>
              </td>
              <td>{post.fileAttached}</td>
              <td>{post.createdAt}</td>
              <td>{post.boardHits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
