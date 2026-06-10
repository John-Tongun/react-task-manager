import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import UserCard from "../components/UserCard";

export default function Dashboard() {
    return (
        <div>
            <Sidebar />

            <main>
                <h1>Dashboard</h1>

                <UserCard />

                <DashboardStats />
            </main>

        </div>
    );
}