# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Cart.destroy_all
    Review.destroy_all
    Product.destroy_all
    User.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

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

    product1 = Product.create!(
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

    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/jordan1.jpeg')
    attachment_result = product1.photo.attach(io: file, filename: 'jordan1.jpeg')

    # file = URI.open('https://canal-seeds.s3.amazonaws.com/jordan1.jpeg')
    # product1.photo.attach(io: file, filename: 'jordan1.jpeg')

    product2 = Product.create!(
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

    file = URI.open('https://canal-seeds.s3.amazonaws.com/RayBan.jpg')
    product2.photo.attach(io: file, filename: 'Ray Ban')

    product3 = Product.create!(
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

    file = URI.open('https://canal-seeds.s3.amazonaws.com/GucciBag.jpeg')
    product3.photo.attach(io: file, filename: 'Gucci Bag')

    product4 = Product.create!(
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

    file = URI.open('https://canal-seeds.s3.amazonaws.com/oled88.jpg')
    product4.photo.attach(io: file, filename: 'Oled 88')

    product5 = Product.create!(
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

    file = URI.open('https://canal-seeds.s3.amazonaws.com/spiderMan.jpg')
    product5.photo.attach(io: file, filename: 'Spiderman Book')

    product6 = Product.create!(
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

    file = URI.open('https://canal-seeds.s3.amazonaws.com/Rolex.jpg')
    product6.photo.attach(io: file, filename: 'Rolex')

    product7 = Product.create!(
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
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Diablo4.jpg')
    product7.photo.attach(io: file, filename: 'Diablo4')
    
    product8 = Product.create!(
        brand: 'Supreme',
        name: 'Supreme T-Shirt',
        description: '
        T-shirt
        ',
        dimensions: '',
        category: 'Clothes',
        price: 2.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/supremeShirt.png')
    product8.photo.attach(io: file, filename: 'supreme')
    
    product9 = Product.create!(
        brand: 'Nike',
        name: '2016 Nike MAG Back to the Future',
        description: '
        The Nike MAG which premiered in the 1989 sequel, Back to the Future II, was instantly one of the most coveted – but unavailable – shoes in history. In 2011, Nike finally released 1,500 pairs to the public to benefit the Michael J. Fox Foundation for Parkinson’s Research, which marked one of Nike’s most popular releases, raising $10 million dollars in 10 days. 
        This pair, part of the highly coveted 2016 release, was limited to just 89 pairs worldwide.
        In the film, Marty time travels to the year 2015, and famously turns on his Nike MAGs featuring ‘power laces’, that self-tie. That moment, and later scenes in the movie, became iconic in the history of footwear inspiring multiple releases by Nike, including the Nike MAG (2011), Nike MAG (2016), the Nike Adapt Mag (2019), amongst others. 
        This 2016 Nike MAG notably features self-lacing “power laces” which Nike branded “Adaptive Fit” technology, as prophesied in the 1989 film. An individually responsive system, ‘Adaptive Fit’ senses the wearer and tightens and loosens the sneakers according to the foot, bringing the design elements from ‘ Back to the Future’ to life.
        While both the 2011 MAG and the 2016 MAG are highly coveted by collectors, the rarity of this particular pair makes it an exceptional find. ',
        dimensions: '',
        category: 'Shoes',
        price: 54.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/nike+mag+2016.webp')
    product9.photo.attach(io: file, filename: 'Nike Mags')

    product10 = Product.create!(
        brand: 'Cartier',
        name: 'Cartier CT0007RS - Signature',
        description: '
        Style: CT0007RS
        Frame + Lens Material: Metal + Nylon
        Cartier CT0007RS rimless womens sunglasses feature a gold-plated frame. The oversized rectangular lenses are fuchsia lenses. Cartiers signature Big C hinges are on both sides of the frame. The adjustable nose pads enhance a comfortable fit. This women''s style is highly versatile. It fits medium to wide shape faces, including those with low nose bridges.
        Cartier embodies luxury elegance through their designs. Cartier uses fine, high-quality materials to create a high fashion style of sunglasses.',
        dimensions: '',
        category: 'Glasses',
        price: 19.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/cartier+glasses.webp')
    product10.photo.attach(io: file, filename: 'Cartier Glasses')

    product11 = Product.create!(
        brand: 'Chanel',
        name: 'Chanel Mini Rectangular Flap Bag Pink Lambskin Light Gold Hardware',
        description: '
        This Mini Rectangular flap bag is of pink lambskin leather with light gold tone hardware and has a front flap with signature CC turnlock closure, rear half moon pocket, single interwoven pink leather and light gold tone chain link shoulder/crossbody strap.
        The interior is lined in pink leather and features a zipper pocket with Chanel pull and an open pocket below.',
        dimensions: '8" width x 5" height x 2.5" depth; 22.5" strap drop',
        category: 'Bags',
        price: 49.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/chanel+bag.webp')
    product11.photo.attach(io: file, filename: 'Chanel Bag')
    
    product12 = Product.create!(
        brand: 'Canon',
        name: 'Canon EOS R5 Full-Frame Mirrorless Camera w/ RF24-105mm F4 L is USM Lens Kit - 8K Video, 45 Megapixel Full-Frame CMOS Sensor, DIGIC X Image Processor, Up to 12 fps Mechanical Shutter (Body + Lens)',
        description: '
        Canon’s all-new 45 Megapixel full-frame sensor is at the heart of the EOS R5’s superb image quality, which also leads the way for impressive
        8K DCI cinematic movie capture with the ability to extract 35.4 Megapixel still images. Focus and speed are paramount in the EOS R5, providing
        impressive continuous capture at speeds of up to 20 frames-per-second and with Dual Pixel CMOS AF II capability, to track split second
        movements of even the most elusive of subjects. With 1,053 Automatic AF zones, it is easier than ever to photograph people with the use of
        Eye, Face and Head Detection AF, or intuitively track the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. The 5-axis
        in-body image stabilization can effectively compensate for camera shake with approximately 8 stops of stabilization with use of both non-stabilized,
        and optically image stabilized lenses. Connectivity like 5GHz and 2.4GHz Wi-Fi and Bluetooth, is also included.',
        dimensions: '5.43 x 3.46 x 3.84 inches',
        category: 'Electronics',
        price: 35.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/CanonCam.jpg')
    product12.photo.attach(io: file, filename: 'Chanel Bag')
    
    product13 = Product.create!(
        brand: 'James Clear',
        name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        description: '
        No matter your goals, Atomic Habits offers a proven framework for improving - every day. James Clear, one of the world''s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.
        If you''re having trouble changing your habits, the problem isn''t you. The problem is your system. Bad habits repeat themselves again and again not because you don''t want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you''ll get a proven system that can take you to new heights.
        Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, listeners will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field.',
        dimensions: '',
        category: 'Books',
        price: 1.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/atmoic+habits.jpeg')
    product13.photo.attach(io: file, filename: 'Atomic Habits')
    
    product14 = Product.create!(
        brand: 'Zenith',
        name: 'Zenith El Primero Chronomaster Power Reserve Women''s Watch 18-2080-4021-01-C494',
        description: '
        Zenith, El Primero Chronomaster Power Reserve, Women''s Watch, 18K Rose Gold Case, Leather Alligator Over Rubber Strap, Swiss Mechanical Automatic (Self-Winding), 18-2080-4021-01-C494
        ',
        dimensions: '',
        category: 'Watches',
        price: 58.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/ZenithWatch.jpg')
    product14.photo.attach(io: file, filename: 'Zenith El Primero')
    
    product15 = Product.create!(
        brand: 'Capcom',
        name: 'Street Fighter 6',
        description: '
        Here comes Capcom''s newest challenger! Street Fighter™ 6 launches worldwide on June 2, 2023 and represents the next evolution of the Street Fighter™ series which has sold more than 47 million units since its debut 35 years ago. Powered by Capcom’s proprietary RE ENGINE, Street Fighter 6 spans three distinct game modes, including Fighting Ground, World Tour and Battle Hub. The experience also includes innovative new gameplay features, plus enhanced visuals for every aspect of the game. Standard Edition – Includes the base game of Fighting Ground, World Tour, Battle Hub, and the 18-character launch roster.        ',
        dimensions: '',
        category: 'Games',
        price: 9.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/StreetFighter6.jpg')
    product15.photo.attach(io: file, filename: 'Street Fighter 6')
    
    product16 = Product.create!(
        brand: 'Dior',
        name: 'Pink Cotton Voile with Toile de Jouy Voyage Motif',
        description: '
        The blouse showcases Pietro Ruffo''s Toile de Jouy Voyage motif, setting Mr. Dior''s iconic pattern in the heart of Indian flora and fauna. Crafted in pink cotton voile, it features a modern cut that''s longer in the back, an officer collar and a front button closure. The blouse can be coordinated with other Toile de Jouy Voyage creations to complete the look.
        ',
        dimensions: 'Back length: 89.7 cm / 35.5 inches (size 38)',
        category: 'Clothes',
        price: 22.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/DiorBlouse.jpeg')
    product16.photo.attach(io: file, filename: 'Dior Blouse')
    
    product17 = Product.create!(
        brand: 'Nike',
        name: 'AIR JORDAN 1 RETRO ''Legends Of Summer - Black'' ',
        description: '
        The Air Jordan 1 High OG “Legends of Summer - Black” is a rare, unreleased colorway of the classic basketball and lifestyle shoe that was created for Jay-Z and Justin Timberlake’s “Legends of Summer Tour” in 2013. This “Black” colorway is one of several hyper-limited Air Jordan 1s worn by the musicians and given to their friends and family. The shoe features matte black leather on the toe cap, forefoot, eyelets, and mid-panel. Contrasting shiny red leather appears on the collar overlay and heel. The perforated toe appears in Metallic Silver leather. A Metallic Silver leather Swoosh is found on both sides of the shoe. A debossed “Wings” logo appears on the collar and a debossed red Jumpman can be found on the tongue tag. The Air Jordan 1 High “Legends of Summer - Black” is one of the most desirable versions of the shoe in existence.        ',
        dimensions: '',
        category: 'Shoes',
        price: 35.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/jordan1.webp')
    product17.photo.attach(io: file, filename: 'Jordan1')
    
    product18 = Product.create!(
        brand: 'Chanel',
        name: 'Chanel Logo Mule Sandal Ivory Leather',
        description: '
        This is an authentic pair of CHANEL Lambskin Cha-Nel Mule Sandals size 40 in Ivory and Multicolor. These stylish slip-on sandal slides feature a thick comfortable midsole and lambskin leather quilted uppers with a multicolor Chanel logo on the top.
        ',
        dimensions: '',
        category: 'Shoes',
        price: 25.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/chanel+slides.jpeg')
    product18.photo.attach(io: file, filename: 'Chanel shoes')
    
    product19 = Product.create!(
        brand: 'Nike',
        name: 'Jordan Kobe PE Pack 3/8',
        description: '
        Throughout his 20 seasons with the Los Angeles Lakers, Kobe Bryant became one of the NBA’s greatest of all-time and led the Laker’s into a new era as the team’s shooting guard. Leaving an ineradicable mark on basketball and in the hearts and minds of fans, he brought a unique approach to the game with his passion and dedication which earned him 5 NBA Championships, 4 NBA All-Star Game MVP awards, 2 NBA Finals MVP awards, and 2 Olympic Gold Medals. Kobe Bryant’s impact on the sport of basketball is indescribable and he remains one of the most beloved basketball figures in the history of the sport. 
        Upon ending his contract with adidas, Kobe Bryant was unaffiliated with a sneaker brand during his 2002-2003 NBA season. Among the many major brands that were trying to attract Bryant, the Jordan Brand gifted Kobe a pair of Air Jordan 3 and Air Jordan 8 sneakers in Lakers-inspired colorways. In 2016, to commemorate Bryant’s 20-year career in the NBA, the Jordan Brand created replicas of these two classics — making the Air Jordan 3/8 Kobe Pack for friends and family of the brand. 
        Featured in Lakers colors, both silhouettes include a white leather upper, shades of gold and purple accents, and Jumpman branding. The Jordan 3 has black and grey elephant cement overlays printed throughout the sneakers.     
        ',
        dimensions: '',
        category: 'Shoes',
        price: 55.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/kobes.webp')
    product19.photo.attach(io: file, filename: 'Kobes')
    
    product20 = Product.create!(
        brand: 'Fendi',
        name: 'O''Lock 54MM Rectangular Sunglasses
        ',
        description: '
        Crystal-embellished metal logos adorn the temple of Fendi’s O’Lock sunglasses, designed with a classic rectangular shape.  
        ',
        dimensions: '',
        category: 'Glasses',
        price: 14.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/fendi+sunglasses.webp')
    product20.photo.attach(io: file, filename: 'Fendi glasses')
    
    product21 = Product.create!(
        brand: 'Gucci',
        name: 'Fashion Show 65MM Rectangular Acetate Sunglasses
        ',
        description: '
        From the Fashion Show Collection. 100% UVA/UVB protection Logo on temple and engraved on lens Rectangular Case and cleaning cloth included Acetate/nylon Made in Italy SIZE 65mm lens width 16mm bridge width 135mm temple length ABOUT THE BRAND First launched in 1921, the Italian luxury fashion house quickly became known for its fine leather craftsmanship and accessories. Under the helm of Creative Director Alessandro Michele since 2015, the brand''s contemporary designs include shoes, clothing, and accessories-often boasting the distinctive Horsebit motif.    
             ',
        dimensions: '',
        category: 'Glasses',
        price: 19.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Gucci+glasses.webp')
    product21.photo.attach(io: file, filename: 'Gucci glasses')
    
    product22 = Product.create!(
        brand: 'Persol',
        name: 'Persol PO0714SM Steve McQueen Aviator Sunglasses
        ',
        description: '
        Introduced in the 1690s as a folding version of the Persol 649, the 714 was the first ever folding glasses model. The iconic pilot shape, keyhole bridge, timeless acetate and foldable system make it a masterpiece of Italian craftsmanship, requiring ten addtional manufacturing steps compared to standard models. The Steve McQueen sunglass celebrates an icon with all the details of the original worn by the actor.       
              ',
        dimensions: '',
        category: 'Glasses',
        price: 17.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Persol+glasses.jpg')
    product22.photo.attach(io: file, filename: 'Persol glasses')
    
    product23 = Product.create!(
        brand: 'Dolce & Gabbana',
        name: 'DG Logo Leather Tote
        ',
        description: 'Styled with a signature raised interlocking DG logo motif, DOLCE&GABBANA''s tote is crafted of smooth calf leather in Italy. This piece is accompanied by two flat handles for a classic look.
              ',
        dimensions: '13.75"W x 11.75"H x 5,5"D
        ',
        category: 'Bags',
        price: 17.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Dolce+bag.webp')
    product23.photo.attach(io: file, filename: 'DolceBag')
    
    product24 = Product.create!(
        brand: 'Kate Spade',
        name: 'Medium Elevated Pebble Leather Satchel
        ',
        description: 'Accompanied by two rolled handles and an adjustable strap, kate spade new york''s Elevated bag is crafted of grained leather with brushed metal details.
              ',
        dimensions: '11.75"W x 7.75"H x 6"D
                ',
        category: 'Bags',
        price: 12.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/kate+spade+bag.webp')
    product24.photo.attach(io: file, filename: 'Kate Spade bag')
    
    product25 = Product.create!(
        brand: 'DJI',
        name: 'DJI Mavic 3 Pro Cine with DJI RC Pro
        ',
        description: 'Overview
        3 cameras support focus following.
        Support Cruise Control, Waypoint Flight, and other functions.
        Notes
        1. ActiveTrack is unavailable at video resolutions higher than 4K or frame rates over 60fps.
        2. Flight Time was measured with Mavic 3 Pro flying at a constant speed of 32.4 kph in a windless environment at sea level until the battery level reached 0%. Data is for reference only. Please pay attention to RTH reminders in the DJI Fly app during your flight.
        3. DO NOT use the aircraft in severe weather conditions, including heavy wind exceeding 13.8 m/s, snow, rain, fog, hail, or lightning. DO NOT fly the aircraft 6000 m (19685 ft.) or higher above sea level. DO NOT fly the aircraft in environments where the temperature is below -10° C (14° F) or above 40° C (104° F). DO NOT take off from moving objects such as cars or boats. DO NOT fly close to reflective surfaces such as water or snow. Otherwise, the vision system may not work correctly. When the GNSS signal is weak, fly the aircraft in environments with good lighting and visibility. Low ambient light may cause the vision system to function abnormally. DO NOT fly near areas with magnetic or radio interference. Familiar magnetic or radio interference sources include Wi-Fi hotspots, routers, Bluetooth devices, high-voltage lines, large-scale power transmission stations, radar stations, mobile base stations, and broadcasting towers. Avoid sand entering the aircraft when taking off in desert or beach areas. Fly the aircraft in open areas away from crowds. Buildings, mountains, and trees may block the GNSS signal and affect the onboard compass.
        4. Measured in an outdoor, open environment, without interference, and with FCC compliance. The above data shows the farthest communication range for one-way, non-return flights. Please pay attention to RTH reminders in the DJI Fly app during your flight.
              ',
        dimensions: '13.68"L x 11.44"W x 4.24"H
                ',
        category: 'Electronics',
        price: 69.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/DJI+drone.jpg')
    product25.photo.attach(io: file, filename: 'DJI drone')
    
    product26 = Product.create!(
        brand: 'Yeyian',
        name: 'YEYIAN ODACHI Gaming PC Desktop, AMD Ryzen 9 7950X3D, GeForce RTX 4090, 32GB DDR5 6000MHz RAM, 2TB M.2 SSD + 2TB HDD, Liquid Cooler VR Ready Gaming Computer, 1000W PSU, USB-C 3.2, WiFi, Win 11 Home
        ',
        description: 'Powered by AMD Ryzen 5 7950X3D high-end CPU, to empower you chasing the more immersive game experience with 16-Core 5.7GHz processors, take you to the higher level you''ve never been.
        Always have the edge in any game. Ready to be the winner seamlessly with GeForce RTX 4090 graphics card in all your favorite games. 32GB DDR5 6000MHz RAM helps to release the property of all components in our prebuilt gaming pc.
        Upgraded gaming PC chassis and see-through side panel let''s your rig shine. With a 360mm All-in-One liquid cooler and 7 ARGB fans, also let your personality speak out loud.
        Power up your gaming and office ecosystem with ports-a-plenty for peripherals, such as Wi-Fi 6E | Bluetooth 5.2| 1 x HDMI | 1 x Display Port | 1 x USB Type-C 3.2 Gen 2x2 port | 2 x Type-A USB 3.1/3.2 Gen 2 ports| 4 x USB Type-A 3.0/3.1/3.2 Gen 1 ports | 1 x USB Type-C 3.1/3.2 Gen 2 ports | HD Audio and Mic Port | 2.5Gbps LAN port
        Lifetime Tech Support | 3 year labor | 2 years part | 1 year shipping | Assembled in the USA. We can do more beyond your wish.
        ',
        dimensions: '22 x 12 x 21 inches
                ',
        category: 'Electronics',
        price: 74.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/computer.jpg')
    product26.photo.attach(io: file, filename: 'Yeyian cpu')
    
    product27 = Product.create!(
        brand: 'Bose',
        name: 'Bose Lifestyle 650 Home Entertainment System with Wall Mounts for Center Channel and Surround Speakers - Black
        ',
        description: 'The technology is advanced, but the result is simple: rich, immersive sound. Get caught up in every plot-twisting moment of your favorite action thriller, celebrate every play during the big game, and enjoy music services like Amazon music, Spotify and pandora-all in one system. The smooth, curved-glass console meets your needs with 4K pass-through, 6 HDMI inputs, sound touch and Bluetooth with NFC pairing. Sleek, compact jewel cube satellite speakers and the center channel provide dynamic performance you feel all around you. The wireless bass module, thanks to quiet port technology and a highly advanced DSP, virtually eliminates distortion and delivers surprisingly deep and clear bass.
        Adapted audio calibration fine-tunes the sound specifically to your room, so you always hear it at its best. And the rear surround speakers and bass module even connect wirelessly. It used to be that you had to search for your speaker''s “sweet spot,” combing the room for that tiny space where the sound came in full in clear. Not anymore. The Lifestyle 600 home entertainment system isn''t just about powerful sound from small speakers-it''s more. It''s designed to immerse you in your music, movies and TV in a way other systems can''t. Instead of creating one Optimal area where you hear the clearest sound, this system uses your room''s acoustics to deliver the sound both to you and around you, so you 
        are surrounded by full, clear sound no matter where you sit. Best of all, the setup is easy. Unify technology walks you through each step with guided onscreen messages. It includes a universal remote with LED display, and the ability to use the sound touch app for control over your favorite music. This system Works together with other sound touch speakers, so as you go from room to room, your music goes along with you. Lifestyle system supports 4K resolution.
        ',
        dimensions: '6.5 x 47.24 x 3.03 inches
                ',
        category: 'Electronics',
        price: 54.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Bose+sound.jpg')
    product27.photo.attach(io: file, filename: 'BOSE lifestyle')
    
    product28 = Product.create!(
        brand: 'Stephen Covey',
        name: 'The 7 Habits of Highly Effective People: 30th Anniversary Edition
        ',
        description: 'This beloved classic presents a principle-centered approach for solving both personal and professional problems. With penetrating insights and practical anecdotes, Stephen R. Covey reveals a step-by-step pathway for living with fairness, integrity, honesty, and human dignity—principles that give us the security to adapt to change and the wisdom and power to take advantage of the opportunities that change creates.
        ',
        dimensions: '
                ',
        category: 'Books',
        price: 1.49
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/7+habits.jpg')
    product28.photo.attach(io: file, filename: '7 habits')
    
    product35 = Product.create!(
        brand: 'Robert Greene',
        name: 'The 48 Laws of Power
        ',
        description: 'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.
        Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.
        ',
        dimensions: '
                ',
        category: 'Books',
        price: 2.29
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/lawsofpower.jpg')
    product35.photo.attach(io: file, filename: 'Laws of power')
    
    product29 = Product.create!(
        brand: 'Jordan Peterson',
        name: '12 Rules for Life: An Antidote to Chaos
        ',
        description: 'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.
        Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.
        ',
        dimensions: '
                ',
        category: 'Books',
        price: 1.79
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/12+rules+for+life.jpg')
    product29.photo.attach(io: file, filename: '12 rules for life')


    product30 = Product.create!(
        brand: 'Montblanc',
        name: '1858 Geosphere Stainless Steel & Leather Strap Watch

        ',
        description: 'From the 1858 Collection. The Montblanc 1858 Geosphere limited-edition watch comes in a 42mm case combined with white and contrasting black design details & two domed globes, turning in opposite directions, that complete a full rotation in 24 hours, all tied together by a black calf leather strap with beige stitching.
        ',
        dimensions: 'Round case, 42mm (1.65")
                ',
        category: 'Watches',
        price: 64.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Montblanc+watch.webp')
    product30.photo.attach(io: file, filename: 'Montblanc watch')
    
    product31 = Product.create!(
        brand: 'Hermes',
        name: 'Cape Cod 31MM Stainless Steel, Pink Sapphire, Diamond & Leather Strap Watch

        ',
        description: 'From the Cape Cod Collection. On a wraparound leather strap, this delicate steel watch is dotted with sparkling pink sapphires and dazzling diamonds.
        ',
        dimensions: 'Rectangular case, 31mm
                ',
        category: 'Watches',
        price: 59.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Hermes+womens+watch.webp')
    product31.photo.attach(io: file, filename: 'Hermes watch')
    
    product32 = Product.create!(
        brand: 'Chopard',
        name: 'Happy Sport 18K Rose Gold & Diamond Crocodile Watch
        ',
        description: 'From the Happy Sport Collection. Crafted of radiant 18K rose gold, Chopard’s elegant diamond-set watch features an oval silhouette with signature floating diamonds and a luxe crocodile strap.
        ',
        dimensions: 'Oval case, 31mm (1.22”)
                ',
        category: 'Watches',
        price: 89.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Chopard+womans+watch.webp')
    product32.photo.attach(io: file, filename: 'Chopard watch')
    
    product33 = Product.create!(
        brand: 'Nintendo',
        name: 'The Legend of Zelda: Tears of the Kingdom - Nintendo Switch
        ',
        description: 'An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch. The adventure is yours to create in a world fueled by your imagination.
        In this sequel to The Legend of Zelda: Breath of the Wild, you''ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link''s new abilities to fight back against the malevolent forces that threaten the kingdom?
        ',
        dimensions: '
                ',
        category: 'Games',
        price: 9.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Zelda+game.jpg')
    product33.photo.attach(io: file, filename: 'Zelda')
    
    product34 = Product.create!(
        brand: 'Electronic Arts',
        name: 'Star Wars Jedi: Survivor XBOX X
        ',
        description: 'Star Wars Jedi: Survivor XBOX X Video Game English EU Version Region Free
        The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third person galaxy-spanning action-adventure game from respawn entertainment, developed in collaboration with lucasfilm games. This narratively-driven, single player title picks up five years after the events of Star Wars Jedi: Fallen Order and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times – but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order? To survive, players will build upon Cal’s training with an expanded list of iconic force abilities, combat stances, and lightsaber customizations that can be combined in new and different ways to fight as a jedi. While the Force is a powerful ally, it may not be enough. Cal will have to get creative and master new abilities, tactics and even leverage the environment around him to overcome the obstacles ahead. Fans of Star Wars will travel to new planets and familiar frontiers as Cal seeks to reunite the crew of the Stinger Mantis. New Force abilities, equipment and upgrades will enable players to search, explore, and re-traverse in new ways across multiple planets, each with their own unique challenges to face. The galaxy is full of stories, secrets, and treasures to uncover for those willing to face the dangers that lay off the beaten path.
        ',
        dimensions: '
                ',
        category: 'Games',
        price: 9.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Starwars.jpg')
    product34.photo.attach(io: file, filename: 'Star Wars')
    
    product36 = Product.create!(
        brand: 'Warner Bros',
        name: 'Hogwarts Legacy - PlayStation 5
        ',
        description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it. Live the unwritten.
        ',
        dimensions: '
                ',
        category: 'Games',
        price: 9.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Hogwarts.jpg')
    product36.photo.attach(io: file, filename: 'Hogwarts')
    
    product37 = Product.create!(
        brand: 'Giorgio Armani',
        name: 'Classic 2-Piece Suit
        ',
        description: 'Made in Italy by Giorgio Armani, this dapper two-piece suit flaunts a classic silhouette with a polished single-breasted jacket. It is crafted with built-in stretch for added comfort. 91% polyester/9% elastane. Dry clean. Made in Italy
        ',
        dimensions: '
                ',
        category: 'Clothes',
        price: 54.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Armani+suit.webp')
    product37.photo.attach(io: file, filename: 'Armani Suit')
    
    product38= Product.create!(
        brand: 'Balmain',
        name: 'Sky Print Reversible Bomber Jacket
        ',
        description: 'Crafted in Italy, Balmain''s drop-shoulder relaxed fit bomber jacket features a reversible side.
        ',
        dimensions: '
                ',
        category: 'Clothes',
        price: 4.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/bomber+jacket.webp')
    product38.photo.attach(io: file, filename: 'Bomber jacket')
    
    product39= Product.create!(
        brand: 'Dolce & Gabbana',
        name: 'Off-The-Shoulder Carnation-Print Dress
        ',
        description: 'Cut in an off-the-shoulder silhouette, DOLCE&GABBANA''s puff-sleeve dress is elevated by a wide smocked waist and painterly carnation prints.
        ',
        dimensions: '
                ',
        category: 'Clothes',
        price: 7.99
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/D%26G.webp')
    product39.photo.attach(io: file, filename: 'D&G dress')
    
    product40= Product.create!(
        brand: 'Saint Laurent',
        name: 'Lou Camera Bag in Quilted Leather
        ',
        description: 'Saint Laurent monogram shoulder bag featuring an adjustable leather strap, removable leather tassel, interlaced YSL initials in metal at the center and quilted overstitching.
        ',
        dimensions: '
                ',
        category: 'Bags',
        price: 12.49
    )
    
    file = URI.open('https://canal-seeds.s3.amazonaws.com/Saint+Laurent+bag.webp')
    product40.photo.attach(io: file, filename: 'SL bag')



    harry_potter_characters = [
    "Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", 
    "Sirius Black", "Remus Lupin", "Rubeus Hagrid", "Draco Malfoy", "Tom Riddle", 
    "Luna Lovegood", "Neville Longbottom", "Ginny Weasley", "Fred Weasley", "George Weasley"
    ].shuffle

    10.times do 

        User.create!({
            name: harry_potter_characters.pop,
            email: Faker::Internet.unique.email,
            password: 'password'
        }) 
    end


    product_ids = (1..40).to_a

    user_ids = (1..11).to_a

    200.times do
        user_id = user_ids.sample
        product_id = product_ids.sample
      
        next if Review.exists?(user_id: user_id, product_id: product_id)
      
        title = Faker::Lorem.sentence
        body = Faker::Lorem.paragraph
        rating = rand(1..5)
      
        Review.create!(
          user_id: user_id,
          product_id: product_id,
          title: title,
          body: body,
          rating: rating
        )
      end

    puts "Done!"
# end

