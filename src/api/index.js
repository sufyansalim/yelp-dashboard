export default async (path) => {
    const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_YELP_API}${path}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
            
        }
    });
    return await response.json();
};