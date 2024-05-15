import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './card.scss';

const Card = ({ outside, text, decor, phrase, img }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const [elementTop, setElementTop] = useState(0);
    const [elementBottom, setElementBottom] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setElementTop(rect.top + window.scrollY);
            setElementBottom(rect.bottom + window.scrollY);
        }
    }, [ref]);

    const scale = useTransform(scrollY, [elementTop - window.innerHeight, elementBottom], [1, 1.5]);
    const translateY = useTransform(scrollY, [elementTop - window.innerHeight, elementBottom], ['0%', '-250%']);

    let clazz = 'card';

    if (outside) {
        clazz += ' card-right';
    }

    return (
        <div className={clazz}>
            <span className="card__decor">{decor}</span>
            <div className="card__image-container">
                <motion.img
                    ref={ref}
                    style={{ scale: scale }}
                    src={img}
                    alt="image"
                    className="card__image"
                />
            </div>
            <div className="card__image-text">{text}</div>
            <motion.span
                ref={ref}
                style={{ translateY }}
                className="card__image-phrase">{phrase}</motion.span>
        </div>
    );
}

export default Card;