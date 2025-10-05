// app/resources/layout.tsx
import React from "react";

export default function ResourcesLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            {children}
        </div>
    );
}
