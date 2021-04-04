BEGIN;

INSERT INTO restaurants
    (rest_name, cuisine, address_building_number, address_street, address_zipcode, city, rest_state, phone_number, rest_image)
VALUES 
  ('Aunt Catfish''s', 'Seafood', 4009, 'Halifax Drive', 32127, 'Port Orange', 'Florida', '386-767-4768', 'http://auntcatfishontheriver.com/images/logo.png'),
  ('Off the Hook at Inlet Harbor', 'Seafood', 747, 'East Third Avenue', 32169, 'New Smyrna Beach', 'Florida', '386-202-4490', 'https://secureservercdn.net/104.238.71.109/8xf.51b.myftpupload.com/wp-content/uploads/2019/12/logo-wood-inlet-harbor-no-raw-white-letters_preview.png'),
  ('Millie''s', 'Seafood', 3218, 'South Atlantic Avenue', 32118, 'Daytona Beach', 'Florida', '386-275-1492', 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/35839117_187907415245529_5267500685275955200_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tBvcn-_erHAAX87L_BT&_nc_ht=scontent-mia3-2.xx&oh=8b27b066284bb321ed8c26e9f24202fa&oe=608F1F7F'),
  ('Billy''s Tap Room & Grill', 'Steakhouse', 58, 'East Granada Boulevard', 32176, 'Ormond Beach', 'Florida', '386-672-1910', 'https://lirp.cdn-website.com/d0890285/dms3rep/multi/opt/logo-320w.png'),
  ('Chart House', 'American', '1100', 'Marina Point Drive', '32114', 'Daytona Beach', 'Florida', '386-255-9022', 'https://images.getbento.com/accounts/d96d0f4a1856c4306881283280d8e69f/media/images/16647charthouse_logo.png'),
  ('Ronin', 'Sushi', 111, 'West International Speedway Boulevard', 32114, 'Daytona Beach', 'Florida', '386-252-6320', 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/120228385_3184479258344100_7380460512523187830_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=Z0CarIl-92EAX_CbJw2&_nc_ht=scontent-mia3-1.xx&oh=86d5a842bd20b84b37fc58441e374944&oe=608F2BBB'),
  ('Rossellini''s', 'Italian', 136, 'South Atlantic Avenue', 32118, 'Daytona Beach', 'Florida', '386-253-8333', 'https://ik.imagekit.io/pizzamico/image/brand/logo/tr:h-70/D14ztGLiWeSjAuNriVvUfpw56N8I78z5TWvug4yq.png'),
  ('Don Vito''s', 'Italian', 137, 'West International Speedway Boulevard', 32114, 'Daytona Beach', 'Florida', '386-492-7935', null),
  ('Hyde Park Prime', 'Steakhouse', 100, 'North Atlantic Avenue', 32118, 'Daytona Beach', 'Florida', '386-226-9844', 'https://www.hydeparkrestaurants.com/HP2012/transparent%20logos/Hyde%20park%20Logo%20Border%20150%20tan.jpg'),
  ('Hull''s Seafood', 'Seafood', 111, 'West Granada Boulevard', 32174, 'Ormond Beach', 'Florida', '386-673-8888', 'https://bestseafoodinfl.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-07-at-1.11.17-PM.png'),
  ('Rose Villa', 'American', 43, 'West Granada Boulevard', 32174, 'Ormond Beach', 'Florida', '386-615-7673', 'http://www.rosevillarestaurant.com/wp-content/uploads/2016/06/rosevilla-logo-new-masthead-tilt-2.png'),
  ('31 Supper Club', 'American', 31, 'West Granada Boulevard', 32174, 'Ormond Beach', 'Florida', '386-275-1625', 'https://static.wixstatic.com/media/d9596a_eeb01c624468461b9a51eccd64c61763~mv2.png/v1/fill/w_102,h_100,al_c,q_85,usm_0.66_1.00_0.01/31.webp'),
  ('The Grind Gastropub', 'American', 49, 'West Granada Boulevard', 32174, 'Ormond Beach', 'Florida', '386-672-7277', 'https://static.wixstatic.com/media/d8ea79_bde8c5c56bbe4316990529b5044a068f~mv2.png/v1/fill/w_70,h_69,al_c,q_85,usm_4.00_1.00_0.00/d8ea79_bde8c5c56bbe4316990529b5044a068f~mv2.webp'),
  ('The Cellar', 'Italian', 220, 'Magnolia Avenue', 32114, 'Daytona Beach', 'Florida', '386-258-0011', null);

INSERT INTO nightlife
    (club_name, address_building_number, address_street, address_zipcode, city, club_state, phone_number, entry_age, adult, area, club_image)
VALUES
  ('Razzles', 611, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', '386-257-6236', 18, false, 'Seabreeze', 'https://static1.squarespace.com/static/5b35719e7e3c3a794348ad47/t/5b3573738a922d62fc03b673/1616957433265/?format=1500w'),
  ('Club 509', 509, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', '407-906-5091', 18, false, 'Seabreeze', 'https://static.wixstatic.com/media/9fb433_d9d45f3e9768481da4217222eca39d20~mv2.png/v1/fill/w_155,h_71,al_c,q_85,usm_0.66_1.00_0.01/Header%20Logo.webp'),
  ('Robby O''Connell''s', 550, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Seabreeze', null),
  ('Coyote Ugly Saloon', 512, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Seabreeze', 'https://www.coyoteuglysaloon.com/wp-content/themes/coyote14/images/logo.png'),
  ('Daytona Tap Room', 310, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Seabreeze', 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/36946216_1927564463973984_7647739528853061632_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=SwX4ehr17bQAX9CLYY0&_nc_oc=AQkRBAhaGvtPtc9aoQKlAex8htkehnShOvmH3Rzbhq1GoZSYklO9CsJ8Kj2usfiuej0&_nc_ht=scontent-mia3-1.xx&oh=bed525d8a0724a13b77ad5538e432cbc&oe=608F301F'),
  ('Axe and Grog', 308, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Seabreeze', 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/56182437_405862549971731_1524122157766934528_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=DRgVyWt-Bq0AX9y8TLL&_nc_ht=scontent-mia3-1.xx&oh=7fd04fb708d6e55513219b0aebaa9277&oe=608DD96E'),
  ('Molly Brown''s', 542, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, true, 'Seabreeze', null),
  ('Grandview Live', 640, 'Seabreeze Boulevard', 32118, 'Daytona Beach', 'Florida', null, 21, true, 'Seabreeze', 'https://grandviewlive.com/images/logo-grandview-live-gentlemens-club-LG.png'),
  ('Lollipops', 634, 'North Grandview Avenue', 32118, 'Daytona Beach', 'Florida', null, 21, true, 'Seabreeze', null),
  ('Ormond Garage', 48, 'West Granada Boulevard', 32174, 'Ormond Beach', 'Florida', null, 21, false, '1 Daytona', 'https://static.wixstatic.com/media/d9596a_37d72b154e53463e8e9d0d8163478b15~mv2.png/v1/fill/w_154,h_154,al_c,q_85,usm_0.66_1.00_0.01/Ormond%20Garage%20Logo.webp'),
  ('Main St. Station', 316, 'Main Street', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Main', 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/26169366_1559223570812967_199005595528441048_n.png?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=KbsAxwNkGCwAX-s-Hv_&_nc_ht=scontent-mia3-2.xx&oh=bfe18eacce00e4ae3e2e7fbe2e4f4ceb&oe=608EC0FC'),
  ('Froggy''s Saloon', 800, 'Main Street', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Main', 'https://static.wixstatic.com/media/0f8a0e_64f3009ca1924edd8c1b395b6f41a447~mv2.png/v1/fill/w_180,h_176,al_c,q_85,usm_0.66_1.00_0.01/Froggys_Color_Stamp.webp'),
  ('Cruisin'' Cafe', 2, 'South Atlantic Avenue', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Main', 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/23130869_1945055805509980_6700379688078682335_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=WdkdXZ6UfkAAX-__dh_&_nc_ht=scontent-mia3-2.xx&oh=d5e477ecf96aa6a9c478b1e2647a83e6&oe=608CBB9B'),
  ('Boothill Saloon', 310, 'East Main Street', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Main', null),
  ('Dirty Harry''s', 705, 'Main Street', 32114, 'Daytona Beach', 'Florida', null, 21, false, 'Main', 'https://daytonabeachmainstreet.com/wp-content/uploads/2017/07/logo-dirtyharrys-web.png'),
  ('Full Moon Saloon', 700, 'Main Street', 32118, 'Daytona Beach', 'Florida', null, 21, false, 'Main', 'https://daytonabeachmainstreet.com/wp-content/uploads/2017/07/logo-fullmoon-red-1.png');

COMMIT;