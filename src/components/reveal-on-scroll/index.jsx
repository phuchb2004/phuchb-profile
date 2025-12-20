import { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, direction = 'up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-section ${direction} ${isVisible ? 'is-visible' : ''}`}
        >
            { children }
        </div>
    )
}

export default RevealOnScroll;
