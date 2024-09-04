
import MainForm from "./MainForm";
import TopManu from "../pages/TopManu";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-full">
        <TopManu />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <MainForm />
          </div>
        </main>

      </div>
    </>
  );
};

export default Dashboard;
