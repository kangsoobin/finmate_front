// src/data/questionFlow.js
export const questionFlow = [
  {
    id: 'gender',
    type: 'button',
    question: '성별을 선택해주세요!',
    options: ['여성', '남성', '기타'],
  },
  {
    id: 'birthYear',
    type: 'text',
    question: '태어난 연도를 4자리 숫자로 알려주세요!',
  },
  {
    id: 'job',
    type: 'button',
    question: '지금 하는 일을 알려주세요. 최대 2개까지 선택할 수 있어요!',
    options: ['고등학생', '대학생', '직장인', '파트타이머', '프리랜서', '취업준비생', '주부', '학교 밖 청소년', '무직'],
    multiple: true,
    maxSelect: 2,
  },
];
