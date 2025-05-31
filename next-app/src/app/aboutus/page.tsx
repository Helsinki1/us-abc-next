import React from 'react';
import TeacherGrid from '../../../components/teachergrid'
import { Teacher } from '../../../components/teachergrid'
import Image from "next/image"

export default function AboutUs() {

  const teachersData1: Teacher[] = [
    {
      id: 'emily-001',
      name: 'Emily J.',
      title: 'Head Teacher, Trainer',
      description: 'Ms. Emily毕业于哈佛大学，资深在线培训师，现负责教师培训和教学质量控制。擅长ESL课程，PET/KET，Wonders，New Concept English，英语口语课程。',
      imageUrl: '/teachers/emily.png',
      imageAlt: 'Emily J. - Head Teacher'
    },
    {
      id: 'mae-002',
      name: 'Mae W.',
      title: 'ESL教师及职业培训师',
      description: 'Ms. Mae来自于哈佛大学，优秀在线培训师，现负责教师培训、教学及PET/KET，Wonders，新概念英语，英语口语课程。Ms. Mae脚踏实地课堂，也有很好的语言学习技巧，能有效改良课堂上使用中文和外国学生课堂。',
      imageUrl: '/teachers/mae.jpg',
      imageAlt: 'Mae W. - ESL Teacher'
    },
    {
      id: 'caroline-003',
      name: 'Caroline S.',
      title: 'ESL教师',
      description: 'Ms. Caroline毕业于瑞吉尼亚大学英语文学专业，学者课程，资深在线培训师，业余作家，教授过PET/KET，Wonders，英语口语专英语课程。Ms. Caroline喜欢上自然科学，特有乒特克数学王动软件讲座空间的课文。',
      imageUrl: '/teachers/caroline.jpg',
      imageAlt: 'Caroline S. - ESL Teacher'
    },
    {
      id: 'lisa-004',
      name: 'Lisa R.',
      title: 'ESL教师',
      description: 'Ms. Lisa毕业于德吉尼亚大学教育专业，教育学硕士并持有教师资格证书，具多年的出版课程历，多年在线一对一授课，资深作家，教授过优题，准备，PET/KET，Wonders，新概念英语，英语口语课程，情长用于问教具辅助教学。',
      imageUrl: '/teachers/lisa.jpg',
      imageAlt: 'Lisa R. - ESL Teacher'
    },
  ]
  const teachersData2: Teacher[] = [
    {
      id: 'alex-005',
      name: 'Alex L.',
      title: 'ESL教师',
      description: 'Alex来自俄克拉荷马，获得生动活泼，幽默课堂，标准美音主要教授托福，雅思听，说，读，写课程，也讲授国际课程，转型课，中小学课程，口语对话和商务英语课程。',
      imageUrl: '/teachers/alex.jpg',
      imageAlt: 'Alex L. - ESL Teacher'
    },
    {
      id: 'kelley-006',
      name: 'Kelley K.',
      title: 'ESL教师',
      description: 'Kelley毕业于McGill University教育专业，母语为英语，同时也能说流利的法语，主要教授准备讲语，说，读，写课程，创作KET，PET课程，美语中心学课程，口语对话和商务英语课程。',
      imageUrl: '/teachers/kelley.jpg',
      imageAlt: 'Kelley K. - ESL Teacher'
    },
    {
      id: 'ashley-007',
      name: 'Ashley R.',
      title: 'ESL教师',
      description: 'Ashley，硕士毕业于纽约大学教育专业，资深线线培训师，ESL教师，主要教授准备哪听读说课程全科HSKF 5 考试，美语中心小学课程，口语对话和商务英语课程。Ashley是一位贴心位发并升进学生兴趣的老师！',
      imageUrl: '/teachers/ashley.jpg',
      imageAlt: 'Ashley R. - ESL Teacher'
    },
    {
      id: 'paul-008',
      name: 'Paul W.',
      title: '课程设计师，ESL教师',
      description: 'Paul，毕业于美国俄克拉荷马大学，获学院，Paul负责课程设计和制作，Paul教授过课程和科教师培训业务，美语国际讲课，创明KEET，PET课程，美语中心小学课程，口语对话和商务英语课程。',
      imageUrl: '/teachers/paul.jpg',
      imageAlt: 'Paul W. - Course Designer and ESL Teacher'
    }
  ];
  const teachersData3: Teacher[] = [
    {
      id: 'eric-009',
      name: 'Eric M.',
      title: '课程设计师，ESL教师',
      description: 'Eric毕业于波士顿学院语言文学系， 主要负责课程设计和制作， 擅长将知识点融入笑话，格言来传授， Eric教授过雅思和托福听说读写， 英语口语，剑桥KET/PET课程。美国中小学课程和新概念英语课程.',
      imageUrl: '/teachers/eric.jpg',
      imageAlt: 'Eric M. - ESL Teacher'
    },
    {
      id: 'erica-010',
      name: 'Erica T.',
      title: '课程设计师，ESL教师i',
      description: 'Erica毕业于康州大学教育学专业， Erica课上讲解清晰有条理， 擅长借助各种教学软件授课, 教授过雅思和托福的听说读写， 英语口语对话，剑桥KET，PET课程。美国中小学课程， 口语对话和新概念英语课程.',
      imageUrl: '/teachers/erica.jpg',
      imageAlt: 'Erica T. - ESL Teacher'
    },
    {
      id: 'lexcea-011',
      name: 'Lexcea K.',
      title: '高中课程辅导员，美国升学指导',
      description: 'Lexcea来自麻省理工， 学习计算机科学专业， Lexcea高中时曾为社团会联合会长， 主要教授托福雅思口语课程，高中数学，高等数学，微积分， SAT/ACT, 高中物理等， Lexcea能提供美国大学申请指导，修改大学申请论文。',
      imageUrl: '/teachers/lexcea.jpg',
      imageAlt: 'Lexcea K. - ESL Teacher'
    },
    {
      id: 'angel-012',
      name: 'Angel M. Y.',
      title: '高中和大学理科课程辅导老师',
      description: 'Angel毕业于UC Berkeley物理系， 主要教授大学物理， 量子力学，大学数学，大学微积分和高中物理和高中数学等课程， Angel有多年线上不同课程辅导经验。',
      imageUrl: '/teachers/angel.png',
      imageAlt: 'Angel M. Y. - ESL Teacher'
    }
  ];

  return (
    <div className="bg-slate-50 h-full min-h-screen w-full items-center">
      {/* Banner - responsive height */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/aboutus/aboutusBanner.jpg"
          alt="banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main content - responsive padding and width */}
      <div className="bg-slate-50 flex flex-col h-auto w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6 text-left">我们的外教团队</h1>
        <h2 className="text-lg sm:text-xl font-bold text-orange-500 text-left mb-3 sm:mb-4">US abc团队的成员包括：</h2>
        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg lg:text-xl text-gray-800">
          <li className="text-left">• 来自美国各地的中小学教师，拥有丰富的课堂教育经验。</li>
          <li className="text-left">• 来自哈佛、麻省理工学院等顶尖高校的学霸，熟知考试技巧，擅长引导学生如何在考试中取得高分。</li>
          <li className="text-left">• 资深的双语语言培训师和课程设计师。懂得母语为中文的学生学习英语时会遇到的问题，有针对性的攻破语法难关，帮助学生改善口语和提高学校英语考试成绩。</li>
        </ul>
        
        <p className="text-base sm:text-lg lg:text-xl text-gray-800 text-left mt-4 sm:mt-6 leading-relaxed">
          我们的教育和语言背景以及丰富的美国当地的教学资源使我们能够为学生提供高质量的课程，帮助学生在语言学习和学术发展上取得优异成绩。
        </p>
      </div>

      {/* Teacher grids - responsive padding */}
      <div className="bg-sky-600 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
        <TeacherGrid teachers={teachersData1}></TeacherGrid>
        <TeacherGrid teachers={teachersData2}></TeacherGrid>
        <TeacherGrid teachers={teachersData3}></TeacherGrid>
      </div>
    </div>
  )
}