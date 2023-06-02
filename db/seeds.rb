# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      name: 'Angelo Ciffone', 
      email: 'testuser@gmail.com', 
      password: 'password'
    )
    User.create!(
      name: 'Demo User', 
      email: 'demouser@gmail.com', 
      password: 'password'
    )

    Product.create!(
        brand: 'Nike',
        name: 'Air Jordan 6',
        description: 'Rubber sole
        The Air Jordan 6 “DMP 2020” is a Winter 2020 re-release of the classic “Defining Moments Pack” that first appeared in 2006
        One of the most celebrated and coveted two-shoe sets ever from Jordan Brand, the Defining Moments Pack celebrated Michael Jordan’s first NBA Championship and contains an Air Jordan 6 and Air Jordan 11, both of which sport a premium redesign
        The Air Jordan 6 features a stealthy black nubuck upper with a gold-accented Jumpman on the tongue and gold trim on the midsole that provides a touch of opulent styling
        For 2020, Jordan Brand opted to bring back the Jordan 6 from the original pack in all its glory
        Release date: April 2020',
        dimensions: '14 x 10 x 5 inches; 1.2 Pounds',
        category: 'Shoes',
        price: 49.99
    )

    Product.create!(
        brand: 'Ray-Ban',
        name: 'Ray-Ban Aviator',
        description: 'Metal
        Imported
        Metal frame
        Crystal lens
        Polarized
        UV Protection Coating coating
        Lens width: 58 millimeters
        Bridge: 14 millimeters
        Arm: 135 millimeters
        Classic aviator sunglasses: Protect your eyes with style made famous by aviators since 1937. Ray-Ban RB3025 Large Metal Aviator Sunglasses are superior unisex glasses with multiple frame and lens options.
        Polarized sunglasses: RB3025 Aviator sunglasses feature legendary Ray-Ban polarized lenses originally designed for military use, which improve clarity while reducing glare and eyestrain. Made of high-quality, scratch-resistant glass.
        100% UV Protection: These aviator sunglasses were made famous by Top Gun. You can feel comfortable knowing that the Ray-Ban lenses will provide 100% UV protection.
        Unisex sunglasses: Whether you’re looking for, Ray-Ban sunglasses for women or men, RB3025 Aviators are designed as Unisex sunglasses that are durable and fashionable.
        Multiple frame and lens colors: With a variety of metal frame colors to choose from, including gold or silver, see the world through a variety of polarized lens colors—all of which provide optimal visual clarity and 100% UV protection.
        Multiple size options: Choose from a variety of size options including 55 millimeter, 58 millimeter and 62 millimeter. 55 millimeter is recommended for smaller or more narrow faces, while 
        the bigger 62 millimeter is recommended for those with large heads or wide faces. The 58 millimeter the best fit for men with an average width face, and fits the average
        womans face for a slightly oversized look. Size lens-bridge: 14 millimeter
        Visit the ray-ban brand shop: Click on the Ray-Ban logo above to view the entire Ray-Ban brand assortment.',
        dimensions: '',
        category: 'Glasses',
        price: 34.99
    )
    Product.create!(
        brand: 'Gucci',
        name: 'Gucci Soho Medium',
        description: 'Leather
        Imported
        Gucci dustbag included.
        Made in Italy.
        Details: Pebble leather. Light fine golden hardware. Double chain shoulder straps with leather shoulder pad; 7" drop. Detachable leather tassel.
        Inside hook closure. Embossed interlocking G. Natural cotton linen lining. Medium size: 10 1/2"H x 15"W x 5 1/2"D. Made in Italy. Designer About 
        Gucci: In 1921 Florence, a craftsman named Guccio Gucci opened his store to sell leather goods, and a legend was born. Over the decades, people 
        around the world have admired and appreciated the Gucci House.
        Measurements: Length: 15" Width: 4.75" Height: 10.75" Shoulder strap drop: 10.5"',
        dimensions: '16 x 5.5 x 10.5 inches; 1.5 Pounds',
        category: 'Bags',
        price: 54.99
    )
    Product.create!(
        brand: 'LG',
        name: 'LG Signature 88-inch Class OLED Z2 Series 8K',
        description: '8K RESOLUTION: Experience our 8K OLED screen to bring your content to life like never before with the sharpest, most vivid resolution ever in an OLEDExperience our 8K OLED screen to bring your content to life like never before with the sharpest, most vivid resolution ever in an OLED
        OLED PICTURE QUALITY: Our self-lit OLED pixels bring to life infinite contrast, perfect black, and over a billion colors add depth and bring out the bold, brazen and beautiful no matter what you’re watching
        8K AI UPSCALING: Instantly transform all of your regular and 4K content into a 8K-like viewing experience
        a9 GEN 5 AI PROCESSOR 8K: Make the impossible possible with our latest a9 Gen5 AI Processor 8K engineered exclusively for LG OLED to automatically adjust your settings to improve picture and sound quality based on whatever you’re watching',
        dimensions: '11.1"D x 77.2"W x 57.3"H',
        category: 'Electronics',
        price: 125.99
    )
    Product.create!(
        brand: 'Marvel',
        name: 'The Amazing Spider-Man: 1962–1964',
        description: '
        When Stan Lee first pitched the idea of Spider-Man in 1962, his boss was full of objections: People hate spiders. Teenagers aren’t lead characters; they’re sidekicks. He should be glamorous and successful, not 
        a friendless loser. But Stan persisted and Martin Goodman let him give the unlikely hero a tryout in Amazing Fantasy, which was already slated for cancellation. With Spider-Man on the cover, No. 15 shot to the top 
        of Marvel’s best-seller list for the year, and the rest is history.
        
        Amazing Spider-Man, which debuted seven months later, broke the comics mold. Peter Parker lived in uncool Queens, was always broke, continually worried about his Aunt May, was unlucky in love, and was constantly 
        getting yelled at by his boss, Daily Bugle publisher J. Jonah Jameson. Spider-Man had the quips and confidence that Parker lacked, but learning to use his powers wasn’t always easy. He often seemed on the verge of 
        defeat against the rogue’s gallery of classic foes that debuted in the first couple of years: Vulture, Doctor Octopus, Sandman, Lizard, Electro, Kraven the Hunter, Mysterio, and the Green Goblin. Much of the credit 
        for Spider-Man’s greatness goes to co-creator and artist Steve Ditko, who had a knack for portraying teenagers and their problems. His artwork infused Spider-Man with a loose-limbed energy, and, while maybe everyone 
        was scared of spiders, Ditko made swinging through New York seem like the coolest adventure ever.
        
        This XXL-sized collector’s dream, close in size to the original artworks, features the first 21 stories of the world’s favorite web slinger from 1962–1964. Rather than recolor the original artwork (as has been done 
        in previous decades’ reprints of classic comics), TASCHEN has attempted to create an ideal representation of these books as they were produced at the time of publication. The most pristine pedigreed comics have been 
        cracked open and photographed for reproduction in close collaboration with Marvel and the Certified Guaranty Company. Each page has been photographed as printed more than half a century ago, then digitally remastered 
        using modern retouching techniques to correct problems with the era’s inexpensive, imperfect printing—as if hot off of a world-class 1960s printing press. Three different paper stocks, including an uncoated and woodfree 
        paper, were exclusively developed for this series to simulate the feel of the original comics.
        
        With an in-depth historical essay by Marvel editor Ralph Macchio, an introduction by uber-collector David Mandel, and original art, rare photographs, and other gems, these 698 pages of wall-crawling wonder will make 
        anyone’s spider-sense tingle with anticipation.
        
        ',
        dimensions: '12.64 x 3.03 x 18.5 inches',
        category: 'Books',
        price: 9.99
    )
    Product.create!(
        brand: 'Rolex',
        name: 'Rolex Submariner Automatic-self-Wind Male Watch',
        description: '
        New Rolex Submariner Date Oystersteel Mens Watch 116610

        - With Manufacturer Serial Numbers
        - Swiss Made
        - Black Dial
        - Dot Hour Markers
        - Black Cerachrom Ceramic Bezel Insert
        Engraved 60 Minute Graduations
        - Cyclops Lens Date Feature
        Instantaneous Date with Rapid Setting
        - Stop-seconds Feature for Precise Time Setting
        - Self-winding Automatic Chronometer Movement
        - COSC Chronometer Certified
        - Rolex Caliber 3135
        - Vibrations Per Hour: 28,800
        - Jewels: 31
        - 6 Year Warranty
        - Guaranteed Authentic
        - Certificate of Authenticity
        - Manufacturer Box & Manual
        - Polished with Brushed 904L Oystersteel Stainless Steel Case
        - Brushed 904L Oystersteel Stainless Steel Oyster Bracelet
        - Scratch Resistant Sapphire Crystal
        - 300 Meters / 1000 Feet Waterproof
        - 40mm = 1 1/2" Case, 7" Adjustable Bracelet
        - Unidirectional Rotating Bezel
        - Long-Lasting Blue Large Luminescent Hands & Hour Markers
        - Screw Down Crown & Case Back
        - Oysterlock Deployment Buckle with Rolex Glidelock Extension System

        Also Known As Model # 116610 / 116610 LN / 116610LN

        ',
        dimensions: '',
        category: 'Watches',
        price: 74.99
    )
    Product.create!(
        brand: 'Blizzard',
        name: 'Diablo IV',
        description: '
        Diablo IV is the next-gen action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting memorable 
        characters through beautifully dark settings and a gripping story, or explore an expansive end game and shared world where players can meet in towns to trade, team up to battle World Bosses, or descend into PVP zones 
        to test their skills against other players - no lobbies necessary - with cross-play and cross-progression on all available platforms. This is only the beginning for Diablo® IV, with new events, stories, seasons, rewards, 
        and more looming on the horizon. *Mount access must be unlocked in-game before using mounts. Battle.net account required. Internet connection required. For more information, please visit Diablo.com. © 2023 Blizzard Entertainment, 
        Inc. Diablo, Diablo Immortal, World of Warcraft, and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S and/or other countries. All rights reserved.
        ',
        dimensions: ' 6.69 x 5.35 x 0.55 inches; 2.4 Ounces',
        category: 'Games',
        price: 9.99
    )
    Product.create!(
        brand: 'Supreme',
        name: 'Supreme T-Shirt',
        description: '
        T-shirt
        ',
        dimensions: '',
        category: 'Clothes',
        price: 2.99
    )
  
    # More users
    10.times do 
      User.create!({
        name: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end