import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchSpuerHeroes = () => {
	return axios.get('http://localhost:4000/superheroes');
};
export const useSuperHeroesData = (payload) => {
	console.log('payload', payload);
	return useQuery('super-heroes', fetchSpuerHeroes, {
		// cacheTime: 5000,
		// staleTime: 5000
		// refetchOnMount: true, // "Refetch every time the component mount"
		// refetchOnWindowFocus: true // "Default value is true it does refetch when we remove the focus from the tab"
		// refetchInterval: intervalValue // or we can add time in milesecond,
		// refetchIntervalInBackground: true // "interval works even if the component is not focused",
		// enabled: false // to stop fetching on mount to works only one user event
		...payload
		// onSuccess,
		// onError,
		// select: (data) => {
		// 	// select option to transform the data by map or filter
		// 	// console.log(data);
		// 	const names = data.data.map((hero) => hero.name);
		// 	return names;
		// }
	});
};
// isFetching for the updated value if cached data changed
// refetch is event to call the query example "<button onClick={refetch}>Fetch Data</button>""
