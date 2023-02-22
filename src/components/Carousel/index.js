import React from 'react';

const Carousel = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white w-1/2 rounded-lg shadow-lg overflow-hidden">
                <div className="flex">
                    <img
                        className="h-64 w-auto rounded-lg object-cover"
                        src="https://sepucuksurat.id/wp-content/uploads/2022/12/15-768x1152.jpg"
                        alt="carousel-1"
                    />
                    <img
                        className="h-64 w-auto rounded-lg object-cover"
                        src="https://images.unsplash.com/photo-1548199975-5d5c26c10df6"
                        alt="carousel-2"
                    />
                    <img
                        className="h-64 w-auto rounded-lg object-cover"
                        src="https://images.unsplash.com/photo-1524863481032-564f6f5f5f5c"
                        alt="carousel-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
