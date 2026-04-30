interface ButtonProps {
    label : string;
    type?: "button" | "submit";
    variant?: "primary" | "outline";
    isLoading?: boolean;
    onClick?: () => void;
}

export const Button:React.FC<ButtonProps> = ({
    label,
    type ="button",
    variant = "primary",
    isLoading=false
}) => {
    const base = "px-4 py-2 rounded font-medium";
    
    const styles={
        primary:"bg-blue-600 text-white",
        outline: "border border-blue-600 text-blue-600"    
    };

    return (
        <button
        type={type}
        disabled={isLoading}
        className={`${base} ${styles[variant]}`}
        >
            {isLoading ? "Loading...":label}
        </button>
    );
};