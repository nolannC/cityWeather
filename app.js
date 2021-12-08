const geoCode = require("./geoCode");
const forecast = require("./forecast");

(async () => {
    try {
        const coo = await geoCode(process.argv.slice(2).join(", "));
        const temp = await forecast(coo);
        console.log(`La température à ${process.argv.slice(2).join(", ")} est de ${temp}°C.`);
    } catch (err) {
        console.log(err.message);
    }
})();
