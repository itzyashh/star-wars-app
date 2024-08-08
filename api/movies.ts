import swapi from "./swapi"

export const getMovies = async () => {
    try {
    const response = await swapi.get('/films');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies', error);
    }
}