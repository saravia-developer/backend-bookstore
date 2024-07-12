import OrderDetailsServices from "../services/order-details.services.js";

const getOrderDetails = async (req, res, next) => {
  try {
    const result = await OrderDetailsServices.getOrderDetails();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const createOrderDetails = async (req, res, next) => {
  try {
    
    const {
      orderId,
      bookId,
      detailPrice, 
      quantity
    } = req.body;
  
    const insertClient = await OrderDetailsServices.createOrderDetails({
      orderId,
      bookId,
      detailPrice, 
      quantity
    });

    res.json({ success: true, message: 'detalle de orden creado', response: insertClient });

  } catch (error) {
    // next(error)
    throw error
  }
}

const updateOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateOrderDetails = await OrderDetailsServices.updateOrderDetails(id, req.body);

    res.json({ success: true, message: 'Usuario actualizado', affectedRow: updateOrderDetails })
  } catch (error) {
    // next(error)
    throw error
  }
}

const deleteOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteOrderDetails = await OrderDetailsServices.deleteOrderDetails(id);

    res.json({ success: true, message: 'Usuario eliminado', deleteOrderDetails })
  } catch (error) {
    // next(error)
    throw error
  }
}

export { 
  getOrderDetails, 
  createOrderDetails, 
  updateOrderDetails, 
  deleteOrderDetails 
}