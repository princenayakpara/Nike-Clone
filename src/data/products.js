const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Shoes",
    gender: "Men",
    price: 150,
    originalPrice: 180,
    description: "The Nike Air Max 270 delivers visible cushioning under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black/White", "White/Red", "Navy/Orange"],
    rating: 4.5,
    reviews: 1284,
    badge: "Best Seller",
    inStock: true
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    category: "Shoes",
    gender: "Men",
    price: 115,
    originalPrice: null,
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80"
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    colors: ["White/White", "Black/Black", "White/Black"],
    rating: 4.8,
    reviews: 3542,
    badge: "Iconic",
    inStock: true
  },
  {
    id: 3,
    name: "Nike Dunk Low Retro",
    category: "Shoes",
    gender: "Men",
    price: 115,
    originalPrice: null,
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper.",
    images: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=800&q=80"
    ],
    sizes: [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black/White", "Panda", "University Red"],
    rating: 4.7,
    reviews: 2891,
    badge: "Popular",
    inStock: true
  },
  {
    id: 4,
    name: "Nike Air Jordan 1 Retro High OG",
    category: "Shoes",
    gender: "Men",
    price: 180,
    originalPrice: null,
    description: "The Air Jordan 1 Retro High OG remakes the classic sneaker with a fresh twist. Premium materials and Air cushioning deliver vintage style with modern comfort.",
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
      "https://images.unsplash.com/photo-1612681621979-d1843e291648?w=800&q=80",
      "https://images.unsplash.com/photo-1585087905922-f05de4b48675?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    colors: ["Chicago", "Bred", "Royal"],
    rating: 4.9,
    reviews: 4521,
    badge: "Legendary",
    inStock: true
  },
  {
    id: 5,
    name: "Nike React Infinity Run 3",
    category: "Shoes",
    gender: "Women",
    price: 160,
    originalPrice: 185,
    description: "Designed to keep you on the run, the Nike React Infinity Run 3 is a supportive and smooth ride. It features a wider forefoot and increased foam for added stability.",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["Pink/White", "Black/Gold", "Purple/Silver"],
    rating: 4.4,
    reviews: 892,
    badge: "New",
    inStock: true
  },
  {
    id: 6,
    name: "Nike Sportswear Tech Fleece",
    category: "Sportswear",
    gender: "Men",
    price: 130,
    originalPrice: null,
    description: "The Nike Sportswear Tech Fleece Joggers give you the soft comfort of fleece in a modern, slim design. Lightweight warmth without the bulk makes these your go-to pants for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Dark Grey", "Navy"],
    rating: 4.6,
    reviews: 2156,
    badge: null,
    inStock: true
  },
  {
    id: 7,
    name: "Nike Air Max 90",
    category: "Shoes",
    gender: "Women",
    price: 130,
    originalPrice: null,
    description: "The Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Nothing as Icons — as iconic as the AM90.",
    images: [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&q=80"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10],
    colors: ["White/Pink", "All Black", "Cream/Brown"],
    rating: 4.6,
    reviews: 1876,
    badge: null,
    inStock: true
  },
  {
    id: 8,
    name: "Nike Blazer Mid '77 Vintage",
    category: "Shoes",
    gender: "Women",
    price: 105,
    originalPrice: null,
    description: "In the '70s, Nike was the new shoe on the block. So new in fact that the first Blazer was a basketball shoe. Now it's a wardrobe staple, iconic for its vintage appeal.",
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=800&q=80"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["White/Black", "Sail/Red", "White/Green"],
    rating: 4.5,
    reviews: 1543,
    badge: "Classic",
    inStock: true
  },
  {
    id: 9,
    name: "Nike Windrunner Jacket",
    category: "Sportswear",
    gender: "Men",
    price: 100,
    originalPrice: 120,
    description: "The Nike Windrunner Jacket updates a running icon with lightweight fabric. The chevron design on the chest nods to the original while updated materials keep you covered.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
      "https://images.unsplash.com/photo-1495685903017-71aace508de6?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Olive"],
    rating: 4.3,
    reviews: 876,
    badge: "Sale",
    inStock: true
  },
  {
    id: 10,
    name: "Nike Pegasus 40",
    category: "Shoes",
    gender: "Men",
    price: 130,
    originalPrice: null,
    description: "A springy ride for every run, the Pegasus delivers more energy return thanks to the dual Air Zoom units. It's your reliable, go-to running shoe that fits just right.",
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aafe2?w=800&q=80",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    colors: ["Black/White", "Blue/Volt", "Grey/Orange"],
    rating: 4.7,
    reviews: 3214,
    badge: null,
    inStock: true
  },
  {
    id: 11,
    name: "Nike Sportswear Club Fleece Hoodie",
    category: "Sportswear",
    gender: "Women",
    price: 60,
    originalPrice: null,
    description: "Soft and comfortable, the Nike Sportswear Club Fleece Hoodie gives you a warm, classic look. This pullover hoodie features an updated fit for a fresh feel.",
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792571?w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a0a?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Sail", "Polar"],
    rating: 4.4,
    reviews: 1432,
    badge: null,
    inStock: true
  },
  {
    id: 12,
    name: "Nike ZoomX Vaporfly NEXT% 3",
    category: "Shoes",
    gender: "Men",
    price: 260,
    originalPrice: null,
    description: "Continuing to set the standard for racing shoes, the Nike ZoomX Vaporfly NEXT% 3 is made for the speed you need. With a full-length carbon fibre plate and responsive ZoomX foam.",
    images: [
      "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800&q=80",
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80",
      "https://images.unsplash.com/photo-1613987245117-50933bcb3240?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Volt/Black", "White/Crimson", "Total Orange"],
    rating: 4.8,
    reviews: 987,
    badge: "Pro",
    inStock: true
  },
  {
    id: 13,
    name: "Nike Dri-FIT ADV TechKnit Tee",
    category: "Sportswear",
    gender: "Men",
    price: 85,
    originalPrice: 100,
    description: "The Nike Dri-FIT ADV TechKnit running top keeps you cool and dry with advanced moisture-wicking technology. Seamless construction reduces irritation on long runs.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Smoke Grey", "Midnight Navy"],
    rating: 4.3,
    reviews: 654,
    badge: "Sale",
    inStock: true
  },
  {
    id: 14,
    name: "Nike Air Max Plus",
    category: "Shoes",
    gender: "Men",
    price: 175,
    originalPrice: null,
    description: "Let your attitude satisfizz — the Air Max Plus has been a street-style staple since 1998. The wavy design lines, TPU heel cage, and visible Air cushioning remain unmatched.",
    images: [
      "https://images.unsplash.com/photo-1600185365778-df6e1e230be4?w=800&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black/Volt", "Triple Black", "White/Red"],
    rating: 4.6,
    reviews: 2341,
    badge: null,
    inStock: true
  },
  {
    id: 15,
    name: "Nike Air Zoom SuperRep 3",
    category: "Shoes",
    gender: "Women",
    price: 120,
    originalPrice: 140,
    description: "Your HIIT circuit training shoe — the Nike Air Zoom SuperRep 3 powers you through every burpee, box jump, and broad jump. Cushion in the forefoot absorbs impact.",
    images: [
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=800&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["White/Pink", "Black/Yellow", "Grey/Mint"],
    rating: 4.2,
    reviews: 543,
    badge: "Sale",
    inStock: true
  },
  {
    id: 16,
    name: "Nike Pro Dri-FIT Leggings",
    category: "Sportswear",
    gender: "Women",
    price: 55,
    originalPrice: null,
    description: "Train in comfort with the Nike Pro Dri-FIT Leggings. Designed with stretchy, supportive fabric, these leggings wick sweat and feature mesh panels for breathability.",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Dark Smoke Grey", "Fireberry"],
    rating: 4.5,
    reviews: 1876,
    badge: null,
    inStock: true
  },
  {
    id: 17,
    name: "Nike SB Dunk Low Pro",
    category: "Shoes",
    gender: "Men",
    price: 115,
    originalPrice: null,
    description: "Designed for skateboarding, the Nike SB Dunk Low Pro features a padded, low-cut collar for a great fit and board feel. Zoom Air insole provides responsive cushioning.",
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
    ],
    sizes: [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black/Gum", "White/Grey", "Court Purple"],
    rating: 4.7,
    reviews: 1654,
    badge: null,
    inStock: true
  },
  {
    id: 18,
    name: "Nike Sportswear Essential Tee",
    category: "Sportswear",
    gender: "Women",
    price: 30,
    originalPrice: null,
    description: "The Nike Sportswear Essential Tee brings you a comfy classic with a relaxed, boyfriend fit. Made from soft cotton, it's perfect for everyday wear with a modern silhouette.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Barely Rose"],
    rating: 4.3,
    reviews: 2145,
    badge: null,
    inStock: true
  },
  {
    id: 19,
    name: "Nike Metcon 9",
    category: "Shoes",
    gender: "Men",
    price: 150,
    originalPrice: null,
    description: "Do it all in the Nike Metcon 9. It's stable for heavy lifting, supportive for sprints, and comfortable for every rep in between. The wide, flat heel plate keeps you grounded.",
    images: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80",
      "https://images.unsplash.com/photo-1595341595379-cf1cd0ed7786?w=800&q=80",
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13, 14],
    colors: ["Black/White", "Light Iron Ore", "Phantom/Olive"],
    rating: 4.6,
    reviews: 1234,
    badge: null,
    inStock: true
  },
  {
    id: 20,
    name: "Nike Air VaporMax 2023 Flyknit",
    category: "Shoes",
    gender: "Women",
    price: 210,
    originalPrice: 250,
    description: "Walk on air with the Nike Air VaporMax 2023. Flyknit upper wraps your foot in lightweight comfort while the revolutionary VaporMax Air technology provides bouncy cushioning.",
    images: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80"
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10],
    colors: ["Platinum Violet", "Black/Pink", "Sail/Tan"],
    rating: 4.4,
    reviews: 765,
    badge: "Sale",
    inStock: true
  },
  {
    id: 21,
    name: "Nike ACG Mountain Fly Low",
    category: "Shoes",
    gender: "Men",
    price: 170,
    originalPrice: null,
    description: "For the trail or the city, the Nike ACG Mountain Fly Low combines rugged durability with modern style. React foam cushioning keeps you comfortable on any terrain.",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80",
      "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800&q=80",
      "https://images.unsplash.com/photo-1559479083-281d0e3cd22f?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Fossil Stone", "Black/Anthracite", "Sea Glass"],
    rating: 4.5,
    reviews: 432,
    badge: "New",
    inStock: true
  },
  {
    id: 22,
    name: "Nike Sportswear Windbreaker",
    category: "Sportswear",
    gender: "Women",
    price: 90,
    originalPrice: 110,
    description: "Keep the wind at bay with the Nike Sportswear Windbreaker. Lightweight ripstop fabric and a loose fit make it perfect for layering. Contrasting color blocking adds style.",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sail/Blue", "Black/White", "Pink Bloom"],
    rating: 4.1,
    reviews: 678,
    badge: "Sale",
    inStock: true
  },
  {
    id: 23,
    name: "Nike Air Huarache",
    category: "Shoes",
    gender: "Men",
    price: 130,
    originalPrice: null,
    description: "The Nike Air Huarache blends the look you love with the comfort you want. Its neoprene sleeve gives you a snug, sock-like fit while Air cushioning keeps it smooth.",
    images: [
      "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=800&q=80",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=800&q=80",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["White/Pure Platinum", "Black/White", "Light Bone"],
    rating: 4.4,
    reviews: 1123,
    badge: null,
    inStock: true
  },
  {
    id: 24,
    name: "Nike One Dri-FIT Sports Bra",
    category: "Sportswear",
    gender: "Women",
    price: 45,
    originalPrice: null,
    description: "Get support where you need it. The Nike One Dri-FIT Sports Bra features medium support and a sleek design. Dri-FIT technology keeps you comfortable during workouts.",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Smokey Mauve"],
    rating: 4.6,
    reviews: 2567,
    badge: null,
    inStock: true
  }
];

export default products;
