var berries = ['blueberries', 'grapes', 'redCurrent'];


var blueberries = {
    fullName: 'Vaccinium Corymbosum',
    growsOnShrub: true,
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74
};

var grapes = {
    fullName: 'Vitis Vinifera',
    growsOnShrub: false,
    energy: 288,
    carbohydrates: 18.1,
    protein: 0.72
};

var redCurrant = {
    fullName: 'Ribes Rubrum',
    growsOnShrub: false,
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4
};

var writeBerries = function (berries) {
    document.write('<h2>' + berries.fullName + '</h2>')
    
    document.write('<dl>');
    document.write('<dt>Grows On Shrub</dt>');
    document.write('<dd>' + berries.growsOnShrub + '</dd>')
    document.write('</dl>');
   
    document.write('<dl>');
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berries.energy + '</dd>')
    document.write('</dl>');
    
    document.write('<dl>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berries.carbohydrates + '</dd>')
    document.write('</dl>');
    
    document.write('<dl>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berries.protein + '</dd>')
    document.write('</dl>');
};

writeBerries(blueberries);
writeBerries(grapes);
writeBerries(redCurrant);

var allBerries = [blueberries, grapes, redCurrent];

allBerries.forEach(writeBerries);
