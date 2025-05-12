import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaAward, FaFileAlt, FaCogs } from 'react-icons/fa';
import { MdWork, MdSchool, MdAssignment } from 'react-icons/md';
import './App.css';
import ResumePdf from './김성민_이력서_2025_04_23.pdf';
import CoverLetterPdf from './김성민_자기소개서.pdf';
import CareerPdf from './경력기술서_김성민.pdf';

function App() {
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

  const projects = [
    {
      id: 7,
      title: '랜덤 폭탄주 제조기(Random Alcohol Machine)',
      description: '마이크로컨트롤러와 서보모터를 활용한 자동 음료 혼합 시스템 개발. 스마트폰 앱으로 원격 제어 가능한 인터페이스 구현',
      tech: ['Android', 'Arduino', 'Bluetooth', 'Java'],
      period: '2020.09 ~ 2020.11'
    },
    {
      id: 8,
      title: '마스크 인식 및 손소독제 기계',
      description: 'OpenCV와 머신러닝을 사용하여 마스크 착용 여부를 감지하고, 센서를 통해 자동으로 손소독제를 분사하는 시스템 개발',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Arduino'],
      period: '2020.06 ~ 2020.08'
    },
    {
      id: 9,
      title: '포트폴리오 웹사이트',
      description: 'React와 Framer Motion을 사용하여 애니메이션 효과가 있는 반응형 포트폴리오 웹사이트 개발. 다크모드 지원 및 프로젝트 필터링 기능 구현',
      tech: ['React', 'JavaScript', 'Framer Motion', 'CSS'],
      period: '2023.10 ~ 2023.11'
    },
    {
      id: 10,
      title: '쇼핑몰 앱(Android)',
      description: '안드로이드용 쇼핑몰 애플리케이션 개발. MVVM 아키텍처와 Room 데이터베이스를 활용한 오프라인 캐싱, 결제 시스템 연동',
      tech: ['Android', 'Kotlin', 'MVVM', 'Room', 'Retrofit'],
      period: '2021.03 ~ 2021.06'
    },
    {
      id: 11,
      title: '일정 관리 앱',
      description: 'To-Do 리스트 및 캘린더 기능을 통합한 일정 관리 앱 개발. Hilt를 사용한 의존성 주입과 Work Manager를 활용한 백그라운드 작업 구현',
      tech: ['Android', 'Kotlin', 'Room', 'WorkManager', 'Hilt'],
      period: '2022.01 ~ 2022.03'
    }
  ];

  const skills = [
    { category: "언어", items: ["Kotlin", "Java", "Dart", "C"] },
    { category: "안드로이드", items: ["Jetpack Compose", "MVVM", "Clean Architecture", "Hilt", "Room", "Retrofit", "CameraX", "OpenCV"] },
    { category: "크로스 플랫폼", items: ["Flutter"] },
    { category: "백엔드", items: ["Spring Boot", "JPA", "AWS", "Linux CentOS"] },
    { category: "협업 도구", items: ["Git", "GitHub", "Flow", "Notion", "Figma", "MCP", "Cursor"] }
  ];

  const awards = [
    { title: "교내 취창업 경진대회 대상", year: "2019년 상반기" },
    { title: "교내 취창업 경진대회 최우수상", year: "2019년 하반기" },
    { title: "교내 캡스톤 경진대회 우수상", year: "2020년 하반기" },
    { title: "LINC 3.0 지원 산학 작품 경진대회 장려상", year: "2023년 11월" }
  ];

  return (
    <div className="App">
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
          김성민의 포트폴리오
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="header-subtitle"
        >
          안드로이드 개발자 | 플러터 개발자
        </motion.p>
        <div className="social-icons">
          <motion.a href="https://github.com/minfrank35" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a href="mailto:minfrank35@gmail.com" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a href="tel:+821024863729" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.header>

      <main>
        <motion.section 
          id="intro"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="section-title">
            <FaUser className="section-icon" />
            <h2>소개</h2>
          </div>
          <p>안녕하세요, 저는 김성민입니다. Java & Kotlin 기반의 3년차 안드로이드 개발자로, B2B 서비스 앱 및 B2C 앱 개발과 유지보수 경험을 보유하고 있습니다. ERP 관련 앱(경리나라, 인하우스 뱅크 등)과 보안 솔루션(OTP, FIDO)을 개발했습니다. 최신 기술 스택(Jetpack Compose, MVVM, Clean Architecture)을 적용한 앱 개발과 Flutter를 활용한 크로스 플랫폼 앱 개발 경험도 있습니다.</p>
          
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
          
          <blockquote className="quote">
            "개발한 애플리케이션을 실제 기기에서 빠르게 실행하고 결과를 확인할 수 있다는 점에서 안드로이드 개발에 매력을 느꼈습니다. 문제 해결뿐만 아니라 문제를 발견하는 창의력을 통해 AI 시대에서도 가치를 창출하고자 합니다."
          </blockquote>

          <div className="contact-info-brief">
            <p><strong>이메일:</strong> minfrank35@gmail.com</p>
            <p><strong>연락처:</strong> 010-2486-3729</p>
            <p><strong>위치:</strong> 경기도 의왕시</p>
            <p><strong>생년월일:</strong> 2000.07.07</p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
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
                    <motion.span 
                      key={index} 
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="section-title">
            <MdWork className="section-icon" />
            <h2>경력</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge current"></div>
              <h3>무선보안개발팀 주임연구원</h3>
              <p className="company">케이사인(KSIGN), 보안솔루션 회사</p>
              <p className="period">2024년 12월 - 현재</p>
              <ul className="experience-list">
                <li>OTP, FIDO, PKI 등의 보안솔루션 개발 및 유지보수</li>
                <li>삼천리 OTP 앱 개발 (HMAC 알고리즘 활용, 난독화, FirebaseCrashlytics 적용)</li>
                <li>OTP + FIDO 2차인증 솔루션의 전력거래소 앱 개발 및 유지보수</li>
                <li>Hilt + ROOM + CleanArchitecture를 활용한 레거시 Java 코드 Kotlin 마이그레이션</li>
                <li>TargetSdk 34(안드로이드 14), 35(안드로이드 15) 대응</li>
                <li>Flutter를 활용한 DeepPass 크로스 플랫폼 앱 개발 (FIDO 인증시간 개선)</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <h3>R&D 센터 스마트기술부 주임(병특)</h3>
              <p className="company">웹케시(Webcash), B2B 뱅크 서비스 회사</p>
              <p className="period">2021년 10월 - 2023년 9월</p>
              <ul className="experience-list">
                <li>경리나라 안드로이드 앱 유지보수 및 리뉴얼 작업</li>
                <li>Jetpack Compose를 활용한 공통 UI 라이브러리 개발 (개발시간 30% 단축)</li>
                <li>OpenCV를 이용한 영수증 인식 모듈 개발</li>
                <li>TargetSdk 31~33 상향 관리 및 유지보수</li>
                <li>스크래핑 지원 서버 솔루션 특허 출원 (출원번호: 1020220166530)</li>
                <li>SAA(Single Activity Architecture) 샘플 프로젝트 개발</li>
              </ul>
            </div>
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
              <p className="period">2019년 3월 - 현재 (재학중)</p>
            </div>
            <div className="education-item">
              <h3>장유고등학교</h3>
              <p className="period">2016년 3월 - 2019년 2월 (졸업)</p>
            </div>
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
              >
                <div className="award-year">{award.year}</div>
                <div className="award-title">{award.title}</div>
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
                className="project-card"
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
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
                <motion.button
                  className="project-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              <p>Android Studio + Cursor + Figma + MCP를 통한 디자인부터 개발까지 원활한 진행</p>
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
            <h2>개발 철학</h2>
          </div>
          <div className="philosophy-content">
            <p>AI 시대에서 개발자로 성장하기 위해 저는 두 가지 핵심 역량을 키우고 있습니다:</p>
            <ol>
              <li>
                <strong>문제 발견 창의력(Problem Finding Creativity)</strong>
                <p>단순히 문제를 해결하는 것을 넘어, 새로운 문제와 기회를 발견하는 능력이 AI 시대에 더욱 중요해질 것이라 믿습니다. Android 개발을 넘어 백엔드, 웹 등 다양한 영역을 학습하여 이러한 역량을 키우고 있습니다.</p>
              </li>
              <li>
                <strong>효과적인 의사소통 능력</strong>
                <p>팀원들과의 협업뿐만 아니라 AI와의 상호작용에서도 명확한 의사소통은 필수적입니다. 의도나 내용을 분명하게 표현하고, 상대방이 이해하기 쉽게 전달하는 능력을 지속적으로 개발하고 있습니다.</p>
              </li>
            </ol>
            <p>안드로이드와 관련된 단순한 기술적 역량을 넘어, 보다 깊이 있는 실무적 지식과 다양한 개발 영역을 습득하여 조직과 사용자에게 혁신적인 가치를 제공하고자 합니다.</p>
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
          <p>새로운 프로젝트나 협업 기회에 관심이 있으시면 연락주세요.</p>
          <div className="contact-info">
            <p><strong>이메일:</strong> minfrank35@gmail.com</p>
            <p><strong>전화번호:</strong> 010-2486-3729</p>
            <p><strong>위치:</strong> 경기도 의왕시 봇들로 34</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" placeholder="이름을 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea id="message" name="message" placeholder="메시지를 입력하세요" rows="5"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05, backgroundColor: "#f50057" }}
              whileTap={{ scale: 0.95 }}
            >
              보내기
            </motion.button>
          </form>
        </motion.section>
      </main>

      <footer>
        <p>&copy; 2023 김성민의 포트폴리오 | 모든 권리 보유</p>
      </footer>
    </div>
  );
}

export default App;
