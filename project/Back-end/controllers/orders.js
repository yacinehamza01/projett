const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");

exports.getAllOrders = async (req, res) => {
  try {
    const orderList = await Order.find()
      .populate("user", "name")
      .sort({ dateOrdered: -1 });

    if (!orderList) {
      res.status(500).json({ success: false });
    }

    res.send(orderList);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name")
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
          populate: "category",
        },
      });

    if (!order) {
      res.status(500).json({ success: false });
    }

    res.send(order);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.createOrder = async (req, res) => {
  try {
    // Logic for creating order
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    // Logic for updating order status
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    // Logic for deleting order
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getTotalSales = async (req, res) => {
  try {
    // Logic for getting total sales
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getOrderCount = async (req, res) => {
  try {
    // Logic for getting order count
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    // Logic for getting user orders
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
