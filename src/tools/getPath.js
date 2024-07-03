export const getPath = () => {
    const path = window.location.pathname;

    let locale = "en";
    if (path.split("/")[1] === "de") {
        locale = "de";
    }

    return {
        locale: locale,
        path: path.replace(`/${locale}`, "")
    };

}