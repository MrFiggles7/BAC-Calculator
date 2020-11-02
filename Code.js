$(document).ready(
    function () {




        $("button").click(function() {
            var beer = parseFloat($("#BeersConsumed").val());
            var wine = parseFloat($("#WineConsumed").val());
            var shots = parseFloat($("#ShotsConsumed").val());
            var weight = parseFloat($("#WeightPounds").val());
            var hours = parseFloat($("#Hours").val());

            var beerMath = beer * .54;
            var wineMath = wine * .6;
            var shotMath = shots * .6;

            $('#beeralcohol').text(`${(beerMath).toFixed(2)} ounces of alcohol`);
            $('#beeralcohol').show();
            $('#winealcohol').text(`${(wineMath).toFixed(2)} ounces of alcohol`);
            $('#winealcohol').show();
            $('#shotsalcohol').text(`${(shotMath).toFixed(2)} ounces of alcohol`);
            $('#shotsalcohol').show();
            $('#BACtext').show();

            var totalAlcoholConsumed = beerMath + wineMath + shotMath;

            var aARBR = totalAlcoholConsumed * 7.5;

            var bacFirst = aARBR / weight;

            var bacSecond = bacFirst - (hours * .015);

            $('#BACFinal').text(`${bacSecond.toFixed(3)}%`);
            $('#BACFinal').show();
        });


    }
);