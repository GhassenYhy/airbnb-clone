'use client'

import {IconType} from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({icon: Icon, disabled, outline, small, onClick, label}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${outline ? 'bg-white' : 'bg-rose-500'} ${outline ? 'border-black' : 'border-rose-500'} ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1 text-sm font-light border-[1px]' : 'py-3 text-md font-semibold border-2'} `}>
            {Icon && (
                <Icon size={25} className="absolute left-4 top-3"/>
            )}
            {label}
        </button>
    );
};

export default Button;