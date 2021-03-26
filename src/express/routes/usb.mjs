import express from "express";
import usb from "usb";

const router = express.Router();

/* GET home page. */
router.post("/get-connected-controllers-list", (req, res) => {
  const { idVendor, idProduct } = req.body;
  res.header("Access-Control-Allow-Origin", "http://localhost:3100");
  res.json({
    devicesList: usb
      .getDeviceList()
      .filter(
        (device) =>
          device.deviceDescriptor.idVendor === idVendor &&
          device.deviceDescriptor.idProduct === idProduct,
      ),
  });
});

export default router;
