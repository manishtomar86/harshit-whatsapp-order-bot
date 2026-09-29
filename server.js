const express = require("express");

const app = express();
app.use(express.json());

const menu = {
  pizza: {
    "Pizza Margherita": "Regular ₹110 / Medium ₹230",
    "Golden Corn Pizza": "₹80 / ₹140",
    "Capsicum Pizza": "₹80 / ₹140",
    "Tomato Pizza": "₹80 / ₹140",
    "Onion Pizza": "₹80 / ₹140",
    "Paneer Onion Pizza": "₹100 / ₹150",
    "Loaded Veg Pizza": "₹130 / ₹220",
    "Fresh Veg Pizza": "₹180 / ₹260",
    "Green Wave Pizza": "₹180 / ₹260",
    "Paneer Pepper Pizza": "₹180 / ₹260"
  },

  burger: {
    "Potato Burger": "₹25",
    "Cheese Burger": "₹50",
    "Paneer Burger": "₹60"
  },

  chinese: {
    "Veg Noodles": "₹40",
    "Hakka Noodles": "₹50",
    "Red Sauce Pasta": "₹70",
    "Plain Pasta": "₹40",
    "Veg Spring Roll": "₹40",
    "French Fries": "₹40 / ₹70"
  },

  sandwich: {
    "Cheese Sandwich": "₹50",
    "Paneer Sandwich": "₹70",
    "Plain Sandwich": "₹40"
  },

  momos: {
    "Veg Steam Momos": "₹30 / ₹50",
    "Veg Fry Momos": "₹30 / ₹50",
    "Paneer Steam Momos": "₹40 / ₹70",
    "Paneer Fry Momos": "₹40 / ₹70"
  },

  samosa: {
    "Plain Samosa": "₹10",
    "Chhola Samosa": "₹20",
    "Bread Pakoda": "₹20",
    "Aalu Tikki": "₹20",
    "Paneer Pakoda": "₹25"
  },

  tea: {
    "Kulhad Tea": "₹15",
    "Plain Tea": "₹10"
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "Harshit Fast Food & Pizza WhatsApp Bot is running!",
    menu: menu
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Bot server started");
});
