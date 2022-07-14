import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
    plugins: [
        Unocss({
            presets: [
                presetWind()
            ],
        })
    ]
});
