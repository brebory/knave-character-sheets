export const isNullOrUndefined = (str) => str === null || str === undefined;

export const isEmpty = (str) => str === "" || isNullOrUndefined(str);

export const isValidURL = (str) => {
    let url;

    try {
        url = new URL(str);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}