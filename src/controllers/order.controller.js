import OrderServices from "../services/order.services.js";

const getOrders = async (req, res, next) => {
  try {
    const result = await OrderServices.getOrders();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const createOrder = async (req, res, next) => {
  try {
    
    const {
      clientId,
      total,
      typeDocument,
      numberDocument
    } = req.body;
  
    const insertOrder = await OrderServices.createOrder({
      clientId,
      total,
      typeDocument,
      numberDocument
    });

    res.json({ success: true, message: 'Orden creada', response: insertOrder });

  } catch (error) {
    // next(error)
    throw error
  }
}

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateOrder = await OrderServices.updateOrder(id, req.body);

    res.json({ success: true, message: 'Orden actualizada', affectedRow: updateOrder })
  } catch (error) {
    // next(error)
    throw error
  }
}

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteOrder = await OrderServices.deleteOrder(id);

    res.json({ success: true, message: 'Orden eliminado', deleteOrder })
  } catch (error) {
    // next(error)
    throw error
  }
}

export { 
  getOrders, 
  createOrder, 
  updateOrder, 
  deleteOrder 
}