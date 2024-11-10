const process = require("node:process");
const esb = require("esbuild");

(async function main() {
    const args = process.argv.slice(2);
    
    if (args.length > 1) {
        console.error("no arguments given");
        process.exit(1);
    }

    switch (args[0]) {
    case "build":
        await build();
    }
})();

async function build() {
    await esb.build({
        entryPoints: [ "./src/main.tsx" ],
        bundle: true,
        minify: true,
        sourcemap: true,
        outfile: "./dist/out.min.js"
    });
    await esb.build({
        entryPoints: [ "./src/api/main.ts" ],
        bundle: true,
        sourcemap: true,
        platform: "node",
        outfile: "./dist/bin/main.js"
    });
}