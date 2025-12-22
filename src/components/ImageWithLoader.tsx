import { useState } from 'react';
import { Skeleton } from '@mui/material';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
}

export default function ImageWithLoader({ 
    className, 
    style, 
    containerClassName, 
    containerStyle,
    onLoad,
    ...props 
}: ImageWithLoaderProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setLoaded(true);
        if (onLoad) {
            onLoad(e);
        }
    };

    return (
        <div 
            className={`image-loader-container ${containerClassName || ''}`} 
            style={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%',
                ...containerStyle 
            }}
        >
            {!loaded && (
                <Skeleton 
                    variant="rectangular" 
                    width="100%" 
                    height="100%" 
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0,
                        zIndex: 1
                    }} 
                />
            )}
            <img 
                className={className}
                style={{ 
                    ...style, 
                    opacity: loaded ? 1 : 0, 
                    transition: 'opacity 0.5s ease',
                    display: 'block' // Ensures no extra space below inline images
                }}
                onLoad={handleLoad}
                {...props}
            />
        </div>
    );
}

