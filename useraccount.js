document.getElementById("usericon1").addEventListener("click",userpopdown);

    var content = document.getElementById("content");
    function userpopdown(event) {
        event.preventDefault();
        console.log("here")
        document.getElementById("content").style.border="1px solid rgb(199, 196, 196) "
        document.getElementById("content").style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"

        var myaccount=document.createElement("p");
        myaccount.textContent="My Account";
        myaccount.addEventListener("click",function(){
            window.location.href = "mainPageUser.html";
        });

        var trackorder = document.createElement("p");
        trackorder.textContent="Track Orders"

        var collections= document.createElement("p");
        collections.textContent="Collections"
        collections.addEventListener("click",function(){
            window.location.href = "collections_Page.html";
        });

        var get=document.createElement("p");
        get.textContent="Get ₹ 1,000"

        var signout= document.createElement("p");
        signout.textContent="Sign Out"
        signout.addEventListener("click",function(){
            if (confirm("Are you sure you wish to continue?")) {
  
                console.log('Thing was saved to the database.');
            } else {
  
                 console.log('Thing was not saved to the database.');
            }
            window.location.href = "mainPage.html";
        });

        content.append(myaccount,trackorder,collections,get,signout)
        document.getElementById("usericon1").removeEventListener("click",userpopdown);
    }

    document.getElementById("explore").addEventListener("click",showBottomDiv);

         function showBottomDiv(){
            var explDiv = document.createElement("div");
            explDiv.setAttribute("class","menubar");
            
            var ul1 = document.createElement("ul");
            var liMain1 = document.createElement("li");
            var aMain1 = document.createElement("a");
            aMain1.setAttribute("href","#");
            aMain1.textContent = "Baby";
            aMain1.setAttribute("href","education_baby.html");

            var divSub1 = document.createElement("div");
            divSub1.setAttribute("class","submenu1");

            var ul2 = document.createElement("ul");
            var liSubMain2 = document.createElement("li");
            var aSubMain2 = document.createElement("a");
            aSubMain2.setAttribute("href","#");
            aSubMain2.textContent = "Baby & Toddler Toys";
            

            var divSub2 = document.createElement("div");
            divSub2.setAttribute("class","submenu2");

            var ul3 = document.createElement("ul");
            var li3 = document.createElement("li");
            var a3 = document.createElement("a");
            a3.setAttribute("href","#");
            a3.textContent = "Balls";
            var li4 = document.createElement("li");
            var a4 = document.createElement("a");
            a4.setAttribute("href","#");
            a4.textContent = "Bath Toys";
            var li5 = document.createElement("li");
            var a5 = document.createElement("a");
            a5.setAttribute("href","#");
            a5.textContent = "Blocks";
            var li6 = document.createElement("li");
            var a6 = document.createElement("a");
            a6.setAttribute("href","#");
            a6.textContent = "Stroller Toys";
            var li7 = document.createElement("li");
            var a7 = document.createElement("a");
            a7.setAttribute("href","#");
            a7.textContent = "Car Seats";
            var li8 = document.createElement("li");
            var a8 = document.createElement("a");
            a8.setAttribute("href","#");
            a8.textContent = "Crib Toys";
            var li9 = document.createElement("li");
            var a9 = document.createElement("a");
            a9.setAttribute("href","#");
            a9.textContent = "Crib Attachments";
            var li10 = document.createElement("li");
            var a10 = document.createElement("a");
            a10.setAttribute("href","#");
            a10.textContent = "Hammering Toys";
            var li11 = document.createElement("li");
            var a11 = document.createElement("a");
            a11.setAttribute("href","#");
            a11.textContent = "Indoor Climbing";
            var li12 = document.createElement("li");
            var a12 = document.createElement("a");
            a12.setAttribute("href","#");
            a12.textContent = "Music & Sounds";
            var li13 = document.createElement("li");
            var a13 = document.createElement("a");
            a13.setAttribute("href","#");
            a13.textContent = "Rattlers";
            var li14 = document.createElement("li");
            var a14 = document.createElement("a");
            a14.setAttribute("href","#");
            a14.textContent = "Shape Sorters";
            var li15 = document.createElement("li");
            var a15 = document.createElement("a");
            a15.setAttribute("href","#");
            a15.textContent = "Spinning Tops";
            var li16 = document.createElement("li");
            var a16 = document.createElement("a");
            a16.setAttribute("href","#");
            a16.textContent = "Stacking Toys";
            var li17 = document.createElement("li");
            var a17 = document.createElement("a");
            a17.setAttribute("href","#");
            a17.textContent = "Teethers";
            var li18 = document.createElement("li");
            var a18 = document.createElement("a");
            a18.setAttribute("href","#");
            a18.textContent = "Gift Sets";

            var liSubMain3 = document.createElement("li");
            var aSubMain3 = document.createElement("a");
            aSubMain3.setAttribute("href","#");
            aSubMain3.textContent = "Bathing & Skin Care";

            var divSub3 = document.createElement("div");
            divSub3.setAttribute("class","submenu2");

            var ul4 = document.createElement("ul");
            var li19 = document.createElement("li");
            var a34 = document.createElement("a");
            a34.setAttribute("href","#");
            a34.textContent = "Aromatherapy";
            var li20 = document.createElement("li");
            var a20 = document.createElement("a");
            a20.setAttribute("href","#");
            a20.textContent = "Bathing Seats";
            var li21 = document.createElement("li");
            var a21 = document.createElement("a");
            a21.setAttribute("href","#");
            a21.textContent = "Bathing Tubs";
            var li22 = document.createElement("li");
            var a22 = document.createElement("a");
            a22.setAttribute("href","#");
            a22.textContent = "Stroller Toys";
            var li23 = document.createElement("li");
            var a23 = document.createElement("a");
            a23.setAttribute("href","#");
            a23.textContent = "Car Seats";
            var li24 = document.createElement("li");
            var a24 = document.createElement("a");
            a24.setAttribute("href","#");
            a24.textContent = "Crib Toys";
            var li25 = document.createElement("li");
            var a25 = document.createElement("a");
            a25.setAttribute("href","#");
            a25.textContent = "Crib Attachments";
            var li26 = document.createElement("li");
            var a26 = document.createElement("a");
            a26.setAttribute("href","#");
            a26.textContent = "Hammering Toys";
            var li27 = document.createElement("li");
            var a27 = document.createElement("a");
            a27.setAttribute("href","#");
            a27.textContent = "Indoor Climbing";
            var li28 = document.createElement("li");
            var a28 = document.createElement("a");
            a28.setAttribute("href","#");
            a28.textContent = "Music & Sounds";
            var li29 = document.createElement("li");
            var a29 = document.createElement("a");
            a29.setAttribute("href","#");
            a29.textContent = "Rattlers";
            var li30 = document.createElement("li");
            var a30 = document.createElement("a");
            a30.setAttribute("href","#");
            a30.textContent = "Shape Sorters";
            var li31 = document.createElement("li");
            var a31 = document.createElement("a");
            a31.setAttribute("href","#");
            a31.textContent = "Spinning Tops";
            var li32 = document.createElement("li");
            var a32 = document.createElement("a");
            a32.setAttribute("href","#");
            a32.textContent = "Stacking Toys";
            var li33 = document.createElement("li");
            var a33 = document.createElement("a");
            a33.setAttribute("href","#");
            a33.textContent = "Teethers";


            var liSubMain4 = document.createElement("li");
            var aSubMain4 = document.createElement("a");
            aSubMain4.setAttribute("href","#");
            aSubMain4.textContent = "Car Seats";

            var divSub4 = document.createElement("div");
            divSub4.setAttribute("class","submenu2");

            var ul5 = document.createElement("ul");
            var li34 = document.createElement("li");
            var a34 = document.createElement("a");
            a34.setAttribute("href","#");
            a34.textContent = "Accessories";
            var li35 = document.createElement("li");
            var a35 = document.createElement("a");
            a35.setAttribute("href","#");
            a35.textContent = "Car Seats";
            var li36 = document.createElement("li");
            var a36 = document.createElement("a");
            a36.setAttribute("href","#");
            a36.textContent = "Bases";

            var liSubMain5 = document.createElement("li");
            var aSubMain5 = document.createElement("a");
            aSubMain5.setAttribute("href","#");
            aSubMain5.textContent = "Diapering";

            var divSub5 = document.createElement("div");
            divSub5.setAttribute("class","submenu2");

            var ul6 = document.createElement("ul");
            var li37 = document.createElement("li");
            var a37 = document.createElement("a");
            a37.setAttribute("href","#");
            a37.textContent = "Changing Table Pads";
            var li38 = document.createElement("li");
            var a38 = document.createElement("a");
            a38.setAttribute("href","#");
            a38.textContent = "Changing Table Covers";
            var li39 = document.createElement("li");
            var a39 = document.createElement("a");
            a39.setAttribute("href","#");
            a39.textContent = "Cloth Diapers";
            var li40 = document.createElement("li");
            var a40 = document.createElement("a");
            a40.setAttribute("href","#");
            a40.textContent = "Cloth Diapers Accessories";
            var li41 = document.createElement("li");
            var a41 = document.createElement("a");
            a41.setAttribute("href","#");
            a41.textContent = "Diaper Bags";
            var li42 = document.createElement("li");
            var a42 = document.createElement("a");
            a42.setAttribute("href","#");
            a42.textContent = "Changing Kits";
            var li43 = document.createElement("li");
            var a43 = document.createElement("a");
            a43.setAttribute("href","#");
            a43.textContent = "Creams & Ointments";
            var li44 = document.createElement("li");
            var a44 = document.createElement("a");
            a44.setAttribute("href","#");
            a44.textContent = "Disposable Diapers";
            var li45 = document.createElement("li");
            var a45 = document.createElement("a");
            a45.setAttribute("href","#");
            a45.textContent = "Gifts";
            var li46 = document.createElement("li");
            var a46 = document.createElement("a");
            a46.setAttribute("href","#");
            a46.textContent = "Portable Changing Pads";
            var li47 = document.createElement("li");
            var a47 = document.createElement("a");
            a47.setAttribute("href","#");
            a47.textContent = "Powders";
            var li48 = document.createElement("li");
            var a48 = document.createElement("a");
            a48.setAttribute("href","#");
            a48.textContent = "Wipes";

            var liMain2 = document.createElement("li");
            var aMain2 = document.createElement("a");
            aMain2.setAttribute("href","#");
            aMain2.textContent = "Toy";
            aMain2.setAttribute("href","action_baby.html");

            var divSub6 = document.createElement("div");
            divSub6.setAttribute("class","submenu1");
            var ul7 = document.createElement("ul");

            var liSubMain6 = document.createElement("li");
            var aSubMain6 = document.createElement("a");
            aSubMain6.setAttribute("href","#");
            aSubMain6.textContent = "Action Figures";

            var divSub7 = document.createElement("div");
            divSub7.setAttribute("class","submenu2");

            var ul8 = document.createElement("ul");

            var li49 = document.createElement("li");
            var a49 = document.createElement("a");
            a49.setAttribute("href","#");
            a49.textContent = "Action Figures";
            var li50 = document.createElement("li");
            var a50 = document.createElement("a");
            a50.setAttribute("href","#");
            a50.textContent = "Playsets";
            var li51 = document.createElement("li");
            var a51 = document.createElement("a");
            a51.setAttribute("href","#");
            a51.textContent = "Vehicles";
            var li52 = document.createElement("li");
            var a52 = document.createElement("a");
            a52.setAttribute("href","#");
            a52.textContent = "Accessories";


            var liSubMain7 = document.createElement("li");
            var aSubMain7 = document.createElement("a");
            aSubMain7.setAttribute("href","#");
            aSubMain7.textContent = "Arts & Crafts";

            var divSub8 = document.createElement("div");
            divSub8.setAttribute("class","submenu2");

            var ul19 = document.createElement("ul");

            var li53 = document.createElement("li");
            var a53 = document.createElement("a");
            a53.setAttribute("href","#");
            a53.textContent = "Aprons";
            var li54 = document.createElement("li");
            var a54 = document.createElement("a");
            a54.setAttribute("href","#");
            a54.textContent = "Beads";
            var li55 = document.createElement("li");
            var a55 = document.createElement("a");
            a55.setAttribute("href","#");
            a55.textContent = "Blackboards";
            var li56 = document.createElement("li");
            var a56 = document.createElement("a");
            a56.setAttribute("href","#");
            a56.textContent = "Whiteboards";


            var liSubMain8 = document.createElement("li");
            var aSubMain8 = document.createElement("a");
            aSubMain8.setAttribute("href","#");
            aSubMain8.textContent = "Building Toys";

            var divSub9 = document.createElement("div");
            divSub9.setAttribute("class","submenu2");

            var ul20 = document.createElement("ul");

            var li57 = document.createElement("li");
            var a57 = document.createElement("a");
            a57.setAttribute("href","#");
            a57.textContent = "Building Sets";
            var li58 = document.createElement("li");
            var a58 = document.createElement("a");
            a58.setAttribute("href","#");
            a58.textContent = "Building Blocks";


            var liMain3 = document.createElement("li");
            var aMain3 = document.createElement("a");
            aMain3.setAttribute("href","#");
            aMain3.textContent = "Sports";
            aMain3.setAttribute("href","sports_grind.html");

            var divSub10 = document.createElement("div");
            divSub10.setAttribute("class","submenu1");
            var ul21 = document.createElement("ul");

            var liSubMain9 = document.createElement("li");
            var aSubMain9 = document.createElement("a");
            aSubMain9.setAttribute("href","#");
            aSubMain9.textContent = "Boating";

            var divSub11 = document.createElement("div");
            divSub11.setAttribute("class","submenu2");

            var ul22 = document.createElement("ul");

            var li59 = document.createElement("li");
            var a59 = document.createElement("a");
            a59.setAttribute("href","#");
            a59.textContent = "Sailing";
            var li60 = document.createElement("li");
            var a60 = document.createElement("a");
            a60.setAttribute("href","#");
            a60.textContent = "Canoeing";
            var li61 = document.createElement("li");
            var a61 = document.createElement("a");
            a61.setAttribute("href","#");
            a61.textContent = "Kayaking";
            var li62 = document.createElement("li");
            var a62 = document.createElement("a");
            a62.setAttribute("href","#");
            a62.textContent = "Rowing";

            var liSubMain10 = document.createElement("li");
            var aSubMain10 = document.createElement("a");
            aSubMain10.setAttribute("href","#");
            aSubMain10.textContent = "Clothing";

            var divSub12 = document.createElement("div");
            divSub12.setAttribute("class","submenu2");

            var ul23 = document.createElement("ul");

            var li63 = document.createElement("li");
            var a63 = document.createElement("a");
            a63.setAttribute("href","#");
            a63.textContent = "Men";
            var li64 = document.createElement("li");
            var a64 = document.createElement("a");
            a64.setAttribute("href","#");
            a64.textContent = "women";
            var li65 = document.createElement("li");
            var a65 = document.createElement("a");
            a65.setAttribute("href","#");
            a65.textContent = "Boys";
            var li66 = document.createElement("li");
            var a66 = document.createElement("a");
            a66.setAttribute("href","#");
            a66.textContent = "Girls";

            var liSubMain11 = document.createElement("li");
            var aSubMain11 = document.createElement("a");
            aSubMain11.setAttribute("href","#");
            aSubMain11.textContent = "Fitness";

            var divSub13 = document.createElement("div");
            divSub13.setAttribute("class","submenu2");

            var ul24 = document.createElement("ul");

            var li67 = document.createElement("li");
            var a67 = document.createElement("a");
            a67.setAttribute("href","#");
            a67.textContent = "Strength Equipments";
            var li68 = document.createElement("li");
            var a68 = document.createElement("a");
            a68.setAttribute("href","#");
            a68.textContent = "Cardio Equipments";
            var li69 = document.createElement("li");
            var a69 = document.createElement("a");
            a69.setAttribute("href","#");
            a69.textContent = "Machine Accessories";
            var li70 = document.createElement("li");
            var a70 = document.createElement("a");
            a70.setAttribute("href","#");
            a70.textContent = "Running";



            var liMain4 = document.createElement("li");
            var aMain4 = document.createElement("a");
            aMain4.setAttribute("href","#");
            aMain4.textContent = "Electronics";
            aMain4.setAttribute("href","all_laptops.html");

            var divSub14 = document.createElement("div");
            divSub14.setAttribute("class","submenu1");
            var ul25 = document.createElement("ul");

            var liSubMain12 = document.createElement("li");
            var aSubMain12 = document.createElement("a");
            aSubMain12.setAttribute("href","#");
            aSubMain12.textContent = "Accessories";

            var divSub15 = document.createElement("div");
            divSub15.setAttribute("class","submenu2");

            var ul26 = document.createElement("ul");

            var li71 = document.createElement("li");
            var a71 = document.createElement("a");
            a71.setAttribute("href","#");
            a71.textContent = "Audio & Video";
            var li72 = document.createElement("li");
            var a72 = document.createElement("a");
            a72.setAttribute("href","#");
            a72.textContent = "Camera";
            var li73 = document.createElement("li");
            var a73 = document.createElement("a");
            a73.setAttribute("href","#");
            a73.textContent = "Cell Phone";
            var li74 = document.createElement("li");
            var a74 = document.createElement("a");
            a74.setAttribute("href","#");
            a74.textContent = "Computer";

            var liSubMain13 = document.createElement("li");
            var aSubMain13 = document.createElement("a");
            aSubMain13.setAttribute("href","#");
            aSubMain13.textContent = "Camera";

            var divSub16 = document.createElement("div");
            divSub16.setAttribute("class","submenu2");

            var ul27 = document.createElement("ul");

            var li75 = document.createElement("li");
            var a75 = document.createElement("a");
            a75.setAttribute("href","#");
            a75.textContent = "Bags & Cases";
            var li76 = document.createElement("li");
            var a76 = document.createElement("a");
            a76.setAttribute("href","#");
            a76.textContent = "Binoculars";
            var li77 = document.createElement("li");
            var a77 = document.createElement("a");
            a77.setAttribute("href","#");
            a77.textContent = "Scopes";
            var li78 = document.createElement("li");
            var a78 = document.createElement("a");
            a78.setAttribute("href","#");
            a78.textContent = "Digital Cameras";


            var liSubMain14 = document.createElement("li");
            var aSubMain14 = document.createElement("a");
            aSubMain14.setAttribute("href","#");
            aSubMain14.textContent = "Car Electronics";

            var divSub17 = document.createElement("div");
            divSub17.setAttribute("class","submenu2");

            var ul28 = document.createElement("ul");

            var li79 = document.createElement("li");
            var a79 = document.createElement("a");
            a79.setAttribute("href","#");
            a79.textContent = "Car Audio";
            var li80 = document.createElement("li");
            var a80 = document.createElement("a");
            a80.setAttribute("href","#");
            a80.textContent = "Car Video";
            var li81 = document.createElement("li");
            var a81 = document.createElement("a");
            a81.setAttribute("href","#");
            a81.textContent = "2 Way Radios";
            var li82 = document.createElement("li");
            var a82 = document.createElement("a");
            a82.setAttribute("href","#");
            a82.textContent = "In-Dash Mountings";


            var liMain5 = document.createElement("li");
            var aMain5 = document.createElement("a");
            aMain5.setAttribute("href","#");
            aMain5.textContent = "Beauty & Grooming";
            aMain5.setAttribute("href","loveSkin.html");

            var divSub18 = document.createElement("div");
            divSub18.setAttribute("class","submenu1");
            var ul29 = document.createElement("ul");

            var liSubMain15 = document.createElement("li");
            var aSubMain15 = document.createElement("a");
            aSubMain15.setAttribute("href","#");
            aSubMain15.textContent = "Bath & Body Care";

            var divSub19 = document.createElement("div");
            divSub19.setAttribute("class","submenu2");

            var ul30 = document.createElement("ul");

            var li83 = document.createElement("li");
            var a83 = document.createElement("a");
            a83.setAttribute("href","#");
            a83.textContent = "Bath";
            var li84 = document.createElement("li");
            var a84 = document.createElement("a");
            a84.setAttribute("href","#");
            a84.textContent = "Bathing Accessories";
            var li85 = document.createElement("li");
            var a85 = document.createElement("a");
            a85.setAttribute("href","#");
            a85.textContent = "Cleansers";
            var li86 = document.createElement("li");
            var a86 = document.createElement("a");
            a86.setAttribute("href","#");
            a86.textContent = "Deodarants";

            var liSubMain16 = document.createElement("li");
            var aSubMain16 = document.createElement("a");
            aSubMain16.setAttribute("href","#");
            aSubMain16.textContent = "Fragrance";

            var divSub20 = document.createElement("div");
            divSub20.setAttribute("class","submenu2");

            var ul31 = document.createElement("ul");

            var li87 = document.createElement("li");
            var a87 = document.createElement("a");
            a87.setAttribute("href","#");
            a87.textContent = "Women's";
            var li88 = document.createElement("li");
            var a88 = document.createElement("a");
            a88.setAttribute("href","#");
            a88.textContent = "Men's";
            var li89 = document.createElement("li");
            var a89 = document.createElement("a");
            a89.setAttribute("href","#");
            a89.textContent = "Children's";
            var li90 = document.createElement("li");
            var a90 = document.createElement("a");
            a90.setAttribute("href","#");
            a90.textContent = "Candles";

            var liSubMain17 = document.createElement("li");
            var aSubMain17 = document.createElement("a");
            aSubMain17.setAttribute("href","#");
            aSubMain17.textContent = "Hair Care";

            var divSub21 = document.createElement("div");
            divSub21.setAttribute("class","submenu2");

            var ul32 = document.createElement("ul");

            var li91 = document.createElement("li");
            var a91 = document.createElement("a");
            a91.setAttribute("href","#");
            a91.textContent = "Shampoo";
            var li92 = document.createElement("li");
            var a92 = document.createElement("a");
            a92.setAttribute("href","#");
            a92.textContent = "Conditioners";
            var li93 = document.createElement("li");
            var a93 = document.createElement("a");
            a93.setAttribute("href","#");
            a93.textContent = "Styling Products";
            var li94 = document.createElement("li");
            var a94 = document.createElement("a");
            a94.setAttribute("href","#");
            a94.textContent = "Hair Color";


            var liMain6 = document.createElement("li");
            var aMain6 = document.createElement("a");
            aMain6.setAttribute("href","#");
            aMain6.textContent = "Home & Kitchen";
            aMain6.setAttribute("href","home_live.html");

            var divSub22 = document.createElement("div");
            divSub22.setAttribute("class","submenu1");
            var ul33 = document.createElement("ul");

            var liSubMain18 = document.createElement("li");
            var aSubMain18 = document.createElement("a");
            aSubMain18.setAttribute("href","#");
            aSubMain18.textContent = "Dining";

            var divSub23 = document.createElement("div");
            divSub23.setAttribute("class","submenu2");

            var ul34 = document.createElement("ul");

            var li95 = document.createElement("li");
            var a95 = document.createElement("a");
            a95.setAttribute("href","#");
            a95.textContent = "Bowls";
            var li96 = document.createElement("li");
            var a96 = document.createElement("a");
            a96.setAttribute("href","#");
            a96.textContent = "Cups & Mugs";
            var li97 = document.createElement("li");
            var a97 = document.createElement("a");
            a97.setAttribute("href","#");
            a97.textContent = "Dinnerware Sets";
            var li98 = document.createElement("li");
            var a98 = document.createElement("a");
            a98.setAttribute("href","#");
            a98.textContent = "Flatware";


            var liSubMain19 = document.createElement("li");
            var aSubMain19 = document.createElement("a");
            aSubMain19.setAttribute("href","#");
            aSubMain19.textContent = "Furniture";

            var divSub24 = document.createElement("div");
            divSub24.setAttribute("class","submenu2");

            var ul35 = document.createElement("ul");

            var li99 = document.createElement("li");
            var a99 = document.createElement("a");
            a99.setAttribute("href","#");
            a99.textContent = "Tabless";
            var li100 = document.createElement("li");
            var a100 = document.createElement("a");
            a100.setAttribute("href","#");
            a100.textContent = "Benches";
            var li101 = document.createElement("li");
            var a101 = document.createElement("a");
            a101.setAttribute("href","#");
            a101.textContent = "Table & Chair Sets";
            var li102 = document.createElement("li");
            var a102 = document.createElement("a");
            a102.setAttribute("href","#");
            a102.textContent = "Serving Carts";


            var liMain7 = document.createElement("li");
            var aMain7 = document.createElement("a");
            aMain7.setAttribute("href","#");
            aMain7.textContent = "Health";
            aMain7.setAttribute("href","herbel.html");


            var divSub25 = document.createElement("div");
            divSub25.setAttribute("class","submenu1");
            var ul36 = document.createElement("ul");

            var liSubMain20 = document.createElement("li");
            var aSubMain20 = document.createElement("a");
            aSubMain20.setAttribute("href","#");
            aSubMain20.textContent = "Baby & Child Care";

            var divSub26 = document.createElement("div");
            divSub26.setAttribute("class","submenu2");

            var ul37 = document.createElement("ul");

            var li103 = document.createElement("li");
            var a103 = document.createElement("a");
            a103.setAttribute("href","#");
            a103.textContent = "Health Care";
            var li104 = document.createElement("li");
            var a104 = document.createElement("a");
            a104.setAttribute("href","#");
            a104.textContent = "Personal Care";
            var li105 = document.createElement("li");
            var a105 = document.createElement("a");
            a105.setAttribute("href","#");
            a105.textContent = "Daiper Care";

            var liSubMain21 = document.createElement("li");
            var aSubMain21 = document.createElement("a");
            aSubMain21.setAttribute("href","#");
            aSubMain21.textContent = "Medical Equipments";

            var divSub27 = document.createElement("div");
            divSub27.setAttribute("class","submenu2");

            var ul38 = document.createElement("ul");

            var li106 = document.createElement("li");
            var a106 = document.createElement("a");
            a106.setAttribute("href","#");
            a106.textContent = "Braces";
            var li107 = document.createElement("li");
            var a107 = document.createElement("a");
            a107.setAttribute("href","#");
            a107.textContent = "Health Monitors";
            var li108 = document.createElement("li");
            var a108 = document.createElement("a");
            a108.setAttribute("href","#");
            a108.textContent = "Splints";


            var liMain8 = document.createElement("li");
            var aMain8 = document.createElement("a");
            aMain8.setAttribute("href","#");
            aMain8.textContent = "Fashion";
            aMain8.setAttribute("href","Summer.html");

            var divSub28 = document.createElement("div");
            divSub28.setAttribute("class","submenu1");
            var ul39 = document.createElement("ul");

            var liSubMain22 = document.createElement("li");
            var aSubMain22 = document.createElement("a");
            aSubMain22.setAttribute("href","#");
            aSubMain22.textContent = "Men";

            var divSub29 = document.createElement("div");
            divSub29.setAttribute("class","submenu2");

            var ul40 = document.createElement("ul");

            var li109 = document.createElement("li");
            var a109 = document.createElement("a");
            a109.setAttribute("href","#");
            a109.textContent = "Accessories";
            var li110 = document.createElement("li");
            var a110 = document.createElement("a");
            a110.setAttribute("href","#");
            a110.textContent = "Clothes";
            var li111 = document.createElement("li");
            var a111 = document.createElement("a");
            a111.setAttribute("href","#");
            a111.textContent = "Footwear";
            var li112 = document.createElement("li");
            var a112 = document.createElement("a");
            a112.setAttribute("href","#");
            a112.textContent = "Watchese";

            var liSubMain23 = document.createElement("li");
            var aSubMain23 = document.createElement("a");
            aSubMain23.setAttribute("href","#");
            aSubMain23.textContent = "Women";

            var divSub30 = document.createElement("div");
            divSub30.setAttribute("class","submenu2");

            var ul41 = document.createElement("ul");

            var li113 = document.createElement("li");
            var a113 = document.createElement("a");
            a113.setAttribute("href","#");
            a113.textContent = "Accessories";
            var li114 = document.createElement("li");
            var a114 = document.createElement("a");
            a114.setAttribute("href","#");
            a114.textContent = "Clothes";
            var li115 = document.createElement("li");
            var a115 = document.createElement("a");
            a115.setAttribute("href","#");
            a115.textContent = "Footwear";
            var li116 = document.createElement("li");
            var a116 = document.createElement("a");
            a116.setAttribute("href","#");
            a116.textContent = "Watchese";

            var liMain9 = document.createElement("li");
            var aMain9 = document.createElement("a");
            aMain9.setAttribute("href","#");
            aMain9.textContent = "Books";
            aMain9.setAttribute("href","biography_book.html");


            var divSub31 = document.createElement("div");
            divSub31.setAttribute("class","submenu1");
            var ul42 = document.createElement("ul");

            var liSubMain24 = document.createElement("li");
            var aSubMain24 = document.createElement("a");
            aSubMain24.setAttribute("href","#");
            aSubMain24.textContent = "Subjects";

            var divSub32 = document.createElement("div");
            divSub32.setAttribute("class","submenu2");

            var ul43 = document.createElement("ul");

            var li117 = document.createElement("li");
            var a117 = document.createElement("a");
            a117.setAttribute("href","#");
            a117.textContent = "Arts & Photography";
            var li118 = document.createElement("li");
            var a118 = document.createElement("a");
            a118.setAttribute("href","#");
            a118.textContent = "Biographies";
            var li119 = document.createElement("li");
            var a119 = document.createElement("a");
            a119.setAttribute("href","#");
            a119.textContent = "Business";
            var li120 = document.createElement("li");
            var a120 = document.createElement("a");
            a120.setAttribute("href","#");
            a120.textContent = "Children's Books";

            var li121 = document.createElement("li");
            var a121 = document.createElement("a");
            a121.setAttribute("href","#");
            a121.textContent = "Christian Books";
            var li122 = document.createElement("li");
            var a122 = document.createElement("a");
            a122.setAttribute("href","#");
            a122.textContent = "Comics";
            var li123 = document.createElement("li");
            var a123 = document.createElement("a");
            a123.setAttribute("href","#");
            a123.textContent = "Technolog";
            var li124 = document.createElement("li");
            var a124 = document.createElement("a");
            a124.setAttribute("href","#");
            a124.textContent = "Cookbooks";


            


            
            
            
            
            
            
            
            li18.append(a18);
            li17.append(a17)
            li16.append(a16)
            li15.append(a15)
            li14.append(a14);
            li13.append(a13)
            li12.append(a12)
            li11.append(a11)
            li10.append(a10)
            li9.append(a9)
            li8.append(a8);
            li7.append(a7);
            li6.append(a6)
            li5.append(a5);
            li4.append(a4);
            li3.append(a3);
            ul3.append(li3,li4,li5,li6,li7,li8,li9,li10,li11,li12,li13,li14,li15,li16,li17,li18);
            
            
            
            li33.append(a33)
            li32.append(a32)
            li31.append(a31)
            li30.append(a30)
            li29.append(a29)
            li28.append(a28)
            li27.append(a27)
            li26.append(a26)
            li25.append(a25)
            li24.append(a24)
            li23.append(a23)
            li22.append(a22);
            li21.append(a21);
            li20.append(a20);
            li19.append(a34);
            ul4.append(li19,li20,li21,li22,li23,li24,li25,li26,li27,li28,li29,li30,li31,li32,li33);

            li36.append(a36);
            li35.append(a35);
            li34.append(a34);
            ul5.append(li34,li35,li36);


            li48.append(a48)
            li47.append(a47)
            li46.append(a46)
            li45.append(a45)
            li44.append(a44)
            li43.append(a43)
            li42.append(a42)
            li41.append(a41)
            li40.append(a40)
            li39.append(a39)
            li38.append(a38)
            li37.append(a37);
            ul6.append(li37,li38,li39,li40,li41,li42,li43,li44,li45,li46,li47,li48);

            divSub5.append(ul6);
            divSub4.append(ul5);
            divSub3.append(ul4);
            divSub2.append(ul3);
            liSubMain5.append(aSubMain5,divSub5)
            liSubMain4.append(aSubMain4,divSub4)
            liSubMain3.append(aSubMain3,divSub3)
            liSubMain2.append(aSubMain2,divSub2);
            ul2.append(liSubMain2,liSubMain3,liSubMain4,liSubMain5)
            divSub1.append(ul2);
            liMain1.append(aMain1,divSub1);

            li52.append(a52);
            li51.append(a51);
            li50.append(a50);
            li49.append(a49);
            ul8.append(li49,li50,li51,li52);

            li56.append(a56);
            li55.append(a55);
            li54.append(a54);
            li53.append(a53);
            ul19.append(li53,li54,li55,li56);



            li58.append(a58);
            li57.append(a57);
            ul20.append(li57,li58);
            divSub9.append(ul20)
            divSub8.append(ul19)
            divSub7.append(ul8);
            liSubMain8.append(aSubMain8,divSub9)
            liSubMain7.append(aSubMain7,divSub8);
            liSubMain6.append(aSubMain6,divSub7)
            ul7.append(liSubMain6,liSubMain7,liSubMain8)
            divSub6.append(ul7);

            
            li62.append(a62);
            li61.append(a61);
            li60.append(a60);
            li59.append(a59);
            ul22.append(li59,li60,li61,li62)
            divSub11.append(ul22);



            li63.append(a63);
            li64.append(a64);
            li65.append(a65);
            li66.append(a66);
            ul23.append(li63,li64,li65,li66)
            divSub12.append(ul23);


            li67.append(a67);
            li68.append(a68);
            li69.append(a69);
            li70.append(a70)
            ul24.append(li67,li68,li69,li70)
            divSub13.append(ul24)
            liSubMain11.append(aSubMain11,divSub13)
            liSubMain10.append(aSubMain10,divSub12);
            liSubMain9.append(aSubMain9,divSub11)
            ul21.append(liSubMain9,liSubMain10,liSubMain11)
            divSub10.append(ul21);

            li71.append(a71);
            li72.append(a72);
            li73.append(a73);
            li74.append(a74);
            ul26.append(li71,li72,li73,li74)
            divSub15.append(ul26);

            li75.append(a75);
            li76.append(a76);
            li77.append(a77);
            li78.append(a78);
            ul27.append(li75,li76,li77,li78)
            divSub16.append(ul27);

            li79.append(a79);
            li80.append(a80);
            li81.append(a81);
            li82.append(a82);
            ul28.append(li79,li80,li81,li82);
            divSub17.append(ul28);
            liSubMain14.append(aSubMain14,divSub17);
            liSubMain13.append(aSubMain13,divSub16);
            liSubMain12.append(aSubMain12,divSub15);
            ul25.append(liSubMain12,liSubMain13,liSubMain14)
            divSub14.append(ul25);


            li83.append(a83);
            li84.append(a84);
            li85.append(a85);
            li86.append(a86);
            ul30.append(li83,li84,li85,li86)
            divSub19.append(ul30);


            li87.append(a87);
            li88.append(a88);
            li89.append(a89);
            li90.append(a90);
            ul31.append(li87,li88,li89,li90);
            divSub20.append(ul31);

            ul32.append(li91,li92,li93,li94)
            divSub21.append(ul32);
            liSubMain17.append(aSubMain17,divSub21)
            liSubMain16.append(aSubMain16,divSub20);
            liSubMain15.append(aSubMain15,divSub19);
            ul29.append(liSubMain15,liSubMain16,liSubMain17);
            divSub18.append(ul29);

            
            li95.append(a95);
            li96.append(a96);
            li97.append(a97);
            li98.append(a98);
            ul34.append(li95,li96,li97,li98)
            divSub23.append(ul34);


            li99.append(a99);
            li100.append(a100);
            li101.append(a101);
            li102.append(a102);
            ul35.append(li99,li100,li101,li102);
            divSub24.append(ul35);
            liSubMain19.append(aSubMain19,divSub24)
            liSubMain18.append(aSubMain18,divSub23);
            ul33.append(liSubMain18,liSubMain19);
            divSub22.append(ul33);


            li103.append(a103);
            li104.append(a104);
            li105.append(a105);
            ul37.append(li103,li104,li105);
            divSub26.append(ul37);


            li106.append(a106);
            li107.append(a107);
            li108.append(a108);
            ul38.append(li106,li107,li108);
            divSub27.append(ul38);
            liSubMain21.append(aSubMain21,divSub27);
            liSubMain20.append(aSubMain20,divSub26);
            ul36.append(liSubMain20,liSubMain21);
            divSub25.append(ul36);


            li109.append(a109);
            li110.append(a110);
            li111.append(a111);
            li112.append(a112);
            ul40.append(li109,li110,li111,li112);
            divSub29.append(ul40);

            

            li113.append(a113);
            li114.append(a114);
            li115.append(a115);
            li116.append(a116);
            ul41.append(li113,li114,li115,li116)
            divSub30.append(ul41);
            liSubMain23.append(aSubMain23,divSub30);
            liSubMain22.append(aSubMain22,divSub29);
            ul39.append(liSubMain22,liSubMain23);
            divSub28.append(ul39);


            li117.append(a117);
            li118.append(a118);
            li119.append(a119);
            li120.append(a120);
            li121.append(a121);
            li122.append(a122);
            li123.append(a123);
            li124.append(a124);
            ul43.append(li117,li118,li119,li120,li121,li122,li123,li124);
            divSub32.append(ul43);


            liSubMain24.append(aSubMain24,divSub32);
            ul42.append(liSubMain24);
            divSub31.append(ul42);
            liMain9.append(aMain9,divSub31);
            liMain8.append(aMain8,divSub28);
            liMain7.append(aMain7,divSub25);
            liMain6.append(aMain6,divSub22);
            liMain5.append(aMain5,divSub18)
            liMain4.append(aMain4,divSub14);
            liMain3.append(aMain3,divSub10)
            liMain2.append(aMain2,divSub6);
            ul1.append(liMain1,liMain2,liMain3,liMain4,liMain5,liMain6,liMain7,liMain8,liMain9)
            explDiv.append(ul1)
            document.getElementById("showBottomPart").append(explDiv);
            document.getElementById("explore").removeEventListener("click", showBottomDiv);
         }