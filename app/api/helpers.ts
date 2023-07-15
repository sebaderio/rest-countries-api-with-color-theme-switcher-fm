const getQSParamFromURL = (
    key: string,
    url: string | undefined
): string | null => {
    if (!url) return null;
    const search = new URL(url).search;
    const urlParams = new URLSearchParams(search);
    return urlParams.get(key);
};

export { getQSParamFromURL };
