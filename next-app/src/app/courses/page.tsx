"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'

export default function Courses() {

  const [text1, setText1] = useState<string>("US abc提供基础英语课程， 英语单项训练课程 考试类课程和美国留学咨询辅导。基础英语课程包括：Wonders系列， Kids Box，新概念英语和日常口语课程。英语单项训练课程包括：4000词汇突破， 新语法和每日阅读训练。考试类课程有： 剑桥英语考级KET/PET， 雅思和托福备考， SAT/ACT备考课程。");
  const [slide1, setSlide1] = useState<string>("Wonders教材是美国当地学校中小学使用教材， 在Wonders系列里， 每年级的书配套有6个单元， 每个单元有5周不同主题的课文，每篇主题课文学习用时3小时左右，在课文出现前，有插图并加例句的单词列表， 学习课文后有针对课文理解的练习， 词汇知识解释以及写作训练，适合选择把英语当成母语来系统地学习英语的学生， 建议从4-5岁开始启用。每周上最少3小时课。");
  const [slide2, setSlide2] = useState<string>("KET学生用书共有14个单元，每个单元是有关一个日常生活场景， 都配有精选的听说读写练习，每单元需3-3.5小时上完，有配套练习册。适合英语初学者或者准备KET考级的学生使用，用来提高英语听说读写综合能力。");
  const [slide3, setSlide3] = useState<string>("PET学生用书是继学完了KET教材之后的更高一级的同类剑桥英语书， 共有12个单元， 每个单元是有关一个日常生活场景， 都配有丰富的听说读写练习，每单元需3-3.5小时上完，有配套练习册。适合KET学完后打算PET考级或者英语学习3年以上的学生使用。用来提高英语听说读写综合能力。");
  const [slide4, setSlide4] = useState<string>("Everyday Conversations 这套教材是地道美语口语对话教材， 旨在提高基本日常对话能力， 此教材涵盖30个不同的生活场景对话， 每个场景有配套插图和短语精解。课程用时20小时左右， 适合英语学习一年以上并想短期内提高日常对话能力的学生， 或者打算来美国短呆的旅行者使用。");
  const [slide5, setSlide5] = useState<string>("新概念英语是学生和老师们都非常熟悉的经典英语教材，此系列书都配有中英文解释， 很方便学习， 融合了对话，词汇， 语法和对知识点的练习， 是公认的好教材。\n\n第一册共有144课， 每两课中的第一课是生词和对话内容， 第二课是针对第一课的对话，词汇和句型操练。课程用时75-80小时。\n\n第一册适合英语初学者使用， 能短期提高基本口语对话能力。\n\n第二册和第三册每课都是一个经典故事。这些故事是新概念英语酷爱者喜欢背诵的故事。\n\n第二册共96课，  课程用时96小时左右， 适合学习英语2年以上的学生使用。\n\n第三册共60课，课程用时60-90小时左右， 适合学习英语3年以上的学生使用。");
  const [slide6, setSlide6] = useState<string>("新语法书系列是针对儿童学习英语时语法部分的学习编写的教材，此系列书共有5册，");
  const [slide7, setSlide7] = useState<string>("Kids Box教材是专为儿童英语学习编写的教材，图文并茂， 课上互动时轻松活泼，以听说的形式融合了词汇， 语法和对话练习一起。此系列教材共分三册， 第一和第二册每册有12个单元，第三册有8个单元， 每个单元以一个日常场景为主题，每个单元需2个小时左右的课时，也有配套的课后练习册。KB1适合英语初学儿童，KB2 适合英语学习一年以上的学生使用。 KB3是在前面两册学完后或者两年以上英语学习后使用。");
  const [slide8, setSlide8] = useState<string>("英语基本词汇书是用来快速扩大学生词汇量的专用教材， 教材编写时将目标词汇放入文章语境中， 在学习短文前有对词汇的附图和例句， 短文学习后有更进一步的单词使用巩固练习， 可以用来当作主教材辅助用书。此系列书共有4册， 每册有1000个单词的学习，适合想短期内快速扩大词汇量且有一年以上英语学习基础的学生使用。");
  const [slide9, setSlide9] = useState<string>("ELA每日阅读是专门用来提高学生阅读理解能力用的教材， 是美国当地学校常使用的教学用书。每册书里有180篇短文阅读， 每日所读的是故事中的一段， 针对短文内容并配有5-6个问题， 都是选择题， 旨在用来改善英语阅读， 扩大词汇量和提高口语对话能力。适合母语为英语的四年级以上的学生使用。");
  const [slide10, setSlide10] = useState<string>("10-15个小时的雅思和托福各类题型解题技巧分析， 再是20套模考题刷题， 每套练习后讲解。解题技巧和考题分析课件是老师们编写的。");
  const [slide11, setSlide11] = useState<string>("SAT/ACT模考题精解以及备考前时间管理和分配。由美国顶尖名校MIT，哈佛及各大藤校学霸主讲。");
  const [slide12, setSlide12] = useState<string>("美国大学申请ED， ERA和Regular大学选择策略。论文撰写技巧和修改润色。由美国顶尖名校MIT，哈佛及各大藤校学霸主讲。");

  const [nameIn, setNameIn] = useState<string>("");
  const [wechatIn, setWechatIn] = useState<string>("");
  const [phoneIn, setPhoneIn] = useState<number>(0);
  const [subjectIn, setSubjectIn] = useState<string>("");

  const [openTab, setOpenTab] = useState(-1);

  return (
    <div className="bg-blue-100 h-full min-h-screen w-full">
      <div className="relative w-full" style={{minHeight: '500px'}}>
        <Image
            src="/coursesBanner.jpg"
            alt="Courses Banner"
            fill
            className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-between mt-10">

        <div className="bg-white rounded-3xl w-7/12 h-auto p-5">
            <label className="text-purple-900 text-3xl font-bold">US abc 课程</label>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-3">{text1}</p>
        </div>

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===1)? -1:1))}>
            Wonders系列教材 K-6
            <svg
                className={`h-5 w-5 transform ${(openTab===1)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===1) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide1pic.webp"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide1}
                <Link href="//share.weiyun.com/x7P5iUXA/" className="text-blue-700 font-bold mt-3">
                    点击此次查看书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===2)? -1:2))}>
            剑桥KET
            <svg
                className={`h-5 w-5 transform ${(openTab===2)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===2) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide2pic.jpg"
                    alt="Wonders"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide2}
                <Link href="//share.weiyun.com/FlZb2dUJ/" className="text-blue-700 font-bold mt-3">
                    点击此次查看KET书中内容
                </Link>
            </div>
        )}
        
        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===3)? -1:3))}>
            剑桥PET
            <svg
                className={`h-5 w-5 transform ${(openTab===3)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===3) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide3pic.webp"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide3}
                <Link href="//share.weiyun.com/GvmvqQ7Q/" className="text-blue-700 font-bold mt-3">
                    点击此次查看PET书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===4)? -1:4))}>
            基础口语
            <svg
                className={`h-5 w-5 transform ${(openTab===4)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===4) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide4pic.jpg"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide4}
                <Link href="//share.weiyun.com/i5zPoW2v/" className="text-blue-700 font-bold mt-3">
                    点击此次查看基础口语书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===5)? -1:5))}>
            新概念英语
            <svg
                className={`h-5 w-5 transform ${(openTab===5)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===5) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide5pic.webp"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide5.split('\n').map((line, index) => (
                    <p key={index} className="mb-2">
                    {line}
                    </p>
                ))}
                <Link href="//share.weiyun.com/PjuaYZuI/" className="text-blue-700 font-bold mt-3">
                    点击此次查看新概念英语书中内容
                </Link>
            </div>
        )}
        
        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===6)? -1:6))}>
            新语法课程
            <svg
                className={`h-5 w-5 transform ${(openTab===6)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===6) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide6pic.jpg"
                    alt="Wonders教材图片"
                    width={230}
                    height={230}
                    className="mb-3 h-44 w-44"
                />
                {slide6}
                <Link href="//share.weiyun.com/LKKDRHxv/" className="text-blue-700 font-bold mt-3">
                    点击此次查看语法书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===7)? -1:7))}>
            剑桥Kids Box系列（共三册）
            <svg
                className={`h-5 w-5 transform ${(openTab===7)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===7) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide7pic.jpg"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide7}
                <Link href="//share.weiyun.com/gTHTyoGO/" className="text-blue-700 font-bold mt-3">
                    点击此次查看Kids Box书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===8)? -1:8))}>
            词汇课程
            <svg
                className={`h-5 w-5 transform ${(openTab===8)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===8) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide8pic.jpg"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide8}
                <Link href="//share.weiyun.com/o75vuS8b/" className="text-blue-700 font-bold mt-3">
                    点击此次查看书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===9)? -1:9))}>
            阅读课程
            <svg
                className={`h-5 w-5 transform ${(openTab===9)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===9) && (
            <div className="bg-white text-gray-700 flex flex-col h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide9pic.jpg"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide9}
                <Link href="//share.weiyun.com/zc3C7ZtJ/" className="text-blue-700 font-bold mt-3">
                    点击此次查看书中内容
                </Link>
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===10)? -1:10))}>
            雅思/托福备考
            <svg
                className={`h-5 w-5 transform ${(openTab===10)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===10) && (
            <div className="bg-white text-gray-700 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide10pic.jpg"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide10}
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===11)? -1:11))}>
            SAT/ACT
            <svg
                className={`h-5 w-5 transform ${(openTab===11)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===11) && (
            <div className="bg-white text-gray-700 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide11pic.png"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide11}
            </div>
        )}

        <button className="bg-white text-purple-900 text-left p-3 text-2xl font-bold mt-6 w-7/12 h-14 rounded-2xl" onClick={()=>(setOpenTab((openTab===12)? -1:12))}>
            美国大学申请指导
            <svg
                className={`h-5 w-5 transform ${(openTab===12)? "rotate-180" : ""} transition-transform`}
                viewBox="0 0 20 20" fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
        </button>
        {(openTab===12) && (
            <div className="bg-white text-gray-700 h-auto w-7/12 p-5 rounded-2xl text-xl">
                <Image
                    src="/courses/slide12pic.png"
                    alt="Wonders教材图片"
                    width={176}
                    height={176}
                    className="mb-3"
                />
                {slide12}
            </div>
        )}

        <div className="flex bg-white mt-16 mb-16 w-7/12 h-96 items-center justify-evenly">
            <div className="flex flex-col items-center">
                <h1 className="text-purple-900 text-3xl font-bold mb-3">咨询课程</h1>
                <Image
                    src="/courses/qrcode.jpg"
                    alt="qrcode"
                    width={176}
                    height={176}
                    className="mb-3 w-64 h-auto"
                />
            </div>
            <div className="flex flex-col place-content-center items-center w-96" style={{minHeight: '500px', padding: '3rem 1rem'}}>
                <h1 className="text-purple-900 text-2xl font-bold mb-4 text-center">
                    预约试听
                </h1>
                
                <div className="w-full max-w-md space-y-4">
                    <input 
                        className="w-full h-12 p-3 outline outline-2 outline-red-600 text-gray-700 text-base rounded-lg border-0 focus:ring-2 focus:ring-white"
                        placeholder="您的名字"
                        onChange={(event) => {setNameIn(event.target.value);}}
                    />
                    <input 
                        className="w-full h-12 p-3 outline outline-2 outline-red-600 text-gray-700 text-base rounded-lg border-0 focus:ring-2 focus:ring-white"
                        placeholder="您的微信号"
                        onChange={(event) => {setWechatIn(event.target.value);}}
                    />
                    <input 
                        className="w-full h-12 p-3 outline outline-2 outline-red-600 text-gray-700 text-base rounded-lg border-0 focus:ring-2 focus:ring-white"
                        placeholder="您的手机号码"
                        type="tel"
                        onChange={(event) => {setPhoneIn(Number(event.target.value));}}
                    />
                    <input 
                        className="w-full h-12 p-3 outline outline-2 outline-red-600 text-gray-700 text-base rounded-lg border-0 focus:ring-2 focus:ring-white"
                        placeholder="想试听的课程"
                        onChange={(event) => {setSubjectIn(event.target.value);}}
                    />
                </div>
                
                <button className="bg-red-500 hover:bg-red-600 rounded-lg px-7 py-1 mt-4 text-white font-bold text-base transition-colors shadow-lg hover:shadow-xl">
                    立即领取
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}