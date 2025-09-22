import { config as baseConfig } from "./wdio.conf.js";

export const config = {
    ...baseConfig,
    before: function (capabilities, specs) {
        browser.maximizeWindow();
        browser.setTimeout({ 'implicit': 10000 });
    }
};

// export const config = Object.assign(baseConfig, {
//     before: function (capabilities, specs) {
//         browser.maximizeWindow();
//         browser.setTimeout({ 'implicit': 10000 });
//     }
// });