import type { Student } from "../types/student";

export type StudentProgressResult = {
  passCount: number;
  failCount: number;
  averageMarks: number;
  topper: Student | null;
  failedStudents: Student[];
};

export function analyzeStudentProgress(
  students: Student[],
): StudentProgressResult {
  if (students.length === 0) {
    return {
      passCount: 0,
      failCount: 0,
      averageMarks: 0,
      topper: null,
      failedStudents: [],
    };
  }

  const passCount = students.filter((student) => student.marks >= 40).length;
  const failCount = students.filter((student) => student.marks < 40).length;
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = totalMarks / students.length;

  const topper = students.reduce((best, student) =>
    student.marks > best.marks ? student : best,
  );

  const failedStudents = students.filter((student) => student.marks < 40);

  return {
    passCount,
    failCount,
    averageMarks,
    topper,
    failedStudents,
  };
}
