/**
 * 포트폴리오 웹사이트 메인 컴포넌트
 * 
 * 이 파일은 포트폴리오 웹사이트의 전체 구조와 기능을 포함합니다.
 * React와 Framer Motion을 사용하여 애니메이션 효과가 있는 반응형 SPA를 구현했습니다.
 * 
 * 주요 기능:
 * 1. 다양한 섹션(소개, 경력, 기술 스택, 프로젝트 등) 구성
 * 2. 스크롤 기반 네비게이션 및 스타일 변경
 * 3. 프로젝트와 경력 항목에 대한 모달 팝업
 * 4. 연락처 정보 복사 기능
 * 5. 문서 다운로드 기능
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaAward, FaFileAlt, FaCogs, FaTimes, FaLink, FaCalendarAlt, FaTools, FaPhone, FaUsers, FaUserCircle, FaCertificate, FaCopy, FaCheck, FaBars } from 'react-icons/fa';
import { MdWork, MdSchool, MdAssignment } from 'react-icons/md';
import './App.css';
import ResumePdf from './김성민_이력서_2025_04_23.pdf';
import CoverLetterPdf from './김성민_자기소개서.pdf';
import CareerPdf from './경력기술서_김성민.pdf';
import ProfileImg from './나소개사진.jpg';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCareerProject, setSelectedCareerProject] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState({
    email: false,
    phone: false
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * 프로젝트 데이터
   * 각 프로젝트는 다음 속성을 가집니다:
   * - id: 고유 식별자
   * - projectId: DOM에서 사용할 ID
   * - title: 프로젝트 제목
   * - description: 간략한 설명
   * - tech: 사용된 기술 태그 배열
   * - period: 프로젝트 기간
   * - teamSize: 팀 구성 (해당되는 경우)
   * - myRole: 담당한 역할 (해당되는 경우)
   * - details: 상세 설명 항목 배열
   * - challenges: 직면한 도전 과제
   * - outcome: 프로젝트 성과
   */
  const projects = [
    {
      id: 1,
      projectId: "daily-quote",
      title: '하루 한문장 명언 앱',
      description: '매일 새로운 명언을 제공하는 안드로이드 앱. AAC MVVM 아키텍처와 Spring Boot 백엔드 구현',
      tech: ['Kotlin', 'Android', 'MVVM', 'Hilt', 'Navigation', 'Spring Boot', 'AWS'],
      period: '2025.04 ~ 현재',
      details: [
        'Android Architecture Component를 활용한 MVVM 패턴 구현',
        'Hilt를 이용한 의존성 주입으로 테스트 용이성 확보',
        'Jetpack Navigation을 활용한 단일 액티비티 구조 설계',
        'Spring Boot를 이용한 RESTful API 백엔드 개발',
        'AWS EC2 인스턴스에 백엔드 서버 배포',
        '사용자가 선호하는 명언 저장 및 공유 기능 구현',
        '상대방에게 명언 추천 기능 개발'
      ],
      challenges: '매일 다른 명언을 제공하면서도 사용자 취향을 반영하는 시스템 설계가 가장 큰 도전이었습니다. 또한 오프라인 모드에서도 앱 사용이 가능하도록 Room 데이터베이스를 활용한 로컬 캐싱 시스템을 구현했습니다.',
      outcome: '개인 프로젝트로 안드로이드 앱 개발부터 백엔드 서버 구축까지 풀스택 개발 경험을 쌓을 수 있었습니다. MVVM 패턴과 클린 아키텍처를 실제 프로젝트에 적용해 보면서 아키텍처 설계 역량을 향상시켰습니다.'
    },
    {
      id: 7,
      projectId: "random-alcohol",
      title: '랜덤 폭탄주 제조기(Random Alcohol Machine)',
      description: '마이크로컨트롤러와 서보모터를 활용한 자동 음료 혼합 시스템 개발. 스마트폰 앱으로 원격 제어 가능한 인터페이스 구현',
      tech: ['Android', 'Arduino', 'Bluetooth', 'Java'],
      period: '2020.09 ~ 2020.11',
      teamSize: '총 6명 (Arduino 개발 3명, Android 개발 3명)',
      myRole: 'Android 앱 개발 담당',
      details: [
        '아두이노 기반의 자동 음료 혼합 시스템 개발',
        '블루투스 모듈을 통한 스마트폰 앱 연동',
        '서보모터를 활용한 정밀한 음료 양 제어',
        '랜덤 알고리즘을 적용한 다양한 혼합 패턴 제공',
        'UI/UX 디자인 및 안드로이드 앱 개발',
        'LINC 3.0 지원 산학 작품 경진대회 장려상 수상',
        '팀 구성: Arduino 개발 3명, Android 앱 개발 3명 (본인은 Android 앱 개발 담당)',
        '✅ 음료 자동 혼합 시스템 관련 특허 출원 및 등록 (특허번호: 10-2358791)'
      ],
      challenges: '안드로이드와 아두이노 간 블루투스 통신 구현이 가장 큰 도전 과제였습니다. 특히 HC-06 블루투스 모듈과 안드로이드 기기 간의 시리얼 통신 프로토콜을 설계하고, 실시간으로 명령을 전송하면서 응답을 처리하는 로직 구현에 어려움이 있었습니다. 통신 중 데이터 손실을 방지하기 위한 체크섬 알고리즘을 개발했고, 블루투스 연결 상태를 지속적으로 모니터링하여 연결 끊김 시 자동으로 재연결을 시도하는 메커니즘을 구현했습니다. 또한 여러 안드로이드 버전에서의 블루투스 API 차이를 고려한 코드를 작성하여 다양한 기기에서의 호환성을 확보했습니다.',
      outcome: '사용자가 스마트폰으로 손쉽게 제어할 수 있는 자동 음료 혼합 시스템을 성공적으로 개발했습니다. 이 프로젝트를 통해 하드웨어와 소프트웨어의 통합적 이해를 높였으며, 관련 기술로 특허 등록까지 완료했습니다.'
    },
    {
      id: 9,
      projectId: "portfolio-website",
      title: '포트폴리오 웹사이트',
      description: 'React와 Framer Motion을 사용하여 애니메이션 효과가 있는 반응형 포트폴리오 웹사이트 개발. 다크모드 지원 및 프로젝트 필터링 기능 구현',
      tech: ['React', 'JavaScript', 'Framer Motion', 'CSS'],
      period: '2025.03 ~ 현재',
      details: [
        'React 기반의 SPA(Single Page Application) 구현',
        'Framer Motion을 활용한 부드러운 애니메이션 효과',
        '반응형 디자인으로 모든 디바이스에서 최적화된 경험 제공',
        '다크모드/라이트모드 테마 전환 기능',
        '프로젝트 필터링 및 검색 기능',
        '최신 웹 개발 트렌드를 반영한 UI/UX 디자인'
      ],
      challenges: '다양한 애니메이션 효과와 반응형 디자인을 구현하면서 성능 최적화가 과제였습니다. 컴포넌트 최적화와 lazy loading을 통해 성능 문제를 해결했습니다.',
      outcome: '직관적이고 인터랙티브한 포트폴리오 웹사이트를 개발하여 개인 브랜딩에 활용하고 있습니다. 이 프로젝트를 통해 모던 프론트엔드 개발 기술을 심화할 수 있었습니다.'
    }
  ];

  /**
   * 기술 스택 데이터
   * 각 기술 그룹은 다음 속성을 가집니다:
   * - category: 기술 카테고리 이름
   * - items: 해당 카테고리의 기술 목록 배열(각 항목은 name과 proficiency 포함)
   */
  const skills = [
    { 
      category: "언어", 
      items: [
        { name: "Kotlin", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "Dart", proficiency: 75 },
        { name: "C", proficiency: 65 }
      ] 
    },
    { 
      category: "안드로이드", 
      items: [
        { name: "Jetpack Compose", proficiency: 90 },
        { name: "MVVM", proficiency: 90 },
        { name: "Clean Architecture", proficiency: 85 },
        { name: "Hilt", proficiency: 85 },
        { name: "Room", proficiency: 80 },
        { name: "Retrofit", proficiency: 85 },
        { name: "CameraX", proficiency: 75 },
        { name: "OpenCV", proficiency: 70 }
      ] 
    },
    { 
      category: "크로스 플랫폼", 
      items: [
        { name: "Flutter", proficiency: 75 }
      ] 
    },
    { 
      category: "백엔드", 
      items: [
        { name: "Spring Boot", proficiency: 75 },
        { name: "JPA", proficiency: 70 },
        { name: "AWS", proficiency: 65 },
        { name: "Linux CentOS", proficiency: 60 }
      ] 
    },
    { 
      category: "협업 도구", 
      items: [
        { name: "Git", proficiency: 85 },
        { name: "GitHub", proficiency: 85 },
        { name: "Flow", proficiency: 80 },
        { name: "Notion", proficiency: 90 },
        { name: "Figma", proficiency: 75 }
      ] 
    },
    { 
      category: "AI 도구", 
      items: [
        { name: "MCP", proficiency: 50 },
        { name: "ChatGPT", proficiency: 85 }
      ] 
    }
  ];

  /**
   * 수상 내역 데이터
   * 각 수상 내역은 다음 속성을 가집니다:
   * - title: 수상 내역 제목
   * - year: 수상 연도
   * - relatedProject: 관련 프로젝트 ID (해당되는 경우)
   */
  const awards = [
    { title: "교내 취창업 경진대회 대상", year: "2019년 상반기" },
    { title: "교내 취창업 경진대회 최우수상", year: "2019년 하반기" },
    { title: "교내 캡스톤 경진대회 우수상", year: "2020년 하반기" },
    { title: "LINC 3.0 지원 산학 작품 경진대회 장려상", year: "2023년 11월", relatedProject: "random-alcohol" }
  ];

  /**
   * 경력 프로젝트 데이터
   * 각 경력 프로젝트는 다음 속성을 가집니다:
   * - id: 고유 식별자
   * - title: 프로젝트 제목
   * - company: 프로젝트를 수행한 회사
   * - period: 프로젝트 기간
   * - description: 간략한 설명
   * - details: 상세 설명
   */
  const careerProjects = [
    {
      id: 1,
      title: 'JAVA → Kotlin 클린아키텍처 마이그레이션',
      company: '케이사인(KSIGN)',
      period: '2025.03 - 2025.03',
      description: '전력거래소 OTP + FIDO 통합앱 개발 및 Kotlin 마이그레이션',
      details: '기존 Java 기반의 전력거래소 OTP + FIDO 통합 보안 솔루션 앱을 Kotlin 기반으로 전면 마이그레이션하고, Clean Architecture 구조를 도입하여 계층별 책임을 분리하였습니다. Hilt를 활용한 의존성 주입, Room 기반 로컬 데이터 저장소 구성, Jetpack Compose를 이용한 UI 재구성을 통해 코드의 유지보수성과 확장성을 크게 향상시켰습니다.'
    },
    {
      id: 2,
      title: 'DeepPass - 공통 인증 솔루션 앱 개발',
      company: '케이사인(KSIGN)',
      period: '2025.01 - 2025.04',
      description: 'OTP와 FIDO 기반의 보안 인증 솔루션',
      details: 'OTP와 FIDO 기반의 보안 인증 솔루션 \'DeepPass\'를 Flutter로 개발하여 Android와 iOS 모두를 지원하는 크로스플랫폼 앱으로 구축하였습니다. 앱 내에서 패턴, PIN, 생체인증 등의 다양한 인증 수단을 통합 제공하며, 공통 인증 UX를 적용하여 다양한 서비스 환경에서도 일관된 사용자 경험을 제공할 수 있도록 설계하였습니다. 성과: 하나의 코드베이스로 양 플랫폼을 대응하여 개발 효율성 향상, 공통 인증 시스템 도입을 통해 FIDO 인증 시간 개선'
    },
    {
      id: 3,
      title: 'OTP 앱 개발',
      company: '케이사인(KSIGN)',
      period: '2024.12 - 2025.03',
      description: '삼천리 OTP 앱 개발',
      details: 'HMAC 기반 TOTP(Time-based One-Time Password) 알고리즘을 활용하여 일회용 비밀번호 생성 로직을 구현하였습니다. RFC 6238 표준을 참고하여 시간 기반의 시크릿 키와 현재 타임스탬프를 조합해 OTP를 생성하고, 이를 서버와 동기화하여 인증 기능을 제공하였습니다. 또한 보안 강화를 위해 코드 난독화 및 Firebase Crashlytics를 통한 실시간 오류 추적 기능을 도입하고, Google Play Store 배포 시 안정성과 보안성을 확보하였습니다.'
    },
    {
      id: 4,
      title: '타겟 SDK 34 대응',
      company: '케이사인(KSIGN)',
      period: '2025.01 - 2025.02',
      description: '안드로이드 앱 Android 14 대응',
      details: '안드로이드 보안 솔루션을 TargetSdk 34(Android 14)에 맞춰 대응하였습니다. Android 14의 보안 정책 강화에 따라 Foreground Service 설행 조건 변경, 암시적 인텐트의 명시적 전환 요구 사항, ActivityNotFoundException 발생 가능성 등의 이슈를 해결하였습니다.'
    },
    {
      id: 5,
      title: 'SAA(Single Activity Architecture) 샘플프로젝트 개발',
      company: '웹케시(Webcash)',
      period: '2023.07 - 2023.08',
      description: '안드로이드 아키텍처 및 네비게이션 샘플 프로젝트',
      details: 'Single Activity Architecture(SAA) 기반의 샘플 프로젝트를 개발하고, 도입 방법 및 화면 구성 원리에 대한 내부 가이드 문서를 작성하여 팀 내 개발 표준을 수립하였습니다. 또한 Jetpack Navigation 및 Jetpack Navigation with Compose를 활용한 샘플 프로젝트를 각각 별도로 구현하고, 화면 간 이동 방식과 Back Stack 관리에 대한 가이드를 제공했습니다.'
    },
    {
      id: 6,
      title: 'OPENCV 를 이용한 영수증 문자 인식',
      company: '웹케시(Webcash)',
      period: '2023.05 - 2023.06',
      description: '영수증 인식 모듈 개발',
      details: 'OpenCV의 Canny Edge Detection을 활용해 영수증 외곽선을 검출하고, Contour 분석 및 투영 변환(Perspective Transform)을 통해 촬영 각도에 따른 왜곡을 보정하였습니다. 이후 Adaptive Thresholding을 적용하여 문자 대비를 강화한 뒤, 전처리된 이미지를 딥러닝 기반 OCR 엔진에 전달하여 영수증 내 문자 정보를 정밀하게 추출하였습니다.'
    },
    {
      id: 7,
      title: 'Jetpack Compose 를 이용한UI 라이브러리 제작',
      company: '웹케시(Webcash)',
      period: '2023.01 - 2023.04',
      description: '공통 UI 컴포넌트 라이브러리 개발',
      details: 'LazyColumn, LazyRow 기반 공통 리스트, 히스토그램 차트, 탭 레이아웃, WheelPicker 팝업 등을 모듈화하여 스마트기술부의 다양한 앱에서 재사용 가능한 UI 컴포넌트로 개발하였습니다. 또한 로딩 애니메이션과 화면 전환 애니메이션을 모듈화함으로써 UI 일관성을 확보하고 개발 생산성을 향상시켰습니다. 성과: 공통 컴포넌트 도입으로 개발 시간 약 30% 이상 단축, 유지보수 편의성 및 UI 품질 향상'
    },
    {
      id: 8,
      title: '경리나라 모바일 UI 개선, 사용자 경험 개선 및 앱 리뉴얼',
      company: '웹케시(Webcash)',
      period: '2022.09 - 2022.12',
      description: '경리나라 모바일 앱 UI/UX 개선',
      details: 'Jetpack Compose를 활용하여 경리나라 모바일 앱 UI를 전면 리뉴얼하고, 사용자 흐름에 맞춘 레이아웃 재구성을 통해 사용자 경험(UX)을 개선하였습니다. 커스텀 스크롤바, 페이지네이션 등 공통 UI 컴포넌트를 도입하여 화면 구성의 일관성을 확보하고, 중복 코드를 제거함으로써 개발 생산성을 향상시켰습니다. 화면 전환 속도 개선 및 성능 최적화를 통해 앱 반응성 향상, 공통 컴포넌트 도입으로 전체 개발 시간 단축 효과를 얻었습니다.'
    },
    {
      id: 9,
      title: '웹케시 그룹 상품 TargetSdk 31 상향',
      company: '웹케시(Webcash)',
      period: '2022.07 - 2022.08',
      description: 'Android 12 대응 작업',
      details: 'Android 12 (TargetSdk 31) 대응을 위해 주요 변경사항(PendingIntent 명시적 플래그 요구, exported 필수 지정, 백그라운드 위치 권한 처리 등)을 정리한 내부 가이드를 작성하였습니다. 이를 기반으로 웹케시 그룹의 주요 앱(경리나라, 인하우스뱅크 등)에 TargetSdk 31을 적용하고, 빌드 오류 및 런타임 이슈를 사전 점검하여 안정적인 앱 배포를 지원하였습니다. 최신 보안 정책과 권한 체계에 맞춘 개발 환경 정비로 유지보수성을 강화하였습니다.'
    },
    {
      id: 10,
      title: '인하우스 뱅크 모바일 보고서, 이상거래탐지, 대결관리 등 신규 메뉴 추가 개발',
      company: '웹케시(Webcash)',
      period: '2022.04 - 2022.06',
      description: '금융 앱 기능 확장 개발',
      details: '인하우스 뱅크 앱에 보고서, 이상거래탐지, 대결관리 등 신규 메뉴를 추가 개발하였습니다. 특히 이상거래탐지 보고서를 모바일에서도 열람할 수 있도록 개선하여 사용자 접근성과 경험을 향상시켰으며, 기존 ID/Password 인증 방식 대신 OTP 및 최초 사용자 등록 인증 절차를 도입하여 보안 수준을 강화하였습니다. 이를 통해 기업 고객 대상의 모바일 보안성과 실시간 보고 기능을 확보하였습니다.'
    }
  ];

  /**
   * 자격증 데이터
   * 각 자격증은 다음 속성을 가집니다:
   * - name: 자격증 이름
   * - issuer: 발급 기관
   * - date: 취득 날짜
   * - validUntil: 유효 기간 (해당되는 경우)
   * - credentialId: 자격증 ID (해당되는 경우)
   * - description: 자격증에 대한 설명 또는 중요성
   * - skills: 자격증 관련 기술/능력
   * - image: 자격증 이미지(옵션)
   */
  const certifications = [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2024년 06월",
      description: "소프트웨어 개발 및 데이터베이스 구축, 네트워크 및 보안 관련 국가공인 자격증"
    }
  ];

  /**
   * 스크롤 이벤트 처리
   * 일정 스크롤 위치에 도달하면 네비게이션 메뉴 스타일 변경
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * 텍스트 복사 기능
   * 이메일이나 전화번호를 클립보드에 복사
   * @param {string} text - 복사할 텍스트
   * @param {string} type - 복사 유형 ('email' 또는 'phone')
   */
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess({...copySuccess, [type]: true});
      
      // 3초 후 성공 메시지 초기화
      setTimeout(() => {
        setCopySuccess({...copySuccess, [type]: false});
      }, 3000);
    });
  };

  /**
   * 프로젝트 모달 열기
   * @param {Object} project - 표시할 프로젝트 객체
   */
  const openModal = (project) => {
    setSelectedProject(project);
    // 모달 스크롤 상단으로 이동
    setTimeout(() => {
      const modalElement = document.querySelector('.project-modal');
      if (modalElement) {
        modalElement.scrollTop = 0;
      }
    }, 50);
  };

  /**
   * 프로젝트 모달 닫기
   */
  const closeModal = () => {
    setSelectedProject(null);
  };

  /**
   * 경력 프로젝트 모달 열기
   * @param {Object} project - 표시할 경력 프로젝트 객체
   */
  const openCareerModal = (project) => {
    setSelectedCareerProject(project);
    // 모달 스크롤 상단으로 이동
    setTimeout(() => {
      const modalElement = document.querySelector('.career-modal');
      if (modalElement) {
        modalElement.scrollTop = 0;
      }
    }, 50);
  };

  /**
   * 경력 프로젝트 모달 닫기
   */
  const closeCareerModal = () => {
    setSelectedCareerProject(null);
  };

  /**
   * 자격증 모달 열기
   * @param {Object} certification - 표시할 자격증 객체
   */
  const openCertificationModal = (certification) => {
    setSelectedCertification(certification);
    // 모달 스크롤 상단으로 이동
    setTimeout(() => {
      const modalElement = document.querySelector('.certification-modal');
      if (modalElement) {
        modalElement.scrollTop = 0;
      }
    }, 50);
  };

  /**
   * 자격증 모달 닫기
   */
  const closeCertificationModal = () => {
    setSelectedCertification(null);
  };

  /**
   * 모바일 메뉴 토글
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * 모바일 메뉴 아이템 클릭 시 메뉴 닫기
   */
  const handleMobileMenuItemClick = (e, sectionId) => {
    scrollToSection(e, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* 헤더 섹션 - 이름과 소개 문구, 소셜 링크 */}
      <motion.header 
        className="App-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          안녕하세요, 김성민입니다 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="header-subtitle"
        >
          AI 활용 시대, 발맞춰가는 안드로이드 & 플러터 개발자
        </motion.p>
        <div className="social-icons">
          <motion.a href="https://github.com/minfrank35" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.header>

      {/* 네비게이션 메뉴 - 스크롤에 따라 스타일 변경 */}
      <motion.nav 
        className={`nav-menu ${scrolled ? 'scrolled' : ''}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
        <ul className={mobileMenuOpen ? 'mobile-active' : ''}>
          <li><a href="#intro" onClick={(e) => handleMobileMenuItemClick(e, 'intro')}>소개</a></li>
          <li><a href="#experience" onClick={(e) => handleMobileMenuItemClick(e, 'experience')}>경력</a></li>
          <li><a href="#skills" onClick={(e) => handleMobileMenuItemClick(e, 'skills')}>기술 스택</a></li>
          <li><a href="#education" onClick={(e) => handleMobileMenuItemClick(e, 'education')}>학력</a></li>
          <li><a href="#certifications" onClick={(e) => handleMobileMenuItemClick(e, 'certifications')}>자격증</a></li>
          <li><a href="#awards" onClick={(e) => handleMobileMenuItemClick(e, 'awards')}>수상</a></li>
          <li><a href="#projects" onClick={(e) => handleMobileMenuItemClick(e, 'projects')}>프로젝트</a></li>
          <li><a href="#strengths" onClick={(e) => handleMobileMenuItemClick(e, 'strengths')}>역량</a></li>
          <li><a href="#philosophy" onClick={(e) => handleMobileMenuItemClick(e, 'philosophy')}>개발 철학</a></li>
          <li><a href="#contact" onClick={(e) => handleMobileMenuItemClick(e, 'contact')}>연락처</a></li>
        </ul>
      </motion.nav>

      {/* 모바일 메뉴 오버레이 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <main>
        {/* 자기소개 섹션 */}
        <motion.section 
          id="intro"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="section-title">
            <FaUser className="section-icon" />
            <h2>나를 소개합니다</h2>
          </div>
          <div className="intro-content">
            <div className="intro-text">
              <p>
                <strong>꼼꼼한 테스트와 효율적인 일정 관리</strong>를 중요시하는 안드로이드 개발자입니다.
                경력 3년 차, 보안 솔루션부터 금융 서비스까지 다양한 분야의 앱을 개발하며 <strong>데드라인 내 책임감 있는 결과물 제출</strong>을 최우선으로 합니다.
                <strong>Jetpack Compose와 Clean Architecture</strong>를 활용해 개발 시간을 단축하고 코드 유지보수성을 높이는 데 집중합니다.
                빠르고 정확한 일처리와 철저한 테스트로 <strong>안정적인 앱 개발</strong>을 보장하는 개발자입니다.
              </p>
              
              {/* 문서 다운로드 링크 */}
              <div className="documents-container">
                <motion.a 
                  href={ResumePdf} 
                  download="김성민_이력서_2025_04_23.pdf"
                  className="document-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt className="document-icon" />
                  <span>이력서</span>
                </motion.a>
                <motion.a 
                  href={CoverLetterPdf} 
                  download="김성민_자기소개서.pdf"
                  className="document-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt className="document-icon" />
                  <span>자기소개서</span>
                </motion.a>
                <motion.a 
                  href={CareerPdf} 
                  download="경력기술서_김성민.pdf"
                  className="document-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileAlt className="document-icon" />
                  <span>경력기술서</span>
                </motion.a>
              </div>
            </div>
            {/* 프로필 이미지 */}
            <div className="profile-image-container">
              <motion.img 
                src={ProfileImg} 
                alt="김성민 프로필" 
                className="profile-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* 개발자로서의 철학을 담은 인용구 */}
          <blockquote className="quote">
            "개발한 앱을 내 손 안의 디바이스에서 바로 확인할 수 있는 즉각적인 피드백이 모바일 개발의 매력입니다. 
            AI 시대에는 단순한 코드 작성자가 아닌, 전체적인 도메인과 문제해결능력을 두루 갖춘 사람이 되고자 합니다. 안드로이드에만 국한되지 않고 iOS, 다양한 기술 영역을 탐구하며 넓은 시야를 키우고 있어요!"
          </blockquote>

          {/* 간략한 연락처 정보 */}
          <div className="contact-info-brief">
            <p><strong>이메일</strong><br />minfrank35@gmail.com</p>
            <p><strong>연락처</strong><br />010-2486-3729</p>
            <p><strong>위치</strong><br />경기도 의왕시</p>
            <p><strong>생년월일</strong><br />2000.07.07</p>
          </div>
        </motion.section>

        {/* 경력 섹션 - 회사별 프로젝트 카드 형식으로 구성 */}
        <motion.section
          id="experience"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <div className="section-title">
            <MdWork className="section-icon" />
            <h2>경력</h2>
          </div>
          
          {/* 현재 회사 - 케이사인 */}
          <div className="company-section">
            <h3 className="company-name">
              <span className="current-badge">현재</span> 케이사인(KSIGN), 보안솔루션 회사
            </h3>
            <p className="job-title">무선보안개발팀 주임연구원</p>
            <p className="period">2024년 12월 - 현재</p>
            
            {/* 케이사인에서 진행한 프로젝트 목록 */}
            <div className="career-projects-grid">
              {careerProjects.filter(project => project.company === "케이사인(KSIGN)").map(project => (
                <motion.div 
                  key={project.id}
                  className="career-project-card"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                  onClick={() => openCareerModal(project)}
                >
                  <div className="project-header">
                    <div className="project-period">{project.period}</div>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-link">자세히 보기 →</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 이전 회사 - 웹케시 */}
          <div className="company-section">
            <h3 className="company-name">웹케시(Webcash), B2B 뱅크 서비스 회사</h3>
            <p className="job-title">R&D 센터 스마트기술부 주임(병특)</p>
            <p className="period">2021년 10월 - 2023년 9월</p>
            
            {/* 웹케시에서 진행한 프로젝트 목록 */}
            <div className="career-projects-grid">
              {careerProjects.filter(project => project.company === "웹케시(Webcash)").map(project => (
                <motion.div 
                  key={project.id}
                  className="career-project-card"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}
                  onClick={() => openCareerModal(project)}
                >
                  <div className="project-header">
                    <div className="project-period">{project.period}</div>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-link">자세히 보기 →</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 경력 주요 성과 요약 */}
          <div className="career-summary">
            <h3>주요 성과</h3>
            <ul>
              <li>OTP/FIDO 기반 보안 앱 개발, Android 및 iOS 지원 확대</li>
              <li>Jetpack Compose 활용 공통 UI 라이브러리 개발로 개발시간 30% 단축</li>
              <li>OpenCV 활용 영수증 인식 모듈 정확도 향상</li>
              <li>Android 최신 SDK 대응으로 앱 보안성 강화</li>
              <li>스크래핑 지원 서버 솔루션 특허 출원 (출원번호: 1020220166530)</li>
              <li>Clean Architecture 도입으로 코드 유지보수성 향상</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="section-title">
            <FaCogs className="section-icon" />
            <h2>기술 스택</h2>
          </div>
          <div className="skills-container">
            {skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skills">
                  {skillGroup.items.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <motion.div 
                          className="skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          style={{
                            background: `linear-gradient(90deg, 
                              rgba(64, 93, 230, 1) ${skill.proficiency * 0.2}%, 
                              rgba(88, 81, 219, 1) ${skill.proficiency * 0.5}%, 
                              rgba(131, 58, 180, 1) ${skill.proficiency}%)`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="section-title">
            <FaGraduationCap className="section-icon" />
            <h2>학력</h2>
          </div>
          <div className="education-container">
            <div className="education-item">
              <h3>신라대학교</h3>
              <p className="department">컴퓨터소프트웨어공학부</p>
              <p className="period">2019년 3월 - 2025년 2월 (졸업)</p>
            </div>
            <div className="education-item">
              <h3>장유고등학교</h3>
              <p className="period">2016년 3월 - 2019년 2월 (졸업)</p>
            </div>
          </div>
        </motion.section>

        {/* 자격증 섹션 */}
        <motion.section
          id="certifications"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-title">
            <FaCertificate className="section-icon" />
            <h2>자격증</h2>
          </div>
          <div className="certifications-container">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-item"
                variants={fadeIn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openCertificationModal(cert)}
              >
                <div className="certification-content">
                  <h3>{cert.name}</h3>
                  <div className="certification-meta">
                    <p className="certification-issuer">
                      <FaAward /> {cert.issuer}
                    </p>
                    <p className="certification-date">
                      <FaCalendarAlt /> {cert.date}
                      {cert.validUntil && ` - ${cert.validUntil}`}
                    </p>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                  <div className="view-details-link">
                    상세 정보 보기 <FaLink className="details-icon" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="awards"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          <div className="section-title">
            <FaAward className="section-icon" />
            <h2>수상 내역</h2>
          </div>
          <div className="awards-container">
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                className="award-item"
                whileHover={{ scale: 1.02 }}
                onClick={award.relatedProject ? (e) => {
                  const projectElement = document.getElementById(award.relatedProject);
                  if (projectElement) {
                    projectElement.scrollIntoView({ behavior: 'smooth' });
                    projectElement.classList.add('highlight-project');
                    setTimeout(() => {
                      projectElement.classList.remove('highlight-project');
                    }, 2000);
                  }
                } : undefined}
                style={award.relatedProject ? { cursor: 'pointer' } : {}}
              >
                <div className="award-year">{award.year}</div>
                <div className="award-title">
                  {award.title}
                  {award.relatedProject && (
                    <span className="award-link-icon" title="관련 프로젝트로 이동">🔗</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="projects"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <div className="section-title">
            <FaCode className="section-icon" />
            <h2>개인 프로젝트</h2>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <motion.div 
                key={project.id} 
                id={project.projectId}
                className="project-card"
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-period">{project.period}</div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <motion.button
                  className="project-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                >
                  자세히 보기
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="strengths"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <div className="section-title">
            <MdAssignment className="section-icon" />
            <h2>역량 및 강점</h2>
          </div>
          <div className="strengths-container">
            <div className="strength-item">
              <h3>프로젝트 관리</h3>
              <p>WBS를 엑셀로 작성하여 효율적인 일정관리 가능</p>
            </div>
            <div className="strength-item">
              <h3>UI/UX 개발</h3>
              <p>Android Studio + Figma + MCP를 통한 디자인부터 개발까지 원활한 진행</p>
            </div>
            <div className="strength-item">
              <h3>크로스 플랫폼 개발</h3>
              <p>Flutter를 활용한 Android, iOS 앱 개발 경험</p>
            </div>
            <div className="strength-item">
              <h3>고급 안드로이드 개발</h3>
              <p>Hilt, Room, Navigation, Jetpack Compose, OpenCV, Clean Architecture 등 활용 능력</p>
            </div>
            <div className="strength-item">
              <h3>배포 및 관리</h3>
              <p>Google Play Store 출시부터 관리형 앱 게시까지 전 과정 숙지</p>
            </div>
            <div className="strength-item">
              <h3>서버 관리</h3>
              <p>AWS를 활용한 리눅스 환경에서 Spring Boot 배포, 서버 구성 가능</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="philosophy"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className="section-title">
            <FaBriefcase className="section-icon" />
            <h2>개발자로서의 마인드</h2>
          </div>
          <div className="philosophy-content">
            <p>AI 시대에 개발자로 살아남기 위한 저만의 두 가지 무기를 소개합니다:</p>
            <ol>
              <li>
                <strong>문제 발견 창의력 🔍</strong>
                <p>단순한 코드 작성자가 아닌, 전체적인 도메인과 문제해결능력을 두루 갖춘 사람이 되고자 합니다. 안드로이드에만 국한되지 않고 iOS, 다양한 기술 영역을 탐구하며 넓은 시야를 키우고 있어요!</p>
              </li>
              <li>
                <strong>효과적인 의사소통 능력 💬</strong>
                <p>기술적 지식만큼 중요한 것은 그것을 제대로 전달하는 능력입니다. 복잡한 개념도 쉽게 설명하고, 팀원들과 효율적으로 협업하는 커뮤니케이션 능력을 지속적으로 발전시키고 있습니다.</p>
              </li>
            </ol>
            <p>코드 한 줄, 기능 하나에도 사용자의 경험과 비즈니스 가치를 항상 고민합니다. 기술을 위한 기술이 아닌, <em>실제 가치를 만들어내는 개발자</em>가 되는 것이 목표입니다.</p>
          </div>
        </motion.section>

        <motion.section 
          id="contact"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <div className="section-title">
            <FaEnvelope className="section-icon" />
            <h2>연락처</h2>
          </div>
          <p>새로운 프로젝트나 협업 기회에 관심이 있으시면 언제든지 연락주세요. 함께 멋진 앱을 만들어봐요! ✨</p>
          
          <div className="contact-info">
            <div className="contact-row">
              <p><strong>이메일:</strong></p>
              <div className="copy-container">
                <p>minfrank35@gmail.com</p>
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard('minfrank35@gmail.com', 'email')}
                  title="이메일 주소 복사"
                >
                  {copySuccess.email ? <FaCheck className="copy-success" /> : <FaCopy />}
                </button>
              </div>
            </div>
            <div className="contact-row">
              <p><strong>전화번호:</strong></p>
              <div className="copy-container">
                <p>010-2486-3729</p>
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard('010-2486-3729', 'phone')}
                  title="전화번호 복사"
                >
                  {copySuccess.phone ? <FaCheck className="copy-success" /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* 개인 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="project-modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <h2>{selectedProject.title}</h2>
              
              {/* 프로젝트 메타데이터 표시 */}
              <div className="modal-meta">
                <div className="modal-meta-item">
                  <FaCalendarAlt />
                  <span>{selectedProject.period}</span>
                </div>
                {selectedProject.teamSize && (
                  <div className="modal-meta-item">
                    <FaUsers />
                    <span>{selectedProject.teamSize}</span>
                  </div>
                )}
                {selectedProject.myRole && (
                  <div className="modal-meta-item">
                    <FaUserCircle />
                    <span>{selectedProject.myRole}</span>
                  </div>
                )}
                <div className="modal-meta-item">
                  <FaTools />
                  <div className="modal-tech-stack">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 프로젝트 상세 내용 */}
              <div className="modal-section">
                <h3>프로젝트 상세</h3>
                <ul className="modal-details-list">
                  {selectedProject.details
                    .filter(detail => !detail.includes('특허'))
                    .map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                </ul>
              </div>
              
              {/* 특허 정보가 있는 경우 별도 섹션으로 표시 */}
              {selectedProject.details.some(detail => detail.includes('특허')) && (
                <div className="modal-section patent-section">
                  <h3>
                    <FaCertificate className="patent-icon" />
                    특허 정보
                  </h3>
                  <div className="patent-info">
                    {selectedProject.details
                      .filter(detail => detail.includes('특허'))
                      .map((detail, index) => (
                        <p key={index}>{detail.replace('✅ ', '')}</p>
                      ))}
                  </div>
                </div>
              )}
              
              {/* 도전 과제 */}
              <div className="modal-section">
                <h3>도전 과제</h3>
                <p>{selectedProject.challenges}</p>
              </div>
              
              {/* 결과 및 성과 */}
              <div className="modal-section">
                <h3>결과 및 성과</h3>
                <p>{selectedProject.outcome}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 경력 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedCareerProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCareerModal}
          >
            <motion.div 
              className="career-modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeCareerModal}>
                <FaTimes />
              </button>
              
              <h2>{selectedCareerProject.title}</h2>
              
              {/* 경력 프로젝트 메타데이터 표시 */}
              <div className="modal-meta">
                <div className="modal-meta-item">
                  <FaCalendarAlt />
                  <span>{selectedCareerProject.period}</span>
                </div>
                <div className="modal-meta-item">
                  <MdWork />
                  <span>{selectedCareerProject.company}</span>
                </div>
              </div>
              
              {/* 경력 프로젝트 상세 내용 */}
              <div className="modal-section">
                <h3>프로젝트 상세</h3>
                <p>{selectedCareerProject.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 자격증 모달 */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="certification-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button className="modal-close" onClick={closeCertificationModal}>
                <FaTimes />
              </button>

              <h2>{selectedCertification.name}</h2>

              <div className="modal-meta">
                <div className="modal-meta-item">
                  <FaAward />
                  <span>발급 기관: {selectedCertification.issuer}</span>
                </div>
                <div className="modal-meta-item">
                  <FaCalendarAlt />
                  <span>취득 일자: {selectedCertification.date}</span>
                </div>
                {selectedCertification.credentialId && (
                  <div className="modal-meta-item">
                    <FaFileAlt />
                    <span>자격증 번호: {selectedCertification.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="modal-section">
                <h3>자격증 설명</h3>
                <p>{selectedCertification.description}</p>
              </div>

              {selectedCertification.skills && (
                <div className="modal-section">
                  <h3>관련 기술 및 역량</h3>
                  <div className="modal-tech-stack">
                    {selectedCertification.skills.map((skill, index) => (
                      <span key={index} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 푸터 */}
      <footer>
        <p>© {new Date().getFullYear()} 김성민의 포트폴리오 | 열정과 창의력으로 코딩하는 개발자</p>
      </footer>
    </div>
  );
}

export default App;
