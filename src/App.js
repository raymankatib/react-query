import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import EventRQSuperHeroes from './components/EventRQSuperHeroes.page';
import RQSuperHeroe from './components/RQSuperHeroe';

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/super-heroes">Traditional Super Heroes</Link>
							</li>
							<li>
								<Link to="/rq-super-heroes">RQ Super Heroes</Link>
							</li>
							<li>
								<Link to="/event-super-heroes">Event fetch</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/rq-super-hero/:heroId" element={<RQSuperHeroe />} />
						<Route path="/event-super-heroes" element={<EventRQSuperHeroes />} />
						<Route path="/super-heroes" element={<SuperHeroesPage />} />
						<Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</Router>
			<ReactQueryDevtools initIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;
