"use client"
import Link from "next/link"
import Image from "next/image"
import React from 'react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [title1, setTitle1] = useState<string>("US abc 提供高质量的纯正语言课程");
  const [title2, setTitle2] = useState<string>("US abc资深双语语言课程设计师为学生量身定做设计课程");
  const [title3, setTitle3] = useState<string>("US abc和哈佛、MIT及美国其他藤校合作课程");
  const [content1, setContent1] = useState<string>("我们团队母语为英语的美国当地老师为在语言学习关键期的低龄儿童提供在线英语课， 帮助孩子们做到说英语时无口音，通过模仿老师的表达促成自然学好语法， 跳过从中文翻译成英语的口语表达方式， 回归语言的自然获取模式,形成英语思维。培养真正中英双语技能。\n\n课程分以下三类 \n\t基础英语课程包括：Wonders系列， Kids Box，新概念英语和日常口语课程。\n\t英语单项训练课程包括：4000词汇突破， 新语法和每日阅读训练。\n\t考试类课程有： 剑桥英语考级KET/PET， 雅思和托福备考， SAT/ACT备考课程");
  const [content2, setContent2] = useState<string>("US abc团队课程设计师是一群在美国定居多年的精通中英双语的语言学家，我们酷爱语言学习， 熟通语言背后的当地文化，深知母语为中文的学生英语学习时的挑战，有过多年语言的教学， 熟悉各类情况下的中美学校使用的英语教材和语言学习资源，了解不同年级阶段时的英语考试要求， 针对学生的年龄和英语基础， 为学生打造个性化的英语课程。短期提高英语应试成绩和真正的语言沟通能力。");
  const [content3, setContent3] = useState<string>("US abc团队有一群来自于世界顶级学府包括哈佛，MIT以及八大藤校的学霸， 他们在高中时是学校的佼佼者， 也是美国大学申请考试（SAT/ACT, AP等）中的优胜者， 熟知美国高中课程体系和美国大学申请流程以及各大院校申请要求， 能为打算留学美国的中国学生提供SAT/ACT, AP以及语言类雅思和托福的考试辅导。帮助撰写和修改美国大学申请论文， 实现留学理想美国大学之梦。");

  const [nameIn, setNameIn] = useState<string>("");
  const [wechatIn, setWechatIn] = useState<string>("");
  const [phoneIn, setPhoneIn] = useState<number>(0);
  const [subjectIn, setSubjectIn] = useState<string>("");

  return (
    <div className="bg-slate-200 h-full min-h-screen w-full">
      <div className="relative w-full h-96">
        <Image
          src="/columbiaBanner.jpg"
          alt="Columbia Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-white text-4xl">
            <span className="font-bold">US abc</span> 北美教育
          </h1>
          <h1 className="text-white text-2xl mt-1">英语培训和美国留学与升学指导</h1>
          <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border hover:border-white">
            <Link href="/contactus" className="text-white text-lg">
              预约咨询
            </Link>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col px-8 md:px-16 lg:px-24 xl:px-40 mt-10 space-y-6 items-center">
        {/* First Section - Text + Video */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex flex-col w-full lg:w-[600px] h-[280px] p-6 rounded-3xl bg-slate-300 shadow-md">
            <h1 className="text-gray-700 text-xl font-bold leading-tight">
              {title1}
            </h1>
            <p className="text-gray-700 text-base mt-3 leading-relaxed overflow-hidden">
              {content1}
            </p>
          </div>
          <div className="flex-shrink-0">
            <video
              src="/homevid.mp4"
              controls
              playsInline
              className="w-[400px] h-[225px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Second Section - Text + Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex flex-col w-full lg:w-[600px] h-[240px] p-6 rounded-3xl bg-slate-300 shadow-md">
            <h1 className="text-gray-700 text-xl font-bold leading-tight">
              {title2}
            </h1>
            <p className="text-gray-700 text-base mt-3 leading-relaxed overflow-hidden">
              {content2}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-[400px] h-[225px]">
              <Image
                src="/homepic1.jpg"
                alt="Home Pic 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Third Section - Text + Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
          <div className="flex flex-col w-full lg:w-[600px] h-[230px] p-6 rounded-3xl bg-slate-300 shadow-md">
            <h1 className="text-gray-700 text-xl font-bold leading-tight">
              {title3}
            </h1>
            <p className="text-gray-700 text-base mt-3 leading-relaxed overflow-hidden">
              {content3}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-[400px] h-[225px]">
              <Image
                src="/ivies.jpg"
                alt="Ivies"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>


      <div className=" flex flex-col place-content-center items-center bg-blue-400 w-full h-96 mt-16">
        <h1 className="text-white text-2xl">
          免费领取399元在线英语课
        </h1>
        <input className="mt-4 w-1/3 h-12 p-4"
          placeholder="您的名字"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="您的微信号"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="您的手机号码"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <input className="mt-3 w-1/3 h-12 p-4"
          placeholder="想试听的课程"
          onChange={(event)=>{setNameIn(event.target.value);}}
        />
        <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border text-white font-bold hover:border-white"
          // onClick={}  ADD EMAIL YOURSELF FUNCTION
        >
          立即领取
        </button>
      </div>

      <div className="bg-slate-300 w-full h-24"></div>
    </div>
  )
}