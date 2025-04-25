// src/components/Projects/Projects.js
import React from 'react';
import PropTypes from 'prop-types';

import blog from '../../images/b-log.png';
import readyplay from '../../images/readyplay.png';
import studeaming from '../../images/studeaming.png';
import localo from '../../images/localo.png';
import gyeongbuk from '../../images/gyeongbuk.png';
import aisurvey from '../../images/aisurvey.png';
import aitalkerRss from '../../images/aitalkerRss.png';
import './Projects.css';

const Project = ({
  image,
  url,
  title,
  subtitle,
  description,
  links,
  animation,
}) => (
  <div
    className={`col-md-6 animate-box ${animation} animated`}
    data-animate-effect={animation}
  >
    <div className='project'>
      <img className='project-image' src={image} alt={title} />
      <div className='desc'>
        <div className='con'>
          <h3 className='project-title'>
            <a href={url} target='_blank' rel='noreferrer'>
              {title.startsWith('프로젝트')
                ? title
                : `프로젝트${title.startsWith('명') ? title : ': ' + title}`}
            </a>
          </h3>
          <p className='project-subtitle'>{subtitle}</p>
          <p className='project-description'>{description}</p>
          <div className='project-links'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='project-link'
              >
                <i className={link.icon || 'icon-data'}></i> {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  animation: PropTypes.string,
};

function Projects() {
  const projects = [
    {
      image: aitalkerRss,
      url: 'https://rss.mirrordays.com/',
      title: 'Aitalker Rss',
      subtitle: '매일 신문을 찾아보고, 트렌트를 파악하기 힘들다면? 검색하세요!',
      description:
        '각각의 언론사에서 제공하는 rss를, vector Store에 저장 저장된 데이터를 바탕으로, 요약정보를 출력하거나, 특정 키워드를 유저에게 보여줍니다.',
      links: [
        {
          url: 'https://rss.mirrordays.com/',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: aisurvey,
      url: 'https://aisurvey.mirrordays.com/',
      title: 'Aisurvey',
      subtitle:
        'openAi assistant를 사용해서, 설문조사를 만들어주는 챗봇 프로젝트',
      description:
        '매번 번거로운 설문조사를 만들어주는 기능 및 주제만 입력해도 거기에 맞는 설문조사 템플릿을 생성시켜줍니다.',
      links: [
        {
          url: 'https://aisurvey.mirrordays.com/',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: readyplay,
      url: 'https://www.readyplay.co.kr/',
      title: 'Readyplay',
      subtitle:
        '가상공간를통해, 공간에 구애받지않고 어디서든 만날수있는 메타버스 프로젝트',
      description:
        '메타버스 서비스를 제공하는 애플리케이션입니다. PC와 앱 두 가지 버전을 제공하며, 가상의 캐릭터를 통해 메타버스를 경험할 수 있습니다.',
      links: [
        {
          url: 'https://youtu.be/DWH8g6cnGw0?si=eQ8NZy7X9qOuikAT',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: localo,
      url: 'http://xn--2o2ba144o.com/',
      title: '명: localo',
      subtitle:
        '경상북도 창원시를 모티브로한, 가상공간 메타버스 프로젝트 직접 창원시를 방문하지않고, 실제 창원시를 구경하며 신선한 수산물을 구매할수있는 메타버스 프로젝트',
      description:
        '직접 어시장에 방문하지 않고, 가상공간을 통해 신선한 해산물을 구매할수있으며, 창원시를 모티브로한 가상공간을 통해, 생생한 현장감을 직접 느낄수있습니다.',
      links: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.Salin.Localo&pcampaignid=web_share&pli=1',
          text: '안드로이드 다운로드링크',
          icon: 'icon-data',
        },
        {
          url: 'https://apps.apple.com/kr/app/%EB%A1%9C%EC%BB%AC%EB%A1%9C/id6463846655',
          text: '아이폰 다운로드링크',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInRight',
    },
    {
      image: gyeongbuk,
      url: '',
      title: '명: 경북 메타포트',
      subtitle:
        '경상북도를 모티브로 한 가상공간 프로젝트 경상북도도청을 모티브로 하며, 직접 방문하지않고, 실제 경북도청을 구경하며, 여러가지 체험을 할 수있는 메타버스 프로젝트',
      description:
        '경북도청을 가상공간으로 구현하여, 실제와 비슷한 공간을 웹 브라우저로 구경할 수 있습니다. 그외 미니게임을 비롯하여, 여러가지 컨텐츠를 바탕으로 생생한 생동감을 느낄 수 있습니다.',
      links: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.salin.GBMeta&pcampaignid=web_share',
          text: '안드로이드 다운로드링크',
          icon: 'icon-data',
        },
        {
          url: 'https://gb.go.kr/metaport',
          text: '웹질 링크',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInRight',
    },
  ];

  const archivedProjects = [
    {
      image: blog,
      url: 'http://b-log.ml',
      title: '디지털과 아날로그 감성을 잇는 독서 기록서비스 (B-log)',
      subtitle: '(2021.11.04 - 2021.11.18) (사이드 프로젝트 종료)',
      description:
        '독서 기록 서비스. 어릴적 책을 읽던 시절이 지금에는 E-BOOK 형태로 변하게 되었습니다. 책장에 꽂힌 책들을 보며 무슨 책을 읽었는지 확인하던 그때의 감성을 E-BOOK은 느끼지 못합니다. 그렇기 때문에 이 웹페이지는 그런 감상을 느낄수있도록 E-BOOK 독서 기록 서비스를 제공합니다.',
      links: [
        {
          url: 'https://github.com/codestates/B-log',
          text: 'Project Github',
          icon: 'icon-eye',
        },
        {
          url: 'https://youtu.be/1y59VDkCj08',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInLeft',
    },
    {
      image: studeaming,
      url: 'http://studeaming.com/',
      title: '명: 누구나 쉽게 Study with me, 공부 스트리밍 플랫폼 Studeaming',
      subtitle: '(2021.11.20 - 2021.12.21) (사이드 프로젝트 종료)',
      description:
        '코로나 시국에 접어들게 되면서 다같이 모여 공부를 하거나, 스터디를 할수없는 시대가 되었습니다. 그러다보니 Study with me라는 트렌트가 유투브에서 유행을 하게되었고, 그런 트렌드에 맞춰 기획하게되었습니다. 유투브의 단점을 보완하고자 해당 기능인 스트리밍, 공부에만 충실할수있도록 만든 서비스입니다.',
      links: [
        {
          url: 'http://www.personalconnect.co.kr',
          text: 'Project Github',
          icon: 'icon-eye',
        },
        {
          url: 'https://deaguowl.github.io/pdf/connect.pdf',
          text: '구현 기능 상세보기',
          icon: 'icon-data',
        },
      ],
      animation: 'fadeInRight',
    },
  ];

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
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        {archivedProjects.map((project, index) => (
          <div className='row' key={`archived-${index}`}>
            <Project {...project} />
          </div>
        ))}

        <div className='row'>
          <div className='col-md-12 animate-box fadeInUp animated'>
            <p>
              <button className='btn btn-primary btn-lg btn-load-more' disabled>
                앞으로 더 많은 프로젝트가 추가될 예정입니다
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
