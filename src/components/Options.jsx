export default function Options({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="options">
      <i onClick={() => setSidebarOpen(!sidebarOpen)} className="fa-solid fa-gear"></i>
    </div>
  );
}