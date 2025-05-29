import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import SelectableButton from './SelectableButton';
import { questionFlow } from '../data/questionFlow';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 질문 출력 (중복 방지)
  useEffect(() => {
    const current = questionFlow[currentQuestionIndex];
    if (!current) return;

    setMessages((prev) => {
      const alreadyAsked = prev.find(
        (msg) => msg.id === current.id && msg.type === 'bot'
      );
      if (alreadyAsked) return prev;

      return [
        ...prev,
        { type: 'bot', text: current.question, id: current.id }
      ];
    });
  }, [currentQuestionIndex]); // ✅ messages 제외!

  const handleTextAnswer = (input) => {
    const currentQuestion = questionFlow[currentQuestionIndex];
    setMessages((prev) => [...prev, { type: 'user', text: input }]);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: input }));
    setCurrentQuestionIndex((i) => i + 1);
  };

  const handleButtonAnswer = (selected) => {
    const currentQuestion = questionFlow[currentQuestionIndex];
    const isMultiple = currentQuestion.multiple;

    if (isMultiple) {
      const updated = answers[currentQuestion.id] || [];
      const alreadySelected = updated.includes(selected);
      const result = alreadySelected
        ? updated.filter((v) => v !== selected)
        : updated.length < (currentQuestion.maxSelect || 2)
          ? [...updated, selected]
          : updated;

      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: result }));
    } else {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selected }));
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot-buttons',
          options: currentQuestion.options,
          selected: [selected],
        },
        { type: 'user', text: selected }, // ⬅️ 말풍선을 뒤에 추가
      ]);
      setCurrentQuestionIndex((i) => i + 1);
    }
  };


  const handleMultipleSubmit = () => {
    const currentQuestion = questionFlow[currentQuestionIndex];
    const val = answers[currentQuestion.id];
    if (val?.length) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot-buttons',
          options: currentQuestion.options,
          selected: val,
        },
        { type: 'user', text: val.join(', ') },
      ]);

      setCurrentQuestionIndex((i) => i + 1);
    }
  };


  const currentQuestion = questionFlow[currentQuestionIndex];

  return (
    <div
      style={{
        paddingTop: 80,
        paddingLeft: 160,
        paddingRight: 160,
        paddingBottom: 200,
        height: 'calc(100vh - 40px)',
        overflowY: 'auto'
      }}
    >
      {/* 출력된 메시지들 */}
      {messages.map((msg, idx) => {
        if (msg.type === 'bot' || msg.type === 'user') {
          return <ChatBubble key={idx} type={msg.type} text={msg.text} />;
        }
        if (msg.type === 'bot-buttons') {
          return (
            <div
              key={idx}
              style={{
                marginTop: 16,
                marginBottom: 20,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10
              }}
            >
              {msg.options.map((opt) => (
                <SelectableButton
                  key={opt}
                  label={opt}
                  isSelected={msg.selected.includes(opt)}
                  disabled={true}
                />
              ))}
            </div>
          );
        }
        return null;
      })}

      {/* 현재 질문에 대한 선택지 */}
      {currentQuestion && currentQuestion.type === 'button' && (
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {currentQuestion.options.map((opt) => (
            <SelectableButton
              key={opt}
              label={opt}
              isSelected={
                currentQuestion.multiple
                  ? (answers[currentQuestion.id] || []).includes(opt)
                  : answers[currentQuestion.id] === opt
              }
              onClick={() => handleButtonAnswer(opt)}
            />
          ))}
          {currentQuestion.multiple && (
            <button
              onClick={handleMultipleSubmit}
              style={{
                marginTop: 10,
                padding: '8px 16px',
                background: '#308BC5',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontFamily: 'Pretendard',
                fontSize: 16
              }}
            >
              선택 완료
            </button>
          )}
        </div>
      )}

      {/* 텍스트 입력 */}
      <ChatInput onSend={handleTextAnswer} />
    </div>
  );
};

export default ChatBot;
