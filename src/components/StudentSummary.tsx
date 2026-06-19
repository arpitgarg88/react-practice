import type { Student } from "../types/student";
import { analyzeStudentProgress } from "../utils/studentProgress";

type StudentSummaryProps = {
  students: Student[];
};

export function StudentSummary({ students }: StudentSummaryProps) {
  const { passCount, failCount, averageMarks, topper, failedStudents } =
    analyzeStudentProgress(students);

  return (
    <div className="section">
      <h2>Student Summary</h2>

      <div>
        <p>Pass count: {passCount}</p>
        <p>Fail count: {failCount}</p>
        <p>Average marks: {averageMarks.toFixed(2)}</p>
      </div>

      <div>
        <h3>Topper</h3>
        {topper ? (
          <p>
            {topper.name}: {topper.marks}
          </p>
        ) : (
          <p>No students</p>
        )}
      </div>

      <div>
        <h3>Failed Students</h3>
        {failedStudents.length > 0 ? (
          <ul>
            {failedStudents.map((student) => (
              <li key={student.id}>{student.name}: {student.marks}</li>
            ))}
          </ul>
        ) : (
          <p>No failed students</p>
        )}
      </div>
    </div>
  );
}
