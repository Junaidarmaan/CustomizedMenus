import React from 'react';
import "../css/Loader.css"; // Link the CSS file

function PreLoader() {
    const text = "AL JOINT MANDI";
    const words = text.split(' ');  // Split into words (not characters)

    return (
        <div className="jiggle-container">
            <div className="jiggle-words">
                {words.map((word, wordIndex) => (
                    <div key={wordIndex} className="jiggle-word">
                        {word.split('').map((char, charIndex) => (
                            <span key={charIndex} className="jiggle-letter" style={{ animationDelay: `${(wordIndex * 0.5 + charIndex * 0.1)}s` }}>
                                {char}
                            </span>
                        ))}
                        <span className="jiggle-space">&nbsp;</span> {/* Space between words */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreLoader;
