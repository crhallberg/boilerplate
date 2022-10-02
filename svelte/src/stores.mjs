import { writable, get } from "svelte/store";

// CONFIG

export const config = loadConfig();

function loadConfig() {
    let config = writable({});

    let localConfig = JSON.parse(localStorage.getItem("config") ?? "false");

    // Defaults
    if (!localConfig) {
        config.set({
            chosenScale: -1,
            projects: [],
        });
    } else {
        config.set(localConfig);
    }

    console.log(get(config));

    // Save to browser
    config.subscribe((state) => {
        localStorage.setItem("config", JSON.stringify(state));
    });

    return config;
}

export function saveConfig(key, setting) {
    const newConfig = {};
    newConfig[key] = setting;

    config.set(Object.assign(get(config), newConfig));
}
