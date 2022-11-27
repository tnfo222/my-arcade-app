import React from "react";
import Board from "./tetris/board";
import "./index.css";

export default function Tetris() {
    return (
        <div className="t-parent">
            <Board/>
        </div>
    );
}