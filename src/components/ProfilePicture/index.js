import React from "react";

function ProfilePicture({ initials, size }) {
    const sizes = {
        small: "h-6 w-6",
        medium: "h-8 w-8",
        large: "h-12 w-12",
    };

    const borderRadius = {
        rounded: "rounded-full",
        square: "",
    };

    return (
        <div
            className={`bg-gray-400 flex items-center justify-center text-white ${sizes[size]} ${borderRadius.rounded}`}
        >
            <span className="text-sm font-bold">{initials}</span>
        </div>
    );
}

export default ProfilePicture;
