import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './BoarForm.css';

const BoardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [originalPassword, setOriginalPassword] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/board/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setWriter(response.data.writer);
          setContent(response.data.content);
          setOriginalPassword(response.data.password);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== originalPassword) {
      alert('비밀번호가 틀립니다!!');
      return;
    }
    const post = { title, writer, password, content };

    const url = id ? `http://localhost:8080/board/${id}` : 'http://localhost:8080/board/list';
    const method = id ? 'put' : 'post';

    axios({
      method: method,
      url: url,
      data: post,
    }).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <div>
        <label>작성자: </label>
        <input type="text" value={writer} readOnly name="boardWriter" />
      </div>
      <div>
        <label>제목: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="boardTitle" required />
      </div>
      <div>
        <label>비밀번호: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="boardPass" required />
      </div>
      <div>
        <label>내용: </label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} name="boardContents" cols="30" rows="10" required></textarea>
      </div>
      <button type="submit">수정</button>
    </form>
  );
};

export default BoardForm;
