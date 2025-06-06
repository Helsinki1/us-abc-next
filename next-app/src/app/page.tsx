"use client"
import axios from "axios"
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
  const [phoneIn, setPhoneIn] = useState<string>("");
  const [subjectIn, setSubjectIn] = useState<string>("");

  const [index, setIndex] = useState<number>(0);
  const imgList = [
    "/homeslide1.png",
    "/homeslide2.jpg",
    "/homeslide3.jpg"
  ]

  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImage = (newIndex: React.SetStateAction<number>) => {
    if (isTransitioning) return; // Prevent rapid clicks
    
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(newIndex);
      setIsTransitioning(false);
    }, 300); // Half of the transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => 
        prevIndex === imgList.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds
  
    return () => clearInterval(interval);
  }, [imgList.length, index]);



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      if (!nameIn || !wechatIn || !phoneIn || !subjectIn) {
        alert("Phone # must be a number. Please fill in all fields.");
        return;
      }
  
      const response = await axios.post(
        'https://us-abc-next.onrender.com/email',
        {
          nameIn,
          wechatIn,
          phoneIn,
          subjectIn,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 second timeout
        }
      );
  
      setNameIn("");
      setWechatIn("");
      setPhoneIn("");
      setSubjectIn("");
  
      if (response.status === 201) {
        alert("Submission successful.");
      }
    } catch (error: any) {
      alert(
        error.response?.data?.error ||
        "Error during submission. Please try again."
      );
    }
  };
  
  return (
    <div className="bg-blue-600 h-full min-h-screen w-full">
      {/* Hero Carousel - Responsive height and button positioning */}
      <div className="flex justify-center items-center px-2 sm:px-4 relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <button
          onClick={() => changeImage((index === 0) ? imgList.length - 1 : index - 1)}
          className="absolute left-2 sm:left-4 z-10 bg-gray-800 text-white p-1.5 sm:p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <Image
          src={imgList[index]}
          alt="Banner"
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
          key={index}
        />
        <button
          onClick={() => changeImage((index === imgList.length - 1) ? 0 : index + 1)}
          className="absolute right-2 sm:right-4 z-10 bg-gray-800 text-white p-1.5 sm:p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      
      <div className="bg-slate-200 flex flex-col px-8 md:px-16 lg:px-24 xl:px-40 space-y-6 pt-14 pb-14 items-center">
        {/* First Section - Text + Video */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex flex-col w-full lg:w-[620px] h-[320px] p-6 rounded-3xl bg-slate-300 shadow-md">
            <h1 className="text-gray-700 text-xl font-bold leading-tight">
              {title1}
            </h1>
            <h1 className="text-gray-700 text-base mt-3 leading-relaxed overflow-hidden">
                {content1.split('\n').map((line, index) => (
                    <p key={index} className="mb-1.5">
                    {line}
                    </p>
                ))}
            </h1>
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
          <div className="flex flex-col w-full lg:w-[620px] h-[240px] p-6 rounded-3xl bg-slate-300 shadow-md">
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
          <div className="flex flex-col w-full lg:w-[620px] h-[230px] p-6 rounded-3xl bg-slate-300 shadow-md">
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


      <div className="flex flex-col place-content-center items-center bg-blue-800 w-full" style={{minHeight: '500px', padding: '3rem 1rem'}}>
        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          免费领取399元在线英语课
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input 
            className="w-full h-14 p-4 text-gray-600 text-lg rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="您的名字"
            onChange={(event) => {setNameIn(event.target.value);}}
          />
          <input 
            className="w-full h-14 p-4 text-gray-600 text-lg rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="您的微信号"
            onChange={(event) => {setWechatIn(event.target.value);}}
          />
          <input 
            className="w-full h-14 p-4 text-gray-600 text-lg rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="您的手机号码"
            type="tel"
            onChange={(event) => {setPhoneIn(event.target.value);}}
          />
          <input 
            className="w-full h-14 p-4 text-gray-600 text-lg rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="想试听的课程"
            onChange={(event) => {setSubjectIn(event.target.value);}}
          />
        
          <button className="bg-red-500 hover:bg-red-600 rounded-lg px-8 py-3 mt-8 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
            立即领取
          </button>
        </form>
      </div>

      <div className="bg-slate-300 w-full h-24"></div>
    </div>
  )
}