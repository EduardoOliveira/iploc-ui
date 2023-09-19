import { Badge, BadgeProps } from "@chakra-ui/react";

export type CountBadgeProps = {
    count: number;
    label: string;
    color: string;
} & BadgeProps

export default function CountBadge({ count,label, color, ...props}: CountBadgeProps) {
    return (
        <>
            {count > 0 &&
                <Badge borderRadius='full' px={2} mr={3} colorScheme={color} {...props}>
                    {count} {label}
                </Badge>}
        </>

    )
}