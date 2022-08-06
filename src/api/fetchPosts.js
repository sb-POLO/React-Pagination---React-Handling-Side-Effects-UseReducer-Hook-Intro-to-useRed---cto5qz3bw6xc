const fetchPosts = async (page = 1, limit = 5) => {
    let pageData = [];
    await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
        .then((response) => response.json())
        .then((data) => pageData = [...data]);
    return pageData;
}

export { fetchPosts }