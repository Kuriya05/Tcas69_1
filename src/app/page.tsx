'use client';

import Link from 'next/link';
import { Zap, Users, FileText, Star, Award, TrendingUp } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';

export default function Home() {
  const { students } = usePortfolioStore();

  const topStudents = students
    .sort((a, b) => b.gpa - a.gpa)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-400 rounded-full mb-6 animate-pulse">
              <Zap className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">
              <span className="text-green-400">TCAS69</span>
            </h1>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              ระบบจัดการ Portfolio สำหรับการสมัครเข้าศึกษาระดับอุดมศึกษา
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/portfolio"
              className="relative bg-black border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden group"
              style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
            >
              <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FileText className="w-5 h-5 relative z-10" />
              <span className="relative z-10">เริ่มสมัครเดี๋ยวนี้</span>
            </Link>
            
            <Link
              href="/admin"
              className="relative bg-black border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden group"
              style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
            >
              <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Users className="w-5 h-5 relative z-10" />
              <span className="relative z-10">ดูข้อมูลผู้สมัคร</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 10px #4ade80'}}>{students.length}</h3>
              <p className="text-green-200 relative">นักเรียนที่สมัคร</p>
            </div>
            
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <Star className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 10px #4ade80'}}>
                {students.length > 0 
                  ? (students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)
                  : '0.00'
                }
              </h3>
              <p className="text-green-200 relative">เกรดเฉลี่ยเฉลี่ย</p>
            </div>
            
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 10px #4ade80'}}>100%</h3>
              <p className="text-green-200 relative">ความสำเร็จระบบ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Students Section */}
      {topStudents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-400 mb-12 flex items-center justify-center gap-3" style={{textShadow: '0 0 20px #4ade80'}}>
              <Award className="w-10 h-10 animate-pulse" />
              นักเรียนยอดเยี่ยม
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topStudents.map((student, index) => (
                <div
                  key={student.id}
                  className={`bg-black/80 backdrop-blur-sm rounded-xl border-2 p-6 text-center shadow-2xl transform transition-all duration-300 hover:scale-105 ${
                    index === 0 ? 'border-yellow-400' :
                    index === 1 ? 'border-gray-300' :
                    'border-orange-400'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 ? 'bg-yellow-400' :
                    index === 1 ? 'bg-gray-300' :
                    'bg-orange-400'
                  }`}>
                    <span className="text-black font-bold text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {student.firstName} {student.lastName}
                  </h3>
                  
                  <p className="text-green-300 mb-2">{student.school}</p>
                  
                  <div className={`text-2xl font-bold mb-2 ${
                    index === 0 ? 'text-yellow-400' :
                    index === 1 ? 'text-gray-300' :
                    'text-orange-400'
                  }`}>
                    GPA: {student.gpa.toFixed(2)}
                  </div>
                  
                  <p className="text-green-200 text-sm">{student.major}</p>
                  
                  <Link
                    href={`/admin/student/${student.id}`}
                    className="inline-block mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-400 mb-12 relative" style={{textShadow: '0 0 20px #4ade80'}}>
            <Zap className="inline-block w-10 h-10 mr-3 animate-pulse" />
            คุณสมบัติของระบบ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 8px #4ade80'}}>ฟอร์มสมัคร</h3>
              <p className="text-green-200 text-sm relative">กรอกข้อมูลส่วนตัวและ Portfolio ของคุณ</p>
            </div>
            
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 8px #4ade80'}}>จัดการข้อมูล</h3>
              <p className="text-green-200 text-sm relative">เก็บข้อมูลใน Store ที่ปลอดภัย</p>
            </div>
            
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <Star className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 8px #4ade80'}}>ตรวจสอบ</h3>
              <p className="text-green-200 text-sm relative">ระบบตรวจสอบความถูกต้องข้อมูล</p>
            </div>
            
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 relative" style={{textShadow: '0 0 8px #4ade80'}}>อัพโหลดรูป</h3>
              <p className="text-green-200 text-sm relative">อัพโหลดรูปภาพและผลงานต่าง ๆ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black border-2 border-green-400 rounded-xl p-12 relative overflow-hidden" style={{boxShadow: '0 0 40px rgba(74, 222, 128, 0.3)'}}>
            <div className="absolute inset-0 bg-green-400/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-green-400 mb-6 text-center" style={{textShadow: '0 0 20px #4ade80'}}>
                พร้อมเริ่มต้นการเดินทางและเข้าสู่อนาคต
              </h2>
              <p className="text-xl text-green-200 mb-8 text-center">
                สร้าง Portfolio ของคุณวันนี้ และเข้าสู่มหาวิทยาลัยในฝันของคุณ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portfolio"
                  className="relative bg-black border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
                >
                  <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    สมัครตอนนี้
                  </span>
                </Link>
                
                <Link
                  href="/about"
                  className="relative bg-black border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
                >
                  <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">เรียนรู้เพิ่มเติม</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
