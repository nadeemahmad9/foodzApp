import React, { useState } from "react"
import { motion } from "framer-motion"

const container = {
    width: 50,
    height: 20,
    backgroundColor: "#000",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    // position: "appsoluti"
}

const handle = {
    width: 20,
    height: 20,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}

const Theam = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <div className="fixed left-50">
            <motion.button
                className="toggle-container"
                style={{
                    ...container,
                    justifyContent: "flex-" + (isOn ? "start" : "end"),
                }}
                onClick={toggleSwitch}
                layout
            >
                <motion.div
                    className="toggle-handle"
                    style={handle}
                    layout
                    transition={{
                        type: "spring",
                        duration: 0.3,
                        bounce: 0.3,
                    }}
                />
            </motion.button>
        </div>
    )
}

export default Theam
