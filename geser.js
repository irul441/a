 ftom=0; jikapr=1; function nongeser() {tombol();idgeser.style = "transform: scale(.1);opacity:0;";fotolove.style="opacity:1;visibility:visible";} function startblur(){beneranblur.style="-webkit-backdrop-filter:blur(2px); backdrop-filter:blur(2px)";} function showDiv() {document.getElementById('bodyblur').style = "opacity:.7;";setTimeout(nongeser,1500);document.getElementById('Content').style = "opacity:1;margin-top:10vh;animation:none 3s infinite;";document.getElementById("pergeseran").style = "opacity:1;visibility:visible;";} function showAkhir() {setInterval(createHeart,200);document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";document.getElementById('Content').style.display = "none";} function mulaiakhir() {nonDiv();setTimeout(showAkhir,500);setTimeout(finalis,600);} function tombol(){if(pergeseran.style.display == 'none'){ftom=50;tmbl.innerHTML="&#128140; Balas";Tombol.style="margin-top:60px;opacity:1;transform: scale(1)";tmbl.style="font-size:13px"}else{ftom=1;jikapr+=1;Tombol.style="opacity:1;transform: scale(1);";}} function multifungsi(){if(ftom==1){document.getElementById('pergeseran').scrollLeft += 300;hsementara();} if(ftom==50){menuju();}} function hsementara(){Tombol.style="opacity:0;transform: scale(.1);";ftom=0;if(jikapr<=5){setTimeout(tombol,400);}} var aa=0,pemb;pemb = "";var i=0,halo;halo = "";var u=0,text2;text2 = "";var o=0,text3;text3 = "";var a=0,final1;final1 = "";var ab=0,final2;final2 = ""; function finalis() {document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";setTimeout(showTom,4000);} const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 1000, timerProgressBar: true, didOpen: () => {Swal.showLoading();const b = Swal.getHtmlContainer().querySelector('b');timerInterval = setInterval(() => {Swal.getTimerLeft()}, 100)},willClose: () => {clearInterval(timerInterval)}}); const style = document.createElement('style'); function play() {var audio = new Audio('' + linkmp3);audio.play();} const body = document.querySelector("body");function createHeart() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100); function ftmuncul(){fotoakhir.style.transform="scale(1)";fotoakhir.style.opacity="1";} function akhiran(){setTimeout(ftmuncul,1);Tombol.style="transition:all 0s ease;opacity:0;transform: scale(.1);";fotoakhir.style="display:inline-flex;";bodyblur.style="opacity:.4;animation:none";wallpaper.style="transform: scale(1.6)";pergeseran.style="display:none";idgeser.innerHTML = "";idkalimat.innerHTML = akhirkata2;idgeser.style = "opacity:1;transform: scale(1);font-size:16px;font-weight:400;margin:0 30px;margin-top:15px;";setTimeout(aksiakhir,800);} function kemunculan(){otomatis();idkalimat.innerHTML = ktbwh2;setTimeout(kemunculan2,2200);} function kemunculan2(){otomatis();idkalimat.innerHTML = ktbwh3;setTimeout(kemunculan3,2200);} function kemunculan3(){otomatis();idkalimat.innerHTML = akhirkata2;setTimeout(kemunculan,2200);} function otomatis() {befanimkata();setTimeout(animkata,350);} function befanimkata(){idkalimat.style="opacity:1;transform:scale(.1);font-size:17px;margin-top:40px";} function animkata() {idkalimat.style="opacity:1;transform:scale(1);font-size:17px;margin-top:40px";}

async function menuju(){await swals.fire('OK!', 'Kirim pesan ke WhatsApp aku, ya!', 'success');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;} var aa=0,akhirkata;akhirkata = "";function aksiakhir() {if(aa<akhirkata.length){idgeser.innerHTML += akhirkata.charAt(aa);aa++;setTimeout(aksiakhir,65);} if(aa==akhirkata.length){jjfoto();wallpaper.style="transform: scale(1)";idkalimat.style = "opacity:1;transform: scale(1);font-size:17px;margin-top:40px";setTimeout(tombol,5000);setTimeout(kemunculan,1500);} } function jjfoto(){fotoakhir.style.animation="jjft 1s";setTimeout(chfoto,500);} function chfoto(){fotoakhir.src = fotoakhir2.src;fotoakhir.style.background="none";}
