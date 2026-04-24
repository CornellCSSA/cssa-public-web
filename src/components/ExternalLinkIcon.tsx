import { memo } from 'react';

interface ExternalLinkIconProps {
    className?: string;
    color?: string;
    size?: number;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function ExternalLinkIcon({
    className = '',
    color = '#333',
    size = 24,
    onClick,
    onMouseEnter,
    onMouseLeave
}: ExternalLinkIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <path
                d="M28 6H42V20"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.7998 22.1999L41.0998 6.8999"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default memo(ExternalLinkIcon);
