import React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export default function RQSuperHeroe() {
	const { heroId } = useParams();
	const { data } = useSuperHeroData(heroId);
	return (
		<div>
			{data?.data.name} - {data?.data.alterEgo}
		</div>
	);
}
