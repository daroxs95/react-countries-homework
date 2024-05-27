import {ReactNode} from "react";

export default function DetailsLayout({children, params}: {
    children: ReactNode;
    params: { id: string };
}) {
    return (
        <>
            <h2>Details for {decodeURIComponent(params.id)}</h2>
            {children}
        </>
    );
}
