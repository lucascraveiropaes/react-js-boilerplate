// General functions that can be used in the hole application

// This function receives a Date Object and returns a String with
// the brasilian formatted date
export function getDatetime(d = new Date()) {
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const date = ("0" + d.getDate()).slice(-2);
    const hour = ("0" + d.getHours()).slice(-2);
    const minutes = ("0" + d.getMinutes()).slice(-2);
    const seconds = ("0" + d.getSeconds()).slice(-2);

    return `${date}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}
