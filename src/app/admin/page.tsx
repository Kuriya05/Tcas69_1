'use client';

import { usePortfolioStore } from '../../store/portfolioStore';
import { Student } from '../../types/portfolio';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronUp, ChevronDown, Eye, Users, GraduationCap } from 'lucide-react';

type SortKey = keyof Student;
type SortOrder = 'asc' | 'desc';

export default function Admin() {
  const { students, sortStudents } = usePortfolioStore();
  const [sortKey, setSortKey] = useState<SortKey>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (key: SortKey) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
    sortStudents(key, newOrder);
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <div className="w-4 h-4" />;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-green-400" />
    ) : (
      <ChevronDown className="w-4 h-4 text-green-400" />
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-green-800/10 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="bg-black border-2 border-green-400 rounded-xl p-6 mb-6 relative overflow-hidden" style={{boxShadow: '0 0 40px rgba(74, 222, 128, 0.3)'}}>
          <div className="absolute inset-0 bg-green-400/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="w-12 h-12 bg-black border-2 border-green-400 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-green-400" style={{textShadow: '0 0 20px #4ade80'}}>
              TCAS69 Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-6 text-green-200 relative z-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-green-400/30 rounded-lg" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-semibold">นักเรียนที่สมัคร: <span className="text-green-400">{students.length}</span> คน</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-green-400/30 rounded-lg" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.2)'}}>
              <span className="font-semibold">เกรดเฉลี่ย: </span>
              <span className="text-green-400 font-bold" style={{textShadow: '0 0 8px #4ade80'}}>
                {students.length > 0 
                  ? (students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)
                  : '0.00'
                }
              </span>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-black border-2 border-green-400 rounded-xl overflow-hidden relative" style={{boxShadow: '0 0 40px rgba(74, 222, 128, 0.3)'}}>
          <div className="absolute inset-0 bg-green-400/5"></div>
          {students.length === 0 ? (
            <div className="p-12 text-center relative z-10">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <div className="w-16 h-16 bg-black border-2 border-green-400 rounded-full flex items-center justify-center" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                  <Users className="w-8 h-8 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2" style={{textShadow: '0 0 10px rgba(74, 222, 128, 0.3)'}}>
                ยังไม่มีนักเรียนสมัคร
              </h3>
              <p className="text-gray-500 mb-6">
                เมื่อมีนักเรียนสมัครเข้ามา ข้อมูลจะแสดงที่นี่
              </p>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-black border-2 border-green-400 text-green-400 px-6 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group"
                style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.3)'}}
              >
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">เพิ่มข้อมูลนักเรียน</span>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto relative z-10">
              <table className="w-full">
                <thead className="bg-black/80 border-b-2 border-green-400">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('firstName')}
                        className="flex items-center gap-2 text-green-300 font-semibold hover:text-green-200 transition-colors"
                      >
                        ชื่อ-นามสกุล
                        <SortIcon column="firstName" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('school')}
                        className="flex items-center gap-2 text-green-300 font-semibold hover:text-green-200 transition-colors"
                      >
                        โรงเรียน
                        <SortIcon column="school" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('gpa')}
                        className="flex items-center gap-2 text-green-300 font-semibold hover:text-green-200 transition-colors"
                      >
                        GPA
                        <SortIcon column="gpa" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('major')}
                        className="flex items-center gap-2 text-green-300 font-semibold hover:text-green-200 transition-colors"
                      >
                        สาขา
                        <SortIcon column="major" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('university')}
                        className="flex items-center gap-2 text-green-300 font-semibold hover:text-green-200 transition-colors"
                      >
                        มหาวิทยาลัย
                        <SortIcon column="university" />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-center text-green-300 font-semibold">
                      รายละเอียด
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-800/50">
                  {students.map((student, index) => (
                    <tr 
                      key={student.id} 
                      className={`transition-all duration-300 hover:bg-green-400/10 border-l-2 border-transparent hover:border-green-400 ${
                        index % 2 === 0 ? 'bg-green-950/10' : 'bg-transparent'
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-white">
                          {student.firstName} {student.lastName}
                        </div>
                        <div className="text-sm text-green-300">
                          {student.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-green-100">
                        {student.school}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-bold ${
                          student.gpa >= 3.5 ? 'text-green-400' :
                          student.gpa >= 3.0 ? 'text-yellow-400' :
                          student.gpa >= 2.5 ? 'text-orange-400' : 'text-red-400'
                        }`}>
                          {student.gpa.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-green-100">
                        {student.major}
                      </td>
                      <td className="px-6 py-4 text-green-100">
                        {student.university}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          href={`/admin/student/${student.id}`}
                          className="inline-flex items-center gap-2 bg-black border-2 border-green-400 text-green-400 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold relative overflow-hidden group"
                          style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.3)'}}
                        >
                          <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          <Eye className="w-4 h-4 relative z-10" />
                          <span className="relative z-10">ดูรายละเอียด</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="/portfolio"
            className="bg-black border-2 border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group"
            style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'}}
          >
            <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">เพิ่มนักเรียนใหม่</span>
          </Link>
        </div>
      </div>
    </div>
  );
}