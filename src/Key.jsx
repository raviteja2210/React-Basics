import React, { useEffect } from 'react';

function Key() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                console.log('Enter key pressed!');
                // Perform your action here
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <h1>Press Enter</h1>
        </div>
    );
}

export default Key;
