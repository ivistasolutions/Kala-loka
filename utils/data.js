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
    image: "/brands/mysore-sandal.png",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
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
            price: "",
            image: "/brands/inside/coffees-of-kr-10.png",
          },
          {
            id: "tall-dark-handsome",
            name: "Tall Dark Handsome (Beans & Ground)",
            description: "Arabica French roast — smoky and intense.",
            weight: "250g",
            roast: "Dark (French)",
            tastingNotes: "Smoky, Intense",
            price: "",
            image: "/brands/inside/coffees-of-kr-11.png",
          },
          {
            id: "say-hello-to-mellow",
            name: "Say Hello to Mellow (Beans & Ground)",
            description: "Single-estate Arabica with a milder, fruit-led cup.",
            weight: "250g",
            roast: "Mild Roast",
            tastingNotes: "Banana and Berry",
            price: "",
            image: "/brands/inside/coffees-of-kr-12.png",
          },
          {
            id: "rohan-bopanna-master-blend",
            name: "Rohan Bopanna's Master Blend (Beans & Ground)",
            description: "90% wet processed, 10% dry processed.",
            weight: "250g",
            roast: "Medium Roast",
            tastingNotes: "Toffee, Mildly sweet",
            price: "",
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
              "Cast using the ancient lost-wax process, these solid bronze sculptures capture intricate iconographical details of deities and traditional motifs with remarkable heirloom durability.",
            image: "/brands/karnataka-handicrafts/craft-04.png",
            href: "/our-brands/karnataka-handicrafts/karnataka-bronzeware",
          },
          {
            id: "bidriware",
            name: "Bidriware",
            description:
              "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
            image: "/brands/karnataka-handicrafts/craft-1.png",
            href: "/our-brands/karnataka-handicrafts/bidriware",
          },
          {
            id: "channapatna-toys",
            name: "Channapatna Toys & Dolls",
            description:
              "Crafted from soft ivory wood and finished with safe, non-toxic organic vegetable dyes, these eco-friendly turned-wood toys are celebrated for their vibrant colors and smooth, rounded forms.",
            image: "/brands/karnataka-handicrafts/craft-2.png",
          },
          {
            id: "designer-products",
            name: "Designer Products",
            description:
              "Contemporary utility and decor pieces that bridge tradition and modernity by adapting classic Karnataka craft techniques into stylish, functional items for modern lifestyles.",
            image: "/brands/karnataka-handicrafts/craft-3.png",
          },

          {
            id: "kasuthi-embroidery",
            name: "Kasuthi Embroidery",
            description:
              "A meticulous traditional folk embroidery technique using delicate geometric patterns stitched without knots, making both sides of the fabric look identical.",
            image: "/brands/karnataka-handicrafts/craft-5.png",
          },
          {
            id: "mysore-rosewood-inlay",
            name: "Mysore Rosewood Inlay",
            description:
              "An intricate art form where contrasting materials like ivory-substitutes, wood veneers, and acrylics are precisely shaped and embedded into seasoned rosewood to depict royal processions and floral patterns.",
            image: "/brands/karnataka-handicrafts/craft-6.png",
          },
          {
            id: "mysore-traditional-paintings",
            name: "Mysore Traditional Paintings & Ganjifa Cards of Mysore",
            description:
              "Distinguished by delicate linework and rich gesso work embellished with pure gold foil, paired with the heritage tradition of hand-painted circular playing cards featuring mythological figures.",
            image: "/brands/karnataka-handicrafts/craft-7.png",
          },
          {
            id: "navalgund-dhurries",
            name: "Navalgund Dhurries",
            description:
              "Hand-woven cotton floor rugs instantly recognizable by their bold geometric patterns, striking color contrasts, and signature motifs like peacocks and playing card designs.",
            image: "/brands/karnataka-handicrafts/craft-8.png",
          },
          {
            id: "sandalwood-carvings",
            name: "Sandalwood Carvings",
            description:
              "Renowned for their natural aromatic fragrance, these ultra-detailed sculptures are carved from premium Karnataka sandalwood using centuries-old precision craftsmanship.",
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
    heroImage: "/brands/mysore-silk/Banner.png",
    heroVariant: "light",
    intro: {
      paragraphs: [
        "Mysore is rich for its royal heritage and it is no surprise that the silk produced there reflects the traditional splendor through its rich yet delicate motifs.The name Mysore silk is a befitting tribute to its ancestry. Karnataka Silk Industries Corporation Limited (KSIC) the proud inheritor of this royal legacy, has treasured it for over seven decades, has been producing 100% pure silk with pure gold zari sarees. The silk weaving factory in Mysore, presently owned by KSIC, was established in the year 1912 by Sri Nalvadi Krishnaraja Wodeyar, Maharaja of Mysore province. Initially the silk fabrics/sarees were manufactured & supplied to meet the requirements of the royal family and ornamental fabrics to their armed forces.",
        "Having gained widespread popularity for its unmatched standard of authentic Silk manufacturing process, KSIC has obtained Karnataka's first Geographical Indication Registration (GI-11) for 'Mysore Silk' in accordance with the provisions of the Geographical Indication of Goods (Registration and Protection Act) 1999 passed by the Indian Parliament.",
      ],
      extra: [],
    },
    productSections: [
      {
        id: "ksic-weaves",
        layout: "catalog",
        showPrice: false,
        products: [
          {
            id: "classic-saree",
            name: "KSIC Mysore Silk Zari Saree",
            weight: "500gms",
            price: "",
            image: "/brands/mysore-silk/mysore-silk-1.png",
          },
          {
            id: "temple-saree",
            name: "KSIC Mysore Silk Printed Saree",
            weight: "400gms",
            price: "",
            image: "/brands/mysore-silk/mysore-silk-2.png",
          },
          {
            id: "pastel-saree",
            name: "KSIC Mysore Silk Dhoti and Shalya",
            details: [
              "Size : Dhothi (Panche) Size = 3.75 Mtrs",
              "Length Valli (Shalya)",
              "Size = 2.25 Mtrs Length",
              "Weight : 400gms",
            ],
            price: "",
            image: "/brands/mysore-silk/mysore-silk-3.png",
          },
          {
            id: "silk-shirt",
            name: "KSIC Mysore Silk Shirt (Mens)",
            weight: "200gms",
            price: "",
            image: "/brands/mysore-silk/Group 26679.png",
          },
          {
            id: "silk-kurta",
            name: "KSIC Mysore Silk Kurta (Mens)",
            weight: "200gms",
            price: "",
            image: "/brands/mysore-silk/Group 26680.png",
          },
          {
            id: "silk-tie",
            name: "KSIC Mysore Silk Tie with Pocket Square",
            price: "",
            image: "/brands/mysore-silk/Group 26681.png",
          },
          {
            id: "silk-scarf",
            name: "KSIC Mysore Silk Scarf",
            weight: "100gms",
            price: "",
            image: "/brands/mysore-silk/Group 26682.png",
          },
          {
            id: "silk-dupatta",
            name: "KSIC Mysore Silk Dupatta",
            weight: "500gms",
            price: "",
            image: "/brands/mysore-silk/Group 26683.png",
          },
        ],
      },
    ],
  },
  "mysore-sandal-products": {
    slug: "mysore-sandal-products",
    title: "Mysore Sandal Products",
    tagline: "Mysore Sandal Soap & Oil, GI No. 30 & GI No. 29.",
    heroImage: "/brands/mysore-sandal/banner.png",
    heroVariant: "bottom",
    intro: {
      paragraphs: [
        "The Government Sandalwood Oil Factory was established in 1916 at Mysore to distil oil from sandalwood grown in the forests of Karnataka. What began as a state enterprise to protect a royal fragrance is today Karnataka Soaps & Detergents Limited (KSDL).",
        "Mysore Sandal Soap and Mysore Sandalwood Oil remain among India's most recognised GI products — GI No. 30 and GI No. 29 — made only from genuine sandalwood oil distilled in this land.",
      ],
      extra: [
        "KSDL continues the original formula, packing soaps, oils, incense and skin-care that still carry the scent the state has protected for over a century.",
      ],
    },
    productSections: [
      {
        id: "sandal-range",
        layout: "catalog",
        showPrice: true,
        products: [
          {
            id: "sandal-oil",
            name: "Mysore Sandalwood Oil",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            weight: "10ml",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-1.png",
          },
          {
            id: "sandal-billets",
            name: "Mysore Sandalwood Billets",
            description:
              "Pure billet paste extract to soothe skin, reduce fine lines and acne.",
            weight: "100gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-2.png",
          },
          {
            id: "sandal-soap",
            name: "Mysore Sandal Soap",
            description:
              "100% pure sandalwood oil soap to keep skin soft, glowing, and blemish-free.",
            weight: "125gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-3.png",
          },
          {
            id: "sandal-gold-soap",
            name: "Mysore Sandal Premium Gold Soap",
            description:
              "Enriched with almond oil, moisturisers and conditioners, this exotic bar soap, nourishes and rejuvenates.",
            weight: "125gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-4.png",
          },
          {
            id: "sandal-millennium-soap",
            name: "Mysore Sandal Millennium Super Premium Soap",
            description:
              "Enriched with essential oils, like Vetiver, Guaiac wood, Patchouli, Geranium, Petitgrain, Orange, and Cedarwood.",
            weight: "150gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-5.png",
          },
          {
            id: "sandal-face-pack",
            name: "Mysore Sandal Face Pack",
            description:
              "Fuller's Earth, Sandalwood Oil, Almond Oil, Rose Water, Orange Peel Powder, and Saffron enriched.",
            weight: "100 gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-6.png",
          },
          {
            id: "sandal-shower-gel",
            name: "Mysore Sandal Gold Shower Gel",
            description:
              "Exotically scented liquid gel, infused with pure sandalwood oil, which unclogs pores, and deeply hydrates.",
            weight: "200ml",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-7.png",
          },
          {
            id: "sandal-agarbhathi",
            name: "Mysore Sandal Agarbhathi",
            description:
              "Hand-rolled with sandalwood, these slow-burning incense sticks offer a rich, lingering aroma.",
            weight: "125gms",
            price: "",
            image: "/brands/mysore-sandal/mysor-sandal-8.png",
          },
        ],
      },
    ],
  },
  "karnataka-handlooms": {
    slug: "karnataka-handlooms",
    title: "Karnataka Handlooms",
    tagline: "Ilkal, Molakalmuru, Udupi & Melkote weaves, several GI-tagged.",
    heroImage: "/brands/karnataka-handlooms/banner.png",
    heroVariant: "bottom",
    intro: {
      paragraphs: [
        "Karnataka has a rich handloom tradition dating back centuries, famous for distinct Geographical Indication (GI) tagged weaves like Ilkal, Udupi, and Molakalmuru sarees, as well as Kasuti embroidery.",
      ],
      extra: [],
    },
    productSections: [
      {
        id: "handloom-weaves",
        layout: "catalog",
        showPrice: true,
        products: [
          {
            id: "printed-silk-handloom-sarees",
            name: "Printed Silk Handloom Sarees",
            description:
              "Vibrant designs printed on Silk, woven on handlooms via screens or digital technology.",
            details: [
              "Material: Silk",
              "Weight: 300-500gm",
              "Colour: Multiple Colour",
            ],
            price: "",
            image: "/brands/karnataka-handlooms/karnataka-handlooms-1.png",
          },
          {
            id: "traditional-silk-handloom-sarees",
            name: "Traditional Silk Handloom Sarees",
            description:
              "Distinct designs of zari of Molakalmuru, Chintamani, Aanekal etc., preserved for years, woven on handloom silk sarees.",
            details: [
              "Material: Silk",
              "Weight: 300-500gm",
              "Colour: Multiple Colour",
            ],
            price: "",
            image: "/brands/karnataka-handlooms/karnataka-handlooms-2.png",
          },
          {
            id: "ilkal-gi-tagged-handloom-sarees",
            name: "Ilkal GI tagged Handloom Sarees",
            description:
              "Ancient temple designs of Ilkal woven on Handloom cloth made of Cotton/mix of Cotton and art-silk/mix of Cotton and silk.",
            details: [
              "Material: Cotton / Silk mix",
              "Weight: 300-500gm",
              "Colour: Multiple Colour",
            ],
            price: "",
            image: "/brands/karnataka-handlooms/karnataka-handlooms-3.png",
          },
          {
            id: "udupi-cotton-handloom-sarees",
            name: "Udupi Cotton Handloom Sarees",
            description:
              "Woven by temple-town weavers of Udupi on pit looms, these cotton sarees are known for their lightweight drape and temple borders.",
            details: [
              "Material: Cotton",
              "Weight: 300-500gm",
              "Colour: Multiple Colour",
            ],
            price: "",
            image: "/brands/karnataka-handlooms/karnataka-handlooms-4.png",
          },
          {
            id: "melkote-panche-shalya",
            name: "Melkote panche shalya",
            description:
              "Melkote panche and shalya in silk with a gold zari border, woven for temple and ceremonial wear.",
            details: ["Material: Pure silk", "Weight: 200g"],
            price: "",
            image: "/brands/karnataka-handlooms/karnataka-handlooms-5.png",
          },
        ],
      },
    ],
  },
  "karnataka-leathers": {
    slug: "karnataka-leathers",
    title: "Karnataka Leathers",
    tagline: "Kolhapuri GI chappals & handcrafted leather bags.",
    heroImage: "/brands/karnataka-leathers/banner.png",
    heroVariant: "bottom",
    intro: {
      paragraphs: [
        "Leather craft in Karnataka traces back to the Sharana movement of the 12th century, when saints such as Sri Haralayya and Smt. Kalyanamma practised tanning and stitching as a sacred vocation under Sri Basavanna.",
        "That hand process — vegetable tanning, hand-stitching, and the open-toe Kolhapuri chappal — still carries a Geographical Indication and is made hide by hide in clusters from Athani to Bengaluru.",
        "To organise and support these artisan families, the Government of Karnataka established the Leather Industries Development Corporation of Karnataka (LIDKAR), which continues to market GI Kolhapuri footwear and handcrafted leather bags.",
      ],
      extra: [],
    },
    productSections: [
      {
        id: "leather-craft",
        layout: "catalog",
        showPrice: true,
        products: [
          {
            id: "ladies-heel-chappal",
            name: "GI Registered Ladies Kolhapuri Heel Chappal",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            details: [
              "Color: Creamy",
              "Weight: 600 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-1.png",
          },
          {
            id: "ladies-flat-chappal",
            name: "GI Registered Ladies Kolhapuri Flat Chappal",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            details: [
              "Color: Brown Colour",
              "Weight: 600 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-2.png",
          },
          {
            id: "gents-red-juti",
            name: "GI Registered Gents Red Juti Kolhapuri Chappal",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            details: [
              "Color: Red Colour",
              "Weight: 900 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-3.png",
          },
          {
            id: "gents-tan-chappal",
            name: "GI Registered Gents Tan Kolhapuri Chappal",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            details: [
              "Color: Tan Colour",
              "Weight: 700 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-4.png",
          },
          {
            id: "kolhapuri-bantu-red",
            name: "GI Registered Kolhapuri Bantu Red",
            description:
              "Leather chappals, known for their unique designs, comfort, and eco-friendliness.",
            details: [
              "Color: Red Color",
              "Weight: 800 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-5.png",
          },
          {
            id: "shantinikethan-sling-bag",
            name: "Shantinikethan Sling Bag",
            description:
              "Handcrafted from genuine leather and designed on both sides, with a multi-colored, adjustable sling.",
            details: [
              "Color: Multi Colour",
              "Weight: 600 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-6.png",
          },
          {
            id: "shantinikethan-lhb-large",
            name: "Shantinikethan LHB Large",
            description:
              "Handcrafted from genuine leather and designed on both sides, with a multi-colored, adjustable sling.",
            details: [
              "Color: Multi Colour",
              "Weight: 900 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-7.png",
          },
          {
            id: "leather-hand-bag",
            name: "Leather Hand Bag",
            description:
              "Handcrafted from genuine leather and designed on both sides, with a multi-colored, adjustable sling.",
            details: [
              "Color: Tan Colour",
              "Weight: 1200 gms",
              "(Size may be vary depends on designs and sizes)",
            ],
            price: "",
            image: "/brands/karnataka-leathers/karnataka-leathers-8.png",
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
      "Karnataka Bronzeware is a traditional metal craft using the ancient lost-wax (cire perdue) casting technique. Protected by a Geographical Indication (GI) tag, these solid bronze sculptures capture intricate iconographical details of deities and traditional motifs.",
    heroImage: "/brands/karnataka-handicrafts/bronzeware/banner.png",
    products: [
      {
        id: "br-dancing-ganapathy",
        name: "Dancing Ganapathy",
        description:
          "Handcrafted bronze idol of Lord Ganesha in a dynamic dancing pose (Nritya Ganesha), symbolizing joy, grace, and auspicious beginnings.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-1.png"],
      },
      {
        id: "br-darpanasundari",
        name: "Darpanasundari",
        description:
          "A bronze idol of Darpanasundari, the celestial maiden gazing into a mirror — an iconic motif of Karnataka temple sculpture, rendered with lost-wax precision.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-2.png"],
      },
      {
        id: "br-hamsa",
        name: "Hamsa",
        description:
          "A graceful bronze hamsa (sacred swan), a symbol of wisdom and discernment, cast with flowing lines that capture the bird's poised, regal form.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-3.png"],
      },
      {
        id: "br-krishna",
        name: "Krishna",
        description:
          "A solid bronze figure of Lord Krishna, capturing the charm of the divine cowherd in traditional iconographic pose with the heirloom durability of lost-wax casting.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-4.png"],
      },
      {
        id: "br-lakshmi",
        name: "Lakshmi",
        description:
          "A handcrafted bronze idol of Goddess Lakshmi, the embodiment of prosperity and grace, depicted in classic seated form with intricate jewellery and drapery detail.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-5.png"],
      },
      {
        id: "br-mahisasuramardini",
        name: "Mahishasuramardini",
        description:
          "A powerful bronze sculpture of Mahishasuramardini — Goddess Durga vanquishing the buffalo-demon Mahishasura — cast with the dynamic energy of Karnataka's lost-wax tradition.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-6.png"],
      },
      {
        id: "br-manatapa-jhulaganesha",
        name: "Mantapa Jhula Ganesha",
        description:
          "Lord Ganesha seated on a swing (jhula) beneath a temple pavilion (mantapa), a festive bronze composition that brings the warmth of festival processions into the home.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-7.png"],
      },
      {
        id: "br-nandi",
        name: "Nandi",
        description:
          "A seated bronze Nandi, Lord Shiva's sacred bull, rendered with calm devotion and the solid, enduring presence that lost-wax bronzeware is prized for.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-8.png"],
      },
      {
        id: "br-nataraja",
        name: "Nataraja",
        description:
          "Lord Shiva as Nataraja, the cosmic dancer, captured in bronze at the moment of the Tandava — an emblem of creation and dissolution, cast with Karnataka's metal-craft iconography.",
        material: "Bronze",
        images: ["/brands/karnataka-handicrafts/bronzeware/bronzeware-9.png"],
      },
    ],
  },
  bidriware: {
    slug: "bidriware",
    parentSlug: "karnataka-handicrafts",
    parentTitle: "Karnataka Handicrafts",
    title: "Bidriware",
    tagline:
      "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
    heroImage: "/brands/karnataka-handicrafts/bidriware/hero.jpeg",
    products: [
      {
        id: "bidriware-elephant-check-design",
        name: "Bidriware Elephant Check Design",
        description:
          "A striking elephant figure finished in Bidar's signature blackened alloy, its body etched with a fine checkerboard lattice inlaid in pure silver — a design classic among Bidriware collectors.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-1.png"],
      },
      {
        id: "bidriware-nandi",
        name: "Bidriware Nandi",
        description:
          "A seated Nandi, Lord Shiva's sacred bull, rendered in deep black metal with delicate silver inlay tracing its draped saddle cloth — a serene devotional piece for home altars and display shelves alike.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-2.png"],
      },
      {
        id: "bidriware-box",
        name: "Bidriware Box",
        description:
          "A compact keepsake box in traditional Bidri work, its lid and sides covered edge to edge with intricate floral silver inlay against the alloy's velvety black finish — ideal for jewellery or small treasures.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-3.png"],
      },
      {
        id: "bidri-elephant-pz",
        name: "Bidri Elephant PZ",
        description:
          "A regal standing elephant crafted in the Bidar tradition, its trunk raised and body inlaid with fine silver detailing that catches the light against the deep charcoal alloy base.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-4.png"],
      },
      {
        id: "bidri-gudgudi",
        name: "Bidri Gudgudi",
        description:
          "A gracefully curved decorative vessel in classic Bidri form, its bulbous silhouette wrapped in dense silver filigree — a statement showpiece rooted in centuries-old Bidar metalwork.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-5.png"],
      },
      {
        id: "bidri-office-set-3pcs",
        name: "Bidri Office Set 3 Pcs",
        description:
          "A three-piece desk set — pen stand, paperweight and card holder — finished in traditional Bidri black-and-silver work, bringing centuries-old craftsmanship to the modern desk. Presented in a fitted gift case.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-6.png"],
      },
      {
        id: "bidri-goblet-butta",
        name: "Bidri Goblet Butta",
        description:
          "A slender, long-necked goblet with a bulbous body, entirely covered in dense silver butta (floral dot) inlay — a refined decorative piece that showcases the precision of Bidar's inlay artisans.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-7.png"],
      },
      {
        id: "bidri-chambu-mehtabi",
        name: "Bidri Chambu Mehtabi",
        description:
          "A traditional water vessel (chambu) in the Mehtabi style, its rounded form covered in an elaborate floral and vine silver inlay pattern set against the signature jet-black alloy finish.",
        material: "Zinc, Copper and Pure silver",
        images: ["/brands/karnataka-handicrafts/bidriware/bidriware-8.png"],
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

function toAdjacentLink(item) {
  if (!item?.href) return null;

  return {
    href: item.href,
    title: item.name || item.title,
  };
}

export function getAdjacentCraftCategories(slug) {
  const categories = getBrandCategoryItems("karnataka-handicrafts");
  const index = categories.findIndex((item) => item.id === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  let prev = null;
  for (let i = index - 1; i >= 0; i -= 1) {
    const link = toAdjacentLink(categories[i]);
    if (link) {
      prev = link;
      break;
    }
  }

  let next = null;
  for (let i = index + 1; i < categories.length; i += 1) {
    const link = toAdjacentLink(categories[i]);
    if (link) {
      next = link;
      break;
    }
  }

  return { prev, next };
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
