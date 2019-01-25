export default class IngredientType {
    static BreadBottom = 'bread-bottom';
    static BreadTop = 'bread-top';
    static ChickpeaPatty = 'chickpeaPatty';
    static Cheese = 'cheese';
    static Salad = 'salad';
    static VeganBacon = 'veganBacon';

    static ingredients = [
        { name: 'Bread bottom', type: IngredientType.BreadBottom, price: 1 },
        { name: 'Bread top', type: IngredientType.BreadTop, price: 1 },
        { name: 'Chickpea patty', type: IngredientType.ChickpeaPatty, price: 1.4 },
        { name: 'Cheese', type: IngredientType.Cheese, price: 0.4 },
        { name: 'Salad', type: IngredientType.Salad, price: 0.5 },
        { name: 'Vegan Bacon', type: IngredientType.VeganBacon, price: 0.7 }
    ];
}