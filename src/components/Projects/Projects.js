import React from 'react';
import blog from '../../images/b-log.png';
import readyplay from '../../images/readyplay.png';
import studeaming from '../../images/studeaming.png';
import localo from '../../images/localo.png';
import gyeongbuk from '../../images/gyeongbuk.png';
import aisurvey from '../../images/aisurvey.png';
import aitalkerRss from '../../images/aitalkerRss.png';
import './Projects.css';

function Projects() {
  return (
    <section className='colorlib-about' data-section='projects'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div
            className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated'
            data-animate-effect='fadeInLeft'
          >
            <span className='heading-meta'>My Work</span>
            <h2 className='colorlib-heading animate-box fadeInUp animated'>
              Project
            </h2>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-6 animate-box fadeInLeft animated'
            data-animate-effect='fadeInLeft'
          >
            <div className='project'>
              <img src={aitalkerRss} />
              <div className='desc'>
                <div className='con'>
                  <h3>
                    <a
                      href='https://rss.mirrordays.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: '19px',
                        fontWeight: 'bold',
                        color: '#000080',
                      }}
                    >
                      프로젝트: Aitalker Rss
                      <br />
                      매일 신문을 찾아보고, 트렌트를 파악하기 힘들다면?
                      검색하세요!
                    </a>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: '#000000',
                    }}
                  >
                    각각의 언론사에서 제공하는 rss를, vector Store에 저장 저장된
                    데이터를 바탕으로, 요약정보를 출력하거나, 특정 키워드를
                    유저에게 보여줍니다.
                  </span>
                  <p className='icon'>
                    <span>
                      <a
                        href='https://rss.mirrordays.com/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>구현 기능 상세보기</strong>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-md-6 animate-box fadeInLeft animated'
            data-animate-effect='fadeInLeft'
          >
            <div className='project'>
              <img src={aisurvey} />
              <div className='desc'>
                <div className='con'>
                  <h3>
                    <a
                      href='https://aisurvey.mirrordays.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: '19px',
                        fontWeight: 'bold',
                        color: '#000080',
                      }}
                    >
                      프로젝트: Aisurvey
                      <br />
                      openAi assistant를 사용해서, 설문조사를 만들어주는 챗봇
                      프로젝트
                    </a>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: '#000000',
                    }}
                  >
                    매번 번거로운 설문조사를 만들어주는 기능 및 주제만 입력해도
                    거기에 맞는 설문조사 템플릿을 생성시켜줍니다.
                  </span>
                  <p className='icon'>
                    <span>
                      <a
                        href='https://aisurvey.mirrordays.com/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>구현 기능 상세보기</strong>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-md-6 animate-box fadeInLeft animated'
            data-animate-effect='fadeInLeft'
          >
            <div className='project'>
              <img src={readyplay} />
              <div className='desc'>
                <div className='con'>
                  <h3>
                    <a
                      href='https://www.readyplay.co.kr/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: '19px',
                        fontWeight: 'bold',
                        color: '#000080',
                      }}
                    >
                      프로젝트: Readyplay
                      <br />
                      가상공간를통해, 공간에 구애받지않고
                      <br />
                      어디서든 만날수있는 메타버스 프로젝트
                    </a>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: '#000000',
                    }}
                  >
                    메타버스 서비스를 제공하는 애플리케이션입니다. PC와 앱 두
                    가지 버전을 제공하며, 가상의 캐릭터를 통해 메타버스를 경험할
                    수 있습니다.
                  </span>
                  <p className='icon'>
                    <span>
                      <a
                        href='https://youtu.be/DWH8g6cnGw0?si=eQ8NZy7X9qOuikAT'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>구현 기능 상세보기</strong>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-md-6 animate-box fadeInRight animated'
            data-animate-effect='fadeInRight'
          >
            <div className='project'>
              <img src={localo} />
              <div className='desc'>
                <div className='con'>
                  <h3>
                    <a
                      href='http://xn--2o2ba144o.com/'
                      target='_blank'
                      rel='noreferrer'
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000080',
                      }}
                    >
                      프로젝트명: localo
                      <br />
                      경상북도 창원시를 모티브로한, 가상공간 메타버스 프로젝트{' '}
                      <br />
                      직접 창원시를 방문하지않고, 실제 창원시를 구경하며 신선한
                      수산물을 구매할수있는 메타버스 프로젝트
                    </a>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: '#000000',
                    }}
                  >
                    직접 어시장에 방문하지 않고, 가상공간을 통해 신선한 해산물을
                    구매할수있으며, 창원시를 모티브로한 가상공간을 통해, 생생한
                    현장감을 직접 느낄수있습니다.
                  </span>
                  <p className='icon'>
                    <span>
                      <a
                        href='https://play.google.com/store/apps/details?id=com.Salin.Localo&pcampaignid=web_share&pli=1'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>안드로이드 다운로드링크</strong>
                      </a>
                      <br />
                      <br />
                      <a
                        href='https://apps.apple.com/kr/app/%EB%A1%9C%EC%BB%AC%EB%A1%9C/id6463846655'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>아이폰 다운로드링크</strong>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-md-6 animate-box fadeInRight animated'
            data-animate-effect='fadeInRight'
          >
            <div className='project'>
              <img src={gyeongbuk} />
              <div className='desc'>
                <div className='con'>
                  <h3>
                    <a
                      target='_blank'
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000080',
                      }}
                    >
                      프로젝트명: 경북 메타포트
                      <br />
                      경상북도를 모티브로 한 가상공간 프로젝트 <br />
                      경상북도도청을 모티브로 하며, 직접 방문하지않고, 실제
                      경북도청을 구경하며,
                      <br />
                      여러가지 체험을 할 수있는 메타버스 프로젝트
                    </a>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: '#000000',
                    }}
                  >
                    경북도청을 가상공간으로 구현하여, 실제와 비슷한 공간을 웹
                    브라우저로 구경할 수 있습니다. 그외 미니게임을 비롯하여,
                    여러가지 컨텐츠를 바탕으로 생생한 생동감을 느낄 수 있습니다.
                  </span>
                  <p className='icon'>
                    <span>
                      <a
                        href='https://play.google.com/store/apps/details?id=com.salin.GBMeta&pcampaignid=web_share'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i>{' '}
                        <strong>안드로이드 다운로드링크</strong>
                      </a>
                    </span>
                    <span>
                      <a
                        href='https://gb.go.kr/metaport'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='icon-data'></i> <strong>웹질 링크</strong>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='col-md-6 animate-box fadeInLeft animated'
          data-animate-effect='fadeInLeft'
        >
          <div className='project'>
            <img src={blog} />
            <div className='desc'>
              <div className='con'>
                <h3>
                  <a href='http://b-log.ml' target='_blank' rel='noreferrer'>
                    프로젝트: 디지털과 아날로그 감성을 잇는 독서 기록서비스
                    (B-log) (2021.11.04 - 2021.11.18) ( 사이드 프로젝트 종료 )
                  </a>
                </h3>
                <span>
                  독서 기록 서비스. 어릴적 책을 읽던 시절이 지금에는 E-BOOK
                  형태로 변하게 되었습니다. 책장에 꽂힌 책들을 보며 무슨 책을
                  읽었는지 확인하던 그때의 감성을 E-BOOK은 느끼지 못합니다.
                  그렇기 때문에 이 웹페이지는 그런 감상을 느낄수있도록 E-BOOK
                  독서 기록 서비스를 제공합니다.
                </span>
                <p className='icon'>
                  <span>
                    <a
                      href='https://github.com/codestates/B-log'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='icon-eye'></i>{' '}
                      <strong>Project Github</strong>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://youtu.be/1y59VDkCj08'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='icon-data'></i>{' '}
                      <strong>구현 기능 상세보기</strong>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='col-md-6 animate-box fadeInRight animated'
          data-animate-effect='fadeInRight'
        >
          <div className='project'>
            <img src={studeaming} />
            <div className='desc'>
              <div className='con'>
                <h3>
                  <a
                    href='http://studeaming.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    프로젝트명: 누구나 쉽게 Study with me, 공부 스트리밍 플랫폼
                    Studeaming (2021.11.20 - 2021.12.21) ( 사이드 프로젝트 종료
                    )
                  </a>
                </h3>
                <span>
                  코로나 시국에 접어들게 되면서 다같이 모여 공부를 하거나,
                  스터디를 할수없는 시대가 되었습니다. 그러다보니 Study with
                  me라는 트렌트가 유투브에서 유행을 하게되었고, 그런 트렌드에
                  맞춰 기획하게되었습니다. 유투브의 단점을 보완하고자 해당
                  기능인 스트리밍, 공부에만 충실할수있도록 만든 서비스입니다.
                </span>
                <p className='icon'>
                  <span>
                    <a
                      href='http://www.personalconnect.co.kr'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='icon-eye'></i>{' '}
                      <strong>Project Github</strong>
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://deaguowl.github.io/pdf/connect.pdf'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='icon-data'></i>{' '}
                      <strong>구현 기능 상세보기</strong>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 animate-box fadeInUp animated'>
            <p>
              <a className='btn btn-primary btn-lg btn-load-more'>
                {' '}
                앞으로 더 많은 프로젝트가 추가될 예정입니다:
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
