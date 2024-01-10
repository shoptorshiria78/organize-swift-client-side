

import { useDrop } from "react-dnd";


const CompletedBox = ({markAsCompleted, children}) => {

    const [, drop] = useDrop({
        accept:'BOX',
        drop:(item) => markAsCompleted(item.id) ,
        collect:(monitor)=>({
            isOver: !!monitor.isOver(),
        })
    })

    return (
        <div ref={drop} className="bg-green-200 p-3 rounded-md">
            {children}
        </div>
    );
};

export default CompletedBox;