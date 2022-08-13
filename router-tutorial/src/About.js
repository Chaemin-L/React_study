import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail') === 'true';

  return (
    <div>
      <h1>소개</h1>
          <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
          {detail && <button onClick={()=>setSearchParams({detail:false})}>안보이게 하기</button>}
    </div>
  );
};

export default About;