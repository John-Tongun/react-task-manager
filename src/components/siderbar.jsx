import { useLayoutEffect } from "react";
import {link} from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul>
                <li>
                    <Link to="/">dashboard</Link>
                    <li>
                    <Link to="/tasks">tasks</Link>
                    </li>
                    <li>
                    <Link to="/reports">Reports</Link>
                    </li>
                </li>
                    <li>
                    <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to="/settings">Settings</Link>
                    </li>

            </ul>
        </aside>
    );
}
