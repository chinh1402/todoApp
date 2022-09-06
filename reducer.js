const init = {
    cars: ['BMW']
}

export default function reducer(state = init , action, args) {
    // return của action quyết định giá trị của cả hàm reducer này :) fun fact
    switch (action) {
        case 'ADD':
            const [newCar] = args
            return {
                // ...state giữ toàn bộ key gốc; key có modify thì đc update như dưới
                
                ...state,
                cars: [...state.cars,newCar]
            }
        
        default:
            return state
    }
}