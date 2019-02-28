import { WebSearchOptions } from "./websearch-options";
import { IconType } from "../icon/icon-type";
import { Icon } from "../icon/icon";

export const defaultWebSearchIcon: Icon = {
    parameter: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
    <g id="surface1">
    <path style=" fill:#616161;" d="M 29.179688 31.988281 L 32.007813 29.160156 L 44.03125 41.183594 L 41.203125 44.011719 Z "></path>
    <path style=" fill:#616161;" d="M 36 20 C 36 28.835938 28.835938 36 20 36 C 11.164063 36 4 28.835938 4 20 C 4 11.164063 11.164063 4 20 4 C 28.835938 4 36 11.164063 36 20 Z "></path>
    <path style=" fill:#37474F;" d="M 32.457031 35.339844 L 35.285156 32.511719 L 43.980469 41.210938 L 41.152344 44.039063 Z "></path>
    <path style=" fill:#64B5F6;" d="M 33 20 C 33 27.179688 27.179688 33 20 33 C 12.820313 33 7 27.179688 7 20 C 7 12.820313 12.820313 7 20 7 C 27.179688 7 33 12.820313 33 20 Z "></path>
    <path style=" fill:#BBDEFB;" d="M 26.898438 14.199219 C 25.199219 12.199219 22.699219 11 20 11 C 17.300781 11 14.800781 12.199219 13.101563 14.199219 C 12.699219 14.601563 12.800781 15.300781 13.199219 15.601563 C 13.601563 16 14.300781 15.898438 14.601563 15.5 C 16 13.898438 17.898438 13 20 13 C 22.101563 13 24 13.898438 25.398438 15.5 C 25.601563 15.699219 25.898438 15.898438 26.199219 15.898438 C 26.398438 15.898438 26.699219 15.800781 26.800781 15.699219 C 27.199219 15.300781 27.199219 14.601563 26.898438 14.199219 Z "></path>
    </g>
    </svg>
    `,
    type: IconType.SVG,
};

export const defaultWebSearchOptions: WebSearchOptions = {
    isEnabled: false,
    webSearchEngines: [
        {
            icon: {
                parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
                <path style="fill:#FF3D00;" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path>
                <path style="fill:#FFFFFF;" d="M26,16.2c-0.6-0.6-1.5-0.9-2.5-1.1c-0.4-0.5-1-1-1.9-1.5c-1.6-0.8-3.5-1.2-5.3-0.9h-0.4  c-0.1,0-0.2,0.1-0.4,0.1c0.2,0,1,0.4,1.6,0.6c-0.3,0.2-0.8,0.2-1.1,0.4c0,0,0,0-0.1,0L15.7,14c-0.1,0.2-0.2,0.4-0.2,0.5  c1.3-0.1,3.2,0,4.6,0.4C19,15,18,15.3,17.3,15.7c-0.5,0.3-1,0.6-1.3,1.1c-1.2,1.3-1.7,3.5-1.3,5.9c0.5,2.7,2.4,11.4,3.4,16.3  l0.3,1.6c0,0,3.5,0.4,5.6,0.4c1.2,0,3.2,0.3,3.7-0.2c-0.1,0-0.6-0.6-0.8-1.1c-0.5-1-1-1.9-1.4-2.6c-1.2-2.5-2.5-5.9-1.9-8.1  c0.1-0.4,0.1-2.1,0.4-2.3c2.6-1.7,2.4-0.1,3.5-0.8c0.5-0.4,1-0.9,1.2-1.5C29.4,22.1,27.8,18,26,16.2z"></path>
                <path style="fill:#FFFFFF;" d="M24,42c-9.9,0-18-8.1-18-18c0-9.9,8.1-18,18-18c9.9,0,18,8.1,18,18C42,33.9,33.9,42,24,42z M24,8  C15.2,8,8,15.2,8,24s7.2,16,16,16s16-7.2,16-16S32.8,8,24,8z"></path>
                <path style="fill:#0277BD;" d="M19,21.1c-0.6,0-1.2,0.5-1.2,1.2c0,0.6,0.5,1.2,1.2,1.2c0.6,0,1.2-0.5,1.2-1.2  C20.1,21.7,19.6,21.1,19,21.1z M19.5,22.2c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3  C19.8,22.1,19.6,22.2,19.5,22.2z M26.8,20.6c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1S27.3,20.6,26.8,20.6z M27.2,21.5  c-0.1,0-0.3-0.1-0.3-0.3c0-0.1,0.1-0.3,0.3-0.3c0.1,0,0.3,0.1,0.3,0.3S27.4,21.5,27.2,21.5z M19.3,18.9c0,0-0.9-0.4-1.7,0.1  c-0.9,0.5-0.8,1.1-0.8,1.1s-0.5-1,0.8-1.5C18.7,18.1,19.3,18.9,19.3,18.9 M27.4,18.8c0,0-0.6-0.4-1.1-0.4c-1,0-1.3,0.5-1.3,0.5  s0.2-1.1,1.5-0.9C27.1,18.2,27.4,18.8,27.4,18.8"></path>
                <path style="fill:#8BC34A;" d="M23.3,35.7c0,0-4.3-2.3-4.4-1.4c-0.1,0.9,0,4.7,0.5,5s4.1-1.9,4.1-1.9L23.3,35.7z M25,35.6  c0,0,2.9-2.2,3.6-2.1c0.6,0.1,0.8,4.7,0.2,4.9c-0.6,0.2-3.9-1.2-3.9-1.2L25,35.6z"></path>
                <path style="fill:#689F38;" d="M22.5,35.7c0,1.5-0.2,2.1,0.4,2.3c0.6,0.1,1.9,0,2.3-0.3c0.4-0.3,0.1-2.2-0.1-2.6  C25,34.8,22.5,35.1,22.5,35.7"></path>
                <path style="fill:#FFCA28;" d="M22.3,26.8c0.1-0.7,2-2.1,3.3-2.2c1.3-0.1,1.7-0.1,2.8-0.3c1.1-0.3,3.9-1,4.7-1.3  c0.8-0.4,4.1,0.2,1.8,1.5c-1,0.6-3.7,1.6-5.7,2.2c-1.9,0.6-3.1-0.6-3.8,0.4c-0.5,0.8-0.1,1.8,2.2,2c3.1,0.3,6.2-1.4,6.5-0.5  c0.3,0.9-2.7,2-4.6,2.1c-1.8,0-5.6-1.2-6.1-1.6C22.9,28.7,22.2,27.8,22.3,26.8"></path>
                </svg>`,
                type: IconType.SVG,
            },
            name: "DuckDuckGo",
            prefix: "d?",
            priority: 1,
            url: "https://duckduckgo.com/?q={{query}}",
        },
        {
            icon: {
                parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                <g id="surface1">
                <path style=" fill:#FFC107;" d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "></path>
                <path style=" fill:#FF3D00;" d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z "></path>
                <path style=" fill:#4CAF50;" d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z "></path>
                <path style=" fill:#1976D2;" d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "></path>
                </g>
                </svg>`,
                type: IconType.SVG,
            },
            name: "Google",
            prefix: "g?",
            priority: 2,
            url: "https://google.com/search?q={{query}}",
        },
        {
            icon: {
                parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                <g id="surface1">
                <path style=" fill:#F44336;" d="M 37 24 L 30.0625 24 C 26.714844 24 24 21.285156 24 17.9375 L 24 0.574219 C 24 0.355469 24.261719 0.238281 24.421875 0.390625 L 37 12 Z "></path>
                <path style=" fill:#AD1457;" d="M 37 24 L 30.0625 24 C 28.628906 24 27.308594 23.5 26.269531 22.667969 L 37 12 Z "></path>
                <path style=" fill:#8BC34A;" d="M 11 24 L 17.9375 24 C 21.285156 24 24 26.714844 24 30.0625 L 24 47.425781 C 24 47.644531 23.738281 47.757813 23.578125 47.609375 L 11 36 Z "></path>
                <path style=" fill:#009688;" d="M 11 24 L 17.9375 24 C 19.371094 24 20.691406 24.5 21.730469 25.332031 L 11 36 Z "></path>
                <path style=" fill:#FFC107;" d="M 24 11 L 24 17.9375 C 24 21.285156 21.285156 24 17.9375 24 L 0.574219 24 C 0.355469 24 0.238281 23.738281 0.390625 23.578125 L 12 11 Z "></path>
                <path style=" fill:#FF9800;" d="M 24 11 L 24 17.9375 C 24 19.371094 23.5 20.691406 22.667969 21.730469 L 12 11 Z "></path>
                <path style=" fill:#448AFF;" d="M 24 37 L 24 30.0625 C 24 26.714844 26.714844 24 30.0625 24 L 47.425781 24 C 47.644531 24 47.757813 24.261719 47.609375 24.421875 L 36 37 Z "></path>
                <path style=" fill:#1565C0;" d="M 24 37 L 24 30.0625 C 24 28.628906 24.5 27.308594 25.332031 26.269531 L 36 37 Z "></path>
                </g>
                </svg>`,
                type: IconType.SVG,
            },
            name: "Google Images",
            prefix: "gi?",
            priority: 3,
            url: "https://www.google.com/search?tbm=isch&q={{query}}",
        },
        {
            icon: {
                parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
                <g id="surface1">
                <path d="M 30 9.214844 C 30 9.386719 29.863281 9.523438 29.6875 9.523438 L 28.007813 9.523438 L 20.390625 25.738281 C 20.339844 25.847656 20.230469 25.917969 20.113281 25.917969 C 20.109375 25.917969 20.109375 25.917969 20.109375 25.917969 C 19.988281 25.917969 19.882813 25.851563 19.828125 25.746094 L 16.214844 18.578125 L 12.3125 25.757813 C 12.257813 25.859375 12.15625 25.917969 12.03125 25.917969 C 11.914063 25.914063 11.808594 25.847656 11.757813 25.742188 L 4.054688 9.523438 L 2.3125 9.523438 C 2.140625 9.523438 2 9.386719 2 9.214844 L 2 8.390625 C 2 8.21875 2.140625 8.082031 2.3125 8.082031 L 8.523438 8.082031 C 8.695313 8.082031 8.835938 8.21875 8.835938 8.390625 L 8.835938 9.214844 C 8.835938 9.386719 8.695313 9.523438 8.523438 9.523438 L 7.1875 9.523438 L 12.503906 21.785156 L 15.269531 16.617188 L 11.761719 9.527344 L 10.917969 9.527344 C 10.746094 9.527344 10.605469 9.386719 10.605469 9.214844 L 10.605469 8.394531 C 10.605469 8.222656 10.746094 8.082031 10.917969 8.082031 L 15.515625 8.082031 C 15.6875 8.082031 15.824219 8.222656 15.824219 8.394531 L 15.824219 9.214844 C 15.824219 9.386719 15.6875 9.523438 15.515625 9.523438 L 14.703125 9.523438 L 16.722656 13.9375 L 19.125 9.523438 L 17.652344 9.523438 C 17.476563 9.523438 17.339844 9.386719 17.339844 9.214844 L 17.339844 8.394531 C 17.339844 8.222656 17.476563 8.082031 17.652344 8.082031 L 22.117188 8.082031 C 22.289063 8.082031 22.425781 8.222656 22.425781 8.394531 L 22.425781 9.214844 C 22.425781 9.386719 22.289063 9.523438 22.117188 9.523438 L 21.136719 9.523438 L 17.632813 15.894531 L 20.488281 21.769531 L 26 9.523438 L 24.253906 9.523438 C 24.082031 9.523438 23.941406 9.386719 23.941406 9.214844 L 23.941406 8.394531 C 23.941406 8.222656 24.082031 8.082031 24.253906 8.082031 L 29.6875 8.082031 C 29.863281 8.082031 30 8.222656 30 8.394531 Z "></path>
                </g>
                </svg>`,
                type: IconType.SVG,
            },
            name: "Wikipedia",
            prefix: "w?",
            priority: 4,
            url: "https://en.wikipedia.org/wiki/{{query}}",
        },
        {
            icon: {
                parameter: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                <g id="surface1">
                <path style=" fill:#FF3D00;" d="M 43.199219 33.898438 C 42.800781 36 41.101563 37.601563 39 37.898438 C 35.699219 38.398438 30.199219 39 24 39 C 17.898438 39 12.398438 38.398438 9 37.898438 C 6.898438 37.601563 5.199219 36 4.800781 33.898438 C 4.398438 31.601563 4 28.199219 4 24 C 4 19.800781 4.398438 16.398438 4.800781 14.101563 C 5.199219 12 6.898438 10.398438 9 10.101563 C 12.300781 9.601563 17.800781 9 24 9 C 30.199219 9 35.601563 9.601563 39 10.101563 C 41.101563 10.398438 42.800781 12 43.199219 14.101563 C 43.601563 16.398438 44.101563 19.800781 44.101563 24 C 44 28.199219 43.601563 31.601563 43.199219 33.898438 Z "></path>
                <path style=" fill:#FFFFFF;" d="M 20 31 L 20 17 L 32 24 Z "></path>
                </g>
                </svg>`,
                type: IconType.SVG,
            },
            name: "YouTube",
            prefix: "yt?",
            priority: 5,
            url: "https://www.youtube.com/results?search_query={{query}}",
        },
    ],
};
