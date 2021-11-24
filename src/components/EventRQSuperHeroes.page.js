import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export default function EventRQSuperHeroes() {
	const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData({
		enabled: false
	});
	return (
		<>
			<h2>Event React Query Super Heroes Page using custom hook</h2>
			{data?.map((name) => (
				<div key={name}>{name}</div>
			))}
			<button onClick={refetch}>Fetch Data</button>
		</>
	);
}
