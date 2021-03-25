import React, { useContext, useEffect, useRef } from 'react';
import { TodoContext } from '../../../stores/Todo';

import IconFilter from '../../../image/icon/funnel.svg';
import IconFilterL1 from '../../../image/icon/filter-level-1.svg';
import IconFilterL2 from '../../../image/icon/filter-level-2.svg';
import IconFilterL3 from '../../../image/icon/filter-level-3.svg';
import IconFilterL4 from '../../../image/icon/filter-level-4.svg';
import IconFilterL5 from '../../../image/icon/filter-level-5.svg';

function TodoHeader(props) {
    const {
        filter: { filter, setFilter },
    } = useContext(TodoContext);
    let url = IconFilter;
    const count = useRef(0);
    // let count = 0;

    // useEffect(() => {
    switch (filter) {
        case 1:
            url = IconFilterL1;
            break;
        case 2:
            url = IconFilterL2;
            break;
        case 3:
            url = IconFilterL3;
            break;
        case 4:
            url = IconFilterL4;
            break;
        case 5:
            url = IconFilterL5;
            break;

        default:
            url = IconFilter;
            break;
    }
    // }, [filter]);

    const handleClickFilter = () => {
        count.current++;
        if (count.current > 5) {
            count.current = 0;
        }
        setFilter(count.current);
    };

    return (
        <div className="todo-input">
            <input type="text" placeholder="Fill into the content todo"></input>
            <img
                className="todo-icon"
                src={url}
                alt="icon filter"
                onClick={handleClickFilter}
            />
        </div>
    );
}

export default TodoHeader;
