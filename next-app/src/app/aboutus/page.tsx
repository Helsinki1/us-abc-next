"use client"
import React from 'react';
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react';


export default function AboutUs() {

  const [content, setContent] = useState<string>("US abc团队的成员包括：\n\n来自美国各地的中小学教师，拥有丰富的课堂教育经验。\n来自哈佛、麻省理工学院等顶尖高校的学霸，熟知考试技巧，擅长引导学生如何在考试中取得高分。\n资深的双语语言培训师和课程设计师。懂得母语为中文的学生学习英语时会遇到的问题，　有针对性的攻破语法难关，帮助学生改善口语和提高学校英语考试成绩。\n\n我们的教育和语言背景以及丰富的美国当地的教学资源使我们能够为学生提供高质量的课程，帮助学生在语言学习和学术发展上取得优异成绩。");

  const [vidIndex, setVidIndex] = useState(0);

  const vidSrcList = [
    "/aboutus/aboutusVid1.mp4",
    "/aboutus/aboutusVid2.mp4",
    "/aboutus/aboutusVid3.mp4",
    "/aboutus/aboutusVid4.mp4"
  ]

  return (
    <div className="bg-slate-200 h-full min-h-screen w-full">
      <div className="relative w-full" style={{minHeight: '450px'}}>
        <Image
          src="/aboutus/aboutusBanner.jpg"
          alt="banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col ml-60 mr-52 mt-10 items-center">

        <div className="flex mt-3 justify-between">
          <div className="flex flex-col w-1/2 h-auto p-6 rounded-3xl bg-slate-300">
            <h1 className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-2 font-bold">我们的外教团队</h1>
            <p className="text-gray-700 text-lg sm:text-sm md:text-md xl:text-xl mt-4">
              {content.split('\n').map((line, index) => (
                <p key={index} className="mb-2">
                {line}
                </p>
              ))}
            </p>
          </div>
          <video src="/aboutus/aboutus.mp4" controls playsInline className=" w-5/12 max-w-2xl h-auto rounded shadow-lg sm:"></video>
        </div>

        <div className="bg-blue-400 text-white text-2xl font-bold w-1/2 h-auto mt-20 text-center p-3">课堂回放片段</div>

        {/* navigation buttons with video in the middle */}
        <div className="flex justify-center items-center px-4 mt-6 mb-20">
          <button
            onClick={() => setVidIndex((vidIndex===0)? 0:vidIndex-1)}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <video src={vidSrcList[vidIndex]} controls className="w-5/12 h-auto rounded-md"/>
          <button
            onClick={() => setVidIndex((vidIndex===3)? 3:vidIndex+1)}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}