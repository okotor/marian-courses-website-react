import './Button.css';

export default function Button( children, ...props) {
    return (
        <>
            <button {...props}>Lala
            </button>
        </>
    );
}