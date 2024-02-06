import './Cards.css';
import star_empty from '../../assets/svgs/star-circle-svgrepo-com.svg';
import star_fill from '../../assets/svgs/star-circle-svgrepo-com (1).svg';
import delete_icon from '../../assets/svgs/delete-2-svgrepo-com.svg';
import edit_icon from '../../assets/svgs/edit-clipboard-svgrepo-com.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateCompleted, updateImportant } from '../../redux/slicer/cardSlice';
import { useEffect } from 'react';


export function Cards() {
    const allCards = useSelector(state => state.card);
    const allFilters = useSelector(state => state.filter);

    function f() {
        let arr = []
        if (allFilters.sortBy === 'imp') {
            arr = allCards.filter((res) => res.important)
        } else if (allFilters.sortBy === 'today') {
            arr = allCards.filter((res) => new Date(res.date).toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) === new Date().toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }))
        } else if (allFilters.sortBy === 'completed') {
            arr = allCards.filter((res) => res.completed)
        } else if (allFilters.sortBy === 'uncompleted') {
            arr = allCards.filter((res) => !res.completed)
        } else {
            arr = allCards
        }
        return arr
    }

    const dispatch = useDispatch()
    console.log(allFilters.sortBy);
    return (
        <div className='flex flex-wrap gap-8'>
            {f().map((card, index) => {
                return <div className='card' key={index}>
                    <div className='text-right pr-5'><span className='bg-secondary p-1 rounded-t-md'>Main</span></div>
                    <div className="bg-white rounded-md p-3">
                        <div className='head'>
                            <div className='font-bold'>{card.name}</div>
                            <div className='p-3 text-body'>{card.description}</div>
                        </div>
                        <div className='foot'>
                            <div className='p-3'>{new Date(card.date).toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                            <hr />
                            <div className='p-3 flex justify-between'>
                                <div className='flex gap-1' onClick={() => { dispatch(updateCompleted({ status: !card.completed, id: card.id })) }}>
                                    {card.completed && <div className='cursor-pointer bg-green p-1 rounded-md'>completed</div>}
                                    {!card.completed && <div className='cursor-pointer bg-yellow p-1 rounded-md'>uncompleted</div>}
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <span onClick={() => { dispatch(updateImportant({ status: !card.important, id: card.id })) }}>
                                        {!card.important && <img className='cursor-pointer' src={star_empty} alt='' />}
                                        {card.important && <img className='cursor-pointer' src={star_fill} alt='' />}
                                    </span>
                                    <img className='cursor-pointer' src={delete_icon} alt='' />
                                    <img className='cursor-pointer' src={edit_icon} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
            }
            {f().length === 0 &&
                `No Tasks Available`
            }
        </div>
    );
}
