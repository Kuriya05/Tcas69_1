'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { portfolioSchema, PortfolioFormData } from '../../validation/portfolioValidation';
import { usePortfolioStore } from '../../store/portfolioStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageUploader from '../../components/ImageUploader';

export default function PortfolioPage() {
  const { addStudent } = usePortfolioStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileImage, setProfileImage] = useState<string[]>([]);
  const [activityImages, setActivityImages] = useState<string[]>([]);
  const [awardImages, setAwardImages] = useState<string[]>([]);
  const [portfolioImages, setPortfolioImages] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema),
  });

  const onSubmit = async (data: PortfolioFormData) => {
    setIsSubmitting(true);
    try {
      addStudent({
        ...data,
        profileImage: profileImage[0],
        activityImages,
        awardImages,
        portfolioImages,
      });
      alert('บันทึกข้อมูลสำเร็จ!');
      reset();
      setProfileImage([]);
      setActivityImages([]);
      setAwardImages([]);
      setPortfolioImages([]);
      router.push('/admin');
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-green-800/10 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 p-6">
        <div className="bg-black border-2 border-green-400 rounded-xl p-8 relative overflow-hidden" style={{boxShadow: '0 0 40px rgba(74, 222, 128, 0.3)'}}>
          <div className="absolute inset-0 bg-green-400/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          
          <div className="text-center mb-8 relative z-10">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <span className="text-green-400 text-2xl animate-pulse">⚡</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-green-400 mb-2" style={{textShadow: '0 0 20px #4ade80'}}>
              TCAS69 Portfolio Registration
            </h1>
            <p className="text-green-200">กรอกข้อมูลส่วนตัวสำหรับการสมัครเข้าศึกษา</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  ชื่อ *
                </label>
                <input
                  {...register('firstName')}
                  className="w-full px-4 py-3 bg-black border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-all duration-300 relative"
                  style={{boxShadow: 'inset 0 0 10px rgba(74, 222, 128, 0.1)'}}
                  placeholder="กรอกชื่อ"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  นามสกุล *
                </label>
                <input
                  {...register('lastName')}
                  className="w-full px-4 py-3 bg-black border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-all duration-300 relative"
                  style={{boxShadow: 'inset 0 0 10px rgba(74, 222, 128, 0.1)'}}
                  placeholder="กรอกนามสกุล"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  อีเมล *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  วันเกิด *
                </label>
                <input
                  {...register('dateOfBirth')}
                  type="date"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-400 text-sm mt-1">{errors.dateOfBirth.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-green-300 font-semibold mb-2">
                ที่อยู่ *
              </label>
              <textarea
                {...register('address')}
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                placeholder="กรอกที่อยู่ปัจจุบัน"
              />
              {errors.address && (
                <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  หมายเลขโทรศัพท์ *
                </label>
                <input
                  {...register('phoneNumber')}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="0812345678"
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  โรงเรียน *
                </label>
                <input
                  {...register('school')}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="โรงเรียนมัธยมปลาย"
                />
                {errors.school && (
                  <p className="text-red-400 text-sm mt-1">{errors.school.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-green-300 font-semibold mb-2">
                เกรดเฉลี่ย (GPA) *
              </label>
              <input
                {...register('gpa', { valueAsNumber: true })}
                type="number"
                step="0.01"
                min="0"
                max="4"
                className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                placeholder="3.50"
              />
              {errors.gpa && (
                <p className="text-red-400 text-sm mt-1">{errors.gpa.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  สาขาที่เลือก *
                </label>
                <input
                  {...register('major')}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="วิศวกรรมคอมพิวเตอร์"
                />
                {errors.major && (
                  <p className="text-red-400 text-sm mt-1">{errors.major.message}</p>
                )}
              </div>

              <div>
                <label className="block text-green-300 font-semibold mb-2">
                  มหาวิทยาลัย *
                </label>
                <input
                  {...register('university')}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า"
                />
                {errors.university && (
                  <p className="text-red-400 text-sm mt-1">{errors.university.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-green-300 font-semibold mb-2">
                ความสามารถพิเศษ *
              </label>
              <textarea
                {...register('specialAbilities')}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                placeholder="บอกเล่าความสามารถพิเศษของคุณ..."
              />
              {errors.specialAbilities && (
                <p className="text-red-400 text-sm mt-1">{errors.specialAbilities.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-300 font-semibold mb-2">
                เหตุผลในการสมัครเข้าเรียน *
              </label>
              <textarea
                {...register('applicationReason')}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-green-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors"
                placeholder="เหตุผลที่คุณต้องการเข้าเรียนในสาขานี้..."
              />
              {errors.applicationReason && (
                <p className="text-red-400 text-sm mt-1">{errors.applicationReason.message}</p>
              )}
            </div>

            {/* Image Upload Sections */}
            <div className="bg-black border-2 border-green-400 rounded-xl p-6 relative overflow-hidden" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)'}}>
              <div className="absolute inset-0 bg-green-400/5"></div>
              <h2 className="text-2xl font-bold text-green-400 mb-6 relative z-10 flex items-center gap-2" style={{textShadow: '0 0 10px #4ade80'}}>
                <span className="text-green-400">⚡</span>
                อัพโหลดรูปภาพ
              </h2>
              
              <div className="space-y-8 relative z-10">
                <ImageUploader
                  label="รูปโปรไฟล์ส่วนตัว"
                  onImagesChange={setProfileImage}
                  maxImages={1}
                  currentImages={profileImage}
                />
                
                <ImageUploader
                  label="รูปกิจกรรมและผลงาน"
                  onImagesChange={setActivityImages}
                  maxImages={5}
                  currentImages={activityImages}
                />
                
                <ImageUploader
                  label="รูปรางวัลและเกียรติบัตร"
                  onImagesChange={setAwardImages}
                  maxImages={5}
                  currentImages={awardImages}
                />
                
                <ImageUploader
                  label="รูปผลงานและ Portfolio"
                  onImagesChange={setPortfolioImages}
                  maxImages={10}
                  currentImages={portfolioImages}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6 relative z-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-black border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">
                  {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => reset()}
                className="px-8 py-4 bg-black border-2 border-green-600 text-green-300 font-bold rounded-lg transition-all duration-300 relative overflow-hidden group"
                style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)'}}
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">ล้างข้อมูล</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}