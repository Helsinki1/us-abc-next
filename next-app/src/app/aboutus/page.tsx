import React from 'react';
import TeacherGrid from '../../../components/teachergrid'
import { Teacher } from '../../../components/teachergrid'
import Image from "next/image"

export default function AboutUs() {

  const teachersData: Teacher[] = [
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

  return (
    <div className="bg-slate-50 h-full min-h-screen w-full items-center">
      <div className="relative w-full" style={{minHeight: '500px'}}>
        <Image
          src="/aboutus/aboutusBanner.jpg"
          alt="banner"
          fill
          className="object-cover"
          priority
        />
      </div>


      <div className="bg-slate-50 flex flex-col h-auto w-3/4 pt-10 pb-10 pl-8 pr-8 ml-52">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-left">我们的外教团队</h1>
        <h2 className="text-xl font-bold text-orange-500 text-left mb-4">US abc团队的成员包括：</h2>
        <ul className="space-y-3 text-xl text-gray-800">
          <li className="text-left">• 来自美国各地的中小学教师，拥有丰富的课堂教育经验。</li>
          <li className="text-left">• 来自哈佛、麻省理工学院等顶尖高校的学霸，熟知考试技巧，擅长引导学生如何在考试中取得高分。</li>
          <li className="text-left">• 资深的双语语言培训师和课程设计师。懂得母语为中文的学生学习英语时会遇到的问题，有针对性的攻破语法难关，帮助学生改善口语和提高学校英语考试成绩。</li>
        </ul>
        
        <p className="text-xl text-gray-800 text-left mt-6 leading-relaxed">
          我们的教育和语言背景以及丰富的美国当地的教学资源使我们能够为学生提供高质量的课程，帮助学生在语言学习和学术发展上取得优异成绩。
        </p>
      </div>


      <div className="bg-sky-600">
        <TeacherGrid teachers={teachersData}></TeacherGrid>
      </div>
    </div>
  )
}