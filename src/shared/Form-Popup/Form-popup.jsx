import { useSelector, useDispatch } from 'react-redux';
import { updateAddDirectoriesPopup } from '../../redux/slicer/filterSlice';
import { updateFullDirectory } from '../../redux/slicer/directoriesSlice';
import { useState } from 'react';

export function FormPopup() {
    const allFilters = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const [directoryName, setDirectoryName] = useState('');

    function AddDirectory() {
        if (allFilters.addDirectoriesPopup) {
            dispatch(updateFullDirectory(directoryName))
            setDirectoryName('')
            dispatch(updateAddDirectoriesPopup(false))
        }   
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Create Directory</h3>
                                    <div className="mt-2 flex gap-1 items-center">
                                        <span>Name: </span><input type='text' placeholder='Directory name' className='border rounded-md p-1' value={directoryName} onChange={(e) => { setDirectoryName(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary sm:ml-3 sm:w-auto" onClick={() => { AddDirectory() }}>Save</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => { dispatch(updateAddDirectoriesPopup(false)) }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
