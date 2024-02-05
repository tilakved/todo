import './Leftside.css';

export function LeftSide() {
  return (
    <div className="leftside">
      <div className='p-10 bold text-3xl text-center'>TO-DO LIST</div>
      <div className='flex flex-col gap-3'>
        <button type="button" className='mx-2 bg-primary px-10 text-center py-4 rounded-md text-white cursor-pointer'>Add Task + </button>
        <div className='sorting flex flex-col gap-3'>
          <div className='cursor-pointer py-2 px-5 selected-sort'>Today's Task</div>
          <div className='cursor-pointer py-2 px-5'>All Task</div>
          <div className='cursor-pointer py-2 px-5'>Important Task</div>
          <div className='cursor-pointer py-2 px-5'>Completed Task</div>
          <div className='cursor-pointer py-2 px-5'>Uncompleted Task</div>
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

