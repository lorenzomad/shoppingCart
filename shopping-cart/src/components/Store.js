import React from "react";
import NavigationBar from "./NavigationBar";

const Store = () => {
    return (
        <div className="store">
            <NavigationBar inStore={true} />
            <h1>Store page</h1>
        </div>
    )
}

export default Store