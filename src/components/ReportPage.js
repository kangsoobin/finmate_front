// src/components/ReportPage.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import shinhanlogo from '../images/shinhanlogo.png';
// import hanalogo from '../images/hanalogo.png';
import kookminlogo from '../images/kookminlogo.png';
import nonghyeoplogo from '../images/nonghyeoplogo.png';



const initialItems = [
  {
    id: 1,
    bank: '신한은행',
    title: '어쩌구저쩌구 적금',
    duration: '24개월',
    payment: '월 30만 원 납입',
    rate: '연 3.2%',
    date: '2025년 5월 20일',
    iconUrl: shinhanlogo,
    starred: false,
    details: {
      '상품 유형': '정기 예금',
      '특징': '청년들의 첫 금융 거래와 목돈 마련을 지원하는 청년 ESG 상품',
      '이자율': '기본 연 2.0%, 우대금리 최대 연 1.2%, 최고 연 3.2%',
      '가입 대상': '만 19세~34세 대한민국 청년',
      '가입 기간': '6개월~24개월',
      '가입 금액': '100만 원 이상 1,000만 원 미만',
      '가입방법': '신한 SOL 앱',
    },
  },
  {
    id: 2,
    bank: '농협은행',
    title: '어쩌구저쩌구 적금',
    duration: '24개월',
    payment: '월 100만 원 납입',
    rate: '연 3.2%',
    date: '2025년 5월 20일',
    iconUrl: nonghyeoplogo,
    starred: false,
    details: {
      '상품 유형': '정기 예금',
      '특징': '농민 자녀 대상 혜택 포함 상품',
      '이자율': '기본 연 2.1%, 우대금리 최대 연 1.1%, 최고 연 3.2%',
      '가입 대상': '누구나',
      '가입 기간': '6개월~24개월',
      '가입 금액': '100만 원 이상',
      '가입방법': 'NH 앱',
    },
  },
  {
    id: 3,
    bank: '국민은행',
    title: '어쩌구저쩌구 적금',
    duration: '24개월',
    payment: '월 60만 원 납입',
    rate: '연 3.2%',
    date: '2025년 5월 20일',
    iconUrl: kookminlogo,
    starred: false,
    details: {
      '상품 유형': '정기 적금',
      '특징': '대학생 우대금리 포함',
      '이자율': '기본 연 1.9%, 우대금리 최대 연 1.3%, 최고 연 3.2%',
      '가입 대상': '대학생 및 일반',
      '가입 기간': '12개월~24개월',
      '가입 금액': '50만 원 이상',
      '가입방법': 'KB 스타뱅킹',
    },
  },
];

const ReportPage = () => {
  const [items, setItems] = useState(initialItems);
  const [expandedId, setExpandedId] = useState(null);

  const handleStarClick = (id) => {
    const originalOrder = [...items];
    const updated = originalOrder.map(item =>
      item.id === id ? { ...item, starred: !item.starred } : item
    );
    const starred = updated.filter(item => item.starred);
    const unstarred = updated.filter(item => !item.starred);
    const newList = [...starred, ...unstarred];
    setItems(newList);
  };

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };


  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden' }}>
      <div
        style={{
          width: 1140,
          height: 1024,
          padding: 42,
          left: 300,
          top: 0,
          position: 'absolute',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
        }}
      >
        <div style={{ fontSize: 28, fontFamily: 'Pretendard', fontWeight: 500 }}>최근 추천 내역</div>
        <div style={{ width: 840, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {items.map((item) => (
            <div key={item.id} style={{ width: '100%' }}>
              {/* 카드 본문 */}
              <div
                style={{
                  background: '#E7F1F8',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: '20px 30px 20px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, width: 725 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div
                      style={{ width: 50, height: 50, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => handleStarClick(item.id)}
                    >
                      {item.starred ? <FaStar color="#FFD700" size={24} /> : <FaRegStar color="#A0AEC0" size={24} />}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                      <div style={{ width: 40, height: 40 }}>
                        <img src={item.iconUrl} alt="bank" style={{ width: '100%', height: '100%' }} />
                      </div>
                      <div style={{ fontSize: 24, fontFamily: 'Pretendard', fontWeight: 500 }}>{item.bank} {item.title}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 20, color: '#308BC5', fontFamily: 'Pretendard', fontWeight: 600 }}>
                    {item.duration}  |  {item.payment}  |  {item.rate}
                  </div>
                  <div style={{ fontSize: 20, color: '#71BDEF', fontFamily: 'Pretendard', fontWeight: 500 }}>
                    Recommended on {item.date}
                  </div>
                </div>

                {/* 펼침 버튼 */}
                <div onClick={() => toggleExpand(item.id)} style={{ cursor: 'pointer' }}>
                  <FiChevronRight
                    size={20}
                    color="black"
                    style={{ transform: expandedId === item.id ? 'rotate(90deg)' : 'rotate(0deg)', transition: '0.2s' }}
                  />
                </div>
              </div>

              {/* 펼쳐진 상세 정보 */}
              {expandedId === item.id && item.details && (
                <div
                  style={{
                    background: '#F7FAFC',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    padding: '20px 100px 30px 145px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  {Object.entries(item.details).map(([label, value]) => (
                    <div key={label} style={{ fontSize: 20, fontWeight: 400, fontFamily: 'Pretendard' }}>
                      {label}: {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;