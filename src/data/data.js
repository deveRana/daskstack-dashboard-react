export const sidebarMenu1 = [
  {
    title: "Dashboard",
    icon: "fa-solid fa-gauge",
    state: true,
    route: "/",
  },
  {
    title: "Products",
    icon: "fa-solid fa-cart-shopping",
    state: false,
    route: "/products",
  },
  {
    title: "Favourites",
    icon: "fa-solid fa-heart",
    state: false,
    route: "/favourites",
  },
  {
    title: "Inbox",
    icon: "fa-solid fa-comments",
    state: false,
    route: "/inbox",
  },
  {
    title: "Order Lists",
    icon: "fa-solid fa-list-check",
    state: false,
    route: "/order-lists",
  },
  {
    title: "Product Stock",
    icon: "fa-solid fa-cubes-stacked",
    state: false,
    route: "/product-stocks",
  },
];

export const sidebarMenu2 = [
  {
    title: "Pricing",
    icon: "fa-solid  fa-money-check-dollar",
    state: false,
    route: "/pricing-plans",
  },
  {
    title: "To-Do",
    icon: "fa-solid fa-clipboard-list",
    state: false,
    route: "/todo-list",
  },
  {
    title: "Contact",
    icon: "fa-solid fa-id-card",
    state: false,
    route: "/contacts",
  },
  {
    title: "Team",
    icon: "fa-solid fa-people-group",
    state: false,
    route: "/allteam",
  },
];

export const sidebarMenu3 = [
  {
    title: "Settings",
    icon: "fa-solid fa-gear",
    state: false,
    route: "/settings",
  },
  {
    title: "Logout",
    icon: "fa-solid fa-power-off",
    state: false,
    route: "/logout",
  },
];

export const dashboardArr1 = [
  {
    id: "1",
    title: "Total User",
    value: "40,689",
    percentage: "8.5%",
    marketDesc: "Up from yesterday",
    riseStatus: true,
    icon: "fa-user-group",
    textColor: "#8280FF",
    bgColor: "rgba(130,128,255,0.3)",
  },
  {
    id: "2",
    title: "Total Order",
    value: "10,293",
    percentage: "1.5%",
    marketDesc: "Up from past week",
    riseStatus: true,
    icon: "fa-cubes-stacked",
    textColor: "#FEC53D",
    bgColor: "rgba(254,197,61,0.3)",
  },
  {
    id: "3",
    title: "Total User",
    value: "$89,000",
    percentage: "8.5%",
    marketDesc: "Down from yesterday",
    riseStatus: false,
    icon: "fa-chart-line",
    textColor: "#00B69B",
    bgColor: "rgba(0,182,155,0.3)",
  },
  {
    id: "4",
    title: "Total User",
    value: "2,040",
    percentage: "8.5%",
    marketDesc: "Up from yesterday",
    riseStatus: true,
    icon: "fa-clock-rotate-left",
    textColor: "#FF9066",
    bgColor: "rgba(255,144,102,0.3)",
  },
];

export const orderList = [
  {
    id: "0001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "completed",
  },
  {
    id: "0002",
    name: "James Smith",
    address: "247 Westwood Ave",
    date: "15 Nov 2020",
    type: "Gas",
    status: "processing",
  },
  {
    id: "0003",
    name: "Sophia Johnson",
    address: "432 Maple Street",
    date: "21 Jul 2021",
    type: "Water",
    status: "rejected",
  },
  {
    id: "0004",
    name: "Liam Williams",
    address: "78 Birch Road Apt. 12",
    date: "02 Jan 2022",
    type: "Electric",
    status: "onhold",
  },
  {
    id: "0005",
    name: "Emma Brown",
    address: "95 Oakridge Blvd",
    date: "30 Sep 2018",
    type: "Internet",
    status: "completed",
  },
  {
    id: "0006",
    name: "Mason Garcia",
    address: "23 Pineview Court",
    date: "11 Jun 2020",
    type: "Gas",
    status: "rejected",
  },
  {
    id: "0007",
    name: "Olivia Martinez",
    address: "58 Sunset Blvd",
    date: "05 Mar 2023",
    type: "Water",
    status: "intransit",
  },
  {
    id: "0008",
    name: "William Rodriguez",
    address: "17 Palm Street",
    date: "19 Aug 2017",
    type: "Electric",
    status: "completed",
  },
  {
    id: "0009",
    name: "Isabella Davis",
    address: "65 Cedar Lane",
    date: "08 May 2022",
    type: "Internet",
    status: "completed",
  },
  {
    id: "0010",
    name: "Ethan Miller",
    address: "149 Elm Avenue",
    date: "27 Oct 2021",
    type: "Gas",
    status: "completed",
  },
];

export const productStockList = [
  {
    product_name: "Wireless Earbuds",
    product_image:
      "https://images.pexels.com/photos/7156880/pexels-photo-7156880.jpeg",
    price: 49.99,
    pieces: 50,
    category: "Electronics",
    color: ["#FF5733", "#33FF57", "#3357FF"], // 3 colors
  },
  {
    product_name: "Smartphone Stand",
    product_image:
      "https://images.pexels.com/photos/4042800/pexels-photo-4042800.jpeg",
    price: 12.99,
    pieces: 100,
    category: "Accessories",
    color: ["#FFC300", "#FF5733", "#C70039", "#900C3F"], // 4 colors
  },
  {
    product_name: "Bluetooth Speaker",
    product_image:
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg",
    price: 79.99,
    pieces: 30,
    category: "Electronics",
    color: ["#DAF7A6", "#FFC300", "#FF5733"], // 3 colors
  },
  {
    product_name: "Laptop Sleeve",
    product_image:
      "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg",
    price: 24.99,
    pieces: 75,
    category: "Accessories",
    color: ["#581845", "#900C3F", "#C70039", "#FF5733"], // 4 colors
  },
  {
    product_name: "Wireless Mouse",
    product_image:
      "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg",
    price: 19.99,
    pieces: 120,
    category: "Electronics",
    color: ["#FFB6C1", "#FF69B4", "#FF1493"], // 3 colors
  },
  {
    product_name: "USB-C Hub",
    product_image:
      "https://images.pexels.com/photos/154379/pexels-photo-154379.jpeg",
    price: 29.99,
    pieces: 60,
    category: "Computers",
    color: ["#FFD700", "#FF4500", "#FF6347", "#FF7F50"], // 4 colors
  },
  {
    product_name: "Portable Charger",
    product_image:
      "https://images.pexels.com/photos/3945672/pexels-photo-3945672.jpeg",
    price: 39.99,
    pieces: 40,
    category: "Accessories",
    color: ["#90EE90", "#32CD32", "#228B22"], // 3 colors
  },
  {
    product_name: "Smartwatch",
    product_image:
      "https://images.pexels.com/photos/276380/pexels-photo-276380.jpeg",
    price: 149.99,
    pieces: 25,
    category: "Electronics",
    color: ["#00BFFF", "#1E90FF", "#4682B4", "#5F9EA0"], // 4 colors
  },
  {
    product_name: "Noise-Cancelling Headphones",
    product_image:
      "https://images.pexels.com/photos/154379/pexels-photo-154379.jpeg",
    price: 199.99,
    pieces: 15,
    category: "Electronics",
    color: ["#FF4500", "#FF6347", "#FF1493"], // 3 colors
  },
  {
    product_name: "Gaming Keyboard",
    product_image:
      "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg",
    price: 89.99,
    pieces: 50,
    category: "Computers",
    color: ["#7FFF00", "#32CD32", "#FFD700", "#FF7F50"], // 4 colors
  },
];
