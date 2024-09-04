export const RevenueCard = ({
    tittle,
    orderCount,
    amount,
}) => {
  return (
    <div className="bg-white rounded shadow-md p-10">
        <div>
            {tittle} 
            ?
        </div>
        <div className="flex justify-between">
            <div>
            ₹ {amount}
            </div>
            <div>
                {orderCount ? <div>
                {orderCount} order(s) {">"}
                </div>: null}
            </div>
        </div>
    </div>
  )
};
