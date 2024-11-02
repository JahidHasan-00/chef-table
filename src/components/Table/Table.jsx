
import PropTypes from 'prop-types';

const Table = ({item, index, handlePrepare}) => {
    // console.log(item);
    // console.log(index);
    return (
        <>
            <tr>
                <td className='p-1 md:p-4'>{index + 1}</td>
                <td className='p-1 md:p-4'>{item.recipe_name}</td>
                <td className='p-1 md:p-4'>{item.preparing_time}</td>
                <td className='p-1 md:p-4'>{item.calories}</td>
                <td className='p-1 md:p-4'><button onClick={() => handlePrepare(item.recipe_id)} className='font-lexend font-medium bg-green-400 hover:bg-green-500 text-[#150B2B] py-2 px-4 rounded-full'>Prepare</button></td>
            </tr>
        </>
    );
};

Table.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePrepare: PropTypes.func.isRequired
};

export default Table;