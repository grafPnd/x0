(function(){
	$(function(){
		var
			game = {
				isFinished: function() {
					var
						cells = this.cells;
				  return (cells[0][0].innerHTML == cells[1][0].innerHTML && cells[1][0].innerHTML == cells[2][0].innerHTML && cells[2][0].innerHTML) ||
					(cells[3][0].innerHTML == cells[4][0].innerHTML && cells[4][0].innerHTML == cells[5][0].innerHTML && cells[5][0].innerHTML) ||
					(cells[6][0].innerHTML == cells[7][0].innerHTML && cells[7][0].innerHTML == cells[8][0].innerHTML && cells[8][0].innerHTML) ||
					(cells[6][0].innerHTML == cells[3][0].innerHTML && cells[3][0].innerHTML == cells[0][0].innerHTML && cells[0][0].innerHTML) ||
					(cells[7][0].innerHTML == cells[4][0].innerHTML && cells[4][0].innerHTML == cells[1][0].innerHTML && cells[1][0].innerHTML) ||
					(cells[8][0].innerHTML == cells[5][0].innerHTML && cells[5][0].innerHTML == cells[2][0].innerHTML && cells[2][0].innerHTML) ||
					(cells[6][0].innerHTML == cells[4][0].innerHTML && cells[4][0].innerHTML == cells[2][0].innerHTML && cells[2][0].innerHTML) ||
					(cells[0][0].innerHTML == cells[4][0].innerHTML && cells[4][0].innerHTML == cells[8][0].innerHTML && cells[8][0].innerHTML)
				},
				press: function(val) {
					var
						cells = this.cells;
					if (!cells[val][0].innerHTML){
						cells.free--;
						cells[val].html('x');
						if (this.isFinished()){
						  this.showMessage('youwin');
						}else{
							this.isDraw();
							this.aiTurn();
							this.isDraw();
						}
					}
				},
				isDraw: function(){
					if(!this.cells.free){
						this.showMessage('   tie');
					}
				},
				restart: function() {
					var
						cells = this.cells;
					setTimeout(function(){
						cells.free = cells.max;
						cells.each(function(i,el){
							el[0].innerHTML = '';
						});
					}, 2000);
				},
				aiTurn: function () {
					var
						cells = this.cells,
						ind = 0,
						i = 0
					for (i; i < cells.max; i ++){
						if (!cells[i][0].innerHTML){
							ind = i;
						}
					}
					if (cells[0][0].innerHTML == cells[1][0].innerHTML && !cells[2][0].innerHTML ) ind = 2;
					if (cells[0][0].innerHTML == cells[2][0].innerHTML && !cells[1][0].innerHTML ) ind = 1;
					if (cells[1][0].innerHTML == cells[2][0].innerHTML && !cells[0][0].innerHTML ) ind = 0;
					if (cells[3][0].innerHTML == cells[4][0].innerHTML && !cells[5][0].innerHTML ) ind = 5;
					if (cells[3][0].innerHTML == cells[5][0].innerHTML && !cells[4][0].innerHTML ) ind = 4;
					if (cells[4][0].innerHTML == cells[5][0].innerHTML && !cells[3][0].innerHTML ) ind = 3;
					if (cells[6][0].innerHTML == cells[7][0].innerHTML && !cells[8][0].innerHTML ) ind = 8;
					if (cells[6][0].innerHTML == cells[8][0].innerHTML && !cells[7][0].innerHTML ) ind = 7;
					if (cells[7][0].innerHTML == cells[8][0].innerHTML && !cells[6][0].innerHTML ) ind = 6;

					if (cells[6][0].innerHTML == cells[3][0].innerHTML && !cells[0][0].innerHTML ) ind = 0;
					if (cells[6][0].innerHTML == cells[0][0].innerHTML && !cells[3][0].innerHTML ) ind = 3;
					if (cells[3][0].innerHTML == cells[0][0].innerHTML && !cells[6][0].innerHTML ) ind = 6;
					if (cells[7][0].innerHTML == cells[4][0].innerHTML && !cells[1][0].innerHTML ) ind = 1;
					if (cells[7][0].innerHTML == cells[1][0].innerHTML && !cells[4][0].innerHTML ) ind = 4;
					if (cells[4][0].innerHTML == cells[1][0].innerHTML && !cells[7][0].innerHTML ) ind = 7;
					if (cells[8][0].innerHTML == cells[5][0].innerHTML && !cells[2][0].innerHTML ) ind = 2;
					if (cells[8][0].innerHTML == cells[2][0].innerHTML && !cells[5][0].innerHTML ) ind = 5;
					if (cells[5][0].innerHTML == cells[2][0].innerHTML && !cells[8][0].innerHTML ) ind = 8;

					if (cells[6][0].innerHTML == cells[4][0].innerHTML && !cells[2][0].innerHTML ) ind = 2;
					if (cells[6][0].innerHTML == cells[2][0].innerHTML && !cells[4][0].innerHTML ) ind = 4;
					if (cells[4][0].innerHTML == cells[2][0].innerHTML && !cells[6][0].innerHTML ) ind = 6;
					if (cells[0][0].innerHTML == cells[4][0].innerHTML && !cells[8][0].innerHTML ) ind = 8;
					if (cells[0][0].innerHTML == cells[8][0].innerHTML && !cells[4][0].innerHTML ) ind = 4;
					if (cells[4][0].innerHTML == cells[8][0].innerHTML && !cells[0][0].innerHTML ) ind = 0;
					
					cells[ind].html('O');//don't use zero here
					cells.free --;
					if (this.isFinished()) {
						this.showMessage('pc win');
					}
				},
				showMessage: function(message){
					var
						cells = this.cells,
						_self = this;
					setTimeout(function(){
						cells.free = cells.max;
						cells.each(function(i,el){
							el[0].innerHTML = message[i] || ' ';
						});
						_self.restart()
					}, 300);
				}
			},
			extendCells = function(data){
				data.prototype = game;
			};
		$(window)
			.on('extendCells', function (e, data){
				extendCells(data.payload);
			});
	})
})()