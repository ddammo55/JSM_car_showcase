"use client";
import { CustomButtonProps } from '@/type';

export default function CustomButton({ title, containerStyles, handleClick, btnType} : CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    );
}

