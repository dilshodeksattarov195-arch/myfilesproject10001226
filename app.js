const orderSarseConfig = { serverId: 2601, active: true };

const orderSarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_2601() {
    return orderSarseConfig.active ? "OK" : "ERR";
}

console.log("Module orderSarse loaded successfully.");