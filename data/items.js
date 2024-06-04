const items = [
    {name:'Gold',id:'Gold_001',cost:1,weight:0},
    // ingredients
    {name:'Alit Hide',id:'ingred_alit_hide_01',cost:5,weight:1,effects:['Drain Intelligence','Resist Poison','Telekinesis','Detect Animal']},
    {name:'Ampoule Pod',id:'ingred_bc_ampoule_pod',cost:2,weight:0.2,effects:['Water Walking','Paralyze','Detect Animal','Drain Willpower']},
    {name:'Ash Salts',id:'ingred_ash_salts_01',cost:25,weight:0.1,effects:['Drain Agility','Resist Magicka','Cure Blight Disease','Resist Magicka']},
    {name:'Ash Yam',id:'ingred_ash_yam_01',cost:1,weight:0.5,effects:['Fortify Intelligence','Fortify Strength','Resist Common Disease','Detect Key'],url:true},
    {name:'Bittergreen Petals',id:'ingred_bittergreen_petals_01',cost:5,weight:0.1,effects:['Restore Intelligence','Invisibility','Drain Endurance','Drain Magicka']},
    {name:'Black Anther',id:'ingred_black_anther_01',cost:2,weight:0.1,effects:['Drain Agility','Resist Fire','Drain Endurance','Light']},
    {name:'Black Lichen',id:'ingred_black_lichen_01',cost:2,weight:0.1,effects:['Drain Strength','Resist Frost','Drain Speed','Cure Poison']},
    {name:'Bloat',id:'ingred_bloat_01',cost:5,weight:0.1,effects:['Drain Magicka','Fortify Intelligence','Fortify Willpower','Detect Animal']},
    {name:'Bonemeal',id:'ingred_bonemeal_01',cost:2,weight:0.2,effects:['Restore Agility','Telekinesis','Drain Fatigue','Drain Personality']},
    {name:'Bread',id:'ingred_bread_01',cost:1,weight:0.2,effects:['Restore Fatigue']},
    {name:"Bungler's Bane",id:"ingred_bc_bungler's_bane",cost:1,weight:0.5,effects:['Drain Speed','Drain Endurance','Dispel','Drain Strength']},
    {name:'Chokeweed',id:'ingred_chokeweed_01',cost:1,weight:0.1,effects:['Drain Luck','Restore Fatigue','Cure Common Disease','Drain Willpower']},
    {name:'Coda Flower',id:'ingred_bc_coda_flower',cost:23,weight:0.1,effects:['Drain Personality','Levitate','Drain Intelligence','Drain Health']},
    {name:'Comberry',id:'ingred_comberry_01',cost:2,weight:0.1,effects:['Drain Fatigue','Restore Magicka','Fire Shield','Reflect']},
    {name:'Corkbulb Root',id:'ingred_corkbulb_root_01',cost:5,weight:0.1,effects:['Cure Paralyzation','Restore Health','Lightning Shield','Fortify Luck'],url:true},
    {name:'Corprus Weepings',id:'ingred_corprus_weepings_01',cost:50,weight:0.1,effects:['Drain Fatigue','Fortify Luck','Drain Willpower','Restore Health']},
    {name:'Crab Meat',id:'ingred_crab_meat_01',cost:1,weight:0.5,effects:['Restore Fatigue','Resist Shock','Lightning Shield','Restore Luck']},
    {name:'Daedra Skin',id:'ingred_daedra_skin_01',cost:200,weight:0.2,effects:['Fortify Strength','Cure Common Disease','Paralyze','Swift Swim']},
    {name:"Daedra's Heart",id:'ingred_daedras_heart_01',cost:200,weight:1,effects:['Restore Magicka','Fortify Endurance','Drain Agility','Night Eye']},
    {name:'Diamond',id:'ingred_diamond_01',cost:250,weight:0.2,effects:['Drain Agility','Invisibility','Reflect','Detect Key']},
    {name:'Dreugh Wax',id:'ingred_dreugh_wax_01',cost:100,weight:0.2,effects:['Fortify Strength','Restore Strength','Drain Luck','Drain Willpower'],url:true},
    {name:'Ectoplasm',id:'ingred_ectoplasm_01',cost:10,weight:0.1,effects:['Fortify Agility','Detect Animal','Drain Strength','Drain Health']},
    {name:'Emerald',id:'ingred_emerald_01',cost:150,weight:0.2,effects:['Fortify Magicka','Restore Health','Drain Agility','Drain Endurance']},
    {name:'Fire Petal',id:'ingred_fire_petal_01',cost:2,weight:0.1,effects:['Resist Fire','Drain Health','Spell Absorption','Paralyze']},
    {name:'Fire Salts',id:'ingred_fire_salts_01',cost:100,weight:0.1,effects:['Drain Health','Fortify Agility','Resist Frost','Fire Shield']},
    {name:'Frost Salts',id:'ingred_frost_salts_01',cost:75,weight:0.1,effects:['Drain Speed','Restore Magicka','Frost Shield','Resist Fire']},
    {name:'Ghoul Heart',id:'ingred_ghoul_heart_01',cost:150,weight:0.5,effects:['Paralyze','Cure Poison','Fortify Attack']},
    {name:'Gold Kanet',id:'ingred_gold_kanet_01',cost:5,weight:0.1,effects:['Drain Health','Burden','Drain Luck','Restore Strength']},
    {name:'Gravedust',id:'ingred_gravedust_01',cost:1,weight:0.1,effects:['Drain Intelligence','Cure Common Disease','Drain Magicka','Restore Endurance']},
    {name:'Green Lichen',id:'ingred_green_lichen_01',cost:1,weight:0.1,effects:['Fortify Personality','Cure Common Disease','Drain Strength','Drain Health']},
    {name:'Guar Hide',id:'ingred_guar_hide_01',cost:5,weight:1,effects:['Drain Fatigue','Fortify Endurance','Restore Personality','Fortify Luck'],url:true},
    {name:'Hackle-Lo Leaf',id:'ingred_hackle-lo_leaf_01',cost:30,weight:1,effects:['Restore Fatigue','Paralyze','Water Breathing','Restore Luck']},
    {name:'Heather',id:'ingred_heather_01',cost:1,weight:0.1,effects:['Restore Personality','Feather','Drain Speed','Drain Personality']},
    {name:'Hound Meat',id:'ingred_hound_meat_01',cost:2,weight:1,effects:['Restore Fatigue','Fortify Fatigue','Reflect','Detect Enchantment']},
    {name:'Hypha Facia',id:'ingred_bc_hypha_facia',cost:1,weight:0.1,effects:['Drain Luck','Drain Agility','Drain Fatigue','Detect Enchantment']},
    {name:'Kagouti Hide',id:'ingred_kagouti_hide_01',cost:2,weight:1,effects:['Drain Fatigue','Fortify Speed','Resist Common Disease','Night Eye']},
    {name:'Kresh Fiber',id:'ingred_kresh_fiber_01',cost:1,weight:0.1,effects:['Restore Luck','Fortify Personality','Drain Magicka','Drain Speed']},
    {name:'Kwama Cuttle',id:'ingred_kwama_cuttle_01',cost:2,weight:0.1,effects:['Resist Poison','Drain Fatigue','Water Walking','Water Breathing']},
    {name:'Large Kwama Egg',id:'food_kwama_egg_02',cost:2,weight:2,effects:['Restore Fatigue','Paralyze','Frost Shield','Fortify Health'],url:true},
    {name:'Luminous Russula',id:'ingred_russula_01',cost:1,weight:0.2,effects:['Water Breathing','Drain Fatigue','Poison']},
    {name:'Marshmerrow',id:'ingred_marshmerrow_01',cost:1,weight:0.1,effects:['Restore Health','Detect Enchantment','Drain Willpower','Drain Fatigue']},
    {name:'Moon Sugar',id:'ingred_moon_sugar_01',cost:50,weight:0.1,effects:['Fortify Speed','Dispel','Drain Endurance','Drain Luck']},
    {name:'Muck',id:'ingred_muck_01',cost:1,weight:0.1,effects:['Drain Intelligence','Detect Key','Drain Personality','Cure Common Disease']},
    {name:'Netch Leather',id:'ingred_netch_leather_01',cost:1,weight:1,effects:['Fortify Endurance','Fortify Intelligence','Drain Personality','Cure Paralyzation'],url:true},
    {name:'Pearl',id:'ingred_pearl_01',cost:100,weight:0.2,effects:['Drain Agility','Dispel','Water Breathing','Resist Common Disease']},
    {name:'Racer Plumes',id:'ingred_racer_plumes_01',cost:20,weight:0.1,effects:['Drain Willpower','Levitate']},
    {name:'Rat Meat',id:'ingred_rat_meat_01',cost:1,weight:1,effects:['Drain Magicka','Paralyze','Cure Poison','Resist Poison']},
    {name:'Raw Ebony',id:'ingred_raw_ebony_01',cost:200,weight:10,effects:['Drain Agility','Cure Poison','Frost Shield','Restore Speed']},
    {name:'Raw Glass',id:'ingred_raw_glass_01',cost:200,weight:2,effects:['Drain Intelligence','Drain Strength','Drain Speed','Fire Shield']},
    {name:'Red Lichen',id:'ingred_red_lichen_01',cost:25,weight:0.1,effects:['Drain Speed','Light','Cure Common Disease','Drain Magicka']},
    {name:'Resin',id:'ingred_resin_01',cost:10,weight:0.1,effects:['Restore Health','Restore Speed','Burden','Resist Common Disease']},
    {name:'Roobrush',id:'ingred_roobrush_01',cost:1,weight:0.1,effects:['Drain Willpower','Fortify Agility','Drain Health','Cure Poison']},
    {name:'Ruby',id:'ingred_ruby_01',cost:200,weight:0.2,effects:['Drain Health','Feather','Restore Intelligence','Drain Agility']},
    {name:'Saltrice',id:'ingred_saltrice_01',cost:1,weight:0.1,effects:['Restore Fatigue','Fortify Magicka','Drain Strength','Restore Health'],url:true},
    {name:'Scales',id:'ingred_scales_01',cost:2,weight:0.2,effects:['Drain Personality','Water Walking','Restore Endurance','Swift Swim']},
    {name:'Scamp Skin',id:'ingred_scamp_skin_01',cost:10,weight:0.1,effects:['Drain Magicka','Cure Paralyzation','Restore Personality','Restore Strength']},
    {name:'Scathecraw',id:'ingred_scathecraw_01',cost:2,weight:0.1,effects:['Drain Strength','Cure Poison','Drain Health','Restore Willpower']},
    {name:'Scrap Metal',id:'ingred_scrap_metal_01',cost:20,weight:10,effects:['Drain Health','Lightning Shield','Resist Shock','Restore Intelligence']},
    {name:'Scrib Jelly',id:'ingred_scrib_jelly_01',cost:10,weight:0.1,effects:['Fortify Willpower','Cure Poison','Cure Blight Disease','Restore Willpower']},
    {name:'Scrib Jerky',id:'ingred_scrib_jerky_01',cost:5,weight:0.2,effects:['Restore Fatigue','Fortify Fatigue','Burden','Swift Swim']},
    {name:'Scuttle',id:'ingred_scuttle_01',cost:10,weight:0.1,effects:['Restore Fatigue','Fortify Fatigue','Feather','Telekinesis']},
    {name:'Shalk Resin',id:'ingred_shalk_resin_01',cost:50,weight:0.1,effects:['Drain Fatigue','Fortify Health','Drain Personality','Fortify Speed'],url:true},
    {name:'Sload Soap',id:'ingred_sload_soap_01',cost:50,weight:0.1,effects:['Drain Personality','Fortify Agility','Fire Shield','Restore Agility']},
    {name:'Small Kwama Egg',id:'food_kwama_egg_01',cost:1,weight:0.5,effects:['Restore Fatigue']},
    {name:'Spore Pod',id:'ingred_bc_spore_pod',cost:1,weight:0.1,effects:['Drain Strength','Drain Fatigue','Detect Key','Paralyze']},
    {name:'Stoneflower Petals',id:'ingred_stoneflower_petals_01',cost:1,weight:0.1,effects:['Restore Strength','Fortify Magicka','Drain Luck','Fortify Personality']},
    {name:'Trama Root',id:'ingred_trama_root_01',cost:10,weight:0.1,effects:['Restore Willpower','Levitate','Drain Magicka','Drain Speed']},
    {name:'Vampire Dust',id:'ingred_vampire_dust_01',cost:500,weight:0.1,effects:['Fortify Health','Fortify Strength','Spell Absorption','Vampirism']},
    {name:'Violet Coprinus',id:'ingred_coprinus_01',cost:1,weight:0.5,effects:['Water Walking','Drain Fatigue','Poison']},
    {name:'Void Salts',id:'ingred_void_salts_01',cost:100,weight:0.1,effects:['Restore Magicka','Spell Absorption','Paralyze','Drain Endurance']},
    {name:'Wickwheat',id:'ingred_wickwheat_01',cost:1,weight:0.1,effects:['Restore Health','Fortify Willpower','Paralyze','Damage Intelligence']},
    {name:'Willow Anther',id:'ingred_willow_anther_01',cost:10,weight:0.1,effects:['Drain Personality','Frost Shield','Cure Common Disease','Cure Paralyzation']},
    // alchemy tools
    {name:"Apprentice's Mortar and Pestle",id:'apparatus_a_mortar_01',weight:5,cost:100,multiplyer:0.5},
    {name:"Journeyman's Mortar and Pestle",id:'apparatus_j_mortar_01',weight:4,cost:400,multiplyer:1},
    {name:"Master's Mortar and Pestle",id:'apparatus_m_mortar_01',weight:3,cost:2400,multiplyer:1.2},
    {name:"Grandmaster's Mortar and Pestle",id:'apparatus_g_mortar_01',weight:2,cost:4000,multiplyer:1.5},
    {name:"SecretMaster's Mortar and Pestle",id:'apparatus_sm_mortar_01',weight:1,cost:6000,multiplyer:2},
    {name:"Apprentice's Alembic",id:'apparatus_a_alembic_01',weight:10,cost:50,multiplyer:0.5},
    {name:"Journeyman's Alembic",id:'apparatus_j_alembic_01',weight:7,cost:200,multiplyer:1},
    {name:"Master's Alembic",id:'apparatus_m_alembic_01',weight:5,cost:1200,multiplyer:1.2},
    {name:"Grandmaster's Alembic",id:'apparatus_g_alembic_01',weight:3,cost:4000,multiplyer:1.5},
    {name:"SecretMaster's Alembic",id:'apparatus_sm_alembic_01',weight:3,cost:1600,multiplyer:2},
    {name:"Apprentice's Calcinator",id:'apparatus_a_calcinator_01',weight:25,cost:10,multiplyer:0.5},
    {name:"Journeyman's Calcinator",id:'apparatus_j_calcinator_01',weight:18,cost:40,multiplyer:1},
    {name:"Master's Calcinator",id:'apparatus_m_calcinator_01',weight:13,cost:240,multiplyer:1.2},
    {name:"Grandmaster's Calcinator",id:'apparatus_g_calcinator_01',weight:8,cost:4000,multiplyer:1.5},
    {name:"SecretMaster's Calcinator",id:'apparatus_sm_calcinator_01',weight:6,cost:3200,multiplyer:2},
    {name:"Apprentice's Retort",id:'apparatus_a_retort_01',weight:8,cost:20,multiplyer:0.5},
    {name:"Journeyman's Retort",id:'apparatus_j_retort_01',weight:6,cost:80,multiplyer:1},
    {name:"Master's Retort",id:'apparatus_m_retort_01',weight:4,cost:480,multiplyer:1.2},
    {name:"Grandmaster's Retort",id:'apparatus_g_retort_01',weight:3,cost:1600,multiplyer:1.5},
    {name:"SecretMaster's Retort",id:'apparatus_sm_retort_01',weight:2,cost:1000,multiplyer:2},
    // books
    {name:'Secrets of Dwemer Animunculi',id:'bk_SecretsDwemerAnimunculi',cost:450,weight:4},
    {name:"Nchunak's Fire and Faith",id:'bk_nchunaksfireandfaith',cost:60,weight:4},
    {name:'Chronicles of Nchuleft',id:'bk_ChroniclesNchuleft',cost:250,weight:2},
    {name:'Antecedants of Dwemer Law',id:'bk_AntecedantsDwemerLaw',cost:25,weight:3},
    {name:'Chimarvamidium',id:'BookSkill_Heavy Armor3',cost:225,weight:4},
    {name:'Hanging Gardens of Wasten Coridale',id:'bk_hanginggardenswasten',cost:55,weight:3},
    {name:'Divine Metaphysics',id:'bk_DivineMetaphysics',cost:1000,weight:4},
    {name:'Vampires of Vvardenfell, v II',id:'bk_vampiresofvvardenfell2',cost:400,weight:3},
    {name:'The Egg of Time',id:'bk_EggOfTime',cost:1000,weight:4},
    {name:'Guide to Vvardenfell',id:'bk_guide_to_vvardenfell',cost:3,weight:0.2},
    // alchemy books
    {name:'A Game at Dinner',id:'BookSkill_Alchemy1',cost:200,weight:3},
    {name:'The Cake and the Diamond',id:'BookSkill_Alchemy2',cost:200,weight:3},
    {name:'Song of the Alchemists',id:'BookSkill_Alchemy3',cost:200,weight:3},
    {name:'36 Lessons of Vivec, Sermon 2',id:'BookSkill_Alchemy4',cost:200,weight:3},
    {name:'36 Lessons of Vivec, Sermon 18',id:'BookSkill_Alchemy5',cost:200,weight:3},
    {name:'The Song of Uncle Sweetshare',id:'sc_unclesweetshare',cost:30,weight:0.2},
    // acrobatics books
    {name:'Realizations of Acrobacy',id:'bookskill_acrobatics1',cost:200,weight:4},
    {name:'A Dance in Fire, Chapter 1',id:'BookSkill_Acrobatics2',cost:150,weight:3},
    {name:'A Dance in Fire, Chapter 4',id:'BookSkill_Acrobatics3',cost:150,weight:3},
    {name:'The Black Arrow, Volume 1',id:'BookSkill_Acrobatics4',cost:400,weight:2},
    {name:'Mystery of Talara, Part 1',id:'BookSkill_Acrobatics5',cost:250,weight:3},
    // alteration books
    {name:'Breathing Water',id:'BookSkill_Alteration1',cost:400,weight:2},
    {name:'The Lunar Lorkhan',id:'BookSkill_Alteration5',cost:350,weight:4},
    // destruction books
    {name:'A Hypothetical Treachery',id:'bookskill_destruction3',cost:175,weight:3},
    {name:'The Art of War Magic',id:'bookskill_destruction4',cost:225,weight:3},
    // illusion books
    {name:'Incident in Necrom',id:'bookskill_illusion3',cost:225,weight:3},

    {name:"Azura's Star",id:'Misc_SoulGem_Azura',cost:5000,weight:2},
    {name:'Construction Contract',id:'bk_stronghold_c_hlaalu',cost:5000,weight:0.2},
    {name:'Dwemer Schematic',id:'misc_dwrv_artifact70',cost:1200,weight:0.1},
    {name:'Abebaal Slave Key',id:'key_abebaalslaves_01'},
    {name:'Black Jinx',id:'ring_blackjinx_uniq',cost:240,weight:0.1},
    {name:'Dwemer Scarab Schematics',id:'misc_dwrv_artifact40',cost:100,weight:0.1},
    {name:'Staff of the Silver Dawn',id:'silver_staff_dawn_uniq',cost:350,weight:6.4},
    {name:'Cure Blight Disease',id:'p_cure_blight_s',cost:30,weight:0.5},
    {name:"Robe of the Drake's Pride",id:"exquisite_robe_drake's pride",cost:205,weight:3},
    {name:'Amulet of Flesh Made Whole',id:'amuletfleshmadewhole_uniq',cost:500,weight:1},
    {name:"Auriel's Bow",id:'ebony_bow_auriel',cost:30000,weight:16},
    {name:'Key to Tel Naga',id:'key_nelothtelnaga'},
    {name:'Ring of Equity',id:'ring_equity_uniq',cost:3150,weight:0.1},
    {name:'Standard Potion of Invisibility',id:'p_invisibility_s',cost:35,weight:0.75},
    {name:'Amulet of Unity',id:'amulet_unity_uniq',cost:1000,weight:1},
    {name:'Silver Staff of Peace',id:'silver staff of peace',cost:270,weight:6.4},
    {name:'Dahrk Mezalf',id:'ring_dahrkmezalf_uniq',cost:60,weight:0.1},
    {name:"Aryon's Helper",id:'aryongloveright',cost:94,weight:1},
    {name:'Silver Staff of War',id:'silver staff of war',cost:270,weight:6.4},
    {name:"Aryon's Dominator",id:'aryongloveleft',cost:233,weight:1},
    {name:"Milyn Faram's Scroll",id:'sc_summondaedroth_hto',cost:129,weight:1},
    {name:'Silver Staff of Hunger',id:'silver staff of hunger',cost:270,weight:6.4},
    {name:'Glass Jinkblade',id:'glass jinkblade',cost:6500,weight:1.8},
    {name:"Gothren's Cephalopod Helm",id:'cephalopod_helm_HTNK',cost:50,weight:2},
    {name:'Messenger Scroll',id:'sc_messengerscroll',cost:129,weight:1},
    {name:"Ondusi's Key",id:"ondusi's key",cost:20,weight:0.1},
    {name:'Amulet of Admonition',id:'amulet of admonition',cost:1000,weight:1},
    {name:'Second Barrier Belt',id:'second barrier belt',cost:38,weight:1},
    {name:'Surefeet',id:'common_shoes_02_surefee',cost:2,weight:3},
    {name:"Lady's Mantle Leaves",id:'T_IngFlor_LadysMantle_01',cost:5,weight:0.1},
    {name:'Quality Restore Magicka',id:'p_restore_magicka_q',cost:80,weight:0.5},
    {name:'Ring of Lightning Storm',id:'ring of lightning storm',cost:58,weight:1},
    {name:'Amulet of Humbling Touch',id:'TR_m1_q_MG4Reward',cost:5,weight:1},
    {name:'Ring of Ineptitude',id:'TR_m1_q_Ineptitude',cost:1000,weight:1},
    {name:'Scroll of Leaguestep',id:'sc_leaguestep',cost:85,weight:0.2},
    {name:'Scroll of The Eighth Barrier',id:'T_EnSc_Com_EighthBarrier',cost:360,weight:0.2},

    {name:'Ceramic Bowl',id:'misc_de_bowl_orange_green_01',cost:2,weight:3.0},
    {name:'Staff of Magnus',id:'staff_magnus_unique',cost:210000,weight:10},
    {name:"Warlock's Ring",id:'ring_warlock_unique',cost:22000,weight:0.1},
    {name:"Itermerel's Notes",id:'bk_itermerelsnotes',cost:0,weight:0.1},
    {name:"Tiram Gadar's Credentials",id:'bk_tiramgadarscredentials',cost:0,weight:0.2},
    {name:'Potion of Detect Creatures',id:'p_detect_creatures_s',cost:35,weight:1},
    {name:'Dwemer Tube',id:'misc_dwrv_artifact60',cost:40,weight:0.5},
    {name:'Dwemer Scarab Plans',id:'misc_dwrv_artifact10',cost:100,weight:0.2},
    {name:'Dwemer Airship Plans',id:'misc_dwrv_artifact20',cost:400,weight:0.1},
    {name:"Galur Rithari's Papers",id:"bk_galur_rithari's_papers",cost:0,weight:2},
    {name:'Amulet of Divine Intervention',id:'amulet of divine intervention',cost:21,weight:1},
    {name:'Amulet of Almsivi Intervention',id:'amulet of almsivi intervention',cost:21,weight:1},
    {name:'Scroll of The Fifth Barrier',id:'sc_fifthbarrier',cost:156,weight:0.2},
    {name:'Exclusive Potion of Shadow',id:'p_chameleon_e',cost:175,weight:0.25},
    {name:'Scroll of Summon Flame Atronach',id:'sc_summonflameatronach',cost:211,weight:0.2},
    {name:'Scroll of Summon Frost Atronach',id:'sc_summonfrostatronach',cost:235,weight:0.2},
    {name:'Exclusive Potion of Fire Shield',id:'p_fire_shield_e',cost:175,weight:0.25},
    {name:'Exclusive Frost Shield',id:'p_frost_shield_e',cost:175,weight:0.25},
    {name:'Exclusive Lightning Shield',id:'p_lightning shield_e',cost:175,weight:0.25},
    {name:'Exclusive Spell Absorption',id:'p_spell_absorption_e',cost:175,weight:0.25},
    {name:'Cheap Restore Magicka',id:'p_restore_magicka_c',cost:15,weight:1},
    {name:'Cheap Restore Health',id:'p_restore_health_c',cost:15,weight:1},
    {name:'Soul Drinker',id:'daedric dagger_soultrap',cost:11000,weight:9},
    {name:'Scroll of Summon Golden Saint',id:'sc_summongoldensaint',cost:520,weight:0.2},
    {name:'Scroll of Elemental Burst:Fire',id:'sc_elementalburstfire',cost:161,weight:0.2},
    {name:'Scroll of The Fourth Barrier',id:'sc_fourthbarrier',cost:134,weight:0.2},
    {name:'Quality Restore Magicka',id:'p_restore_magicka_q',cost:80,weight:0.5},
    {name:'Scroll of Windform',id:'sc_windform',cost:311,weight:0.2},
    {name:'Notes on the Court of Razors',id:'TR_m1_q_sc_FW_MG04a',cost:150,weight:0.2},
    {name:'Report to Talver Dolmyn',id:'TR_m1_q_sc_FW_MG04b',cost:0, weight:0.1},
    {name:'Cuirass of the Outermost Wastes',id:'T_Com_Steel_Cuirass_Outermost',cost:800,weight:30},

    {name:'Package for Caius Cosades',id:'bk_a1_1_caiuspackage',cost:0,weight:0.2},
    {name:'Dwemer puzzle box',id:'misc_dwrv_ark_cube00',cost:10,weight:5},

    {name:'Greef',id:'potion_comberry_brandy_01',cost:30,weight:5},
    {name:'Mazte',id:'Potion_Local_Brew_01',cost:10,weight:5},
    {name:'Shein',id:'potion_comberry_wine_01',cost:10,weight:3},
    {name:'Sujamma',id:'potion_local_liquor_01',cost:30,weight:3},

    {name:'Ornada Egg',id:'T_IngFood_EggOrnada_01',cost:5,weight:0.25},
    {name:'Hamum Root',id:'T_IngFlor_Hamumroot_01',cost:2,weight:0.5},
    {name:'Amethyst',id:'T_IngMine_Amethyst_01',cost:120,weight:0.2},
];

$(document).ready(() => {
    window.mw = window.mw||{};
    window.mw.item = {
        getLink: (item) => window.mw.rootBase + '/items/' + window.mw.createId(item.id) + '.html'
    };

    $('item').each((_,elem) => {
        const nameOrId = $(elem).text();
        const showName = $(elem).attr('noname') === undefined;
        const showId = !showName || $(elem).attr('id') !== undefined;

        const item = items.filter(i => i.name === nameOrId || i.id === nameOrId)[0];
        if (item) {
            var s = '';
            if (showName) {
                if (!item.url) {
                    s += '<b>' + item.name + '</b>';
                } else {
                    s += '<a class="item" href="' + window.mw.item.getLink(item) + '">' + item.name + '</a>';
                }
            }
            if (showId) {
                var title = 'player->addItem ';
                if (item.id.indexOf(' ') > 0) {
                    title += '\'\'' + item.id + '\'\'';
                } else {
                    title += item.id;
                }
                s += ' (<tt class="text-danger" title="' + title + '">' + item.id + '</tt>)';
            }
            $(elem).replaceWith(s.trim());
        } else {
            console.log('Unknown item: ' + nameOrId);
        }
    })


});