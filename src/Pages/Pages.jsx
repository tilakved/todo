import { Dashboard } from '../shared/Dashboard/Dashboard';
import { LeftSide } from '../shared/Leftside-bar/Leftside';
import './Pages.css';

export function Pages() {
  return (
    <div className="pages flex">
      <div className='w-1/5'>
        <LeftSide />
      </div>
      <div className='w-4/5'>
        <Dashboard />
      </div>
    </div>
  );
}

