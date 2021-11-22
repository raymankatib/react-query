import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSpuerHeroes = () => {
	return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
	const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSpuerHeroes, {
		// cacheTime: 5000,
		// staleTime: 5000
		// refetchOnMount: true, // "Refetch every time the component mount"
		// refetchOnWindowFocus: true // "Default value is true it does refetch when we remove the focus from the tab"
		// refetchInterval: 2000,
		// refetchIntervalInBackground: true // "interval works even if the component is not focused",
		enabled: false // to stop fetching on mount to works only one user event
	});
	// isFetching for the updated value if cached data changed
	// refetch is event to call the query example "<button onClick={refetch}>Fetch Data</button>""
	if (isLoading || isFetching) {
		return <h2>Loading...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<>
			<h2>React Query Super Heroes Page</h2>
			{data?.data.map((hero) => (
				<div key={hero.name}>{hero.name}</div>
			))}
			<button onClick={refetch}>Fetch Data</button>
		</>
	);
};
