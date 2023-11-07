import React from "react";

function Clear() {
    const [iptText, setIptText] = React.useState('');
 
    const handleIptChange = (e) => {
        setIptText (e.target.value);
    }

    const handleClick =(e) => {
        e.preventDefault();

        setIptText("");
    }

    return(
        <form onSubmit={handleClick} className="container input-clear-container">
            <div>
                <input
                placeholder="Enter text"
                value={iptText}
                onChange={handleIptChange}
                className="ipt-clear"
                />
            </div>
            <div>
                <button type="submit" className="text-display-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default Clear; 