import ClientServices from "../services/client.services.js";

const getClients = async (req, res, next) => {
  try {
    const result = await ClientServices.getUsers();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const getClientByEmail = async (req, res, next) => {
  try {
    const result = await ClientServices.getUserByEmail(req.query.email);
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const createClient = async (req, res, next) => {
  try {
    
    const {
      typeDocument,
      numberDocument,
      firstname,
      lastname,
      phone,
      email
    } = req.body;
  
    const insertClient = await ClientServices.createUser({
      typeDocument,
      numberDocument,
      firstname,
      lastname,
      phone,
      email
    });

    res.json({ success: true, message: 'Usuario creado', response: insertClient });

  } catch (error) {
    // next(error)
    throw error
  }
}

const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateClient = await ClientServices.updateUser(id, req.body);

    res.json({ success: true, message: 'Usuario actualizado' ,affectedRow: updateClient })
  } catch (error) {
    // next(error)
    throw error
  }
}

const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteClient = await ClientServices.deleteUser(id);

    res.json({ success: true, message: 'Usuario eliminado', deleteClient })
  } catch (error) {
    // next(error)
    throw error
  }
}

export { 
  getClients, 
  getClientByEmail, 
  createClient, 
  updateClient, 
  deleteClient 
}