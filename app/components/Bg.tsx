import React from "react";

type BackgroundAnimationProps = {
    children: React.ReactNode;
};

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen  overflow-hidden">
            {/* Background Animated Layers */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 rounded-full animate-floating filter blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-b from-blue-500 via-teal-500 to-green-500 opacity-50 rounded-full animate-floating animation-delay-2000 filter blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-gradient-to-l from-yellow-400 via-orange-500 to-red-500 opacity-50 rounded-full animate-floating animation-delay-4000 filter blur-3xl"></div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-5">
                {children}
            </div>
        </div>
    );
};

export default BackgroundAnimation;
