// import { sampleStudents } from "./data/sampleStudents";
// import { sampleTasks } from "./data/sampleTasks";
import { sampleUsers } from "./data/sampleUsers";
// import { StudentSummary } from "./components/StudentSummary";
// import { TaskBoard } from "./components/TaskBoard";
// import { UserDirectory } from "./components/UserDirectory";
import { SimulatedUserLoader } from "./components/SimulatedUserLoader";
import { FocusableSearchPanel } from "./components/FocusableSearchPanel";
import { DebouncedUserSearch } from "./components/DebouncedUserSearch";
import { WindowShortcutHint } from "./components/WindowShortcutHint";

function App() {
  return (
    <>
      <h1>React Practice</h1>
      {/* <StudentSummary students={sampleStudents} />
      <TaskBoard initialTasks={sampleTasks} />
      <UserDirectory users={sampleUsers} /> */}

      <h1>React Hooks Practice</h1>
      <WindowShortcutHint />
      <FocusableSearchPanel panelTitle="Search Users" />
      <DebouncedUserSearch users={sampleUsers} />
      <SimulatedUserLoader />
    </>
  );
}

export default App;