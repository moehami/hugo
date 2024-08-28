import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "m1st1c,\n\nA majestic lion with dragon wings and a mane that glows like a sunset, standing proudly on a cliff overlooking a magical forest.\n\n, in the style of m1st1c"
};

const output = await replicate.run("halimalrasihi/flux-mystic-animals:294de709b06655e61bb0149ec61ef8b5d3ca030517528ac34f8252b18b09b7ad", { input });
console.log(output)
//=> ["https://replicate.delivery/yhqm/eqGlJuqLGvRmJSS513JvfrZ...
