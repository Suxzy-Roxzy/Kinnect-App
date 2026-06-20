"use client"

import * as React from "react"
import {ThemeProvider as NextThemeProviders} from "next-themes"

export default function ThemeProvider({
    children,
    ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NextThemeProviders>>){
    return <NextThemeProviders {...props}>{children}</NextThemeProviders>
}

