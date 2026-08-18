export const brands = [
  {
    slug: "coffees-of-karnataka",
    title: "Coffees of Karnataka",
    description:
      "GI-tagged single-estate Arabica & Robusta from the Western Ghats.",
    image: "/brands/coffees-of-karnataka.png",
  },
  {
    slug: "karnataka-handicrafts",
    title: "Karnataka Handicrafts",
    description:
      "Bidriware, Channapatna toys, rosewood inlay — GI heritage crafts.",
    image: "/brands/karnataka-handicrafts.png",
  },
  {
    slug: "mysore-silk",
    title: "Mysore Silk",
    description: "KSIC heritage weaves. 100% pure silk, GI-11.",
    image: "/brands/mysore-silk.png",
  },
  {
    slug: "mysore-sandal-products",
    title: "Mysore Sandal Products",
    description: "Mysore Sandal Soap & Oil, GI No. 30 & GI No. 29.",
    image: "/brands/mysore-sandal-products.png",
  },
  {
    slug: "karnataka-handlooms",
    title: "Karnataka Handlooms",
    description:
      "Ilkal, Molakalmuru, Udupi & Melkote weaves, several GI-tagged.",
    image: "/brands/karnataka-handlooms.png",
  },
  {
    slug: "karnataka-leathers",
    title: "Karnataka Leathers",
    description: "Kolhapuri GI chappals & handcrafted leather bags.",
    image: "/brands/karnataka-leathers.png",
  },
];

export const brandPages = {
  "coffees-of-karnataka": {
    slug: "coffees-of-karnataka",
    title: "Coffees of Karnataka",
    tagline: "Where Baba Budan's seven seeds became a nation's cup",
    heroImage: "/brands/inside/coffees-of-karnataka-new.png",
    intro: {
      paragraphs: [
        "The Indian coffee journey began in 1600 AD when the legendary holy saint Baba Budan planted seven ‘Mocha’ seeds in the courtyard of his hermitage on ‘Baba Budan Giri’ in Karnataka. Initially a garden curiosity, coffee evolved into commercial plantations by the 18th century.",
        "Today, Indian coffee thrives under the natural shade of the biodiverse Western and Eastern Ghats, contributing to ecological balance and socio-economic development in remote hilly regions. Indian Robusta is prized internationally for its blending quality, while Indian Arabica has earned its own distinct identity on the world's coffee map.",
      ],
      extra: [
        "The Coffee Board of India continues this legacy with GI-registered regional Arabica — powder formats sourced from single estates across the Western Ghats, roasted and packed to honour the land they come from.",
      ],
    },
    productSections: [
      {
        id: "coffee-board",
        layout: "coffee-board",
        heading: "Coffees Brands",
        showLetters: true,
        banner: {
          title: "Karnataka Coffee Board Products",
          description:
            "GI-registered regional Arabica in powder format, sourced from Karnataka's coffee hills and packed by the Coffee Board of India.",
          image: "/brands/inside/board-products.png",
        },
        initialCount: 6,
        products: [
          {
            id: "bababudangiris-arabica",
            name: "Bababudangiris Arabica Coffee-GI Registered (Powder)",
            description:
              "Single-origin Arabica from the hills of Baba Budan Giri, where India's coffee story began. Shade-grown, handpicked, and packed as powder.",
            origin: "Bababudangiri, Chikkamagaluru",
            weight: "250g & 500g",
            roast: "Medium",
            tastingNotes: "Spice, citrus, cocoa",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-1.png",
          },
          {
            id: "chikmagalur-arabica",
            name: "Chikmagalur Arabica Coffee-GI Registered (Powder)",
            description:
              "GI-registered Chikmagalur Arabica with a brighter cup. Grown under the canopy of the Western Ghats and roasted for everyday brewing.",
            origin: "Chikkamagaluru",
            weight: "250g & 500g",
            roast: "Medium",
            tastingNotes: "Citrus, honey, light spice",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-2.png",
          },
          {
            id: "coorg-arabica",
            name: "Coorg Arabica Coffee-GI Registered (Powder)",
            description:
              "Coorg's GI Arabica in powder format — a full-bodied estate cup from Kodagu's coffee highlands.",
            origin: "Coorg (Kodagu)",
            weight: "250g & 500g",
            roast: "Medium",
            tastingNotes: "Chocolate, nut, mild spice",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-3.png",
          },
          {
            id: "gift-hamper-jute",
            name: "Coffee Gift Hamper with jute bag (GI Registered Coffee powder)",
            description:
              "A gift set of GI-registered regional Arabica powders, packed with a jute bag for keeping or gifting.",
            origin: "Karnataka coffee regions",
            weight: "Assorted packs",
            roast: "Medium",
            tastingNotes: "Regional Arabica blend",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-4.png",
          },
          {
            id: "gift-hamper-box",
            name: "Coffee Gift Hamper without jute bag (GI Registered Coffee powder)",
            description:
              "GI-registered coffee powders presented in a gift box — three regional cups in one hamper.",
            origin: "Karnataka coffee regions",
            weight: "Assorted packs",
            roast: "Medium",
            tastingNotes: "Regional Arabica blend",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-5.png",
          },
          {
            id: "gift-hamper-jute-green",
            name: "Coffee Gift Hamper with jute bag (GI Registered Coffee powder)",
            description:
              "A compact GI coffee hamper with jute bag — estate powders packed for travel or gifting.",
            origin: "Karnataka coffee regions",
            weight: "Assorted packs",
            roast: "Medium",
            tastingNotes: "Regional Arabica blend",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-6.png",
          },
          {
            id: "classic-whisky",
            name: "Classic WHISKY",
            description:
              "Arabica blend with a whisky-barrel finish profile, packed for a deeper evening cup.",
            origin: "Chikkamagaluru",
            weight: "200g",
            roast: "Medium-dark",
            tastingNotes: "Oak, cocoa, spice",
            price: "₹1,350",
            image: "/brands/inside/classic-whisky.png",
          },
        ],
      },
      {
        id: "harley-coffee",
        layout: "coffee-board",
        initialCount: 3,
        banner: {
          title: "Harley Coffee",
          description:
            "Single-origin Arabica from Harley Estate in Sakleshpur — estate-grown beans, barrel-aged lots, and quick-brew formats packed under the Classic name.",
          image: "/brands/inside/harley-coffees.png",
        },
        products: [
          {
            id: "classic-mountain",
            name: "Classic Mountain (Beans & Ground)",
            description:
              "Single origin 100% Arabica beans from the peaks of Munjarabad.",
            weight: "200g",
            roast: "Medium Dark",
            tastingNotes: "Dark Chocolate & Orange Citrus",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-7.png",
          },
          {
            id: "classic-quick-brew",
            name: "Classic Quick Brew Box (10 sachets)",
            description:
              "Assorted quick brews with Microlot and Barrel-aged coffees.",
            weight: "100g",
            roast: "Light - Medium",
            tastingNotes: "Assorted",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-8.png",
          },
          {
            id: "classic-whisky-barrel",
            name: "Classic Whisky Barrel Aged (Beans & Ground)",
            description:
              "Speciality coffee beans imbibing the aroma and sweetness of fine single-malt whiskey.",
            weight: "250g",
            roast: "Light - Medium",
            tastingNotes: "Irish cream, green apple & tropical fruits",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-9.png",
          },
        ],
      },
      {
        id: "maverick-farmer-coffee",
        layout: "coffee-board",
        initialCount: 4,
        banner: {
          title: "Maverick & Farmer Coffee",
          description:
            "Single-estate Arabica from Karnataka farms — small-lot blends packed as beans and ground, from mellow fruit cups to dark French roasts.",
          image: "/brands/inside/former-coffee.png",
        },
        products: [
          {
            id: "parama-luxury-blend",
            name: "Parama (Beans & Ground)",
            description:
              "In-house versatile coffee blend for everyday brewing.",
            weight: "250 & 100g",
            roast: "Medium to Medium-dark",
            tastingNotes: "Chocolate & Caramel",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-10.png",
          },
          {
            id: "tall-dark-handsome",
            name: "Tall Dark Handsome (Beans & Ground)",
            description: "Arabica French roast — smoky and intense.",
            weight: "250g",
            roast: "Dark (French)",
            tastingNotes: "Smoky, Intense",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-11.png",
          },
          {
            id: "say-hello-to-mellow",
            name: "Say Hello to Mellow (Beans & Ground)",
            description: "Single-estate Arabica with a milder, fruit-led cup.",
            weight: "250g",
            roast: "Mild Roast",
            tastingNotes: "Banana and Berry",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-12.png",
          },
          {
            id: "rohan-bopanna-master-blend",
            name: "Rohan Bopanna's Master Blend (Beans & Ground)",
            description: "90% wet processed, 10% dry processed.",
            weight: "250g",
            roast: "Medium Roast",
            tastingNotes: "Toffee, Mildly sweet",
            price: "₹898",
            image: "/brands/inside/coffees-of-kr-13.png",
          },
        ],
      },
    ],
  },
  "karnataka-handicrafts": {
    slug: "karnataka-handicrafts",
    title: "Karnataka Handicrafts",
    tagline: "500 years of silver inlay, kept alive under the Cauvery name.",
    heroImage: "/brands/karnataka-handicrafts/Banner.png",
    heroVariant: "centered",
    intro: {
      paragraphs: [
        "Karnataka is known for its handicraft industry and its unique, traditional masterpieces made from a variety of materials using intricate motifs and time-tested as well as modern techniques. The sandalwood and rosewood grown in abundance in Karnataka have led to a legacy of exquisite sandalwood carvings and intricate rosewood inlay work, kept alive by passing skills from generation to generation.",
        "To preserve, develop and promote this craftsmanship, the Government of Karnataka established the Karnataka State Handicrafts Development Corporation Ltd (KSHDCL) in 1964. KSHDCL markets the beautiful GI-tagged handicrafts of Karnataka — Channapatna Toys & Dolls, Bidriware, Mysore Rosewood Inlay, Kasuti Embroidery, Sandalwood and more — under the brand name 'Cauvery', through 12 Craft Complexes and showrooms across the country.",
      ],
      extra: [
        "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on a black zinc-copper alloy. It carries Karnataka GI-20, registered since 2005.",
      ],
    },
    productSections: [
      {
        id: "categories",
        title: "Categories",
        subtitle: "GI-tagged artisan collections from across Karnataka",
        layout: "categories",
        products: [
          {
            id: "karnataka-bronzeware",
            name: "Karnataka Bronzeware",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-4.png",
            href: "/our-brands/karnataka-handicrafts/karnataka-bronzeware",
          },
          {
            id: "bidriware",
            name: "Bidriware",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-1.png",
          },
          {
            id: "channapatna-toys",
            name: "Channapatna Toys & Dolls",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-2.png",
          },
          {
            id: "designer-products",
            name: "Designer Products",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-3.png",
          },
        
          {
            id: "kasuthi-embroidery",
            name: "Kasuthi Embroidery",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-5.png",
          },
          {
            id: "mysore-rosewood-inlay",
            name: "Mysore Rosewood Inlay",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-6.png",
          },
          {
            id: "mysore-traditional-paintings",
            name: "Mysore Traditional Paintings & Ganjifa Cards of Mysore",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-7.png",
          },
          {
            id: "navalgund-dhurries",
            name: "Navalgund Dhurries",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-8.png",
          },
          {
            id: "sandalwood-carvings",
            name: "Sandalwood Carvings",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-9.png",
          },
        ],
      },
    ],
  },
  "mysore-silk": {
    slug: "mysore-silk",
    title: "Mysore Silk",
    tagline: "KSIC heritage weaves. 100% pure silk, GI-11.",
    heroImage: "/brands/mysore-silk.jpeg",
    intro: {
      paragraphs: [
        "Mysore Silk is woven by the Karnataka Silk Industries Corporation, founded in 1912. Pure mulberry silk, real zari, and a drape that has dressed Karnataka for over a century.",
        "Every saree carries GI-11 — a mark that the silk, the weave, and the gold thread belong to this land.",
      ],
      extra: [
        "The looms in Mysuru still follow the original KSIC specifications — 100% pure silk with tested zari.",
      ],
    },
    productSections: [
      {
        id: "ksic-weaves",
        title: "KSIC Weaves",
        subtitle: "100% pure silk, GI-11",
        products: [
          {
            id: "classic-saree",
            name: "Classic Mysore Silk Saree",
            description: "Pure mulberry silk with real zari border.",
            price: "18,500",
            images: ["/images/brands/products/silk-1.png"],
          },
          {
            id: "temple-saree",
            name: "Temple Border Saree",
            description: "Heritage temple motif in gold zari.",
            price: "22,000",
            images: ["/images/brands/products/silk-2.png"],
          },
          {
            id: "pastel-saree",
            name: "Pastel Crepe Silk",
            description: "Lightweight crepe in seasonal colours.",
            price: "16,800",
            images: ["/images/brands/products/silk-3.png"],
          },
        ],
      },
    ],
  },
  "mysore-sandal-products": {
    slug: "mysore-sandal-products",
    title: "Mysore Sandal Products",
    tagline: "Mysore Sandal Soap & Oil, GI No. 30 & GI No. 29.",
    heroImage: "/brands/mysore-sandal-product.jpeg",
    intro: {
      paragraphs: [
        "Mysore Sandal is one of India's most recognised GI products. The soap and the oil are made from sandalwood grown and distilled in Karnataka — a fragrance the state has protected for generations.",
        "Karnataka Soaps & Detergents Limited continues the original formula, still using genuine sandalwood oil.",
      ],
      extra: [
        "GI No. 29 covers Mysore Sandalwood Oil. GI No. 30 covers Mysore Sandal Soap.",
      ],
    },
    productSections: [
      {
        id: "sandal-range",
        title: "Sandal Range",
        subtitle: "Soap & oil, GI No. 30 & GI No. 29",
        products: [
          {
            id: "sandal-soap",
            name: "Mysore Sandal Soap",
            description: "Classic sandalwood soap, 150g.",
            price: "85",
            images: ["/images/brands/products/sandal-1.png"],
          },
          {
            id: "sandal-oil",
            name: "Mysore Sandal Oil",
            description: "Pure sandalwood oil, 10ml.",
            price: "1,450",
            images: ["/images/brands/products/sandal-2.png"],
          },
          {
            id: "sandal-gift",
            name: "Heritage Gift Set",
            description: "Soap and oil in a keepsake box.",
            price: "1,650",
            images: ["/images/brands/products/sandal-3.png"],
          },
        ],
      },
    ],
  },
  "karnataka-handlooms": {
    slug: "karnataka-handlooms",
    title: "Karnataka Handlooms",
    tagline: "Ilkal, Molakalmuru, Udupi & Melkote weaves, several GI-tagged.",
    heroImage: "/brands/karnataka-handlooms.jpeg",
    intro: {
      paragraphs: [
        "Across Karnataka, handloom clusters still weave on pit looms and frame looms — Ilkal's tope teni joining, Molakalmuru's fine silk, Udupi's temple cottons, Melkote's bordered weaves.",
        "Each region has its own GI and its own grammar of colour and border.",
      ],
      extra: [
        "This catalog gathers GI-tagged handlooms from four of Karnataka's living weaving towns.",
      ],
    },
    productSections: [
      {
        id: "handloom-weaves",
        title: "Handloom Weaves",
        subtitle: "Ilkal, Molakalmuru, Udupi & Melkote",
        products: [
          {
            id: "ilkal-saree",
            name: "Ilkal Saree",
            description: "Cotton-silk Ilkal with tope teni pallu.",
            price: "4,200",
            images: ["/images/brands/products/handloom-1.png"],
          },
          {
            id: "molakalmuru-saree",
            name: "Molakalmuru Silk",
            description: "Fine silk from Chitradurga, GI-tagged.",
            price: "7,800",
            images: ["/images/brands/products/handloom-2.png"],
          },
          {
            id: "udupi-saree",
            name: "Udupi Cotton",
            description: "Temple cotton handloom from coastal Karnataka.",
            price: "3,400",
            images: ["/images/brands/products/handloom-3.png"],
          },
        ],
      },
    ],
  },
  "karnataka-leathers": {
    slug: "karnataka-leathers",
    title: "Karnataka Leathers",
    tagline: "Kolhapuri GI chappals & handcrafted leather bags.",
    heroImage: "/brands/karnataka-leathers.jpeg",
    intro: {
      paragraphs: [
        "Leather craft in Karnataka is still a hand process — vegetable tanning, hand-stitching, and the open-toe Kolhapuri chappal that carries a GI.",
        "From Athani to Bengaluru workshops, bags and footwear are cut and finished by artisans who work hide by hide.",
      ],
      extra: [
        "This collection focuses on GI Kolhapuri chappals and handcrafted leather bags made in Karnataka.",
      ],
    },
    productSections: [
      {
        id: "leather-craft",
        title: "Leather Craft",
        subtitle: "Kolhapuri GI chappals & bags",
        products: [
          {
            id: "kolhapuri",
            name: "Kolhapuri Chappals",
            description: "Hand-stitched GI Kolhapuri pair.",
            price: "2,100",
            images: ["/images/brands/products/leather-1.png"],
          },
          {
            id: "briefcase",
            name: "Heritage Briefcase",
            description: "Vegetable-tanned leather briefcase.",
            price: "8,900",
            images: ["/images/brands/products/leather-2.png"],
          },
          {
            id: "tote",
            name: "Handcrafted Tote",
            description: "Everyday leather tote, unlined.",
            price: "5,400",
            images: ["/images/brands/products/leather-3.png"],
          },
        ],
      },
    ],
  },
};

export const craftCategoryPages = {
  "karnataka-bronzeware": {
    slug: "karnataka-bronzeware",
    parentSlug: "karnataka-handicrafts",
    parentTitle: "Karnataka Handicrafts",
    title: "Karnataka Bronzeware",
    tagline:
      "Karnataka Bronzeware is a traditional metal craft using the ancient 'lost wax' (cire perdue) casting technique. Protected by a Geographical Indication (GI) tag,",
    heroImage: "/brands/karnataka-handicrafts/bronzeware/banner.png",
    products: [
      {
        id: "br-dancing-ganapathy",
        name: "BrDancingGanapathy",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-1.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-1.png",
        ],
      },
      {
        id: "br-darpanasundari",
        name: "BrDarpanasundari",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-2.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-2.png",
        ],
      },
      {
        id: "br-hamsa",
        name: "BrHamsa",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-3.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-3.png",
        ],
      },
      {
        id: "br-krishna",
        name: "BrKrishna",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-4.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-4.png",
        ],
      },
      {
        id: "br-lakshmi",
        name: "BrLakshmi",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-5.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-5.png",
        ],
      },
      {
        id: "br-mahisasuramardini",
        name: "BrMahisasuramardini",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-6.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-6.png",
        ],
      },
      {
        id: "br-manatapa-jhulaganesha",
        name: "BrManatapaJhulaganesha",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-7.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-7.png",
        ],
      },
      {
        id: "br-nandi",
        name: "BrNandi",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-8.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-8.png",
        ],
      },
      {
        id: "br-nataraja",
        name: "BrNataraja",
        description:
          "Handcrafted brass idol features Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        price: "1,100",
        images: [
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-9.png",
          "/brands/karnataka-handicrafts/bronzeware/bronzeware-9.png",
        ],
      },
    ],
  },
};

export function getBrandBySlug(slug) {
  return brandPages[slug] ?? null;
}

export function getBrandSlugs() {
  return Object.keys(brandPages);
}

export function getAdjacentBrands(slug) {
  const index = brands.findIndex((brand) => brand.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? brands[index - 1] : null,
    next: index < brands.length - 1 ? brands[index + 1] : null,
  };
}

export function getBrandCategoryItems(slug) {
  const section = brandPages[slug]?.productSections?.find(
    (item) => item.layout === "categories",
  );

  return section?.products ?? [];
}

export function getCraftCategoryBySlug(slug) {
  return craftCategoryPages[slug] ?? null;
}

export function getCraftCategorySlugs() {
  return Object.keys(craftCategoryPages);
}
