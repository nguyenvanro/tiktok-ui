import { Children } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";

function DefalutLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default DefalutLayout;