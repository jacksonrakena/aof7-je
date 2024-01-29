

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Big Torch
  event.shaped('kibe:big_torch', [
    ['bewitchment:golden_candelabra',             'bewitchment:golden_candelabra', 'bewitchment:golden_candelabra'],
    ['modern_industrialization:diamond_plate',    '#minecraft:logs',                'modern_industrialization:diamond_plate'],
    ['modern_industrialization:gold_large_plate', '#minecraft:logs',                'modern_industrialization:gold_large_plate'],
  ]);

  const recipes = [
    {
      output: 'kibe:cooler',
      pattern: ['ADA', 'BCB', 'ABA'],
      key: {
        A: 'powah:dry_ice',
        B: 'ad_astra:ice_shard',
        C: '#c:chests',
        D: 'minecraft:white_stained_glass'
    },
      id: 'kibe:cooler'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
