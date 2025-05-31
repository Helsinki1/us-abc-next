"use client"
import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function ContactUs() {

  const [nameIn, setNameIn] = useState<string>("");
  const [wechatIn, setWechatIn] = useState<string>("");
  const [phoneIn, setPhoneIn] = useState<string>("");
  const [subjectIn, setSubjectIn] = useState<string>("");

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
    <div className="bg-blue-900 h-full min-h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl md:text-5xl text-center font-bold mt-20 px-4">Contact Us</h1>
        
        {/* Desktop layout - horizontal cards */}
        <div className="hidden md:flex items-center space-x-20 mt-20">
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-6xl">✉</h1>
            <p className="text-black text-2xl font-bold">电子邮件</p>
            <p className="text-gray-700 text-md text-center mt-3">Email: info@usabclearning.com</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-6xl">💬</h1>
            <p className="text-black text-2xl font-bold mt-4">WeChat</p>
            <p className="text-gray-700 text-lg text-center mt-3">微信号: 14019565582</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">📍</h1>
            <p className="text-black text-2xl font-bold mt-4">US abc 地址</p>
            <p className="text-gray-700 text-lg text-center mt-1">58 Osceola Dr. Boxborough, MA  01719</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-56 h-56 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">📞</h1>
            <p className="text-black text-2xl font-bold mt-5">电话 Phone</p>
            <p className="text-gray-700 text-lg text-center mt-2">US: 1-401-965-5582 China:17879574832</p>
          </div>
        </div>

        {/* Mobile layout - vertical cards */}
        <div className="flex md:hidden flex-col items-center space-y-6 mt-12 px-4">
          <div className="flex flex-col bg-white items-center justify-center w-72 h-48 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">✉</h1>
            <p className="text-black text-xl font-bold">电子邮件</p>
            <p className="text-gray-700 text-sm text-center mt-2">Email: info@usabclearning.com</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-72 h-48 p-5 z-10">
            <h1 className="text-cyan-300 text-5xl">💬</h1>
            <p className="text-black text-xl font-bold mt-3">WeChat</p>
            <p className="text-gray-700 text-base text-center mt-2">微信号: 14019565582</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-72 h-48 p-5 z-10">
            <h1 className="text-cyan-300 text-4xl">📍</h1>
            <p className="text-black text-xl font-bold mt-3">US abc 地址</p>
            <p className="text-gray-700 text-base text-center mt-1">58 Osceola Dr. Boxborough, MA  01719</p>
          </div>
          <div className="flex flex-col bg-white items-center justify-center w-72 h-48 p-5 z-10">
            <h1 className="text-cyan-300 text-4xl">📞</h1>
            <p className="text-black text-xl font-bold mt-4">电话 Phone</p>
            <p className="text-gray-700 text-sm text-center mt-2">US: 1-401-965-5582<br/>China:17879574832</p>
          </div>
        </div>

        {/* Desktop form */}
        <form onSubmit={handleSubmit} className="hidden md:flex flex-col items-center justify-center bg-cyan-500 w-5/12 h-auto p-10 -mt-10 z-0">
          <h1 className="text-white text-3xl mt-10 font-bold">
            联系我们
          </h1>
          <input 
            className="mt-6 w-2/3 h-12 p-4 text-gray-700"
            placeholder="您的名字"
            value={nameIn}
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-2/3 h-12 p-4 text-gray-700"
            placeholder="您的微信号"
            value={wechatIn}
            onChange={(event)=>{setWechatIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-2/3 h-12 p-4 text-gray-700"
            placeholder="您的手机号码"
            value={phoneIn}
            onChange={(event)=>{setPhoneIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-2/3 h-12 p-4 text-gray-700"
            placeholder="想试听的课程"
            value={subjectIn}
            onChange={(event)=>{setSubjectIn(event.target.value);}}
          />
          <button className="bg-red-500 rounded-lg w-28 h-10 mt-5 hover:border text-white font-bold hover:border-white">
            立即领取
          </button>
        </form>

        {/* Mobile form */}
        <form onSubmit={handleSubmit} className="flex md:hidden flex-col items-center justify-center bg-cyan-500 w-11/12 max-w-md h-auto p-8 mt-8 z-0 mx-4">
          <h1 className="text-white text-2xl font-bold mb-2">
            联系我们
          </h1>
          <input 
            className="mt-4 w-full h-12 p-4 text-gray-700 rounded"
            placeholder="您的名字"
            value={nameIn}
            onChange={(event)=>{setNameIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-full h-12 p-4 text-gray-700 rounded"
            placeholder="您的微信号"
            value={wechatIn}
            onChange={(event)=>{setWechatIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-full h-12 p-4 text-gray-700 rounded"
            placeholder="您的手机号码"
            value={phoneIn}
            onChange={(event)=>{setPhoneIn(event.target.value);}}
          />
          <input 
            className="mt-3 w-full h-12 p-4 text-gray-700 rounded"
            placeholder="想试听的课程"
            value={subjectIn}
            onChange={(event)=>{setSubjectIn(event.target.value);}}
          />
          <button className="bg-red-500 rounded-lg w-32 h-12 mt-6 hover:border text-white font-bold hover:border-white">
            立即领取
          </button>
        </form>
      </div>
    </div>
  )
}