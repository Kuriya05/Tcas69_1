import { z } from 'zod';

export const portfolioSchema = z.object({
  firstName: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  lastName: z.string().min(2, 'นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
  address: z.string().min(10, 'ที่อยู่ต้องมีอย่างน้อย 10 ตัวอักษร'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'หมายเลขโทรศัพท์ต้องเป็นตัวเลข 10 หลัก'),
  school: z.string().min(3, 'ชื่อโรงเรียนต้องมีอย่างน้อย 3 ตัวอักษร'),
  gpa: z.number().min(0).max(4, 'เกรดเฉลี่ยต้องอยู่ระหว่าง 0-4'),
  specialAbilities: z.string().min(10, 'ความสามารถพิเศษต้องมีอย่างน้อย 10 ตัวอักษร'),
  applicationReason: z.string().min(20, 'เหตุผลในการสมัครต้องมีอย่างน้อย 20 ตัวอักษร'),
  major: z.string().min(2, 'สาขาต้องมีอย่างน้อย 2 ตัวอักษร'),
  university: z.string().min(3, 'มหาวิทยาลัยต้องมีอย่างน้อย 3 ตัวอักษร'),
  dateOfBirth: z.string().min(1, 'กรุณาเลือกวันเกิด'),
});

export type PortfolioFormData = z.infer<typeof portfolioSchema>;