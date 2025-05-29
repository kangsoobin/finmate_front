import React from 'react';

const RecommendationItem = ({ item, isExpanded, onToggle }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* 상단 카드 */}
      <div
        style={{
          alignSelf: 'stretch',
          padding: '20px 30px 20px 20px',
          background: '#E7F1F8',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 20 }}>
          <img src={item.logo} alt="logo" style={{ width: 40, height: 40 }} />
          <div>
            <div style={{ fontSize: 24, fontWeight: 500, fontFamily: 'Pretendard' }}>{item.title}</div>
            <div style={{ fontSize: 20, fontWeight: 600, fontFamily: 'Pretendard', color: '#308BC5' }}>
              {item.summary}
            </div>
            <div style={{ fontSize: 20, fontWeight: 500, fontFamily: 'Pretendard', color: '#71BDEF' }}>
              {item.date}
            </div>
          </div>
        </div>

        {/* 펼침 버튼 */}
        <div
          onClick={onToggle}
          style={{
            width: 14.73,
            height: 8.36,
            transform: isExpanded ? 'rotate(270deg)' : 'rotate(90deg)',
            transformOrigin: 'top left',
            background: 'black',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* 펼쳐진 상세 영역 */}
      {isExpanded && (
        <div
          style={{
            padding: '20px 100px 30px 145px',
            background: '#F7FAFC',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {Object.entries(item.details).map(([label, value]) => (
            <div
              key={label}
              style={{
                fontSize: 20,
                fontWeight: 400,
                fontFamily: 'Pretendard',
                color: 'black',
              }}
            >
              {label}: {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationItem;
