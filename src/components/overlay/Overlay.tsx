import './style.css';

export default function Overlay({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="overlay">
                {children}
            </div>
        </>
    )
}