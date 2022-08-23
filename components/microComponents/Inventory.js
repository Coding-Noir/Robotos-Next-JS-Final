const Inventory = ({ inventoryBgColor }) => {
  return (
    <div className={`inventory-area ${inventoryBgColor}`}>
      <div className="inventory-num">8,208 of 9,999 available</div>
      <div className="averages">0.05 ETH per roboto</div>
    </div>
  )
}

export default Inventory
