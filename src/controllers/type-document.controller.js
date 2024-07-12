import TypeDocumentServices from "../services/type-document.services.js";

const getTypeDocument = async (req, res, next) => {
  try {
    const result = await TypeDocumentServices.getTypeDocuments();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

export {
  getTypeDocument
}