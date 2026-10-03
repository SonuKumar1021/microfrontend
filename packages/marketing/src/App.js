import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default function App() {
    return (
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
            </BrowserRouter>
        </StyledEngineProvider>
    );
}