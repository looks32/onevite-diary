import { useState } from 'react';
import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '끔찍함',
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = () => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const onChangeInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // 임시
  const emotionId = 1;
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          value={getStringedDate(input.createdDate)}
          type="date"
          name="createdDate"
          id=""
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrap">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea name="" id=""></textarea>
      </section>
      <section className="button_section">
        <Button text={'취소하기'} />
        <Button text={'작성완료'} type={'POSITIVE'} />
      </section>
    </div>
  );
};

export default Editor;
