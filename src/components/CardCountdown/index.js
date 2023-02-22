import React, { useEffect, useRef, useState } from 'react'

export default function CardCountdown({ text, targetDate, value }) {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        let node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            if (node) {
                observer.unobserve(node);
                node = null;
            }
            clearInterval(intervalId)
        };
    }, [sectionRef, targetDate])

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00'
            };
        }

        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const addLeadingZeros = value => {
        value = String(value);
        while (value.length < 2) {
            value = "0" + value;
        }
        return value;
    }

    const setTime = () => {
        if (value === 'days') {
            return addLeadingZeros(timeLeft.days)
        }
        if (value === 'hours') {
            return addLeadingZeros(timeLeft.hours)
        }
        if (value === 'minutes') {
            return addLeadingZeros(timeLeft.minutes)
        }
        if (value === 'seconds') {
            return addLeadingZeros(timeLeft.seconds)
        }
    }
    return (
        <div ref={sectionRef} className={`bg-white text-primary rounded-full p-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
            <h1 className={`text-6xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>{setTime()}</h1>
            <h1 className={`text-xl transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>{text}</h1>
        </div>
    )
}
