import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Notification.css'; // 경로에 맞게 수정

const notices = [
  { id: 102, importance: '일반', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 101, importance: '중요', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 100, importance: '일반', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 99, importance: '일반', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 98, importance: '중요', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 97, importance: '일반', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
  { id: 96, importance: '일반', title: '2024년도 플래니트 현황', attachment: '', date: '', views: '' },
];

const Notification = () => {
  return(
    <>
      <div className='notificationContainer'>
        <div className='text-container'>
          <div className='Maintext'>
            <strong>공지 사항</strong>
          </div>
          <table className="notice-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>중요도</th>
                <th>제목</th>
                <th>첨부파일</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
          <tbody>
            {notices.map(notice => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>{notice.importance}</td>
                <td>{notice.title}</td>
                <td>{notice.attachment}</td>
                <td>{notice.date}</td>
                <td>{notice.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
          <div className="pagination">
            <a href="#1">1</a>
            <a href="#2">2</a>
            <a href="#3">3</a>
            <a href="#4">4</a>
            <a href="#5">5</a>
            <a href="#6">6</a>
            <a href="#7">7</a>
            <a href="#8">8</a>
            <a href="#9">9</a>
            <a href="#10">10</a>
          </div>
        </div>
      </div>
    </>
  )
};

export default Notification;
