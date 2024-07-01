import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {apiPlugin, storyblokInit} from "@storyblok/react";
import {UnknownComponent} from "./components/UnknownComponent.jsx";

storyblokInit({
    //accessToken: "YOUR_ACCESS_TOKEN",
    use: [apiPlugin],
    components: {},
    apiOptions: {},
    enableFallbackComponent: true,
    customFallbackComponent: UnknownComponent,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
