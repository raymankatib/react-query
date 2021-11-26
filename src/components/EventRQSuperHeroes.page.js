import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export default function EventRQSuperHeroes() {
	const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData({
		enabled: false
		// staleTime: 5000
	});
	return (
		<>
			<h2>Event React Query Super Heroes Page using custom hook</h2>
			{data?.data.map((hero) => (
				<div key={hero.name}>{hero.name}</div>
			))}
			<button onClick={refetch}>Fetch Data</button>
		</>
	);
}
