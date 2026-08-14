"use client"

import * as React from "react"
import {ThemeProvider as NextThemesProviders} from "next-themes"

export default function ThemeProvider({
    children,
    ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NextThemesProviders>>){
    return <NextThemesProviders {...props}>{children}</NextThemesProviders>
}

