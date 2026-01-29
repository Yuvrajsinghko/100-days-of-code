let random_num_one = Math.floor(Math.random() * 6)+1;
let random_num_two = Math.floor(Math.random() * 6)+1;


let image1_src=document.querySelector(".img1").getAttribute("src");
let image2_src=document.querySelector(".img2").getAttribute("src");


image1_src = `./images/dice${random_num_one}.png`;
image2_src = `./images/dice${random_num_two}.png`;

document.querySelector(".img1").setAttribute("src",image1_src);
document.querySelector(".img2").setAttribute("src",image2_src);


if (random_num_one > random_num_two){
    document.querySelector(".container h1").innerHTML = "Player 1 Wins";
    
}else if (random_num_one === random_num_two){
    document.querySelector(".container h1").innerHTML = "Draw";

}else{
    document.querySelector(".container h1").innerHTML = "Player 2 Wins";

}

