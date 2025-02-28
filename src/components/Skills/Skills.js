import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className='colorlib-skills' data-section='skills'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft'>
            <span className='heading-meta'>TECH SKILLS</span>
            <h2 className='colorlib-heading animate-box fadeInUp'>
              저는 지금 이것을 할 수 있습니다.
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 animate-box fadeInLeft'>
            <p>
              비전공자로서 IT에 처음 발을 디뎠지만, 부트캠프를 통해 체계적으로
              학습하며 빠르게 성장할 수 있었습니다.
            </p>

            <h3>부트캠프에서 학습한 내용</h3>
            <ul>
              <li>JavaScript 기반 풀스택 과정</li>
              <li>
                React를 중심으로 한 프론트엔드 교육 (Redux, Styled Components
                등)
              </li>
              <li>
                Node.js를 활용한 백엔드 교육 (Express, MySQL, Mongoose 등)
              </li>
            </ul>

            <h3>살린에서 담당한 주요 업무</h3>
            <ul>
              <li>
                <strong>API 개발:</strong> Nest.js를 기반으로 메타버스 서비스에
                필요한 주요 API를 설계 및 구현
              </li>
              <li>
                <strong>실시간 통신:</strong> Socket.io를 활용한 1:1 채팅 서비스
                개발 및 최적화
              </li>
              <li>
                <strong>인프라 관리:</strong> AWS 및 KT Cloud를 활용한 인프라
                구축 및 유지보수
              </li>
              <li>
                <strong>CI/CD 관리:</strong> GitLab CI/CD 파이프라인 설계 및
                유지보수
              </li>
              <li>
                <strong>OPEN AI:</strong> openAI에서 제공하는 기능, assistant,
                vectorStore등을 이용한 기능구현
              </li>
            </ul>

            <p>
              또한, WebGL 콘텐츠 배포를 위한 클라우드 스토리지 설정 및 최적화를
              담당하며, 메타버스 서비스를 위한 안정적인 환경을 구축했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
