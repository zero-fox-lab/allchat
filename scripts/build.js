const esb = require("esbuild");

(async function main() {
    await esb.build({
        entryPoints: [ "./src/api/main.ts" ],
        bundle: true,
        sourcemap: true,
        platform: "node",
        outfile: "./dist/bin/main.js"
    });
})();