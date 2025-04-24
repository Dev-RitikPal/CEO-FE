import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex min-h-screen">
        <aside className="w-60 bg-blue-100 p-4"><DashboardHeader/></aside>
        <Sidebar/>
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  