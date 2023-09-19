import { Access, Report } from "../../entities/access"

export interface PinProps {
    access?: Access;
    report?: Report;
    seleced: boolean;
}

export default function Pin({ access, seleced }: PinProps) {
    const color = seleced ? "purple" : "black"
    return (
        <>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 365 560" width="36" height="32">
                <path fill={color} d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
		C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
		c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"/>
            </svg>
        </>
    )
}