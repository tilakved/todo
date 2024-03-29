import { updateAddTaskPopup, updateSearchValue } from '../../redux/slicer/filterSlice';
import './Navbar.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


export function NavBar() {
  const allFilters = useSelector(state => state.filter);
  const [time, setTime] = useState(new Date().toLocaleString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }))
    }, 1000)
  }, [time])

  return (
    <div className="navbar">
      <div className='flex p-10 items-center justify-between'>
        <div>

          <input className='px-5 py-3 rounded-md border-2' type='text' placeholder='Search' value={allFilters.searchValue} onChange={(e) => { dispatch(updateSearchValue(e.target.value)) }} />
        </div>
        <div>
          {time}
        </div>
        <div>
          <button type="button" className='mx-2 bg-primary px-10 text-center py-4 rounded-md text-white cursor-pointer' onClick={() => { dispatch(updateAddTaskPopup(true)) }}>Add Task + </button>
        </div>
      </div>
    </div>
  );
}
