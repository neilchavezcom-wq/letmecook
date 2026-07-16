// ==========================================================================
// 1. HARDCODED SYSTEM CORE DATASET (22 TOTAL RECIPES)
// ==========================================================================
const BASE_RECIPE_DATA = {
    carbonara: {
        title: "Spaghetti Carbonara",
        time: "25 Mins",
        level: "Easy",
        description: "A pristine Roman pasta classic built upon emulsified raw eggs, sharp Pecorino Romano, black pepper, and crispy rendered guanciale.",
        ingredients: [
            "200g Quality Dried Spaghetti",
            "100g Cured Guanciale or Pancetta, cubed",
            "2 Farmhouse Eggs, beaten",
            "1 Cup Pecorino Romano, freshly grated",
            "Freshly whole cracked black pepper"
        ],
        steps: [
            "Bring a large pot of heavily salted water to a rolling boil. Introduce 200g of spaghetti and cook until al dente—approximately 8 to 10 minutes.",
            "While the pasta processes, heat a heavy-bottomed pan over medium heat. Add the diced guanciale, rendering the fat until chunks become golden and crisp.",
            "In a clean mixing bowl, vigorous whisk the whole eggs along with your grated Pecorino Romano cheese. Incorporate a generous amount of toasted black pepper to form a thick paste.",
            "Drain pasta while reserving half a cup of starchy water. Toss hot pasta instantly inside the guanciale pan. Remove from flame entirely, pour in egg cream mixture, and rapidly agitate to form a velvety, un-scrambled sauce emulsion."
        ]
    },
    adobo: {
        title: "Filipino Chicken Adobo",
        time: "45 Mins",
        level: "Medium",
        description: "An exquisite, deeply savory classic braise using bone-in chicken thighs, cane vinegar, soy sauces, crushed garlic, and toasted bay leaves.",
        ingredients: [
            "1kg Chicken Thighs or Drumsticks",
            "1/2 cup Soy Sauce",
            "1/3 cup Cane Vinegar",
            "6 cloves Garlic, crushed",
            "3 pieces Dried Bay Leaves",
            "1 tbsp Whole Black Peppercorns"
        ],
        steps: [
            "In a large bowl, marinate the chicken chunks in soy sauce and crushed garlic for at least 30 minutes.",
            "Heat a deep pan over medium-high heat. Sear the marinated chicken pieces on both sides until browned, then pour in the remaining marinade and add the bay leaves and peppercorns.",
            "Bring the liquid mixture to a gentle boil, cover the pan, lower the heat, and let it simmer for 25 minutes until the chicken is tender.",
            "Pour in the cane vinegar. Crucially, let it simmer uncovered for 5 minutes without stirring to cook off the harsh acid profile, then stir to glaze the chicken."
        ]
    },

    // --- LOCAL FILIPINO DISHES ---
    sinigang: {
        title: "Sinigang na Baboy",
        time: "50 Mins",
        level: "Medium",
        description: "A comforting Filipino sour tamarind soup loaded with tender pork belly blocks and an assortment of native vegetables.",
        ingredients: ["1kg Pork Belly, sliced", "1 pack Tamarind (Sinigang) base paste", "1 bundle Water Spinach (Kang-kong)", "2 medium Tomatoes, quartered", "1 medium Red Onion, sliced", "1 White Radish (Labanos), sliced", "3 pieces Long Green Peppers (Siling Haba)"],
        steps: [
            "Boil pork belly slices in a deep pot with tomatoes and onions for 30 minutes until meat is completely tender.",
            "Add the tamarind powder base mix and stir evenly to distribute the signature sour flavor broth profile.",
            "Drop in the sliced white radish chunks and long green chili peppers; simmer gently for 5 additional minutes.",
            "Turn off the heat flame, submerge the water spinach leaves completely into hot liquid, and cover pot to steam."
        ]
    },
    karekare: {
        title: "Beef Kare-Kare",
        time: "90 Mins",
        level: "Hard",
        description: "A rich, celebratory Filipino stew featuring tender beef chunks simmered in a thick, velvety toasted peanut savory sauce.",
        ingredients: ["1kg Beef Thigh or Oxtail pieces", "1 cup Peanut Butter, smooth", "1/4 cup Toasted Ground Rice paste", "1 bundle String Beans (Sitaw)", "1 medium Eggplant, sliced", "1 bundle Bok Choy", "Aparador shrimp paste (Bagoong) for serving"],
        steps: [
            "Boil the oxtail or beef slices inside a pressure cooker for 45 minutes until completely gelatinous and melt-in-your-mouth tender.",
            "Whisk the peanut butter into warm beef broth reservoir, then stir in toasted ground rice paste to thicken the base.",
            "Steam vegetables separately or add string beans, eggplants, and bok choy to the peanut sauce matrix until crisp-tender.",
            "Transfer layout smoothly to serving bowls and pair with salty fermented shrimp paste on the side."
        ]
    },
    lechon_kawali: {
        title: "Lechon Kawali",
        time: "60 Mins",
        level: "Hard",
        description: "Deep-fried boiled pork belly blocks displaying incredibly crunchy skin while retaining a highly juicy interior texture.",
        ingredients: ["1kg Pork Belly slab", "2 tbsp Salt", "1 tbsp Peppercorns", "3 cloves Garlic, smashed", "4 cups Vegetable Oil for deep frying"],
        steps: [
            "Simmer the entire pork belly slab in water with salt, pepper, and garlic for 45 minutes until structurally cooked through.",
            "Remove pork belly from stock, dry thoroughly with paper towels, and score skin layer to encourage blister popping.",
            "Chill skin uncovered inside the refrigerator for at least 2 hours to draw out excessive moisture particles.",
            "Heat frying oil to 180 degrees Celsius. Submerge pork carefully, frying until the skin forms golden, blistering crackling shells."
        ]
    },
    bicol_express: {
        title: "Bicol Express",
        time: "35 Mins",
        level: "Medium",
        description: "A fiery Filipino dish made of pork strips stewed in rich coconut cream, heavily loaded with sliced green chilies.",
        ingredients: ["500g Pork Belly, sliced thin", "2 cups Coconut Cream", "1 cup Serrano chilies, sliced thin", "2 tbsp Shrimp Paste (Bagoong)", "4 cloves Garlic, minced", "1 medium Onion, chopped"],
        steps: [
            "Sauté garlic, onion, and shrimp paste in a hot pan over medium flame until fragrant aromas fill workstation.",
            "Add pork slices, searing them completely until fat rendering begins to glaze the pan base outlines.",
            "Introduce sliced green chili peppers and toss well. Pour in coconut cream layer and reduce heat setting to a simmer.",
            "Stir frequently for 15 minutes until the coconut cream thickens into a rich, spicy oil reduction."
        ]
    },
    bulalo: {
        title: "Batangas Bulalo",
        time: "120 Mins",
        level: "Hard",
        description: "A pristine light colored beef broth built around slow-cooked beef shanks and rich, buttery exposed bone marrow.",
        ingredients: ["1.5kg Beef Shank with bone marrow", "1 medium Cabbage, halved", "2 ears Sweet Corn, cob sections", "1 tbsp Black Peppercorns", "2 tbsp Fish Sauce", "4 stalks Green Onions"],
        steps: [
            "Place beef shanks in a massive pot, cover completely with water, bring to a boil, and skim off surface foam clouds.",
            "Add corn chunks and whole black peppercorns; turn flame low and simmer for 2 hours until beef pulls away from bone lines easily.",
            "Season the clear liquid base with fish sauce. Drop in cabbage leaves and green onions.",
            "Simmer uncover for 5 minutes, ensuring the rich marrow remains safely nestled within the bone column structures."
        ]
    },
    lumpia: {
        title: "Lumpiang Shanghai",
        time: "40 Mins",
        level: "Medium",
        description: "Crispy Filipino spring rolls filled with a seasoned mixture of minced pork, carrots, and aromatics.",
        ingredients: ["500g Ground Pork", "1 medium Carrot, finely minced", "1 medium Onion, finely minced", "2 tbsp Soy Sauce", "1 Egg, beaten", "25 pieces Lumpia Wrappers", "Frying Oil"],
        steps: [
            "Vigorously mix ground pork, minced carrots, onion, soy sauce, and egg inside a clean preparation bowl setup.",
            "Lay down lumpia wrapper sheet, deposit 1 tablespoon of meat filling paste, and roll tightly, securing edge seams with water.",
            "Slice long rolled tubes evenly across center axes using kitchen shears into uniform finger lengths.",
            "Deep fry rolls in batches for 5 minutes until wrappers form bright, flaky golden glass skin profiles."
        ]
    },
    sisig: {
        title: "Kapampangan Sisig",
        time: "50 Mins",
        level: "Hard",
        description: "A legendary sizzling dish made from chopped pork face parts, boiled, grilled, and tossed with dynamic citrus calamansi and onions.",
        ingredients: ["1kg Pork Mask or Belly block", "1 large Red Onion, minced minced", "5 pieces Thai Bird's Eye Chili", "3 tbsp Mayonnaise (optional)", "2 tbsp Liquid Seasoning", "3 pieces Calamansi citrus fruits"],
        steps: [
            "Boil pork parts until tender, then transfer to a wire rack and charcoal grill until skin turns beautifully charred and smoky.",
            "Finely dice the grilled meat pieces alongside fresh red onions and fiery bird's eye red chili wheels.",
            "Sauté chopped mixtures inside a frying pan, adding liquid seasoning extract mix factors and a dash of pepper.",
            "Move contents onto a screaming hot cast-iron serving plate, cracking a raw egg on center focus immediately before serving."
        ]
    },
    tinola: {
        title: "Chicken Tinola",
        time: "35 Mins",
        level: "Easy",
        description: "A soothing Filipino ginger chicken soup infused with green papaya slices and fresh chili pepper leaves.",
        ingredients: ["700g Chicken cuts", "1 medium Green Papaya, wedged", "2 tbsp Ginger strips, sliced thin", "3 cloves Garlic, crushed", "1 bundle Chili Leaves or Malunggay", "2 tbsp Fish Sauce"],
        steps: [
            "Sauté ginger strips and garlic in oil inside a deep pot until golden and heavily aromatic.",
            "Add chicken pieces and sear for 5 minutes until exterior surfaces turn opaque and lightly browned.",
            "Pour in water to submerge meat, add fish sauce, bring to a boil, then drop in green papaya wedges and simmer for 15 minutes.",
            "Add fresh chili leaves, turn off the induction heating unit, and cover pot to let steam trap aromas."
        ]
    },
    pancit: {
        title: "Pancit Bihon",
        time: "30 Mins",
        level: "Easy",
        description: "A classic Filipino stir-fried rice noodle dish loaded with shredded vegetables, chicken, and savory soy profiles.",
        ingredients: ["250g Rice Bihon Noodles", "200g Chicken breast strips", "1 cup Shredded Cabbage", "1/2 cup Carrots, julienned", "3 tbsp Soy Sauce", "2 cups Chicken Stock", "1 Calamansi for serving"],
        steps: [
            "Soak bihon rice noodle strands inside warm water basin for 10 minutes until flexible; drain and set aside.",
            "Sauté garlic, onion, and chicken strips in a large wok until meat contents lose pink hues completely.",
            "Pour in chicken stock and soy sauce; throw in cabbage and julienned carrots, cooking until vegetables wilt slightly.",
            "Introduce hydrated rice noodles into boiling stock pool, turning constantly until noodles absorb all liquid layers."
        ]
    },
    laing: {
        title: "Bicolano Laing",
        time: "55 Mins",
        level: "Medium",
        description: "Dried taro leaves shredded and slowly simmered inside spicy coconut milk infused with shrimp paste and pork.",
        ingredients: ["100g Dried Taro Leaves", "3 cups Coconut Milk", "1 cup Coconut Cream", "100g Pork belly, diced thin", "2 tbsp Shrimp Paste", "6 pieces Bird's eye chilies"],
        steps: [
            "Pour coconut milk into a wide wok, mixing in shrimp paste, diced pork cubes, ginger strips, and sliced chili rings.",
            "Gently arrange dried taro leaves over the liquid layer. Crucially, do not stir the mixture for 20 minutes to prevent itching.",
            "Once taro leaves have absorbed liquid and softened completely, press down gently and fold leaves over.",
            "Pour coconut cream over the top layer and reduce down until mixture turns thick, dark green, and oil separates."
        ]
    },

    // --- INTERNATIONAL CLASSICS ---
    tacos: {
        title: "Mexican Tacos al Pastor",
        time: "40 Mins",
        level: "Medium",
        description: "Street-style corn tortillas holding finely sliced spiced pork, diced white onions, fresh cilantro, and pineapple wedges.",
        ingredients: ["500g Pork Shoulder, sliced thin", "2 tbsp Achiote Paste marinade", "1 cup Pineapple chunks", "1 small White Onion, diced", "1/2 cup Fresh Cilantro, chopped", "12 Corn Tortillas"],
        steps: [
            "Marinate pork shoulder slices in earthy achiote paste and pineapple juice blend settings for at least 1 hour.",
            "Sear spiced meat inside an incredibly hot skillet until edges turn caramelized and dark brown.",
            "Warm up soft corn tortilla disks directly over a dry open gas ring flame to toast contours.",
            "Assemble stack by piling sliced pork meat, fresh pineapple cubes, diced raw onions, and cilantro sprinkles."
        ]
    },
    pad_thai: {
        title: "Thailand Pad Thai",
        time: "30 Mins",
        level: "Medium",
        description: "Stir-fried flat rice noodles tossed with shrimp, tofu, sweet tamarind pulp glaze, and crushed peanuts.",
        ingredients: ["200g Flat Rice Noodles", "100g Tiger Shrimp, peeled", "1/2 cup Firm Tofu cubes", "3 tbsp Tamarind Paste juice", "2 tbsp Palm Sugar", "1 cup Bean Sprouts", "2 tbsp Crushed roasted peanuts"],
        steps: [
            "Boil flat rice noodles until pliable but retaining chew; drain instantly and rinse with cold water sheets.",
            "Pan-fry tofu cubes and shrimp inside a hot wok until shrimp flesh curls tight into pink rings.",
            "Push protein elements to sides of wok; crack an egg into center space, scramble softly, then drop in noodles.",
            "Pour tamarind juice and palm sugar glaze over pan center, tossing rapidly with bean sprouts and peanut dust."
        ]
    },
    sushi_roll: {
        title: "Maki Sushi Roll",
        time: "35 Mins",
        level: "Medium",
        description: "Vinegared Japanese sushi rice wrapped around fresh cucumber and sashimi-grade tuna inside toasted seaweed sheets.",
        ingredients: ["2 cups Sushi Rice, cooked", "3 tbsp Rice Vinegar mix", "4 sheets Nori Seaweed", "100g Sashimi-grade Tuna loin", "1 medium Cucumber, julienned", "Bamboo rolling mat wrapped in plastic wrapper"],
        steps: [
            "Fan out warm sushi rice inside a wooden bowl while tossing with sweet rice vinegar lines to season.",
            "Place Nori sheet onto bamboo mat, spreading rice layer evenly while keeping top 1cm border margin clear.",
            "Lay down tuna matchsticks and julienned cucumber strips straight down across the lower third horizontal baseline.",
            "Lift mat base cleanly, rolling forward tightly while applying compression block vectors to create solid logs."
        ]
    },
    butter_chicken: {
        title: "Indian Butter Chicken",
        time: "40 Mins",
        level: "Medium",
        description: "Tender spiced chicken pieces baked and drowned inside a luxurious spiced tomato, cream, and butter gravy emulsion.",
        ingredients: ["600g Chicken Thighs, cubed", "1 cup Plain Yogurt", "2 cups Tomato Puree", "1 cup Heavy Cream", "50g Unsalted Butter", "2 tbsp Garam Masala mix"],
        steps: [
            "Toss chicken cubes with yogurt and garam masala seasoning lines; broil inside hot oven for 15 minutes.",
            "Melt butter blocks inside a saucepan, cooking minced ginger and tomato puree until color darkens into deep maroon.",
            "Pour cream layer into tomato base, stirring constantly to build a completely smooth orange gravy suspension.",
            "Incorporate baked tandoori chicken chunks directly into gravy, simmering gently for 10 minutes to marry juices."
        ]
    },
    beef_stroganoff: {
        title: "Beef Stroganoff",
        time: "30 Mins",
        level: "Medium",
        description: "Tender sliced beef sauted with mushrooms and onions, finished in a rich, tangy sour cream sauce over egg noodles.",
        ingredients: ["500g Beef Sirloin, sliced thin", "2 cups Button Mushrooms, sliced", "1 medium Onion, sliced", "1 cup Beef Broth", "3/4 cup Sour Cream", "300g Egg Noodles, cooked"],
        steps: [
            "Sear beef sirloin strips in a searing hot skillet with butter for 2 minutes per side; transfer meat to plates.",
            "Sauté mushroom slices and onions inside the remaining beef fat reservoir until golden brown.",
            "Pour beef broth and a pinch of mustard into skillet, scraping bottom pan crust glaze elements into solution.",
            "Remove pan from burner element entirely; fold sour cream and seared meat strips into sauce pool until smooth."
        ]
    },
    pho: {
        title: "Vietnamese Beef Pho",
        time: "120 Mins",
        level: "Hard",
        description: "An aromatic, clean beef broth infused with charred ginger and star anise, served with flat rice noodles and rare beef slices.",
        ingredients: ["1kg Beef Marrow Bones", "200g Beef Sirloin, sliced raw paper-thin", "1 bundle Flat Pho Rice Noodles", "2 Star Anise pods", "1 Charred Ginger knob", "1 cup Fresh Basil & Bean Sprouts"],
        steps: [
            "Slow simmer marrow bones with charred ginger and toasted star anise pods for 2 hours to extract clean fats.",
            "Boil pho rice noodles inside a separate water pot until tender, then divide noodles into clean serving bowls.",
            "Lay paper-thin raw beef sirloin sheets directly on top of the cooked rice noodle mountain columns.",
            "Ladle boiling hot broth directly over raw meat layers to cook them instantly inside the bowl structure."
        ]
    },
    coq_au_vin: {
        title: "French Coq au Vin",
        time: "75 Mins",
        level: "Hard",
        description: "A rustic French classic featuring chicken cuts slow-braised inside dry red wine with bacon lardons and mushrooms.",
        ingredients: ["1kg Chicken cuts, bone-in", "750ml Dry Red Wine", "100g Bacon Lardons", "200g Button Mushrooms", "2 tbsp Butter", "2 cloves Garlic, minced"],
        steps: [
            "Crisp bacon lardons inside a heavy Dutch oven, then sear chicken cuts inside the rendered pork fat pool.",
            "Pour entire bottle of dry red wine over chicken, tossing in garlic claws and fresh thyme leaf branches.",
            "Cover vessel and transfer to a 160°C oven environment for 50 minutes until meat fibers soften down.",
            "Reduce remaining braising juices on stovetop with butter to build a School classic glossy purple glaze sauce."
        ]
    },
    tom_yum: {
        title: "Tom Yum Goong",
        time: "25 Mins",
        level: "Medium",
        description: "A fiery, vibrant Thai hot and sour soup loaded with shrimp, lemongrass, kaffir lime leaves, and galangal.",
        ingredients: ["400g Tiger Shrimp, heads on", "3 stalks Lemongrass, bruised", "4 slices Galangal root", "5 Kaffir Lime Leaves", "3 tbsp Fish Sauce", "2 tbsp Roasted Chili Paste (Nam Prik Pao)"],
        steps: [
            "Bring water to a rolling boil, introducing bruised lemongrass lengths, galangal coins, and kaffir lime leaves.",
            "Stir in Thai roasted chili paste and fish sauce extracts to tint broth into a deep crimson field.",
            "Drop in whole tiger shrimp elements, cooking for exactly 3 minutes until outer shells flash bright orange.",
            "Remove pot from induction panel, squeeze in fresh lime juice extract lines, and serve immediately."
        ]
    },
    lasagna: {
        title: "Classic Italian Lasagna",
        time: "90 Mins",
        level: "Hard",
        description: "Baked pasta layers alternating between rich beef ragù sauce, creamy béchamel milk roux, and melted mozzarella sheets.",
        ingredients: ["12 Lasagna Pasta sheets", "500g Ground Beef", "3 cups Marinara Tomato Sauce", "2 cups Béchamel White Sauce", "2 cups Mozzarella cheese, shredded", "1/2 cup Grated Parmesan"],
        steps: [
            "Simmer ground beef inside marinara sauce for 30 minutes to build a thick meat ragù base layer configuration.",
            "Boil pasta sheets until flexible, or prepare no-boil noodles layout options onto clean towels.",
            "Layer components in an oven dish: ragù first, sheets second, béchamel third, and mozzarella shreds fourth.",
            "Repeat stacking orientation index 3 times, capping top with extra cheese before baking at 190°C for 35 minutes."
        ]
    },
    gyro: {
        title: "Greek Pork Gyros",
        time: "35 Mins",
        level: "Medium",
        description: "Warm flat pita breads loaded with highly seasoned shaved pork, cool cucumber tzatziki cream, tomatoes, and red onions.",
        ingredients: ["500g Pork loin, sliced thin", "2 tbsp Dried Oregano", "1 cup Greek Yogurt", "1 medium Cucumber, grated", "4 Flat Pita Bread rounds", "1 medium Tomato, sliced"],
        steps: [
            "Marinate pork strips heavily inside oregano, lemon squeeze, and olive oil blocks, then sear until deeply browned.",
            "Construct cool Tzatziki cream by squeezing water from grated cucumber and folding pulp into garlic-infused Greek yogurt.",
            "Toast flat pita bread rounds directly on a warm dry skillet plate surface until soft and flexible.",
            "Assemble by loading pita with shaved pork meat, sliced tomatoes, raw onion crescent rings, and tzatziki dollops."
        ]
    }
};

// ==========================================================================
// 2. CLIENT-SIDE PERSISTENCE STORAGE INTERCEPTOR & MERGE CONTROLLER
// ==========================================================================
const getMergedRecipeData = () => {
    const userRecipes = JSON.parse(localStorage.getItem('userCustomRecipes')) || {};
    return { ...BASE_RECIPE_DATA, ...userRecipes };
};

const RECIPE_DATA = getMergedRecipeData();

// ==========================================================================
// 3. GLOBAL KITCHEN THEME ENGINE LAYER
// ==========================================================================
function toggleGlobalKitchenTheme() {
    const isDark = document.body.classList.toggle('kitchen-dark-mode');
    localStorage.setItem('kitchenDarkMode', isDark);
    
    const themeIcon = document.getElementById('globalThemeIcon');
    const themeText = document.getElementById('globalThemeText');
    
    if (themeIcon) themeIcon.innerText = isDark ? 'brightness_3' : 'wb_sunny';
    if (themeText) themeText.innerText = isDark ? 'Standard' : 'Kitchen Mode';
}

document.addEventListener("DOMContentLoaded", () => {
    const isDarkSetting = localStorage.getItem('kitchenDarkMode') === 'true';
    const themeIcon = document.getElementById('globalThemeIcon');
    const themeText = document.getElementById('globalThemeText');
    
    if (isDarkSetting) {
        document.body.classList.add('kitchen-dark-mode');
        if (themeIcon) themeIcon.innerText = 'brightness_3';
        if (themeText) themeText.innerText = 'Standard';
    } else {
        if (themeIcon) themeIcon.innerText = 'wb_sunny';
        if (themeText) themeText.innerText = 'Kitchen Mode';
    }
});