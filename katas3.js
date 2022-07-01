

function showResults(retorno){
    console.log(retorno)

}

    // implemente o código do kata 1 aqui

    kata1(25)

    function kata1(numbers1){
        let vazio0 = []
        for(let i = 0; i <= numbers1; i++){
            vazio0.push(i)
        }
    
    showResults(vazio0)
    
    }
    

// implemente o código do kata 2 aqui


    kata2(1)

    function kata2(numbers2){
        let vazio1 = []
        for(let i = 25; i >= numbers2; i--){
            vazio1.push(i)
        }
    
    showResults(vazio1)
    
    }
   
// implemente o código do kata 3 aqui

kata3(-25)

function kata3(numbers3){
    let vazio2 = []
    for(i = 0; numbers3 <= i; i--){
        if(numbers3 < 0){
            vazio2.push(i)
        }
    }

    showResults(vazio2)

}
           

// implemente o código do kata 4 aqui

kata4(-1) 


function kata4(numbers4){
    let vazio3 = []
    let y = -25
    for(i = y; numbers4 >= i; i++){
        if(numbers4 < 0){
            vazio3.push(i)
        }
    }
    showResults(vazio3)

}   

// implemente o código do kata 5 aqui

kata5(-25)

function kata5(numbers5){
    let vazio4 = []
    for(i = 25; numbers5 <= i; i--){
        if(numbers5 < 25 && i % 2 != 0){
            vazio4.push(i)
      }
    }
        showResults(vazio4)
}

// implemente o código do kata 6 aqui

kata6(100)

    function kata6(numbers6){
        let vazio5= []
        for(i = 0; i <= numbers6; i++){
            if(i%3 == 0){
                vazio5.push(i)
            }
        }
        showResults(vazio5)
    }

// implemente o código do kata 7 aqui

kata7(100)

    function kata7(numbers7){
        let vazio6= []
        for(i = 0; i <= numbers7; i++){
            if(i%7 == 0){
                vazio6.push(i)
            }
        }   
        showResults(vazio6)
    }


    // implemente o código do kata 8 aqui


    kata8(0)

    function kata8(numbers8){
        let vazio7= []
        for(i = 100; i > numbers8; i--){
            if(i%3 == 0 && i%7 == 0){
                vazio7.push(i)
            }
        }   

        showResults(vazio7) 
        
    }

    // implemente o código do kata 9 aqui


    kata9(100)

    function kata9(numbers9){
        let vazio8 = []
        for(i = 0; numbers9 > i; i++){
            if(i % 5 == 0 && i % 2 == 0){
                vazio8.push(i)
        }
        }
        showResults(vazio8)
}

    // implemente o código do kata 10 aqui

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
  kata10(sampleArray)  
    
    function kata10(sampleArray){
        let x = []
         for(let i = 0; i < sampleArray.length; i++){
                x.push(sampleArray[i])       
                   
        }

        showResults(x) 
    }
        
    // implemente o código do kata 11 aqui


    kata11(sampleArray)  
    
    function kata11(sampleArray){
        let pair = []
         for(let i = 0; i < sampleArray.length; i++){
                if(i % 2 == 0){
                    pair.push(sampleArray[i])
                }       
                   
        }

        showResults(pair) 
    }


    // implemente o código do kata 12 aqui

    kata12(sampleArray)  
    
    function kata12(sampleArray){
        let odd = []
         for(let i = 0; i < sampleArray.length; i++){
                if(i % 2 != 0){
                    odd.push(sampleArray[i])
                }            
        }

        showResults(odd) 
    }

    // implemente o código do kata 13 aqui

    kata13(sampleArray)  
    
    function kata13(sampleArray){
        let y = []
         for(let i = 0; i < sampleArray.length; i++){
                if(i % 8 == 0){
                    y.push(sampleArray[i])
                }            
        }

        showResults(y) 
    }


    // implemente o código do kata 14 aqui

    katas14(sampleArray)

    function katas14(sampleArray){
        let square = []
        for(let i = 1; i <= sampleArray.length; i++){
            if(Math. sqrt(i) % 1 == 0){
                square.push(sampleArray[i])
            }
        }
    
        showResults(square)
    }

    // implemente o código do kata 15 aqui

    kata15(sampleArray)

    function kata15(sampleArray){
        let sumOfNumbers = 0
        for(let i = 0; i <= sampleArray.length; i++){
           sumOfNumbers += sampleArray.length
        }

        showResults(sumOfNumbers)
    }
   
    // implemente o código do kata 16 aqui

    kata16(sampleArray)  
    
    function kata16(sampleArray){
        let sumOfElements = 0
         for(let i = 0; i < sampleArray.length; i++){
                sumOfElements += sampleArray[i] 
                }     
         showResults(sumOfElements)   
        }

    // implemente o código do kata 17 aqui

    function kata17(sampleArray){
        return Math.max.apply(Math, sampleArray)
    }

    showResults(kata17(sampleArray))

    // implemente o código do kata 18 aqui

    function kata18(sampleArray){
        return Math.min.apply(Math, sampleArray)
    }

    showResults(kata18(sampleArray))

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
