import CreateTask from "../other/CreateTask";
import Header from "../other/Header";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-6 bg-gray-100">
      {/* Include the Header Component */}
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
