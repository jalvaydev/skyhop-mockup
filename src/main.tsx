import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
