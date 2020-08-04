import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

import upArrow from "../assets/img/icons/uparrow.svg"

const ToTopButton = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        if (pageYOffset > 1000) {
            setVisibility(true)
        }
        else {
            setVisibility(false)
        }
    }, [pageYOffset]);

    if (!visible) {
        return false;
    }

    return (
        <a className="back-to-top-btn" href="/#main"
            css={{
                zIndex: "3",
                position: "fixed",
                bottom: "20px",
                right: "50px",
                "@media(max-width:820px)": {
                    right: "20px"
                }
            }}>
            <button
                css={{
                    border: "1.5px solid #fff",
                    borderRadius: "50%",
                    backgroundColor: "#A0A0A0",
                    color: "#fff",
                    // fontSize: "18px",
                    // fontWeight: "600",
                    height: "45px",
                    padding: "0 15px",
                    transition: "0.5s",
                    ":hover": {
                        backgroundColor: "#c8102e",
                        border: "1.5px solid #c8102e"
                    }
                }}>
                <img src={upArrow} css={{ width: "15px" }} />
                {/* <div>Top</div> */}
            </button>
        </a>
    );
}

export default ToTopButton;

