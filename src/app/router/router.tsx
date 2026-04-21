import { createBrowserRouter } from 'react-router-dom';

import { paths } from './paths';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
	{
		path: paths.home,
		element: <MainLayout />,
	},
]);
