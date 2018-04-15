/*
 Title: Exercise 4.2
 Author: Richard Krasso
 Date: 4/15/18
 Modified By: Hector Leguillow
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercise 4.2</title>

    <!-- jQuery reference -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>
    <h4>HTTP GET Request</h4>
    <button id="get1">Get Random Breed</button>

<script>
    $(function() {
        $("#get1").click(function(){
            $.get('https://dog.ceo/api/breeds/image/random', function(data, status){
                console.log('Date: ' + JSON.stringify(data) + '\nStatus: ' + status);
            })
        
    });
</script>

</body>
</html>