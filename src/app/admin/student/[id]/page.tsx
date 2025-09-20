'use client';

import { usePortfolioStore } from '../../../../store/portfolioStore';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, User, School, GraduationCap, Phone, Mail, MapPin, Star, Calendar, University } from 'lucide-react';

export default function StudentDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { getStudent } = usePortfolioStore();
  
  const student = getStudent(id as string);

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black p-6 flex items-center justify-center">
        <div className="bg-black/80 backdrop-blur-sm rounded-xl border-2 border-red-400 p-8 text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">🚫 ไม่พบข้อมูลนักเรียน</h1>
          <p className="text-gray-300 mb-6">ไม่สามารถค้นหาข้อมูลนักเรียนที่ระบุได้</p>
          <Link
            href="/admin"
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← กลับไปหน้าแอดมิน
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-green-800/10 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-48 right-24 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-24 left-48 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 right-16 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      </div>
      
      <div className="max-w-6xl mx-auto p-6 relative z-10">
        <div className="bg-black border-2 border-green-400 rounded-xl p-6 mb-6 relative overflow-hidden" style={{boxShadow: '0 0 40px rgba(74, 222, 128, 0.3)'}}>
          <div className="absolute inset-0 bg-green-400/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors px-3 py-2 border border-green-400/30 rounded-lg hover:border-green-400 hover:bg-green-400/10"
            >
              <ArrowLeft className="w-5 h-5" />
              กลับ
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <div className="w-10 h-10 bg-black border-2 border-green-400 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                  <User className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-green-400" style={{textShadow: '0 0 20px #4ade80'}}>
                รายละเอียดนักเรียน
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2 relative z-10" style={{textShadow: '0 0 15px #4ade80'}}>
                <User className="w-6 h-6" />
                ข้อมูลส่วนตัว
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-green-300 font-semibold mb-2">ชื่อ-นามสกุล</label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.firstName} {student.lastName}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    อีเมล
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.email}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    วันเกิด
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {formatDate(student.dateOfBirth)}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    หมายเลขโทรศัพท์
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.phoneNumber}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  ที่อยู่
                </label>
                <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                  {student.address}
                </div>
              </div>
            </div>

            {/* Education Information */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2 relative z-10" style={{textShadow: '0 0 15px #4ade80'}}>
                <GraduationCap className="w-6 h-6" />
                ข้อมูลการศึกษา
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <School className="w-4 h-4" />
                    โรงเรียน
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.school}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    เกรดเฉลี่ย (GPA)
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3">
                    <span className={`font-bold text-xl ${
                      student.gpa >= 3.5 ? 'text-green-400' :
                      student.gpa >= 3.0 ? 'text-yellow-400' :
                      student.gpa >= 2.5 ? 'text-orange-400' : 'text-red-400'
                    }`}>
                      {student.gpa.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2">สาขาที่เลือก</label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.major}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2 flex items-center gap-2">
                    <University className="w-4 h-4" />
                    มหาวิทยาลัย
                  </label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-3 text-white">
                    {student.university}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h2 className="text-2xl font-bold text-green-400 mb-6 relative z-10" style={{textShadow: '0 0 15px #4ade80'}}>ข้อมูลเพิ่มเติม</h2>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <label className="block text-green-300 font-semibold mb-2">ความสามารถพิเศษ</label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-4 text-white whitespace-pre-wrap">
                    {student.specialAbilities}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-300 font-semibold mb-2">เหตุผลในการสมัครเข้าเรียน</label>
                  <div className="bg-gray-900 border-2 border-green-600 rounded-lg p-4 text-white whitespace-pre-wrap">
                    {student.applicationReason}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h3 className="text-xl font-bold text-green-400 mb-4 relative z-10" style={{textShadow: '0 0 10px #4ade80'}}>รูปโปรไฟล์</h3>
              <div className="aspect-square bg-black border-2 border-gray-600 rounded-lg overflow-hidden relative" style={{boxShadow: 'inset 0 0 20px rgba(74, 222, 128, 0.1)'}}>
                {student.profileImage ? (
                  <Image
                    src={student.profileImage}
                    alt="รูปโปรไฟล์"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User className="w-16 h-16" />
                  </div>
                )}
              </div>
              {!student.profileImage && (
                <p className="text-center text-gray-400 text-sm mt-2">ยังไม่มีรูปโปรไฟล์</p>
              )}
            </div>

            {/* Image Galleries */}
            {(student.activityImages?.length || student.awardImages?.length || student.portfolioImages?.length) && (
              <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
                <div className="absolute inset-0 bg-green-400/5"></div>
                <h3 className="text-xl font-bold text-green-400 mb-4 relative z-10" style={{textShadow: '0 0 10px #4ade80'}}>แกลเลอรี่รูปภาพ</h3>
                
                {student.activityImages && student.activityImages.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-300 mb-3" style={{textShadow: '0 0 8px #4ade80'}}>กิจกรรมและผลงาน</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {student.activityImages.map((image, index) => (
                        <div key={index} className="aspect-square bg-black rounded-lg overflow-hidden border border-green-600 relative group" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
                          <Image
                            src={image}
                            alt={`กิจกรรม ${index + 1}`}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                            onClick={() => window.open(image, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {student.awardImages && student.awardImages.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-300 mb-3" style={{textShadow: '0 0 8px #4ade80'}}>รางวัลและเกียรติบัตร</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {student.awardImages.map((image, index) => (
                        <div key={index} className="aspect-square bg-black rounded-lg overflow-hidden border border-green-600 relative group" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
                          <Image
                            src={image}
                            alt={`รางวัล ${index + 1}`}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                            onClick={() => window.open(image, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {student.portfolioImages && student.portfolioImages.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-3" style={{textShadow: '0 0 8px #4ade80'}}>ผลงานและ Portfolio</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {student.portfolioImages.map((image, index) => (
                        <div key={index} className="aspect-square bg-black rounded-lg overflow-hidden border border-green-600 relative group" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
                          <Image
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                            onClick={() => window.open(image, '_blank')}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Statistics */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h3 className="text-xl font-bold text-green-400 mb-4 relative z-10" style={{textShadow: '0 0 10px #4ade80'}}>สถิติ</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-green-300">วันที่สมัคร:</span>
                  <span className="text-white text-sm">{student.createdAt.toLocaleDateString('th-TH')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-300">รหัสผู้สมัคร:</span>
                  <span className="text-white text-sm font-mono">#{student.id}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/admin"
                className="w-full bg-black border-2 border-green-400 text-green-400 font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center block relative overflow-hidden group"
                style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.3)'}}
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">กลับไปรายชื่อทั้งหมด</span>
              </Link>
              
              <button
                onClick={() => window.print()}
                className="w-full bg-black border-2 border-green-600 text-green-300 font-semibold py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden group"
                style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">พิมพ์รายละเอียด</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}