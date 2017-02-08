(function(){
	$(function(){
		var
			maxCellsAmount = 9,
			i = 0,
			clickhandler = function(e){//using function expression instead of function declaration for better performance
				cells.each(function(i,el){//finding event target in cycle is 'cheaper' for resources than having nine event listeners
					if(e.target == el[0]){
						return game.press(i);
					}
				});
			},
			cells = $([]),//to have extended array of cached DOM references of each cell
			playground = $('#j_playground').on('click', clickhandler),
			Game = function(cells){
				this.cells = cells;
			},
			game;
			
		cells.free = maxCellsAmount;
		cells.max = maxCellsAmount;
		for(i; i < maxCellsAmount; i ++){
			cells.push(
				$('<div class = "tile"></div>')
				.appendTo(playground)
			);
		}
		$(window).trigger('extendCells', {payload: Game});//add core methods
		game = new Game(cells);
	})
})()