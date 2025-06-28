import React from 'react';
import './About.css';
import awsBadge from '../../images/aws.png';

function About() {
  return (
    <div>
      <section id='colorlib-hero' />
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box fadeInLeft animated'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <span className='heading-meta'>About Me</span>
                    <div className='heading-with-badge'>
                      <h2 className='colorlib-heading'>Backend Engineer</h2>
                      <img
                        src={awsBadge}
                        alt='AWS Certified Developer'
                        className='aws-badge-small'
                      />
                    </div>
                    <p>
                      <strong>안녕하세요. 백엔드 개발자 안민수입니다.</strong>
                    </p>
                    <p>
                      현재, (주) 살린이라는 회사에 입사해서, 백엔드 개발자로
                      근무하고있습니다. 회사내, 프로젝트에서 메인 백앤드로서,
                      api, socket 서버의 구축, aws 기반으로 인프라구축, openai를
                      활용한 ai프로젝트 진행등 서버와 인프라를 담당하고있습니다.
                      <br />
                      <br />
                      그외, 웹 페이지 개발중 express와 Mysql, JWT를 통해
                      데이터베이스를 구축해본 경험과, Socket.io를 이용한 라이브
                      스트리밍 사이트를 구현해본 경험이 있습니다.
                      <br />
                      <br />
                      빠르게 변하는 시대, 각광받고있는 새로운 기술들, 바뀌는
                      시대에 따라가기보다 그 시대를 제 손으로 만들어보고 싶다는
                      생각이 들었고 미련없이 하던일을 그만두고 IT업계에 발을
                      들이게 되었습니다. 처음 발을 내딛고 든 생각은 이전에 하던
                      일인 요리와 비슷하다고 생각했습니다.
                      <br />
                      <br />
                      요리에는 전체적인 흐름과 그 안에 세부적인 작업순서, 그리고
                      커뮤니케이션이 존재합니다.{' '}
                      <strong>
                        타 직군과 다르게 불을쓰고, 칼을쓰는 그런 위험에
                        직접적으로 마주하고, 코스 하나를 위해 각자 분담하고 있는
                        요리 진행상황을 보고하는 그런 커뮤니케이션, 그리고 모든
                        일과가 종료된 후 본인만의 독창적인 요리를 만들기 위해
                        노력했던 시간들
                      </strong>{' '}
                      이런 시간들을 뒤로하고 부트캠프 코드스테이츠라는 곳에
                      지원하게되었습니다. 처음 마주하는 검은 화면과, 윈도우가
                      아닌 새로운 운영체체 Ubuntu, 그리고 수많은 영어들 익숙하지
                      않았기에 당황도 했고 적응하는데 시간도 많이 걸렸습니다.
                      남들보다 시작점이 달랐기에 그만큼 더 노력이 필요하다고
                      생각되었고, 끊임없이 노력했습니다.
                      <br />
                      <br />그 노력을 통해 깨달은것은 마치 이 과정이 하나의
                      코스를 만드는 과정과 비슷하다는 사실이였습니다. 여러
                      사람이 모여 하나의 프로젝트를 위해 파트를 나눠가지며,
                      끊임없이 소통하고, 진행상황을 보고하며 완성품을 위해
                      달려가는 이 과정이 매우 흡사했습니다. 그러다보니 이 분야에
                      대해 매우 만족하며, 잘 맞다는 생각을 하게되었습니다.
                      <br />
                      <br />
                      <strong>
                        또한 코더가 아닌 개발자라는 말을 당당하게
                        말할수있을정로도 노력하고 발전하려고 합니다.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
