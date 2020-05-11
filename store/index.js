export const state = () => ({
    liquids: [],
    fruits: [],
    drinks: [],
    proteins: []
})

export const mutations = {
    GET_DRINKS (state, payload) {
        state.drinks = payload;
    },
    GET_FRUITS (state, payload) {
        state.fruits = payload;
    },
    GET_LIQUIDS (state, payload) {
        state.liquids = payload;
    },
    GET_PROTEINS (state, payload) {
        state.proteins = payload;
    }
}

export const getters = {
    getSuma: (state) => (id) => {
        let suma = 0;
        let newDrink = state.drinks.filter(drink => drink._id === id);
        newDrink[0].fruits.forEach(fruit => {
            suma += fruit.calories;
        });
        return suma;
    }
}

