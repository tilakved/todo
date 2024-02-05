import { Cards } from '../Cards/Cards';
import './Board.css';
import list_icon from '../../assets/svgs/list-check-svgrepo-com.svg'
import tiles_icon from '../../assets/svgs/tiles-minus-svgrepo-com.svg'

export function Board() {

    return (
        <div className="p-5 flex flex-col gap-5">
            <div className='flex justify-between items-center'>
                <div className='flex items-center bg-white rounded-md cursor-pointer'>
                    <div className='p-1 rounded-l-md'>
                        <img src={list_icon} alt='list_icon' />
                    </div>
                    <div className='bg-slate-400 p-[1.2px] rounded-r-md'>
                        <img src={tiles_icon} alt='tiles_icon' />
                    </div>
                </div>
                {/* <div>
                    Sort By:
                </div> */}
            </div>
            <div>
                <div>
                    <Cards />
                </div>
            </div>
        </div>
    );
}
