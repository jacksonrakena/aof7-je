////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {



  // Create
  event.custom({
    "type": "modern_industrialization:packer",
    "duration": 200,
    "eu": 2,
    "item_inputs": [
      {
        "amount": 9,
        "tag": "c:zinc_nuggets"
      }
    ],
    "item_outputs": [
      {
        "item": "create:zinc_ingot"
      }
    ]
  })

    // Create Deco
    event.custom({
      "type": "modern_industrialization:packer",
      "duration": 200,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 9,
          "item": "createdeco:industrial_iron_nugget"
        }
      ],
      "item_outputs": [
        {
          "item": "createdeco:industrial_iron_ingot"
        }
      ]
    })

    // Bygone Nether
    event.custom({
      "type": "modern_industrialization:packer",
      "duration": 200,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 9,
          "item": "bygonenether:netherite_scrap_nugget"
        }
      ],
      "item_outputs": [
        {
          "item": "bygonenether:netherite_scrap_ingot"
        }
      ]
    })

  // Ad Astra
  const ad_astra = [
    'desh',
    'ostrum',
    'calorite',
  ];

  ad_astra.forEach((item) => {
    event.custom({
      "type": "modern_industrialization:packer",
      "duration": 200,
      "eu": 2,
      "item_inputs": [
        {
          "amount": 9,
          "tag": "c:" + item + "_nuggets"
        }
      ],
      "item_outputs": [
        {
          "item": "ad_astra:" + item + "_ingot"
        }
      ]
    })
  })

    // Botania
    const botania = [
      'manasteel',
      'terrasteel',
      'elementium',
    ];
  
    botania.forEach((item) => {
      event.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 2,
        "item_inputs": [
          {
            "amount": 9,
            "tag": "botania:" + item + "_nuggets"
          }
        ],
        "item_outputs": [
          {
            "item": "botania:" + item + "_ingot"
          }
        ]
      })
    })

     // Tech Reborn
     const tech_reborn = [
      'diamond',
      'emerald',
      'hot_tungstensteel',
      'netherite',
      'refined_iron',
      'tungstensteel'
    ];
  
    tech_reborn.forEach((item) => {
      event.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 2,
        "item_inputs": [
          {
            "amount": 9,
            "tag": "c:" + item + "_nuggets"
          }
        ],
        "item_outputs": [
          {
            "item": "techreborn:" + item + "_ingot"
          }
        ]
      })
    })
})