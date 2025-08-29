"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { styles } from "./layout.stylex";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/Core/SelfXSSWarning";
import Header from "@/components/Layout/Header/Header";
import RouteChangeProgress from "@/components/Core/RouteChangeProgress/RouteChangeProgress";
import Container from "@/components/Layout/Container/Container";
import ReloadData from "@/components/Core/ReloadData/ReloadData";

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Layout>{children}</Layout>
        </ThemeProvider>
    );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    return (
        <html
            id="nextex"
            lang="en"
            dir="ltr"
            {...stylex.props(
                styles.html,
                theme === "light" && styles.htmlLight,
                theme === "dark" && styles.htmlDark,
                theme === "light" && light,
                theme === "dark" && dark,
            )}
        >
            <body {...stylex.props(styles.body)}>
                <RouteChangeProgress />
                <ReloadData />
                <Header />
                <Container>{children}</Container>
                <SelfXSSWarning />
            </body>
        </html>
    );
};

export default App;
