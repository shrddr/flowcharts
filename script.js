Raphael.fn.fl = {
    rect: function(cx, cy) { r.rect(cx-50, cy-35, 100, 70) },

    elli: function(cx, cy) { r.ellipse(cx, cy, 50, 50) },

    data: function(cx, cy) {
        var rect = r.rect(cx-50, cy-35, 100, 70);

        var matrix = Raphael.matrix(1,0,-.5,1,0,0);
        var dx = matrix.x(cx, cy) - cx;
        var dy = matrix.y(cx, cy) - cy;
        rect.attr({
            transform: matrix.toTransformString()
        });
        
        rect.translate(-dx, -dy);
    },

    cond: function(cx, cy) {
        r.path(['M', cx, cy-35,
                'L', cx+50, cy,
                'L', cx, cy+35,
                'L', cx-50, cy,
                'L', cx, cy-35]);
    }
};

var r = Raphael("paper", 800, 600);



r.fl.data(100, 100);
r.fl.rect(100, 200);
r.fl.elli(100, 300);
r.fl.cond(100, 400);


//for (var x = 0; x < 800; x=x+10) r.path(['M', x, 0, 'V', 600]).attr({ stroke : '#ddd' });
//for (var y = 0; y < 600; y=y+10) r.path(['M', 0, y, 'H', 800]).attr({ stroke : '#ddd' });