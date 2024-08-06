import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './BoardForm.css';

const BoardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const originPassword = '1234'; 

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/board/${id}`)
        .then(response => {
          setBoardTitle(response.data.boardTitle);
          setBoardContents(response.data.boardContents);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    // Perform password validation
    if (!inputPassword) {
      setErrorMessage('비밀번호를 입력하세요.');
      return;
    }

    const post = { boardTitle, boardContents };
    const url = id ? `http://localhost:8080/board/update/${id}` : 'http://localhost:8080/board/save';
    const method = 'post';

    if(originPassword === inputPassword){
      axios({
        method: method,
        url: url,
        data: post,
      })
        .then(() => navigate('/boardList'));
    } else{
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="board-form-container">
      <form onSubmit={handleSubmit} className="board-form">
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label>제목: </label>
          <input type="text" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} name="boardTitle" required />
        </div>
        <div className="form-group">
          <label>비밀번호: </label>
          <input type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} name="password" required />
        </div>
        <div className="form-group">
          <label>내용: </label>
          <textarea value={boardContents} onChange={(e) => setBoardContents(e.target.value)} name="boardContents" cols="30" rows="10" required></textarea>
        </div>
        <button type="submit">{id ? '수정' : '작성'}</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      <div className="board-form-buttons">
        <button onClick={() => navigate('/boardList')}>목록</button>
      </div>
    </div>
  );
};

export default BoardForm;