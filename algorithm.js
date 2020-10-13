house_starting_location = 7 
house_ending_location = 10 
a_building = 4
b_building = 12
total_red = 3
total_blue = 3
red_loc = [2 , 3 , -4]
blue_loc = [3 , -2  , -4]
red_result = 0
blue_result = 0
for( i = 0 ;i <total_red ; i++) {
    rres = a_building + red_loc[i]
    // console.log(rres)
    if(rres >= house_starting_location && rres <= house_ending_location){
        red_result += 1
    }
}
for( i = 0 ;i <total_blue ; i++){
    bres = b_building + blue_loc[i]
    if(bres >= house_starting_location && bres <= house_ending_location){
        blue_result += 1
    }
}

console.log(red_result)
console.log(blue_result)
