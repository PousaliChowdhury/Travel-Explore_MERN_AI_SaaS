const mongoose = require("mongoose");
const Package = require("../models/Package");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

console.log("MONGO_URI:", process.env.MONGO_URI);


const packages = [
  {
    title: "Darjeeling Tour",
    category: "Hillstations",
    image: "https://tse2.mm.bing.net/th?id=OIP.APtZTwWPLoz5A__ALdJeSwHaEK&pid=Api&P=0&h=180",
    location: "Darjeeling, West Bengal",
    duration: "5 nights / 6 days",
    basePrice: 10000,
  },
  {
    title: "Himachal Tour",
    category: "Hillstations",
    image: "https://static.toiimg.com/photo/msid-93246451,width-96,height-65.cms",
    location: "Himachal Pradesh",
    duration: "15 nights / 16 days",
    basePrice: 20000,
  },
  {
    title: "Sikkim Tour",
    category: "Hillstations",
    image: "https://images.unsplash.com/photo-1551155311-88cda3ebe650?ixlib=rb-1.2.1&auto=format&fit=crop&w=962&q=80",
    location: "Sikkim",
    duration: "9 nights / 10 days",
    basePrice: 17000,
  },
  {
    title: "Dehradun–Mussoorie Tour",
    category: "Hillstations",
    image: "https://tse4.mm.bing.net/th?id=OIP.5ybYEZlD2xqApXfPVutAEQHaC5&pid=Api&P=0&h=180",
    location: "Uttarakhand",
    duration: "12 nights / 13 days",
    basePrice: 20000,
  },
  {
    title: "Goa Tour",
    category: "Beachside",
    image: "https://tse2.mm.bing.net/th?id=OIP.3xvfms5y9MN3n4EFioARmAHaEK&pid=Api&P=0&h=180",
    location: "Goa",
    duration: "4 nights / 5 days",
    basePrice: 20000,
  },
  {
    title: "Andaman–Lakshadweep Tour",
    category: "Beachside",
    image: "https://tse4.mm.bing.net/th?id=OIP.USV4QZM-Nu9CmKJpUFh6pAHaEo&pid=Api&P=0&h=180",
    location: "Andaman & Lakshadweep",
    duration: "15 nights / 16 days",
    basePrice: 45000,
  },
  {
    title: "Kerala Tour",
    category: "Beachside",
    image: "https://www.tourmyindia.com/blog/wp-content/uploads/2021/03/Best-Places-to-Visit-in-Kerala.jpg",
    location: "Kerala",
    duration: "11 nights / 12 days",
    basePrice: 22000,
  },
  {
    title: "Maldives Tour",
    category: "Beachside",
    image: "https://tse3.mm.bing.net/th?id=OIP.Ub-kAO7W88FFh0126K2pZwHaE8&pid=Api&P=0&h=180",
    location: "Maldives",
    duration: "9 nights / 10 days",
    basePrice: 30000,
  },
  {
    title: "12 Jyotirlinga Tour",
    category: "Pilgrimage",
    image: "https://tse1.mm.bing.net/th?id=OIP.cr8uGYHcwzf9gmKm_wosIgHaEK&pid=Api&P=0&h=180",
    location: "India",
    duration: "19 nights / 20 days",
    basePrice: 30000,
  },
  {
    title: "Chardham Yatra",
    category: "Pilgrimage",
    image: "https://tse1.mm.bing.net/th?id=OIP.pOKpkt9uuVPD7TTL9U8S6wHaFJ&pid=Api&P=0&h=180",
    location: "Uttarakhand",
    duration: "19 nights / 20 days",
    basePrice: 35000,
  },
  {
    title: "South Indian Temple Tour",
    category: "Pilgrimage",
    image: "https://tse4.mm.bing.net/th?id=OIP.2TNjiS8Z8N3iqsUCHAiOWgHaE8&pid=Api&P=0&h=180",
    location: "South India",
    duration: "11 nights / 12 days",
    basePrice: 20000,
  },
  {
    title: "Jain & Buddhist Temple Tour",
    category: "Pilgrimage",
    image: "https://tse4.mm.bing.net/th?id=OIP.IMQJ2jzjr5U1QdH1gfRzCwHaE8&pid=Api&P=0&h=180",
    location: "India",
    duration: "15 nights / 16 days",
    basePrice: 18000,
  },
  {
    title: "Delhi & Agra Tour",
    category: "Heritage",
    image: "https://tse3.mm.bing.net/th?id=OIP.lNMIK5As0Mp7nyVA_aVkWQHaE_&pid=Api&P=0&h=180",
    location: "Delhi, Agra",
    duration: "11 nights / 12 days",
    basePrice: 26000,
  },
  {
    title: "Rajasthan Heritage Tour",
    category: "Heritage",
    image: "https://indiatrekkingtours.com/wp-content/uploads/2022/02/rajasthan.jpg",
    location: "Rajasthan",
    duration: "15 nights / 16 days",
    basePrice: 20000,
  },
  {
    title: "Gujarat Heritage Tour",
    category: "Heritage",
    image: "https://4.bp.blogspot.com/-TRwIMOtX4H0/VsrgCseU5BI/AAAAAAAAAb0/bMo5FIBld3Q/s1600/heritages.jpg",
    location: "Gujarat",
    duration: "14 nights / 15 days",
    basePrice: 16000,
  },
  {
    title: "Khajuraho Madhya Pradesh Tour",
    category: "Heritage",
    image: "https://tse4.explicit.bing.net/th?id=OIP.4bIzAxm20ZvVV0xOePx0dQHaFj&pid=Api&P=0&h=180",
    location: "Madhya Pradesh",
    duration: "15 nights / 16 days",
    basePrice: 18000,
  },
  {
    title: "Sundarban Tour",
    category: "Wildlife",
    image: "https://mangroveactionproject.org/wp-content/uploads/2024/11/Soham-Bhattacharyya-India-Winter-Morning-Mangroves-The-Royal-Bengal-Tiger-1024x683.jpg",
    location: "West Bengal",
    duration: "9 nights / 10 days",
    basePrice: 12000,
  },
  {
    title: "Dooars Tour",
    category: "Wildlife",
    image: "https://tse1.mm.bing.net/th?id=OIP.6-VO7jxsLO0nd8hqFrr8QwHaEn&pid=Api&P=0&h=180",
    location: "North Bengal",
    duration: "15 nights / 16 days",
    basePrice: 25000,
  },
  {
    title: "Madhya Pradesh Wildlife Tour",
    category: "Wildlife",
    image: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2017/06/Kanha-National-Park-1024x576.jpg",
    location: "Madhya Pradesh",
    duration: "9 nights / 10 days",
    basePrice: 24000,
  },
  {
    title: "Nepal Wildlife Tour",
    category: "Wildlife",
    image: "https://tse1.mm.bing.net/th?id=OIP.RJAKIh43vqBi6TxKOFrdJwHaF6&pid=Api&P=0&h=180",
    location: "Nepal",
    duration: "15 nights / 16 days",
    basePrice: 25000,
  },
  {
    title: "Paris Tour",
    category: "International",
    image: "https://tse1.mm.bing.net/th?id=OIP.t_vWsJPCf9pGLarIHpP7eQHaEo&pid=Api&P=0&h=180",
    location: "Paris, France",
    duration: "15 nights / 16 days",
    basePrice: 95000,
  },
  {
    title: "London Tour",
    category: "International",
    image: "https://tse1.mm.bing.net/th?id=OIP.PnJ-7XFTf9ejInPJHebRxgHaEo&pid=Api&P=0&h=180",
    location: "London, UK",
    duration: "9 nights / 10 days",
    basePrice: 92000,
  },
  {
    title: "New York Tour",
    category: "International",
    image: "https://tse4.mm.bing.net/th?id=OIP.TaC_bMKPpttjJP-7Ehu80gHaEW&pid=Api&P=0&h=180",
    location: "New York, USA",
    duration: "15 nights / 16 days",
    basePrice: 95000,
  },
  {
    title: "Norway Tour",
    category: "International",
    image: "https://tse1.mm.bing.net/th?id=OIP.HMlmydC58r6CAXkPFC_5ngHaE8&pid=Api&P=0&h=180",
    location: "Norway",
    duration: "15 nights / 16 days",
    basePrice: 90000,
  },
];

const seedPackages = async () => {
  try {
    await Package.deleteMany();
    await Package.insertMany(packages);
    console.log("✅ Packages inserted successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedPackages();
