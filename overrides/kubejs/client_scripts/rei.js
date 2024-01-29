
const DELETED_ITEMS = [
    'iron-jetpacks:bubble_capacitor',
    'iron-jetpacks:steel_capacitor',
    'iron-jetpacks:electrum_capacitor',
    'iron-jetpacks:platinum_capacitor',
    'iron-jetpacks:netherite_capacitor',
    'iron-jetpacks:bubble_cell',
    'iron-jetpacks:steel_cell',
    'iron-jetpacks:electrum_cell',
    'iron-jetpacks:platinum_cell',
    'iron-jetpacks:netherite_cell',
    'iron-jetpacks:basic_coil',
    'iron-jetpacks:advanced_coil',
    'iron-jetpacks:elite_coil',
    'iron-jetpacks:expert_coil',
    'iron-jetpacks:ultimate_coil',
    'createdieselgenerators:plant_oil',
    'createdieselgenerators:ethanol',
    'createdieselgenerators:plant_oil_bucket',
    'createdieselgenerators:ethanol_bucket',
    'croptosis:fertilized_sand',
    'croptosis:fertilized_farmland',
    'croptosis:fertilized_dirt',
    'croptosis:potash_ore',
    'croptosis:apatite_ore',
    'croptosis:deepslate_apatite_ore',
    'croptosis:potash_block',
    'croptosis:apatite_block',
    'croptosis:feather_meal',
    'croptosis:rotten_pile',
    'croptosis:apatite',
    'croptosis:potash',
    'croptosis:potash_pieces',
    'nethersdelight:iron_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    'nethersdelight:golden_machete',
    'adventurez:raw_venison',
    'adventurez:cooked_venison',
    'fishofthieves:earthworms',
    'fishofthieves:grubs',
    'blockus:oak_barrel',
    'blockus:birch_barrel',
    'blockus:jungle_barrel',
    'blockus:acacia_barrel',
    'blockus:dark_oak_barrel',
    'blockus:crimson_barrel',
    'blockus:warped_barrel',
    'blockus:white_oak_barrel',
    'blockus:bamboo_barrel',
    'blockus:charred_barrel',
    'compressed:soul_sand_i',
    'mysticalagriculture:aluminum_seeds',
    'mysticalagriculture:chromium_seeds',
    'mysticalagriculture:electrum_seeds',
    'mysticalagriculture:invar_seeds',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:platinum_seeds',
    'mysticalagriculture:steel_seeds',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:aluminum_essence',
    'mysticalagriculture:chromium_essence',
    'mysticalagriculture:electrum_essence',
    'mysticalagriculture:invar_essence',
    'mysticalagriculture:iridium_essence',
    'mysticalagriculture:platinum_essence',
    'mysticalagriculture:steel_essence',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:tungsten_essence',
    'bakery:strawberry_seeds',
    'create_jetpack:jetpack_placeable',
    'spectrumjetpacks:ink_charger',
    'compressed:charcoal_block',
    'compressed:charcoal_block_i',
    'compressed:charcoal_block_ii',
    'compressed:charcoal_block_iii',
    'compressed:charcoal_block_iv',
    'compressed:coal_block',
    'compressed:coal_block_i',
    'compressed:coal_block_ii',
    'compressed:coal_block_iii',
    'compressed:coal_block_iv',
    'compressed:kelp_block',
    'compressed:kelp_block_i',
    'compressed:kelp_block_ii',
    'compressed:kelp_block_iii',
    'compressed:kelp_block_iv',
    "techreborn:deepslate_ruby_ore",
    "techreborn:deepslate_sapphire_ore",
    'techreborn:sapphire_helmet',
    'techreborn:sapphire_chestplate',
    'techreborn:sapphire_leggings',
    'techreborn:sapphire_boots',
    'techreborn:sapphire_pickaxe',
    'techreborn:sapphire_axe',
    'techreborn:sapphire_hoe',
    'techreborn:sapphire_sword',
    'techreborn:sapphire_spade',
    'techreborn:ruby_helmet',
    'techreborn:ruby_chestplate',
    'techreborn:ruby_leggings',
    'techreborn:ruby_boots',
    'techreborn:ruby_pickaxe',
    'techreborn:ruby_axe',
    'techreborn:ruby_hoe',
    'techreborn:ruby_sword',
    'techreborn:ruby_spade',
    'croptopia:knife',
    'onlyhammers:obsidian_hammer'
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
const DELETED_FLUIDS = [
    'createdieselgenerators:plant_oil',
    'createdieselgenerators:ethanol',
];
REIEvents.hide('fluid', (event) => {
    DELETED_FLUIDS.forEach(id => event.hide(id));
});