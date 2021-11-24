import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export const RQSuperHeroesPage = () => {
	const onSuccess = (data) => {
		console.log('side effect after fetch', data);
	};
	const onError = (error) => {
		console.log('side effect after Error', error);
	};

	const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData({
		onSuccess,
		onError,
		refetchOnMount: true
	});

	if (isLoading || isFetching) {
		return <h2>Loading...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<>
			<h2>React Query Super Heroes Page</h2>
			{data.map((name) => (
				<div key={name}>{name}</div>
			))}
			<button onClick={refetch}>Fetch Data</button>
		</>
	);
};
