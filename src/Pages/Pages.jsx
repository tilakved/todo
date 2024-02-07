import { Dashboard } from '../shared/Dashboard/Dashboard';
import { DeletePopup } from '../shared/Delete-modal/Delete-modal';
import { FormPopup } from '../shared/Form-Popup/Form-popup';
import { LeftSide } from '../shared/Leftside-bar/Leftside';
import './Pages.css';
import { useSelector } from 'react-redux';


export function Pages() {
  const allFilters = useSelector(state => state.filter);

  return (
    <div className="pages flex">
      <div className='w-1/5'>
        <LeftSide />
      </div>
      <div className='w-4/5'>
        <Dashboard />
      </div>
      {allFilters.deletePopupId &&
        <DeletePopup />
      }
      {(allFilters.addDirectoriesPopup || allFilters.addTaskPopup) &&
        <FormPopup />
      }
    </div>
  );
}

