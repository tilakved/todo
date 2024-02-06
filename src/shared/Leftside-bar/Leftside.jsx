import './Leftside.css';
import { useSelector,useDispatch } from 'react-redux';
import {updateSortBy} from '../../redux/slicer/filterSlice'

export function LeftSide() {
  const allFilters = useSelector(state => state.filter);
  const dispatch = useDispatch()

  return (
    <div className="leftside">
      <div className='p-10 bold text-3xl text-center'>TO-DO LIST</div>
      <div className='flex flex-col gap-3'>
        <button type="button" className='mx-2 bg-primary px-10 text-center py-4 rounded-md text-white cursor-pointer'>Add Task + </button>
        <div className='sorting flex flex-col gap-3'>
          <div onClick={()=>{dispatch(updateSortBy('today'))}} className={allFilters.sortBy === 'today' ? `cursor-pointer py-2 px-5 selected-sort` : `cursor-pointer py-2 px-5`}>Today's Task</div>
          <div onClick={()=>{dispatch(updateSortBy('all'))}} className={allFilters.sortBy === 'all' ? `cursor-pointer py-2 px-5 selected-sort` : `cursor-pointer py-2 px-5`}>All Task</div>
          <div onClick={()=>{dispatch(updateSortBy('imp'))}} className={allFilters.sortBy === 'imp' ? `cursor-pointer py-2 px-5 selected-sort` : `cursor-pointer py-2 px-5`}>Important Task</div>
          <div onClick={()=>{dispatch(updateSortBy('completed'))}} className={allFilters.sortBy === 'completed' ? `cursor-pointer py-2 px-5 selected-sort` : `cursor-pointer py-2 px-5`}>Completed Task</div>
          <div onClick={()=>{dispatch(updateSortBy('uncompleted'))}} className={allFilters.sortBy === 'uncompleted' ? `cursor-pointer py-2 px-5 selected-sort` : `cursor-pointer py-2 px-5`}>Uncompleted Task</div>
        </div>
        <div className='Directories flex flex-col gap-3'>
          <div className='mx-2'>Directories:</div>
          <div className='px-7'>Main</div>
          <div className='px-5 bg-primary text-white rounded-md py-1 text-center cursor-pointer mx-2'>+ Add</div>
        </div>
      </div>
    </div>
  );
}

