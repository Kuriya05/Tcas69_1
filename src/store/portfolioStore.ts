import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Student, PortfolioStore } from '../types/portfolio';

export const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set, get) => ({
      students: [],
      
      addStudent: (studentData) => {
        const newStudent: Student = {
          ...studentData,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        set((state) => ({
          students: [...state.students, newStudent],
        }));
      },
      
      updateStudent: (id, updatedData) => {
        set((state) => ({
          students: state.students.map((student) =>
            student.id === id ? { ...student, ...updatedData } : student
          ),
        }));
      },
      
      deleteStudent: (id) => {
        set((state) => ({
          students: state.students.filter((student) => student.id !== id),
        }));
      },
      
      getStudent: (id) => {
        return get().students.find((student) => student.id === id);
      },
      
      sortStudents: (key, order) => {
        set((state) => ({
          students: [...state.students].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];
            
            // Handle undefined values
            if (aValue === undefined && bValue === undefined) return 0;
            if (aValue === undefined) return 1;
            if (bValue === undefined) return -1;
            
            if (order === 'asc') {
              return aValue > bValue ? 1 : -1;
            } else {
              return aValue < bValue ? 1 : -1;
            }
          }),
        }));
      },
    }),
    {
      name: 'portfolio-storage',
    }
  )
);