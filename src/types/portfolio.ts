export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  school: string;
  gpa: number;
  specialAbilities: string;
  applicationReason: string;
  major: string;
  university: string;
  email: string;
  dateOfBirth: string;
  profileImage?: string;
  activityImages?: string[];
  awardImages?: string[];
  portfolioImages?: string[];
  createdAt: Date;
}

export interface PortfolioStore {
  students: Student[];
  addStudent: (student: Omit<Student, 'id' | 'createdAt'>) => void;
  updateStudent: (id: string, student: Partial<Student>) => void;
  deleteStudent: (id: string) => void;
  getStudent: (id: string) => Student | undefined;
  sortStudents: (key: keyof Student, order: 'asc' | 'desc') => void;
}