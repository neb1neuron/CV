
const url = "./resume.json";

const fetchJson = async () => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};