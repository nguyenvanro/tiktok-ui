import { Children } from "react";
import Header from "./Header";

function DefalutLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default DefalutLayout;