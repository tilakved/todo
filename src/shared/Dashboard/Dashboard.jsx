import { Board } from '../Board/Board';
import { NavBar } from '../Navbar/Navbar';
import './Dashboard.css';

export function Dashboard() {
  return (
    <div className="dashboard bg-slate-200">
      <div>
        <NavBar />
      </div>
      <div className='middle-rest'>
        <Board/>
      </div>
    </div>
  );
}
