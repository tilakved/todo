import './Cards.css';
import star_empty from '../../assets/svgs/star-circle-svgrepo-com.svg';
import star_fill from '../../assets/svgs/star-circle-svgrepo-com (1).svg';
import delete_icon from '../../assets/svgs/delete-2-svgrepo-com.svg';
import edit_icon from '../../assets/svgs/edit-clipboard-svgrepo-com.svg';

export function Cards() {
    return (
        <div className='card'>
            <div className='text-right pr-5'><span className='bg-secondary p-1 rounded-t-md'>Main</span></div>
            <div className="bg-white rounded-md p-3">
                <div className='head'>
                    <div>Task 1</div>
                    <div className='p-3'>This is description</div>
                </div>
                <div className='foot'>
                    <div className='p-3'>date</div>
                    <hr />
                    <div className='p-3 flex justify-between'>
                        <div className='flex gap-1'>
                            <div className='cursor-pointer bg-green p-1 rounded-md'>completed</div>
                            <div className='cursor-pointer bg-yellow p-1 rounded-md'>uncompleted</div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <img className='cursor-pointer' src={star_empty} alt='' />
                            <img className='cursor-pointer' src={star_fill} alt='' />
                            <img className='cursor-pointer' src={delete_icon} alt='' />
                            <img className='cursor-pointer' src={edit_icon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
