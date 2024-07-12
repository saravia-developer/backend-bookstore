import TypePaymentVoucherServices from "../services/type-payment-voucher.services.js";

const getTypePaymentVoucher = async (req, res, next) => {
  try {
    const result = await TypePaymentVoucherServices.getTypePaymentVoucher();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

export {
  getTypePaymentVoucher
}