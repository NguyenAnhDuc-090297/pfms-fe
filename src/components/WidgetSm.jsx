import '../css/component/widgetSm.css'

function WidgetLg() {
    // const Button = ({type}) => {
    //     return (
    //         <button className="widgetLgButton">
    //             {type}
    //         </button>
    //     )
    // };

    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Lastest transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="" alt="" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLg;